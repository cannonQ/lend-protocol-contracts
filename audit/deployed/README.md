# audit/deployed/ — pinned deployed ErgoTrees (prep only)

This directory is **audit prep material, not audit output**. It pins down what is
actually deployed on mainnet (as seen through the test frontend and the off-chain bot's
own constants) so that later fieldwork can compare deployed bytes against compiled
source instead of trusting either side by assumption. Nothing here is a finding, a risk
rating, or a statement about contract safety — it is a factual record of addresses,
ErgoTree bytes, and hashes, plus where each one came from.

No engagement phase has started yet. See `INTAKE-PREP.md` (repo root's sibling
`duckpools-audit/` directory) for the state of the wider intake.

## What's in here

| Path | Produced by | What it is |
|---|---|---|
| `README.md` | this workstream (A) | this file |
| `ADDRESSES.md` | this workstream (A) | every contract address across all 8 v1 pools + 2 v2 pools in the bot's `current_pools.py`, plus `proposed_pools.py`, decoded and hashed, grouped by pool, with a shared-tree cross-reference |
| `v2-quacks-00fa2be6/deployed.json` | this workstream (A) | verbatim copy of the frontend-derived snapshot for the live v2 QUACKS pool (POOL_NFT `00fa2be6…`) |
| `v2-quacks-00fa2be6/trees/*.ergotree.hex` | this workstream (A) | one hex file per distinct ErgoTree found in `deployed.json`, re-derived independently from the base58 addresses (see decode procedure below); `trees/README.md` documents the dedup/sharing |
| `v2-quacks-00fa2be6/decompiled/` | workstream B | not produced by this workstream — see that directory's own files |
| `RECONCILIATION.md` | workstream C | not produced by this workstream — see that file |

## Source data and provenance

**Frontend snapshot.** `test-frontend/v2-latest-quacks-00fa2be6.json` (the source for
`v2-quacks-00fa2be6/deployed.json`) was built from a fetch of `test.duckpools.io`:

- Fetched: `2026-09-27T09:57:39Z`
- Vercel deployment id: `dpl_71NjQjGo5f4xNq2MnyjtTN4NPe6C`
- The test site is wired to mainnet (`api.ergoplatform.com`, `node.ergo.watch`) with
  backend `v2api.duckpools.io`. It serves the 8 v1 pools plus one v2 pool — QUACKS
  POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. The older
  v2 QUACKS pool (POOL_NFT `86052fc64669…`) is not served by this frontend build and is
  treated as superseded (it is still tabled in `ADDRESSES.md` for completeness, since the
  bot still carries it).

**Bot constants.** `ADDRESSES.md` is built from:

- `off-chain-bot/current_pools.py` → `off-chain-bot-v2/current_pools.py`, repo
  `duckpools/off-chain-bot`, checked out at **branch `v2`, commit
  `e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f`** (2026-05-18) — the 8 v1 pools and 2 v2
  pools.
- `off-chain-bot-v2/proposed_pools.py`, same checkout — one pool entry, POOL_NFT
  `00fa2be6…` (the same pool the frontend serves), carried separately by the bot for
  comparison purposes.

Per the wider intake, every contract address that appears in the `test.duckpools.io`
bundle is also present somewhere in these bot v2 constants (the only bundle strings that
aren't real addresses are the standard Ergo miner-fee address and a 58-character
string that is just the base58 alphabet itself, picked up by the extraction regex as a
false positive) — i.e. bot v2 constants are a superset of what the frontend uses.

**Source availability.** Per `INTAKE-PREP.md`'s gap analysis, ErgoScript source for the
v2 contracts is only public for a subset:

- `lend-protocol-contracts@main`: `contracts/v2-generics/repay.md`,
  `contracts/v2-generics/partial_repay.md`
- `duckpools/logic-contracts@a5a797f2`: `live_contracts/v2/quacks/dex-weighted.md` (the
  `quotes` contract)
