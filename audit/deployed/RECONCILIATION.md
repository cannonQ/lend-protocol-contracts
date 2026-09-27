# Source-to-deployed reconciliation (workstream C)

Prepared 2026-09-27. This file records which published ErgoScript sources compile to which deployed
ErgoTrees. It makes no statement about what the contracts do or whether they are correct.

## Summary

- **The v1 control reproduces known deployments.** The v1 QUACKS pool (POOL_NFT a694087f…) pool,
  collateral, repayment, child-interest and borrow-proxy sources compile to the deployed bytes exactly.
  So do the v1 ERG pool's pool, collateral, repayment, child, parent and borrow-proxy sources. Two
  compilers (sigma-state 5.0.8 and 6.0.2) give byte-identical output for every job in this file.
- **Latest v2 QUACKS pool (POOL_NFT 00fa2be6…): 11 of 16 distinct deployed trees have a public source
  that compiles to them exactly.** Most of these sources are in the off-chain bot, not in
  lend-protocol-contracts. They are the f-string generators in `off-chain-bot@e69a4ff:contracts/quacks.py`
  (pool, collateral, repayment, interest, borrow proxy, and both quote scripts) and
  `contracts/autobalance_script.md` (auto-balance). The v2 lend and withdraw proxies are the v1-era
  `Generic-Token-Pool` deposit and withdraw proxies in lend-protocol-contracts. The v2 repay proxy is
  `v2-generics/repay.md`.
- **No public source compiles to four v2 trees:** `proxy_partial_repay`, `parameter`,
  `interest_parameter` and `quote_fund`. `spend_nft` comes within two bytes: `closure.md` gives the same
  length and the same 35 constants, and the templates differ in exactly two type bytes. With a two-word
  edit, `closure.md` compiles to the deployed bytes exactly (diagnostic only; see the notes).
- `v2-generics/partial_repay.md` does not compile to the latest pool's partial-repay proxy. It does
  compile exactly to the partial-repay proxy of the superseded v2 pool 86052fc6….
- The quote contract published in `duckpools/logic-contracts@a5a797f` (`live_contracts/v2/quacks/dex-weighted.md`)
  does not compile to either deployed quote script. The deployed quote scripts compile from `quacks.py`.

## Toolchain

| Item | Version / setting |
|---|---|
| Java | OpenJDK 11.0.32.1 |
| scala-cli | 1.13.0, Scala 2.12.18 |
| Compiler A | `org.scorexfoundation:sigma-state_2.12:5.0.8` (scrypto 2.3.0). This is the sigma-state used by ergo-appkit 5.0.3. sigma-state 5.0.10 and 5.0.12 need a scrypto snapshot (`2.3.0-4-a0bc6176-SNAPSHOT`) that is no longer downloadable, so they were not used. |
| Compiler B | `org.scorexfoundation:sigma-state_2.12:6.0.2` (the sigma-state used by ergo-appkit 6.0.0) |
| Compile call | `SigmaCompiler(networkPrefix = 0x00 mainnet).compile(Map.empty, source)`, then `ErgoTree.fromProposition(headerWithVersion(v), prop)`. This turns constant segregation on. `v = 0` gives header `0x10`; `v = 1` gives header `0x19` (size flag set). Each source is compiled at both versions and compared at the deployed tree's version. |
| Template | `ErgoTree.template`: the expression bytes with constant placeholders, i.e. the tree without its header, size and constants array |
| Python | 3.12.3 (extraction, substitution, base58/blake2b, comparison) |
| Deployed bytes | From `test-frontend/v2-latest-quacks-00fa2be6.json` (v2) and `off-chain-bot@e69a4ff:current_pools.py` (v1). The script decodes each P2S address to its tree and checks the address checksum. For every v2 role, it also checks that the JSON tree equals the tree decoded from the same key in `current_pools.py`. |

Result: the 5.0.8 and 6.0.2 outputs are byte-identical for all 53 jobs at both header versions
(231 compiled or parsed entries compared). Every candidate compiled; no job ended NOT COMPILED.

## Constant substitutions

