# Trees — v2 QUACKS pool 00fa2be6 (frontend-pinned)

One file per distinct ErgoTree found under `../deployed.json`. Each file holds only the
hex string (no address, no label), with a single trailing newline. File name = role,
except where two or more roles/quote-indices carry byte-identical trees — those are
written once and named by tree size, with the sharing noted below.

Every file here was re-derived from the base58 address in `../deployed.json` by this
workstream (base58 decode -> drop 4-byte blake2b256 checksum -> drop 1 prefix byte),
independently of the `ergotree_hex` field already present in that JSON. The two agreed
in all 22 cases (0 mismatches). See `../../README.md` for the full decode procedure.

## One-to-one files (role == file, no sharing)

| File | Role | Bytes | blake2b256 |
|---|---|---|---|
| `pool.ergotree.hex` | `pool` | 1371 | `25248318f76b264084a0926e81f209faa7889ee3e84819e92a680b91feb2b1af` |
| `collateral.ergotree.hex` | `collateral` | 2125 | `cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` |
| `repayment.ergotree.hex` | `repayment` | 244 | `b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d` |
| `interest.ergotree.hex` | `interest` | 534 | `46cf8c6d44aa02d089272b2de6f0cb884a8937277f6d64df0d73a67b42d65c6e` |
| `proxy_lend.ergotree.hex` | `proxy_lend` | 216 | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` |
| `proxy_withdraw.ergotree.hex` | `proxy_withdraw` | 212 | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` |
| `proxy_borrow.ergotree.hex` | `proxy_borrow` | 474 | `776b94d904ed249875e20a18d87df41eb7fb6b44379d15bf582dd2cc9215c2e4` |
| `proxy_repay.ergotree.hex` | `proxy_repay` | 126 | `91ece4bb13e02310e947d9f4af0367e98e9fd55e80474ca32f24a14e27e7e586` |
| `proxy_partial_repay.ergotree.hex` | `proxy_partial_repay` | 159 | `eed14bd64f4e29f0ab5ff4623a54778e4d3913b38c736909c96368a93fac29fb` |
| `parameter.ergotree.hex` | `parameter` | 51 | `9ebeaefd70206f2d051746eade435068f2bfed31d385df96ee869af0e87c3327` |
| `interest_parameter.ergotree.hex` | `interest_parameter` | 51 | `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31` |
| `auto_balance_address.ergotree.hex` | `auto_balance_address` | 876 | `1cb2eb2419fafea3e3603c4cdd7c4c85c3c7fee75151093ebd0b94479aed918d` |
| `spend_nft_address.ergotree.hex` | `spend_nft_address` | 804 | `ac6f3b0584e39f00335ef5ff95c23b56448e16f0a156ac2218e41782f5ecf22f` |

`parameter` and `interest_parameter` are both 51 bytes but are NOT the same tree — they
differ by one serialized byte (an embedded constant), giving different hashes. Same
shape/likely purpose (each JSON's `checksum_ok` field notwithstanding — that field only
covers the base58Check step, not tree identity).

## Quote trees (deduped across `quotes[0..4]`)

`deployed.json` carries 5 quote entries. Their `quoteScript` and `quote_fund` trees are
mostly repeated:

| File | Role | Quote indices sharing this tree | Bytes | blake2b256 |
|---|---|---|---|---|
| `quote_script_1237B.ergotree.hex` | `quoteScript` | 0, 1, 3, 4 | 1237 | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` |
| `quote_script_quotes2_1582B.ergotree.hex` | `quoteScript` | 2 only (not shared) | 1582 | `0cda3cb2baa3a97a77c8ce7d6293d252c069151cd05ebec7e32dec03cc41c43e` |
| `quote_fund_51B.ergotree.hex` | `quote_fund` | 0, 1, 2, 3 | 51 | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` |

Note: `quotes[4]` has no `quote_fund` key in `deployed.json` at all (not just a shared
one) — the source data only carries a `quote_fund` for indices 0-3.

## Not covered here

- `decompiled/` (sibling directory) — produced by a separate workstream, not this one.
- Token ids (`POOL_NFT`, `CURRENCY_ID`, `INTEREST_NFT`, …, and every `quoteNFT` /
  `DEXNFT`) are not ErgoTrees and have no file here; they remain in `../deployed.json`.
