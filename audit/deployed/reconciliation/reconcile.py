#!/usr/bin/env python3
"""Source-to-deployed ErgoTree reconciliation for the duckpools audit (workstream C).

Two steps:
  extract  - pull every ErgoScript block out of the pinned candidate sources (read with
             `git show <sha>:<path>`, so working-tree state does not matter) into
             sources/<repo>@<sha7>/<path>.<block>.es, one provenance comment line on top.
  run      - resolve each job (placeholder / constant substitution), compile it with
             sigmastate 5.0.8 (Reconcile5.scala) and 6.0.2 (Reconcile6.scala), and compare
             the result with the deployed ErgoTree bytes: full bytes, then template
             (tree with constants taken out), then first differing offset.

Usage:
  python3 reconcile.py extract --lend <lend-protocol-contracts> --bot <off-chain-bot v2 worktree> \
                               --logic <logic-contracts clone>
  python3 reconcile.py run --bot <off-chain-bot v2 worktree> --frontend <test-frontend dir> \
                           --work <scratch dir> [--skip-compile]
Needs: python3, git, java 11, scala-cli (fetches sigma-state 5.0.8 / 6.0.2 from Maven Central).
"""
import argparse, hashlib, json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(HERE, 'sources')

REPOS = {
    'lend':  ('duckpools/lend-protocol-contracts', '63b49a057006d82de5772c7dc4b873db556fee0a'),
    'bot':   ('duckpools/off-chain-bot',           'e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f'),
    'logic': ('duckpools/logic-contracts',         'a5a797f27b432b10652d8f86eabb43cf51213697'),
}

# (repo, path, how).  how: 'md' = every fenced block; 'py' = every f-string template passed to
# compile_script in a def; 'braces' = top-level {...} blocks of a plain text file;
# 'pysrc' = the "source": f"..." strings in helpers/node_calls.py.
SOURCES = [
    ('lend', 'contracts/v2-generics/repay.md', 'md'),
    ('lend', 'contracts/v2-generics/partial_repay.md', 'md'),
    ('lend', 'contracts/pools/Generic-Token-Pool/proxy-contracts/deposit.md', 'md'),
    ('lend', 'contracts/pools/Generic-Token-Pool/proxy-contracts/withdraw.md', 'md'),
    ('lend', 'contracts/pools/Generic-Token-Pool/proxy-contracts/repay.md', 'md'),
    ('lend', 'contracts/pools/Generic-Token-Pool/proxy-contracts/partialRepay.md', 'md'),
    ('lend', 'contracts/pools/Generic-Token-Pool/parentInterest.md', 'md'),
    ('lend', 'contracts/pools/QUACKS-POOL/pool.md', 'md'),
    ('lend', 'contracts/pools/QUACKS-POOL/collateral.md', 'md'),
    ('lend', 'contracts/pools/QUACKS-POOL/repayment.md', 'md'),
    ('lend', 'contracts/pools/QUACKS-POOL/childInterest.md', 'md'),
    ('lend', 'contracts/pools/QUACKS-POOL/proxy_contracts/borrow.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/lendPool.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/collateralContract.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/repaymentContract.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/interestRateContract.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/parentInterest.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/proxy-contracts/proxyBorrow.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/proxy-contracts/proxyLend.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/proxy-contracts/proxyWithdraw.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/proxy-contracts/proxyRepay.md', 'md'),
    ('lend', 'contracts/pools/ERG-POOL/proxy-contracts/proxyPartialRepay.md', 'md'),
    ('bot', 'contracts/quacks.py', 'py'),
    ('bot', 'contracts/autobalance_script.md', 'md'),
    ('bot', 'contracts/closure.md', 'md'),
    ('bot', 'contracts/v1_proxy_lend_token.md', 'md'),
    ('bot', 'contracts/v1_proxy_withdraw_token.md', 'md'),
    ('bot', 'contracts/v1_proxy_lend_erg.md', 'md'),
    ('bot', 'contracts/v1_proxy_withdraw_erg.md', 'md'),
    ('bot', 'temp_proxy_contracts.txt', 'braces'),
    ('bot', 'helpers/node_calls.py', 'pysrc'),
    ('logic', 'live_contracts/v2/quacks/dex-weighted.md', 'md'),
]