The v1 sources hard-code their constants as `fromBase58("…")` literals, and all of them were compiled
verbatim, with no substitution. Every v1 literal decodes to the bot's value for that pool; for example,
the QUACKS `pool.md` `CollateralContractScript` is blake2b256 of the deployed QUACKS collateral tree.
The only exception is noted in row 19.

For v2, placeholders and stale literals were filled from `off-chain-bot@e69a4ff:current_pools.py`, pool
entry POOL_NFT 00fa2be6… (the "v2Q00" names below). Hash values are blake2b256 of the deployed tree bytes
for that role. For the `quacks.py` generators, the arguments are the ones passed by
`bootstrapping/pool_creation.py:64-77`. Values were base58-encoded with the same rule as the bot's
`helpers/serializer.py:hex_to_base58`; the script asserts both encodings agree.

| Name used | Hex | Base58 as substituted |
|---|---|---|
| v2Q00 blake2b256(collateral tree) | cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729 | ExLMmE3ujwgCfYYnoMUKg3z6pK52RuWUHxvYVcrTzxxG |
| v2Q00 blake2b256(repayment tree) | b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d | CtUZxqu8xBTQ1dd1bmCk9bDKCeLBm16pn6FNj1m2Mb9e |
| v2Q00 POOL_NFT | 00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e | 14pFfqcCpxJ7qUm85WegPPaZieokW9LHCoHfwnbnnuJD |
| v2Q00 INTEREST_NFT | 350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d | 4a3cSQKC9NRX3GT2KsN2jVeESQ8KVQ6WaYTgvCCkyKJU |
| v2Q00 PARAMETER_NFT | 43380618ba064e48282ccbfef37653edea77d812f6edc8f22993e1e80cac9c08 | 5XPs5oPy817nkqhpnzW95GvgVEbiRBiN7eEBvJCqSgTZ |
| v2Q00 INTEREST_PARAMETER_NFT | 43d2c214ff7552074418317e860fb3d27dd2043679767f840fcbb681abfd0f3e | 5ZkiFrLr2q5LRo6YP8JYnzyVjwQFCwbcBce95vHSXcX7 |
| v2Q00 CURRENCY_ID | 089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f | aa5Hq5V5ssGxbReLMzpJ55nVrb73CWJ1oRiKD2X5Qkv |
| v2Q00 BORROW_TOKEN | 1eaf32e2dafc2706e6d5641903eb612637af6a4d970700d452b08e2612b32b39 | 34nBJWAChtFJhQaBwxFtithCLGZWW2t3NHgXcsqACFur |
| client_consts.node_address | (P2PK) | 9gf5qJKw3wD99NbsjnXD32Wek8LPbVMn2rxWp39ftiPLDkcKJu4 |

Per source:

| Source | What was substituted |
|---|---|
| `quacks.py` `generate_pool_script` | `collateralContractScript` = collateral hash; `childBoxNft` = INTEREST_NFT; `parameterBoxNft` = PARAMETER_NFT |
| `quacks.py` `generate_collateral_script` | `repaymentScript` = repayment hash; `interestNft` = INTEREST_NFT; `poolCurrencyId` = CURRENCY_ID |
| `quacks.py` `generate_repayment_script` | `poolNFT` = POOL_NFT |
| `quacks.py` `generate_interest_script` | `poolNFT` = POOL_NFT; `interestParamNFT` = INTEREST_PARAMETER_NFT |
| `quacks.py` `generate_proxy_borrow_script` | `collateralScript` = collateral hash; `poolNFT` = POOL_NFT; `borrowTokenId` = BORROW_TOKEN; `currencyId` = CURRENCY_ID |
| `quacks.py` `generate_logic_script`, `_simple`, `_lp` | nothing. `_lp` hard-codes `LP_TOKEN_ID`, `LP_POOL_NFT` and `LP_INTEREST_NFT`, and these already equal v2Q00 LEND_TOKEN, POOL_NFT and INTEREST_NFT. All three hard-code `PK("9i9RhfdHQA2bHA8GqWKkYevp3nozASRjJfFkh29utjNL9gqE7Q7")`. |
| `autobalance_script.md` fence 2 (ErgoScript) | literal `5DJCQF27PQtMQQj88Mk2KYrPesFsxGg2qNcd8EVXBwTZ` (decodes to 3e952960…, not a value in the bot constants) replaced with the collateral hash |
| `autobalance_script.md` fence 3 (python `generate_autobalance_script`) | `collateralScript` = collateral hash |
| `closure.md` | literals `5b1fi29V…` (44253ff3…), `9EaU5tpX…` (7a57e31c…) and `FGpcu5Ph…` (d4112c08…) replaced with the collateral hash, INTEREST_NFT and the repayment hash. None of the three original values appears in the bot constants. |
| `temp_proxy_contracts.txt` block 0 | literals `J9oDdsJT…`, `6oK2yuvj…`, `9aT2hsbH…` and `2YLqN97E…` (none in the bot constants) replaced with the collateral hash, POOL_NFT, BORROW_TOKEN and CURRENCY_ID |
| `helpers/node_calls.py` `generate_dummy_script`, `generate_dummy_script_liquidations` | `node_address` = client_consts.node_address |
| every other source | nothing (compiled verbatim) |