- `off-chain-bot-v2`: `contracts/autobalance_script.md`, `contracts/closure.md`

**Not found in any public duckpools repo:** the v2 pool contract, v2 collateral, v2
interest / interest_parameter, v2 parameter, the v2 proxies (lend/withdraw/borrow/repay/
partial_repay), and spend_nft. `duckpools/interest-contracts` and
`Smart-Reserves-Delegated-Loan-Actions` hold docs only, no source. This is why the
deployed bytes in this directory are pinned directly from the chain/frontend/bot rather
than compiled from source — until the team supplies the missing sources, decompilation
(see `v2-quacks-00fa2be6/decompiled/`, workstream B) and byte-level pinning (this
directory) are the only ways to know what these contracts actually do.

## Decode procedure (reproducible)

Every `*.ergotree.hex` file and every hash in `ADDRESSES.md` was produced the same way,
using only the Python 3 standard library (`hashlib.blake2b(digest_size=32)`, no network
access, no third-party base58 package):

1. **Base58-decode** the P2S/P2PK address string. Alphabet (Bitcoin-style, no `0`, `O`,
   `I`, `l`):
   `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`.
   Convert the string to a big integer by Horner's rule over that alphabet, render it to
   big-endian bytes, then re-prepend one `0x00` byte for every leading `'1'` character in
   the original string (base58's leading-zero convention).
2. The decoded byte string is `payload || checksum`, where `checksum` is the **last 4
   bytes**.
3. Recompute `blake2b256(payload)` (stdlib `hashlib.blake2b(payload,
   digest_size=32).digest()`) and take its first 4 bytes. This **must equal** the
   `checksum` from step 2 — this is what `checksum_ok` records. All addresses processed
   for this delivery passed.
4. `payload` itself is `prefixByte || ergoTreeBytes` — Ergo's address-type/network byte
   followed directly by the serialized ErgoTree (P2S encodes the tree itself, not a hash
   of it). Drop the **first byte** of `payload`; what remains is the ErgoTree.
5. The ErgoTree's own first byte is its header byte (constant-segregation / version
   flag — e.g. `0x10` = v0 constant-segregated, `0x19` = v1 with explicit size, as seen on
   `auto_balance_address` and `spend_nft_address` for the live v2 pool).
6. `blake2b256(ergoTreeBytes)` (digest_size=32, hex-encoded) is the tree hash used
   throughout `ADDRESSES.md` and the `trees/` filenames — this is a hash over the
   **script bytes**, unrelated to any token id (POOL_NFT, quoteNFT, DEXNFT, …), which are
   separate 32-byte identifiers already given in `deployed.json` and never re-derived
   here.

This procedure was run independently against every address in
`v2-quacks-00fa2be6/deployed.json` (which already carried an `ergotree_hex`,
`tree_bytes`, and `blake2b256_tree` from an earlier extraction) as a cross-check: 22
address entries, 0 mismatches, 0 checksum failures. The same procedure was then run
against all 181 address fields across the 8 v1 pools, 2 v2 pools (`current_pools.py`),
and 1 pool (`proposed_pools.py`) to build `ADDRESSES.md`: 0 decode errors, 0 checksum
failures.

## A factual note for later fieldwork

`ADDRESSES.md`'s shared-tree group **S7** shows that `proposed_pools.py`'s
`proxy_partial_repay` entry for pool `00fa2be6…` is byte-identical to the **v1** pools'
shared `proxy_partial_repay` tree — not to the `proxy_partial_repay` tree that
`current_pools.py` and the live frontend (`deployed.json`) carry for that same pool
(group is unrelated; `current_pools.py`'s entry hashes to
`eed14bd64f4e29f0ab5ff4623a54778e4d3913b38c736909c96368a93fac29fb`, tabled with no
shared-group tag because nothing else in this data matches it). Both bot files name the
same `POOL_NFT` for this field but point at two different contracts. This is recorded as
a fact about the two constant files; it is not evaluated here.