# ---------------------------------------------------------------- base58 / blake2b / addresses
B58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

def b58dec(s):
    n = 0
    for c in s:
        n = n * 58 + B58.index(c)
    b = n.to_bytes((n.bit_length() + 7) // 8, 'big') if n else b''
    return b'\x00' * (len(s) - len(s.lstrip('1'))) + b

def b58enc(b):
    n = int.from_bytes(b, 'big'); s = ''
    while n:
        n, r = divmod(n, 58); s = B58[r] + s
    return '1' * (len(b) - len(b.lstrip(b'\x00'))) + s

def bot_hex_to_base58(h):  # verbatim logic of off-chain-bot helpers/serializer.py hex_to_base58
    num = int(h, 16); s = ''
    while num > 0:
        num, r = divmod(num, 58); s = B58[r] + s
    return '1' * ((len(h) - len(h.lstrip('0'))) // 2) + s

def blake(b):
    return hashlib.blake2b(b, digest_size=32).digest()

def addr_to_tree_hex(addr):
    raw = b58dec(addr)
    assert raw[0] & 0x0F == 3, 'not a P2S address'
    assert blake(raw[:-4])[:4] == raw[-4:], 'bad address checksum'
    return raw[1:-4].hex()

def hb58(h):
    a, b = b58enc(bytes.fromhex(h)), bot_hex_to_base58(h)
    assert a == b, (h, a, b)
    return a

# ---------------------------------------------------------------- extraction
def git_show(repo_dir, sha, path):
    return subprocess.run(['git', '-C', repo_dir, 'show', f'{sha}:{path}'], check=True,
                          capture_output=True, text=True).stdout

def md_fences(text):
    """All fenced blocks in order: (index, lang, body). An unterminated fence runs to EOF."""
    out, lines, i, idx = [], text.split('\n'), 0, 0
    while i < len(lines):
        m = re.match(r'^```(\w*)\s*$', lines[i])
        if m:
            j = i + 1
            while j < len(lines) and not lines[j].startswith('```'):
                j += 1
            out.append((idx, m.group(1), '\n'.join(lines[i + 1:j]), j >= len(lines)))
            idx += 1; i = j + 1
        else:
            i += 1
    return out

FSTR = re.compile(r"def (\w+)\([^)]*\):.*?f(?:'''|\"\"\")(.*?)(?:'''|\"\"\")", re.S)

def py_templates(text):
    return [(m.group(1), m.group(2)) for m in FSTR.finditer(text)]

def brace_blocks(text):
    out, depth, start = [], 0, None
    for k, c in enumerate(text):
        if c == '{':
            if depth == 0: start = k
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0: out.append(text[start:k + 1])
    return out

def write_src(repo_key, path, tag, body, note):
    repo, sha = REPOS[repo_key]
    rel = f'{repo.split("/")[1]}@{sha[:7]}/{path}.{tag}.es'
    full = os.path.join(SRC_DIR, rel)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    head = f'// provenance: repo={repo} commit={sha} file={path} block={tag}{note}; text below this line is verbatim\n'
    with open(full, 'w') as f:
        f.write(head + body + ('\n' if not body.endswith('\n') else ''))
    return rel

def cmd_extract(a):
    dirs = {'lend': a.lend, 'bot': a.bot, 'logic': a.logic}
    written = []
    for repo_key, path, how in SOURCES:
        text = git_show(dirs[repo_key], REPOS[repo_key][1], path)
        if how == 'md':
            for idx, lang, body, unterminated in md_fences(text):
                if lang in ('scala', 'ergoscript'):
                    note = ' (fence has no closing ```; block runs to end of file)' if unterminated else ''
                    written.append(write_src(repo_key, path, f'fence{idx}', body, note))
                elif lang == 'python':
                    for name, tmpl in py_templates(body):
                        written.append(write_src(repo_key, path, f'fence{idx}.{name}', tmpl,
                                                 ' (python f-string template inside the fence; {name} placeholders and {{ }} escapes left as written)'))
        elif how == 'py':
            for name, tmpl in py_templates(text):
                written.append(write_src(repo_key, path, name, tmpl,
                                         ' (python f-string template; {name} placeholders and {{ }} escapes left as written)'))
        elif how == 'braces':
            for n, blk in enumerate(brace_blocks(text)):
                written.append(write_src(repo_key, path, f'block{n}', blk, ' (top-level brace block n of a plain text file)'))
        elif how == 'pysrc':
            for m in re.finditer(r'def (\w+)\((?:(?!\ndef ).)*?"source": f"((?:[^"\\]|\\.)*)"', text, re.S):
                written.append(write_src(repo_key, path, m.group(1), m.group(2).replace('\\"', '"'),
                                         ' (python f-string "source" value; \\" unescaped to ")'))
    for w in written:
        print(w)

# ---------------------------------------------------------------- deployed targets
def load_targets(bot_dir, frontend_dir):
    ns = {}
    exec(git_show(bot_dir, REPOS['bot'][1], 'current_pools.py'), ns)
    cp = ns['current_pools']
    names = ['ERG', 'SIGUSD', 'QUACKS', 'SIGRSV', 'RSN', 'rsADA', 'SPF', 'rsBTC', 'v2Q86', 'v2Q00']
    pools = dict(zip(names, cp))
    assert pools['QUACKS']['POOL_NFT'].startswith('a694087f') and pools['ERG']['POOL_NFT'].startswith('90290924')
    assert pools['v2Q00']['POOL_NFT'].startswith('00fa2be6')
    t = {}
    for pn in ('ERG', 'QUACKS'):
        p = pools[pn]
        for k in ('pool', 'collateral', 'repayment', 'child', 'parent', 'proxy_lend', 'proxy_withdraw',
                  'proxy_borrow', 'proxy_repay', 'proxy_partial_repay'):
            t[f'v1.{pn}.{k}'] = addr_to_tree_hex(p[k])
        t[f'v1.{pn}.proxy_lend_legacy'] = addr_to_tree_hex(p['proxy_lend_legacy'][0])
        t[f'v1.{pn}.proxy_withdraw_legacy'] = addr_to_tree_hex(p['proxy_withdraw_legacy'][0])
    d = json.load(open(os.path.join(frontend_dir, 'v2-latest-quacks-00fa2be6.json')))
    for k, v in d.items():
        if isinstance(v, dict) and 'ergotree_hex' in v:
            assert v['ergotree_hex'] == addr_to_tree_hex(v['address'])
            t['v2.' + k] = v['ergotree_hex']
    # every contract tree named anywhere in current_pools.py (all pools), for the cross-sweep
    sweep = {}
    for pn, p in pools.items():
        items = [(k, v) for k, v in p.items() if isinstance(v, str) and len(v) > 40 and not re.fullmatch('[0-9a-f]+', v)]
        items += [(f'{k}[{i}]', x) for k, v in p.items() if isinstance(v, list)
                  for i, x in enumerate(v) if isinstance(x, str) and len(x) > 40]
        items += [(f'quotes[{i}].{kk}', q[kk]) for i, q in enumerate(p.get('quotes', []))
                  for kk in ('quoteScript', 'quote_fund') if kk in q]
        for k, v in items:
            sweep.setdefault(addr_to_tree_hex(v), []).append(f'{pn}.{k}')
    # cross-check JSON against bot constants for the same pool
    p = pools['v2Q00']
    for k in ('pool', 'collateral', 'repayment', 'interest', 'proxy_lend', 'proxy_withdraw', 'proxy_borrow',
              'proxy_repay', 'proxy_partial_repay', 'parameter', 'interest_parameter', 'auto_balance_address',
              'spend_nft_address'):
        assert addr_to_tree_hex(p[k]) == t['v2.' + k], k
    return pools, t, sweep

# ---------------------------------------------------------------- jobs
def build_jobs(pools):
    v2 = pools['v2Q00']
    rel = lambda repo_key, path: f'{REPOS[repo_key][0].split("/")[1]}@{REPOS[repo_key][1][:7]}/{path}'
    coll_h = blake(bytes.fromhex(addr_to_tree_hex(v2['collateral']))).hex()
    rep_h = blake(bytes.fromhex(addr_to_tree_hex(v2['repayment']))).hex()
    S = {  # every substituted value, named after where it comes from
        'v2Q00.blake2b256(collateral tree)': coll_h,
        'v2Q00.blake2b256(repayment tree)': rep_h,
        'v2Q00.POOL_NFT': v2['POOL_NFT'], 'v2Q00.INTEREST_NFT': v2['INTEREST_NFT'],
        'v2Q00.PARAMETER_NFT': v2['PARAMETER_NFT'], 'v2Q00.INTEREST_PARAMETER_NFT': v2['INTEREST_PARAMETER_NFT'],
        'v2Q00.CURRENCY_ID': v2['CURRENCY_ID'], 'v2Q00.BORROW_TOKEN': v2['BORROW_TOKEN'],
    }
    fmt = lambda **kw: {k: (v, hb58(S[v])) for k, v in kw.items()}
    L, B, G = 'lend', 'bot', 'logic'
    J = []
    def job(target, repo_key, path, tag, fmt_params=None, subst=None, note='', edits=None):
        J.append(dict(target=target, src=rel(repo_key, path) + f'.{tag}.es',
                      fmt=fmt_params, subst=subst or [], note=note, edits=edits or []))
    # ---- v1 control: QUACKS
    q = 'contracts/pools/QUACKS-POOL/'
    job('v1.QUACKS.pool', L, q + 'pool.md', 'fence0')
    job('v1.QUACKS.collateral', L, q + 'collateral.md', 'fence0')
    job('v1.QUACKS.repayment', L, q + 'repayment.md', 'fence0')
    job('v1.QUACKS.child', L, q + 'childInterest.md', 'fence0')
    job('v1.QUACKS.proxy_borrow', L, q + 'proxy_contracts/borrow.md', 'fence0')
    g = 'contracts/pools/Generic-Token-Pool/'
    job('v1.QUACKS.parent', L, g + 'parentInterest.md', 'fence0')
    job('v1.QUACKS.proxy_lend_legacy', L, g + 'proxy-contracts/deposit.md', 'fence0')
    job('v1.QUACKS.proxy_withdraw_legacy', L, g + 'proxy-contracts/withdraw.md', 'fence0')
    job('v1.QUACKS.proxy_repay', L, g + 'proxy-contracts/repay.md', 'fence0')
    job('v1.QUACKS.proxy_partial_repay', L, g + 'proxy-contracts/partialRepay.md', 'fence0')
    job('v1.QUACKS.proxy_lend', B, 'contracts/v1_proxy_lend_token.md', 'fence0')
    job('v1.QUACKS.proxy_withdraw', B, 'contracts/v1_proxy_withdraw_token.md', 'fence0')
    # ---- v1 control: ERG
    e = 'contracts/pools/ERG-POOL/'
    job('v1.ERG.pool', L, e + 'lendPool.md', 'fence0')
    job('v1.ERG.collateral', L, e + 'collateralContract.md', 'fence0')
    job('v1.ERG.repayment', L, e + 'repaymentContract.md', 'fence0')
    job('v1.ERG.child', L, e + 'interestRateContract.md', 'fence0')
    job('v1.ERG.parent', L, e + 'parentInterest.md', 'fence0')
    job('v1.ERG.proxy_borrow', L, e + 'proxy-contracts/proxyBorrow.md', 'fence0')
    job('v1.ERG.proxy_lend_legacy', L, e + 'proxy-contracts/proxyLend.md', 'fence0')
    job('v1.ERG.proxy_withdraw_legacy', L, e + 'proxy-contracts/proxyWithdraw.md', 'fence0')
    job('v1.ERG.proxy_repay', L, e + 'proxy-contracts/proxyRepay.md', 'fence0')
    job('v1.ERG.proxy_partial_repay', L, e + 'proxy-contracts/proxyPartialRepay.md', 'fence0')
    job('v1.ERG.proxy_lend', B, 'contracts/v1_proxy_lend_erg.md', 'fence0')
    job('v1.ERG.proxy_withdraw', B, 'contracts/v1_proxy_withdraw_erg.md', 'fence0')
    # ---- v2 QUACKS 00fa2be6
    qp = 'contracts/quacks.py'
    job('v2.pool', B, qp, 'generate_pool_script', fmt(collateralContractScript='v2Q00.blake2b256(collateral tree)',
        childBoxNft='v2Q00.INTEREST_NFT', parameterBoxNft='v2Q00.PARAMETER_NFT'),
        note='arguments as passed in bootstrapping/pool_creation.py:72')
    job('v2.collateral', B, qp, 'generate_collateral_script', fmt(repaymentScript='v2Q00.blake2b256(repayment tree)',
        interestNft='v2Q00.INTEREST_NFT', poolCurrencyId='v2Q00.CURRENCY_ID'),
        note='arguments as passed in bootstrapping/pool_creation.py:69')
    job('v2.repayment', B, qp, 'generate_repayment_script', fmt(poolNFT='v2Q00.POOL_NFT'))
    job('v2.interest', B, qp, 'generate_interest_script', fmt(poolNFT='v2Q00.POOL_NFT',
        interestParamNFT='v2Q00.INTEREST_PARAMETER_NFT'))
    job('v2.proxy_borrow', B, qp, 'generate_proxy_borrow_script', fmt(collateralScript='v2Q00.blake2b256(collateral tree)',
        poolNFT='v2Q00.POOL_NFT', borrowTokenId='v2Q00.BORROW_TOKEN', currencyId='v2Q00.CURRENCY_ID'))
    tp = 'temp_proxy_contracts.txt'
    job('v2.proxy_borrow', B, tp, 'block0', subst=[
        ('J9oDdsJT4nWB2QX9s7h8jHQH42z97sW56626t2cHPzLi', 'v2Q00.blake2b256(collateral tree)'),
        ('6oK2yuvjnYiTSZAuwk2hvbWNRcsatsnpPoyqs3ZG8ja6', 'v2Q00.POOL_NFT'),
        ('9aT2hsbH79ropV2quz8mdsv2ppJWfc75F9gHZR8x4K7Z', 'v2Q00.BORROW_TOKEN'),
        ('2YLqN97ELrd12QLszzTVF6wXPYMegNtmdNsnaG51fcHN', 'v2Q00.CURRENCY_ID')])
    job('v2.proxy_repay', L, 'contracts/v2-generics/repay.md', 'fence0')
    job('v2.proxy_partial_repay', L, 'contracts/v2-generics/partial_repay.md', 'fence0')
    job('v2.proxy_partial_repay', B, tp, 'block1')
    job('v2.proxy_lend', L, g + 'proxy-contracts/deposit.md', 'fence0')
    job('v2.proxy_withdraw', L, g + 'proxy-contracts/withdraw.md', 'fence0')
    for tgt in ('v2.quotes[0].quoteScript', 'v2.quotes[2].quoteScript'):
        job(tgt, B, qp, 'generate_logic_script', fmt())
        job(tgt, B, qp, 'generate_logic_script_simple', fmt())
        job(tgt, B, qp, 'generate_logic_script_lp', fmt())
        job(tgt, G, 'live_contracts/v2/quacks/dex-weighted.md', 'fence0', fmt())
    ab = 'contracts/autobalance_script.md'
    job('v2.auto_balance_address', B, ab, 'fence2', subst=[
        ('5DJCQF27PQtMQQj88Mk2KYrPesFsxGg2qNcd8EVXBwTZ', 'v2Q00.blake2b256(collateral tree)')])
    job('v2.auto_balance_address', B, ab, 'fence3.generate_autobalance_script',
        fmt(collateralScript='v2Q00.blake2b256(collateral tree)'))
    job('v2.spend_nft_address', B, 'contracts/closure.md', 'fence0', fmt(), subst=[
        ('5b1fi29V1anTDfdYDkgLErXeHZH3yafCFMmiMWEQyVpG', 'v2Q00.blake2b256(collateral tree)'),
        ('9EaU5tpXRb4vxmgSu6zfbUc8Vurt9JzcU1BXXVUibt47', 'v2Q00.INTEREST_NFT'),
        ('FGpcu5PhtajjL5UCz78NpHTt6GVXZehmEc1rTc5gnPTz', 'v2Q00.blake2b256(repayment tree)')])
    # DIAGNOSTIC (not a published source): closure.md with its two R9 reads typed Coll[Coll[Byte]]
    job('v2.spend_nft_address', B, 'contracts/closure.md', 'fence0', fmt(), subst=[
        ('5b1fi29V1anTDfdYDkgLErXeHZH3yafCFMmiMWEQyVpG', 'v2Q00.blake2b256(collateral tree)'),
        ('9EaU5tpXRb4vxmgSu6zfbUc8Vurt9JzcU1BXXVUibt47', 'v2Q00.INTEREST_NFT'),
        ('FGpcu5PhtajjL5UCz78NpHTt6GVXZehmEc1rTc5gnPTz', 'v2Q00.blake2b256(repayment tree)')],
        edits=[('R9[Coll[Byte]]', 'R9[Coll[Coll[Byte]]]', 2)],
        note='DIAGNOSTIC: edited copy, not a published source')
    # 51-byte key-guard trees vs the bot's generated dummy scripts (node_address from client_consts.py)
    na = {'node_address': ('client_consts.node_address', '9gf5qJKw3wD99NbsjnXD32Wek8LPbVMn2rxWp39ftiPLDkcKJu4')}
    for tgt in ('v2.parameter', 'v2.interest_parameter', 'v2.quotes[0].quote_fund'):
        job(tgt, B, 'helpers/node_calls.py', 'generate_dummy_script', na)
        job(tgt, B, 'helpers/node_calls.py', 'generate_dummy_script_liquidations', na)
    return S, J

def resolve(job, S):
    path = os.path.join(SRC_DIR, job['src'])
    text = open(path).read()
    body = text.split('\n', 1)[1]  # drop the provenance line
    if job['fmt'] is not None:
        body = body.format(**{k: v[1] for k, v in job['fmt'].items()})
    for old, name in job['subst']:
        assert body.count(old) == 1, (job['src'], old)
        body = body.replace(old, hb58(S[name]))
    for old, new, count in job['edits']:
        assert body.count(old) == count, (job['src'], old)
        body = body.replace(old, new)
    return body

# ---------------------------------------------------------------- compare
def first_diff(a, b):
    for i, (x, y) in enumerate(zip(a, b)):
        if x != y:
            return i
    return min(len(a), len(b)) if len(a) != len(b) else None

def compare(c, d):
    if c['hex'] == d['hex']:
        return 'FULL MATCH', ''
    if c['tmpl'] == d['tmpl']:
        diffs = [f'#{i}: source {x} / deployed {y}' for i, (x, y) in enumerate(zip(c['consts'], d['consts'])) if x != y]
        return 'TEMPLATE MATCH', '; '.join(diffs)
    cb, db = bytes.fromhex(c['hex']), bytes.fromhex(d['hex'])
    ct, dt = bytes.fromhex(c['tmpl']), bytes.fromhex(d['tmpl'])
    return 'NO MATCH', (f'tree first diff @byte {first_diff(cb, db)}; template first diff @byte {first_diff(ct, dt)}; '
                        f'constants {len(c["consts"])} vs {len(d["consts"])}; template {len(ct)} B vs {len(dt)} B; '
                        f'tree {len(cb)} B vs {len(db)} B (source vs deployed)')

def cmd_run(a):
    pools, targets, sweep = load_targets(a.bot, a.frontend)
    S, jobs = build_jobs(pools)
    os.makedirs(os.path.join(a.work, 'resolved'), exist_ok=True)
    sweep_ids = {f'sweep{i}': keys for i, keys in enumerate(sweep.values())}
    lines = [f'TREE\t{k}\t{v}' for k, v in targets.items()]
    lines += [f'TREE\t{i}\t{h}' for i, h in zip(sweep_ids, sweep)]
    for n, j in enumerate(jobs):
        rp = os.path.join(a.work, 'resolved', f'{n:02d}__{j["target"]}__{os.path.basename(j["src"])}')
        open(rp, 'w').write(resolve(j, S))
        j['resolved'] = rp
        lines.append(f'SRC\tjob{n}\t{rp}')
    tsv = os.path.join(a.work, 'jobs.tsv')
    open(tsv, 'w').write('\n'.join(lines) + '\n')
    outs = {}
    for tool in ('Reconcile5', 'Reconcile6'):
        of = os.path.join(a.work, tool + '.jsonl')
        if not a.skip_compile:
            with open(of, 'w') as f:
                # build under the work dir (--workspace) so nothing is written next to this script
                subprocess.run(['scala-cli', 'run', '--server=false', '--workspace', os.path.join(a.work, 'scala-' + tool),
                                os.path.join(HERE, tool + '.scala'), '--', tsv],
                               check=True, stdout=f, stderr=subprocess.DEVNULL)
        outs[tool] = [json.loads(l) for l in open(of)]
    report = []
    for tool, rows in outs.items():
        deployed = {r['id']: r for r in rows if r['kind'] == 'TREE'}
        comp = {}
        for r in rows:
            if r['kind'] == 'SRC':
                comp.setdefault(r['id'], []).append(r)
        for n, j in enumerate(jobs):
            d = deployed[j['target']]
            rs = comp[f'job{n}']
            if not rs[0]['ok']:
                outcome, detail = 'NOT COMPILED', rs[0]['err']
            else:
                c = [r for r in rs if r['hv'] == d['hv']][0]
                outcome, detail = compare(c, d)
            also = []
            if rs[0]['ok']:
                c0 = [r for r in rs if r['hv'] == d['hv']][0]
                for sid, keys in sweep_ids.items():
                    sd = deployed[sid]
                    if sd['tmpl'] == c0['tmpl']:
                        kind = 'FULL' if sd['consts'] == c0['consts'] else 'TEMPLATE'
                        also.append(f'{kind}:' + ','.join(keys))
            report.append(dict(tool=tool, job=n, target=j['target'], src=j['src'], sweep=also,
                               deployed_blake=blake(bytes.fromhex(d['hex'])).hex(), deployed_header=d['hex'][:2],
                               outcome=outcome, detail=detail,
                               fmt={k: v[0] for k, v in (j['fmt'] or {}).items()},
                               subst=[(o, nm) for o, nm in j['subst']], edits=j['edits'], note=j['note']))
    json.dump(dict(substitutions=S, report=report), open(os.path.join(a.work, 'report.json'), 'w'), indent=1)
    for r in report:
        print(f"{r['tool']}\t{r['target']}\t{r['deployed_blake'][:12]}\t{r['src']}\t{r['outcome']}\t{r['note']}\t{r['detail'][:300]}")
        for x in r['sweep']:
            print(f"\t\tsweep {x}")

def main():
    ap = argparse.ArgumentParser()
    sp = ap.add_subparsers(dest='cmd', required=True)
    e = sp.add_parser('extract'); e.add_argument('--lend', required=True); e.add_argument('--bot', required=True)
    e.add_argument('--logic', required=True)
    r = sp.add_parser('run'); r.add_argument('--bot', required=True); r.add_argument('--frontend', required=True)
    r.add_argument('--work', required=True); r.add_argument('--skip-compile', action='store_true')
    a = ap.parse_args()
    {'extract': cmd_extract, 'run': cmd_run}[a.cmd](a)

if __name__ == '__main__':
    main()