Text transforms, and nothing else: one `// provenance:` comment line was added on top of each extracted
block, and a trailing newline was added where the block had none. The Python f-string templates are
rendered with `str.format`, which fills `{name}` and turns `{{`/`}}` into `{`/`}`. `closure.md` and
`dex-weighted.md` are written with doubled braces inside their markdown fences, so they are rendered the
same way with no arguments. In `node_calls.py`, `\"` was un-escaped to `"`.

## Outcome table

Deployed hash = blake2b256 of the deployed ErgoTree bytes, first 12 hex characters. Hdr = first tree
byte. In the "first diff" figures, offsets are 0-based and counts read as source vs deployed. Repo
short names: `lpc` = duckpools/lend-protocol-contracts@63b49a0, `bot` = duckpools/off-chain-bot@e69a4ff,
`logic` = duckpools/logic-contracts@a5a797f.

| # | Deployed role (pool / version) | Hdr | Deployed hash | Candidate source | Outcome |
|---|---|---|---|---|---|
| 0 | QUACKS v1 (a694087f) pool | 10 | c969eee93923 | lpc `contracts/pools/QUACKS-POOL/pool.md` | FULL MATCH |
| 1 | QUACKS v1 collateral | 10 | 2e2f572ee4e2 | lpc `contracts/pools/QUACKS-POOL/collateral.md` | FULL MATCH |
| 2 | QUACKS v1 repayment | 10 | 75b3ffd8e335 | lpc `contracts/pools/QUACKS-POOL/repayment.md` | FULL MATCH |
| 3 | QUACKS v1 child | 10 | f429a9d1c45f | lpc `contracts/pools/QUACKS-POOL/childInterest.md` | FULL MATCH |
| 4 | QUACKS v1 proxy_borrow | 10 | 96fcbcd89e53 | lpc `contracts/pools/QUACKS-POOL/proxy_contracts/borrow.md` | FULL MATCH |
| 5 | QUACKS v1 parent (shared by all 8 v1 pools) | 10 | b1f733579e5f | lpc `contracts/pools/Generic-Token-Pool/parentInterest.md` | NO MATCH: first diff tree @5, template @1 (block of 13 vs 14 val definitions); constants 18 vs 18; template 291 vs 357 B. The same tree is a FULL MATCH to ERG-POOL `parentInterest.md` (row 16). |
| 6 | QUACKS v1 proxy_lend_legacy[0] | 10 | dd9959700fce | lpc `contracts/pools/Generic-Token-Pool/proxy-contracts/deposit.md` | FULL MATCH (same tree as v2 proxy_lend, row 33) |
| 7 | QUACKS v1 proxy_withdraw_legacy[0] | 10 | 5f358f59d6d1 | lpc `contracts/pools/Generic-Token-Pool/proxy-contracts/withdraw.md` | FULL MATCH (same tree as v2 proxy_withdraw, row 34) |
| 8 | QUACKS v1 proxy_repay | 10 | 5481608cdc53 | lpc `contracts/pools/Generic-Token-Pool/proxy-contracts/repay.md` | FULL MATCH |
| 9 | QUACKS v1 proxy_partial_repay | 10 | bd369cacba5a | lpc `contracts/pools/Generic-Token-Pool/proxy-contracts/partialRepay.md` | NO MATCH: first diff tree @226, template @208; constants 7 vs 7 (all equal); template 220 vs 224 B. From @208 on, the source reads R9 as `Long` (type byte 0x05), where the deployed tree reads R9 as `(Long, Long)` (type 0x59) and compares field `_1` |
| 10 | QUACKS v1 proxy_lend | 10 | 94b5de34a65b | bot `contracts/v1_proxy_lend_token.md` | FULL MATCH |
| 11 | QUACKS v1 proxy_withdraw | 10 | a7b06baed4d5 | bot `contracts/v1_proxy_withdraw_token.md` | FULL MATCH |
| 12 | ERG v1 (90290924) pool | 10 | 4a42d2f7b331 | lpc `contracts/pools/ERG-POOL/lendPool.md` | FULL MATCH |
| 13 | ERG v1 collateral | 10 | 1cecb8287090 | lpc `contracts/pools/ERG-POOL/collateralContract.md` | FULL MATCH |
| 14 | ERG v1 repayment | 10 | 7125e48e608d | lpc `contracts/pools/ERG-POOL/repaymentContract.md` | FULL MATCH |
| 15 | ERG v1 child | 10 | 76041a032a28 | lpc `contracts/pools/ERG-POOL/interestRateContract.md` | FULL MATCH |
| 16 | ERG v1 parent (shared by all 8 v1 pools) | 10 | b1f733579e5f | lpc `contracts/pools/ERG-POOL/parentInterest.md` | FULL MATCH |
| 17 | ERG v1 proxy_borrow | 10 | 6136df7b68e5 | lpc `contracts/pools/ERG-POOL/proxy-contracts/proxyBorrow.md` | FULL MATCH |
| 18 | ERG v1 proxy_lend | 10 | 57980c7d621b | bot `contracts/v1_proxy_lend_erg.md` | FULL MATCH |
| 19 | ERG v1 proxy_lend_legacy[0] | 10 | 71b96327f07e | lpc `contracts/pools/ERG-POOL/proxy-contracts/proxyLend.md` | TEMPLATE MATCH (constants differ: #7 Coll[Byte]; source 3062e34e241e065aaf5304b634be588d24cfc82a9ff88333ea3a7f46d0996dc0, the `lendPoolToken` literal; deployed fc888e0eed50a4042324793a7894134d83c7aaf5c99f4bf643e7e2b4e71e0095, which is ERG `LEND_TOKEN` in current_pools.py) |
| 20 | ERG v1 proxy_withdraw | 10 | 732ec9e5ee3c | bot `contracts/v1_proxy_withdraw_erg.md` | FULL MATCH |
| 21 | ERG v1 proxy_withdraw_legacy[0] | 10 | 552b29e93cd5 | lpc `contracts/pools/ERG-POOL/proxy-contracts/proxyWithdraw.md` | NO MATCH: first diff tree @1 (constant count), template @130 (one more `&&` node deployed); constants 13 vs 14; template 157 vs 162 B |
| 22 | ERG v1 proxy_repay | 10 | d6bc29618c3b | lpc `contracts/pools/ERG-POOL/proxy-contracts/proxyRepay.md` | NO MATCH: first diff tree @1, template @89 (one more `&&` node deployed); constants 8 vs 9; template 114 vs 119 B |
| 23 | ERG v1 proxy_partial_repay | 10 | 3fc2c4624398 | lpc `contracts/pools/ERG-POOL/proxy-contracts/proxyPartialRepay.md` (fence has no closing marker; block runs to end of file) | NO MATCH: first diff tree @1, template @93 (two more `&&` nodes in the source); constants 13 vs 11; template 243 vs 239 B |
| 24 | QUACKS v2 (00fa2be6) pool | 10 | 25248318f76b | bot `contracts/quacks.py` `generate_pool_script` | FULL MATCH (after substitution) |
| 25 | QUACKS v2 collateral | 10 | cf54c33e8718 | bot `contracts/quacks.py` `generate_collateral_script` | FULL MATCH (after substitution) |
| 26 | QUACKS v2 repayment | 10 | b0a0595bc2d5 | bot `contracts/quacks.py` `generate_repayment_script` | FULL MATCH (after substitution) |
| 27 | QUACKS v2 interest | 10 | 46cf8c6d44aa | bot `contracts/quacks.py` `generate_interest_script` | FULL MATCH (after substitution) |
| 28 | QUACKS v2 proxy_borrow | 10 | 776b94d904ed | bot `contracts/quacks.py` `generate_proxy_borrow_script` | FULL MATCH (after substitution) |
| 29 | QUACKS v2 proxy_borrow | 10 | 776b94d904ed | bot `temp_proxy_contracts.txt` block 0 | NO MATCH: first diff tree @1, template @14; constants 18 vs 21; template 260 vs 296 B |
| 30 | QUACKS v2 proxy_repay | 10 | 91ece4bb13e0 | lpc `contracts/v2-generics/repay.md` | FULL MATCH (also the superseded v2 pool's proxy_repay) |
| 31 | QUACKS v2 proxy_partial_repay | 10 | eed14bd64f4e | lpc `contracts/v2-generics/partial_repay.md` | NO MATCH: first diff tree @1, template @57 (block of 5 vs 2 val definitions); constants 9 vs 8; template 162 vs 139 B. This source is a FULL MATCH to the superseded v2 pool 86052fc6's proxy_partial_repay (`25kk6dLZ…`). |
| 32 | QUACKS v2 proxy_partial_repay | 10 | eed14bd64f4e | bot `temp_proxy_contracts.txt` block 1 | NO MATCH: first diff tree @1, template @57; constants 7 vs 8; template 220 vs 139 B |
| 33 | QUACKS v2 proxy_lend | 10 | dd9959700fce | lpc `contracts/pools/Generic-Token-Pool/proxy-contracts/deposit.md` | FULL MATCH |
| 34 | QUACKS v2 proxy_withdraw | 10 | 5f358f59d6d1 | lpc `contracts/pools/Generic-Token-Pool/proxy-contracts/withdraw.md` | FULL MATCH |
| 35 | QUACKS v2 quoteScript, quotes[0,1,3,4] (one tree) | 10 | 41c07d9c2894 | bot `contracts/quacks.py` `generate_logic_script` | FULL MATCH |
| 36 | QUACKS v2 quoteScript, quotes[0,1,3,4] | 10 | 41c07d9c2894 | bot `contracts/quacks.py` `generate_logic_script_simple` | NO MATCH: first diff tree @1, template @1; constants 41 vs 63; template 727 vs 1057 B. This source is a FULL MATCH to the superseded v2 pool's quotes[2]. |
| 37 | QUACKS v2 quoteScript, quotes[0,1,3,4] | 10 | 41c07d9c2894 | bot `contracts/quacks.py` `generate_logic_script_lp` | NO MATCH: first diff tree @1, template @1; constants 78 vs 63; template 1255 vs 1057 B (matches row 41's tree instead) |
| 38 | QUACKS v2 quoteScript, quotes[0,1,3,4] | 10 | 41c07d9c2894 | logic `live_contracts/v2/quacks/dex-weighted.md` | NO MATCH: first diff tree @1, template @1; constants 48 vs 63; template 872 vs 1057 B |
| 39 | QUACKS v2 quoteScript, quotes[2] | 10 | 0cda3cb2baa3 | bot `contracts/quacks.py` `generate_logic_script` | NO MATCH: first diff tree @1, template @1; constants 63 vs 78; template 1057 vs 1255 B (matches row 35's tree instead) |
| 40 | QUACKS v2 quoteScript, quotes[2] | 10 | 0cda3cb2baa3 | bot `contracts/quacks.py` `generate_logic_script_simple` | NO MATCH: first diff tree @1, template @1; constants 41 vs 78; template 727 vs 1255 B |
| 41 | QUACKS v2 quoteScript, quotes[2] | 10 | 0cda3cb2baa3 | bot `contracts/quacks.py` `generate_logic_script_lp` | FULL MATCH |
| 42 | QUACKS v2 quoteScript, quotes[2] | 10 | 0cda3cb2baa3 | logic `live_contracts/v2/quacks/dex-weighted.md` | NO MATCH: first diff tree @1, template @1; constants 48 vs 78; template 872 vs 1255 B |
| 43 | QUACKS v2 auto_balance_address | 19 | 1cb2eb2419fa | bot `contracts/autobalance_script.md` fence 2 (ErgoScript) | FULL MATCH (after substitution; compiled at tree version 1) |
| 44 | QUACKS v2 auto_balance_address | 19 | 1cb2eb2419fa | bot `contracts/autobalance_script.md` fence 3 (python `generate_autobalance_script`) | FULL MATCH (after substitution; compiled at tree version 1) |
| 45 | QUACKS v2 spend_nft_address | 19 | ac6f3b0584e3 | bot `contracts/closure.md` | NO MATCH: first diff tree @359, template @174. Constants 35 vs 35, all equal after substitution; template 619 vs 619 B; tree 804 vs 804 B. Exactly 2 template bytes differ (offsets 174 and 179): 0x0e (`Coll[Byte]`) in the source vs 0x1a (`Coll[Coll[Byte]]`) deployed, each the type byte of an `R9` register read. |
| 46 | QUACKS v2 spend_nft_address | 19 | ac6f3b0584e3 | DIAGNOSTIC, not a published source: row 45's source with both `R9[Coll[Byte]]` changed to `R9[Coll[Coll[Byte]]]` | FULL MATCH |
| 47 | QUACKS v2 parameter | 10 | 9ebeaefd7020 | bot `helpers/node_calls.py` `generate_dummy_script` (`PK("{node_address}") && HEIGHT >= -1`) | NO MATCH: first diff tree @5, template @5. Templates are 9 B each and differ in 1 byte: 0x92 (`>=`) in the source vs 0x91 (`>`) deployed. Both constants also differ: key 03199bd9… (node_address) vs 03dda8fe… (address 9i9RhfdH…), and Int -1 vs -10202111. |
| 48 | QUACKS v2 parameter | 10 | 9ebeaefd7020 | bot `helpers/node_calls.py` `generate_dummy_script_liquidations` (`… HEIGHT >= -1055`) | NO MATCH: same as row 47, Int -1055 vs -10202111 |
| 49 | QUACKS v2 interest_parameter | 10 | 7f42b828f9ab | bot `helpers/node_calls.py` `generate_dummy_script` | NO MATCH: same 1-byte template difference as row 47; key as row 47; Int -1 vs -10202112 |
| 50 | QUACKS v2 interest_parameter | 10 | 7f42b828f9ab | bot `helpers/node_calls.py` `generate_dummy_script_liquidations` | NO MATCH: as row 49, Int -1055 vs -10202112 |
| 51 | QUACKS v2 quote_fund (quotes[0..3], one tree) | 10 | 4cb272b5e52d | bot `helpers/node_calls.py` `generate_dummy_script` | NO MATCH: first diff tree @2, template @2 (5 of 9 bytes differ). Operand order is swapped: the deployed tree is `sigmaProp(HEIGHT > c0) && c1(key)`, the source `key && sigmaProp(HEIGHT >= c1)`. Deployed constants: Int -12924510 and key 03dda8fe… (9i9RhfdH…). |
| 52 | QUACKS v2 quote_fund | 10 | 4cb272b5e52d | bot `helpers/node_calls.py` `generate_dummy_script_liquidations` | NO MATCH: as row 51 |

Notes on the table:

- Rows 45 and 46: row 46 is a check on what the two differing bytes are. It is not a published source.
  No public source file has `R9[Coll[Coll[Byte]]]` in `closure.md`.
- The key constant in the `parameter`, `interest_parameter` and `quote_fund` trees (03dda8fe…) is the
  same public key as the `PK("9i9RhfdHQA2bHA8GqWKkYevp3nozASRjJfFkh29utjNL9gqE7Q7")` hard-coded in the
  three `quacks.py` quote generators. That is a byte-level observation only.
- Extracted but not compiled: `autobalance_script.md` fence 1 is an 8-line fragment (the `nftProofGiven`
  snippet), not a whole contract. The script's cross-sweep shows the same QUACKS v1 sources
  template-match the SigUSD, SigRSV, RSN and rsADA trees for the same roles, with constants differing.
  Beyond rows 0–23, the other six v1 pools were not reconciled one by one.

## Control result

**Pass.** Row 0–4 (QUACKS v1 pool, collateral, repayment, child, borrow proxy) and rows 12–17 (ERG v1
pool, collateral, repayment, child, parent, borrow proxy) compile to the deployed bytes exactly under
both compilers, from sources compiled verbatim with no substitution. The compile path reproduces known
deployments, so the v2 rows above use the same path.

## v2 roles with no matching public source

Every latest-v2 role had at least one candidate compiled, so none is NO CANDIDATE SOURCE. The four roles
below have no public source that compiles to them. The QB may list them as still to be supplied or
decompiled:

| Role (POOL_NFT 00fa2be6) | Deployed hash | Nearest public text tried | Closest result |
|---|---|---|---|
| proxy_partial_repay (159 B) | eed14bd64f4e | `v2-generics/partial_repay.md`; `temp_proxy_contracts.txt` block 1 | NO MATCH (rows 31–32). `partial_repay.md` matches the superseded pool's proxy instead. |
| parameter (51 B) | 9ebeaefd7020 | bot `generate_dummy_script` family | NO MATCH (rows 47–48). This is not a contract source; it is a key-plus-height guard. |
| interest_parameter (51 B) | 7f42b828f9ab | bot `generate_dummy_script` family | NO MATCH (rows 49–50), same shape as parameter |
| quote_fund (51 B) | 4cb272b5e52d | bot `generate_dummy_script` family | NO MATCH (rows 51–52), operands in the other order |

spend_nft_address (ac6f3b0584e3) is not in this list, but it has no published source that compiles to it
as written. `closure.md` differs from it in two type bytes (row 45); see rows 45–46.

## Unproven or out of scope

- The superseded v2 pool 86052fc6 was not reconciled role by role. Its partial-repay proxy, repay proxy,
  quotes and template-level relations appear only through the cross-sweep printed by the script.
- The v1 pools other than QUACKS and ERG were not reconciled role by role (see the notes on the table).
- The toolchain the team used to deploy is not known. The bot's own compile path is the node's
  `/script/p2sAddress` endpoint (`helpers/node_calls.py:compile_script`). The claim here is only that
  sigma-state 5.0.8 and 6.0.2 produce these bytes from these sources.
- Nothing here depends on or says anything about which transactions use these trees.

## Reproduction

The script and inputs are in `audit/deployed/reconciliation/`:

- `reconcile.py` is the driver. It extracts sources, fills substitutions, runs both compilers and
  compares the results.
- `Reconcile5.scala` compiles and parses trees with sigma-state 5.0.8, and `Reconcile6.scala` does the
  same with sigma-state 6.0.2.
- `sources/<repo>@<sha7>/<path>.<block>.es` holds the 43 extracted blocks. Each has one
  `// provenance:` line (repo, full commit, file, block), followed by the verbatim text.

Steps:

1. Have Java 11, scala-cli, Python 3 and git. The first run needs Maven Central access so scala-cli can
   fetch sigma-state 5.0.8 and 6.0.2.
2. Clone the quote repo:
   `git clone https://github.com/duckpools/logic-contracts.git <logic> && git -C <logic> checkout a5a797f27b432b10652d8f86eabb43cf51213697`
3. Optionally regenerate the sources. The script reads them with `git show <pinned sha>:<path>`, so
   working-tree state does not matter, and the output is byte-identical to the committed files.
   `cd audit/deployed/reconciliation && python3 reconcile.py extract --lend <lend-protocol-contracts> --bot <off-chain-bot repo or worktree containing e69a4ff> --logic <logic>`
4. Compile and compare:
   `python3 reconcile.py run --bot <off-chain-bot repo containing e69a4ff> --frontend <duckpools-audit/test-frontend> --work <scratch dir>`
   The command prints one line per compiler and job, followed by `sweep` lines: other trees named in
   `current_pools.py` whose template equals the compiled one. It writes resolved sources, the job list,
   raw compiler output, the scala-cli build directories and `report.json` into `<scratch dir>`, and
   writes nothing next to the script. A full run takes about 15 seconds once the dependencies are cached.
