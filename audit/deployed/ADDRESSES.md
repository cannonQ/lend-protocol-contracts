# Deployed contract addresses — bot v2 constants (all pools)

Every contract address the off-chain bot v2 knows about, decoded and re-hashed by this workstream. Source: `off-chain-bot-v2/current_pools.py` (commit `e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f`, branch `v2`) — 8 v1 pools + 2 v2 pools — plus `off-chain-bot-v2/proposed_pools.py` from the same checkout. See `README.md` in this directory for the decode procedure and provenance.

Columns: **role** = the bot's field name for this address. **address** = first 20 chars + … + last 6 (full string is in the bot source file named). **ErgoTree bytes** = length of the decoded tree. **header** = first ErgoTree byte (constant-segregation / version flag). **blake2b256** = full hash of the decoded tree bytes (digest_size=32), independent of and not to be confused with any token id. **in frontend** = whether this exact base58 string also appears in the test.duckpools.io bundle (`test-frontend/addresses.json`). **shared** = cross-reference into the "Shared ErgoTrees" section below when this tree is byte-identical to another entry in this table (own pool or a different one).

Total address entries tabled: **181**. Distinct ErgoTree hashes among them: **79**. Decode errors: **0**. Checksum failures: **0**.


## ergo v1 (90290924d95d)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `3F9bBReNRNpy8HU2PNNR…Q9Mybt` | 1262 | `0x10` | `4a42d2f7b33178c06f11daccc2f2a9b90ea1bf1cf0734bf3ec6dc6916db68a90` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `4T5Phw51x11bWjCaDiLU…BtP7bN` | 595 | `0x10` | `76041a032a286a254aa3bf993ef49e4ffe26a21514559d578a8c20583f06020e` | yes |  |
| `collateral` | `ZPBQ8yL1wGjPBFE7ZbLY…8BAEcT` | 1767 | `0x10` | `1cecb8287090614ec0fd6009fe2ae52526668b0502c2d313ffb112aaaa8a6d38` | yes |  |
| `repayment` | `YFWk9RGcvBZWrfRvAHd9…XQQDtN` | 189 | `0x10` | `7125e48e608d13d4654b0e2ccd197a40a6d206549968c376ce07c030f4b158f3` | yes |  |
| `proxy_lend` | `TZUEDtSxooGsVmzvDHnb…8QzBN6` | 394 | `0x10` | `57980c7d621bf693bf5474060cd9b179fba802e810875d4d848e8630f7796999` | yes |  |
| `proxy_withdraw` | `3RSTM7zf4arcbRhTqErf…PofosV` | 417 | `0x10` | `732ec9e5ee3c47296c3cc98e4b8609a28c3c4125379b17f3df076ac163b1800d` | yes |  |
| `proxy_borrow` | `DoYuPfCYCWitz76iir8i…QuWCTm` | 440 | `0x10` | `6136df7b68e59d34a1a5c86c7f78bd7fb96cac58d3aaa2507f590d50c60044f7` | yes |  |
| `proxy_repay` | `Fgu7JeiUT7BUFAkE22qX…7TDxoe` | 142 | `0x10` | `d6bc29618c3b527277b44715bb56f405bf3cf72683d651719e1a38760a578e3c` | yes |  |
| `proxy_partial_repay` | `21oVVJWKo1R7NvYL5pST…L1yeEb` | 266 | `0x10` | `3fc2c46243988e6ae09b01a70be43447aaec88e78b1a7d6df47123cd496dfa47` | yes |  |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `6ipHPSam172p6thBrRJ9…g22wDs` | 207 | `0x10` | `71b96327f07e89a967ad3faebe871b17e8ed87d410813396a1ae1c2c8039cdf5` | no |  |
| `proxy_withdraw_legacy[0]` | `2BgqPNDeHegDQRPfME71…ZsXetR` | 195 | `0x10` | `552b29e93cd5dc99b234ba5bedf064ec46c971161f2b69fc37affc84b7c982c0` | no |  |

## sigusd v1 (6a5506ff2e12)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `6Q6fbqfbMAogw42DWDtK…byFV8a` | 1279 | `0x10` | `59f4a038a89868da722153ea00701e072e2ab5c762fb2d47822c154702dbcdf1` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…VEkXUC` | 598 | `0x10` | `7f82f94a0c6da54350950af52a866987baa47955f5826bc3bcb47586c1ae8a9e` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…gAicbq` | 1801 | `0x10` | `0814cf0f6ac3945302cd6a40e548a77ae3e0dc273e4e89e151b16e59c176906c` | yes |  |
| `repayment` | `r5zW3yf5B6ZghtHxnav9…GQiYc7` | 244 | `0x10` | `1aae6fb5867d8b46a6b2fede86fd4fb58c9cb630841e23db0ba1c3d2a145c758` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…fLga8a` | 453 | `0x10` | `68094baa37caaddfecd508a00a12c6710f99fea900789ac5771451ea9868d459` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## quacks v1 (a694087fd217)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `6Q6fbqfbMAogw42DWDtK…M6x2NT` | 1279 | `0x10` | `c969eee9392310b2b4b1deda7bcd64677bcfc7c14c4daa1156299b57757b77fc` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…9naX2Q` | 598 | `0x10` | `f429a9d1c45fbd403bafb951062185c4a448837668a0f38a0452c80c764c4e07` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…D1FDuV` | 1801 | `0x10` | `2e2f572ee4e28e59c95db9fc510d8375ef641a7325087a34155af88d96fe5710` | yes |  |
| `repayment` | `r5zW3yf5Cp6PAiK1cgDE…jPmZK6` | 244 | `0x10` | `75b3ffd8e335b30c1440b7c444261cf363e1f3a5f2465be1f1b7b197a190540f` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…pabUQt` | 453 | `0x10` | `96fcbcd89e538f27ebacbf8ed6530cc7c9f42412208b9ecc61dd81f9731260d5` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## sigrsv v1 (7551aef0a241)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `4z9dZrkxdYok1tkUF56E…CvfAjT` | 1287 | `0x10` | `714bb8cf1ede2d1c1188840edd2167cf5694a964c9e1b1ec0af39574269712f1` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…eL4GkJ` | 598 | `0x10` | `e1b1549452f240d2d087f795bdc09be7f2a3d6858c3fa0913e188980e44f473e` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…RRqey7` | 1801 | `0x10` | `8629781e3fc14cfe197d07f1b3cd63fe750a88f9fca8564c01c3f57cda925f4f` | yes |  |
| `repayment` | `r5zW3yf5BQiSNLp7zap6…3qCqtB` | 244 | `0x10` | `e63a1afefdc042f7c779e29e7b6148be8fde14036e5cfcf4b4e00a8390725ed8` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…aCfndh` | 453 | `0x10` | `203c64d833ded6155d6319039e88154953691d894b49369e3db9e1ba8ad9cb53` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## rosen-bridge v1 (02a406e0fc7c)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `uNSWCGrJoB8w8CD4eBFT…smVVaH` | 1286 | `0x10` | `78d9110cf982eb4d8dbe6299128396eeb60cef7eb119f530fb70d7a2b59ed8dc` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…CvYes3` | 598 | `0x10` | `02deee45046213eb20fade824d65858719046a6e205912b7815ea1e4b750308a` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…Xu8m3a` | 1801 | `0x10` | `95baef105b194cb3e77e1c54193ee305b4b61f8ea5151cc8694b459dfc6f19a1` | yes |  |
| `repayment` | `r5zW3yf589G7zj8Yfw45…s2YmWA` | 244 | `0x10` | `46628a597d464bd95ba895206da37e1ad6a11431b01d1ffc6cff955bf8f8deba` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…sxZ7du` | 453 | `0x10` | `85e4dfbaf0fd176dcfff542c37b1d2fd619a0073deca1c4eb849e32d71f550a7` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## cardano v1 (84f30401051b)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `2TyjXFFfy78u67Nxs5Ls…PmxKeh` | 1300 | `0x10` | `7658bee7e335635574b8c3a29c41a5d87e85750fd0cd41024804c17bd3d8bf0b` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…a6zZ73` | 598 | `0x10` | `ceb471299703f5237fe2c585e38d8b712e4ca4571f47276a602dd8eeca583e25` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…wXS753` | 1801 | `0x10` | `241307198ce8b7f7aa222cfd45d500646c1c679080605715ca4045514ccefd0c` | yes |  |
| `repayment` | `r5zW3yf5BrY6tCEatJcx…iHmTbN` | 244 | `0x10` | `79921737b80209ba98b1e46113903c87ccb4fcc99d2a5092ebfe3bf690cfcf52` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…aqE1Y9` | 453 | `0x10` | `cf05684d34d52ee035b2aa112e5da911fcd9cbd028ce1a1bf3be6a38526c4b13` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## spf v1 (0bd05d8f87df)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `4Dn4UhZUretsCyhPztJi…4BmgiN` | 1306 | `0x10` | `6cedb2b98ed773215edbe5ac507e6f8114a668c3f6ff771d5be41ca2a8fb71be` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…GBnNKn` | 598 | `0x10` | `75ae26371d7b1bf5477d9adae0dad6a600ca8a9e1a4dedd81fd325f923db4cd6` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…sgDmA5` | 1801 | `0x10` | `537e2865d34e584d05c17918a77d02030d5df8078b9de46b704de6875f0450f6` | yes |  |
| `repayment` | `r5zW3yf58QR5qeALLvHM…5YAm38` | 244 | `0x10` | `58dd5d0641f23f624eea382a12f80f1d08438eb4900bb5f3b0d4ad60208c56ce` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…kUJXGA` | 453 | `0x10` | `9c0f6407cb88070ffc19567c2065d0e09560f81e72031ba4197861a8184c1ae1` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `FKdvshkgUUFzdDZEEPVP…6qWsFQ` | 49 | `0x10` | `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce` | no | [S3](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## bitcoin v1 (585ab31dc331)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `6ugwDBGznX32MSheEEKy…N5xjjS` | 1290 | `0x10` | `ed4ca5f4b0bbec9b861ef8ac651e249fb67ca63234b974efa52b5bc4dfa27b81` | yes |  |
| `parent` | `5s1ivH9pMoYPPX5YV8GZ…yxDiH4` | 412 | `0x10` | `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87` | yes | [S1](#shared-ergotrees-across-pools) |
| `child` | `67d7wq2KP495sNBtVThj…ZSrt6r` | 598 | `0x10` | `7c74843a88536f3dca874e0cd64223afafd5733a64422b15568791e388f339c9` | yes |  |
| `collateral` | `4EQTxw3MSn9fDbvzUN4q…Zg3hA9` | 1801 | `0x10` | `33ed6598c70856437dec6731f5617d78a1100fea016423c6586485fc1d18c775` | yes |  |
| `repayment` | `r5zW3yf5Aas5F5rVyjZN…yjnMQt` | 244 | `0x10` | `8d1ee5689d1eeb0b30adf1a0f682738532bc167120ea1bf443b3080a5bdb3884` | yes |  |
| `proxy_lend` | `4B9Bjp9LeQNpQNr2pYFC…K1fs79` | 450 | `0x10` | `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2` | yes | [S4](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `ATDv7GGGk4st2bLrdX5U…344D7Z` | 448 | `0x10` | `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d` | yes | [S5](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `5hz4vVihRAd3zGRdVa9s…4Wr193` | 453 | `0x10` | `283edc9e9592ae115d3d5b23883f7488e22d32a4e4933ee56aaf52fc1ab079d7` | yes |  |
| `proxy_repay` | `2iHikbZ2nWVxpM6aQRXU…mASYMc` | 105 | `0x10` | `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e` | yes | [S6](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `4FC5xSYeegVB8di7x32b…jBnKYC` | 48 | `0x10` | `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc` | no | [S2](#shared-ergotrees-across-pools) |
| `interest_parameter` | `4FC5xSYeegVB8di7x32b…9D9dvq` | 48 | `0x10` | `1a092f1bf363ef46cd06ba6628a26fd637beece0b906a46f9b89b590685e6935` | no |  |
| `proxy_lend_legacy[0]` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_lend_legacy[1]` | `2U18ukpP2cUUiBkN3pHJ…A4pTf5` | 176 | `0x10` | `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018` | yes | [S9](#shared-ergotrees-across-pools) |
| `proxy_withdraw_legacy[0]` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |

## quacks v2 (86052fc64669)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `2FkbKwmZBuK9AD57fwqT…bW682h` | 1371 | `0x10` | `85c5a8fc343b5bef5292a3ce26e0def720f0423059d4c196b489ff9be8ea877c` | no |  |
| `collateral` | `2yfNByo7VZuxWhDUTKzT…FBFFwJ` | 1921 | `0x10` | `295d7d48bdfa23294a8e7a374a29d623747b49141b130c8d77813446fbb4225e` | no |  |
| `repayment` | `r5zW3yf5BtJiqHUGUDQU…TocHLm` | 244 | `0x10` | `3c7ec74cde008ddeb41ee0373798081e5c35c331f183e5154036d3a1ff0b755a` | no |  |
| `interest` | `zxFnr6XrdtpugAYXqkLF…VoPZhQ` | 534 | `0x10` | `8b5f833f2b27c43bc57c3a17810c2a2bb0ad9d5746d138a327f0045233370b14` | no |  |
| `proxy_lend` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `2H6MZUwvVUd37EZfGgfu…RUX1xJ` | 474 | `0x10` | `8f542a6ce1f32d4188024d0ea95e14e70cef41e0595658eeb9417927bd6e6055` | no |  |
| `proxy_repay` | `TwyqbJtQAJCTiZsGAy9R…p79oji` | 126 | `0x10` | `91ece4bb13e02310e947d9f4af0367e98e9fd55e80474ca32f24a14e27e7e586` | yes | [S11](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `25kk6dLZPWxTyL6orVYp…a8FttQ` | 184 | `0x10` | `bd9c5788ef1f2dd07c8d03c155f54c435f5385881b9b7067a3fdc87c79f3dad2` | no |  |
| `parameter` | `5p17C57VD3UBEed82YvE…gyV9Nc` | 51 | `0x10` | `9ebeaefd70206f2d051746eade435068f2bfed31d385df96ee869af0e87c3327` | no | [S12](#shared-ergotrees-across-pools) |
| `interest_parameter` | `5p17C57VD3UBEed82YvE…CEFji5` | 51 | `0x10` | `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31` | no | [S13](#shared-ergotrees-across-pools) |
| `spend_nft_address` | `4B8sDstcQpcuZKQtkN9X…6u3QBv` | 450 | `0x10` | `bcac30b27aa9e1db0c12ae6316e3053425dc737609e4ab07f36fdd6830a01da3` | no |  |
| `quotes[0].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[0].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[1].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[1].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[2].quoteScript` | `47AmZQojqCisoksXouPk…B9RBVN` | 852 | `0x10` | `5c70edf3996269b2f96ee1b9ac184f76951603a7ac0726a92fb01a546b7cbbd7` | no |  |
| `quotes[2].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |

## quacks v2 (00fa2be6114e)  _(from `current_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `2FkbKwmZBuK9AD57fwqT…JqSkds` | 1371 | `0x10` | `25248318f76b264084a0926e81f209faa7889ee3e84819e92a680b91feb2b1af` | yes | [S16](#shared-ergotrees-across-pools) |
| `collateral` | `P5a4t5sSNrmzER4vNjQH…eai82H` | 2125 | `0x10` | `cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | yes | [S17](#shared-ergotrees-across-pools) |
| `repayment` | `r5zW3yf586Wj9MQRJ8hu…B2cgUd` | 244 | `0x10` | `b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d` | yes | [S18](#shared-ergotrees-across-pools) |
| `interest` | `zxFnr6XrdtpugAYXqkLF…pcC65p` | 534 | `0x10` | `46cf8c6d44aa02d089272b2de6f0cb884a8937277f6d64df0d73a67b42d65c6e` | yes | [S19](#shared-ergotrees-across-pools) |
| `proxy_lend` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `2H6MZUwvVUd37EZfGgfu…qPvdTg` | 474 | `0x10` | `776b94d904ed249875e20a18d87df41eb7fb6b44379d15bf582dd2cc9215c2e4` | yes | [S20](#shared-ergotrees-across-pools) |
| `proxy_repay` | `TwyqbJtQAJCTiZsGAy9R…p79oji` | 126 | `0x10` | `91ece4bb13e02310e947d9f4af0367e98e9fd55e80474ca32f24a14e27e7e586` | yes | [S11](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `cLNgwy6mZGijjc9EfNhw…6M9UqC` | 159 | `0x10` | `eed14bd64f4e29f0ab5ff4623a54778e4d3913b38c736909c96368a93fac29fb` | yes |  |
| `parameter` | `5p17C57VD3UBEed82YvE…gyV9Nc` | 51 | `0x10` | `9ebeaefd70206f2d051746eade435068f2bfed31d385df96ee869af0e87c3327` | no | [S12](#shared-ergotrees-across-pools) |
| `interest_parameter` | `5p17C57VD3UBEed82YvE…CEFji5` | 51 | `0x10` | `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31` | no | [S13](#shared-ergotrees-across-pools) |
| `auto_balance_address` | `2GQ3qdXbygDYSq2jTgcM…1UMsHi` | 876 | `0x19` | `1cb2eb2419fafea3e3603c4cdd7c4c85c3c7fee75151093ebd0b94479aed918d` | yes | [S21](#shared-ergotrees-across-pools) |
| `spend_nft_address` | `LRDNLxcH9Ehre8rN3Ebu…QqBvWx` | 804 | `0x19` | `ac6f3b0584e39f00335ef5ff95c23b56448e16f0a156ac2218e41782f5ecf22f` | yes | [S22](#shared-ergotrees-across-pools) |
| `quotes[0].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[0].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[1].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[1].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[2].quoteScript` | `3LuHAyaiNFH1LNQFu4pn…QjSHSN` | 1582 | `0x10` | `0cda3cb2baa3a97a77c8ce7d6293d252c069151cd05ebec7e32dec03cc41c43e` | no | [S23](#shared-ergotrees-across-pools) |
| `quotes[2].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[3].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[3].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[4].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |

## quacks v2 (00fa2be6114e)  _(from `proposed_pools.py`)_

| role | address | ErgoTree bytes | header | blake2b256 | in frontend | shared |
|---|---|---|---|---|---|---|
| `pool` | `2FkbKwmZBuK9AD57fwqT…JqSkds` | 1371 | `0x10` | `25248318f76b264084a0926e81f209faa7889ee3e84819e92a680b91feb2b1af` | yes | [S16](#shared-ergotrees-across-pools) |
| `collateral` | `P5a4t5sSNrmzER4vNjQH…eai82H` | 2125 | `0x10` | `cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | yes | [S17](#shared-ergotrees-across-pools) |
| `repayment` | `r5zW3yf586Wj9MQRJ8hu…B2cgUd` | 244 | `0x10` | `b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d` | yes | [S18](#shared-ergotrees-across-pools) |
| `interest` | `zxFnr6XrdtpugAYXqkLF…pcC65p` | 534 | `0x10` | `46cf8c6d44aa02d089272b2de6f0cb884a8937277f6d64df0d73a67b42d65c6e` | yes | [S19](#shared-ergotrees-across-pools) |
| `proxy_lend` | `KeFZdXyRkmbbDumvWSR1…qaohVs` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | yes | [S8](#shared-ergotrees-across-pools) |
| `proxy_withdraw` | `3rEnDaoVvvfRygpGSe76…qT3ZkP` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | yes | [S10](#shared-ergotrees-across-pools) |
| `proxy_borrow` | `2H6MZUwvVUd37EZfGgfu…qPvdTg` | 474 | `0x10` | `776b94d904ed249875e20a18d87df41eb7fb6b44379d15bf582dd2cc9215c2e4` | yes | [S20](#shared-ergotrees-across-pools) |
| `proxy_repay` | `TwyqbJtQAJCTiZsGAy9R…p79oji` | 126 | `0x10` | `91ece4bb13e02310e947d9f4af0367e98e9fd55e80474ca32f24a14e27e7e586` | yes | [S11](#shared-ergotrees-across-pools) |
| `proxy_partial_repay` | `3X8eZkShyZ9u5h9Mid1V…jQ3jex` | 242 | `0x10` | `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034` | yes | [S7](#shared-ergotrees-across-pools) |
| `parameter` | `5p17C57VD3UBEed82YvE…gyV9Nc` | 51 | `0x10` | `9ebeaefd70206f2d051746eade435068f2bfed31d385df96ee869af0e87c3327` | no | [S12](#shared-ergotrees-across-pools) |
| `interest_parameter` | `5p17C57VD3UBEed82YvE…CEFji5` | 51 | `0x10` | `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31` | no | [S13](#shared-ergotrees-across-pools) |
| `auto_balance_address` | `2GQ3qdXbygDYSq2jTgcM…1UMsHi` | 876 | `0x19` | `1cb2eb2419fafea3e3603c4cdd7c4c85c3c7fee75151093ebd0b94479aed918d` | yes | [S21](#shared-ergotrees-across-pools) |
| `spend_nft_address` | `LRDNLxcH9Ehre8rN3Ebu…QqBvWx` | 804 | `0x19` | `ac6f3b0584e39f00335ef5ff95c23b56448e16f0a156ac2218e41782f5ecf22f` | yes | [S22](#shared-ergotrees-across-pools) |
| `quotes[0].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[0].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[1].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[1].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[2].quoteScript` | `3LuHAyaiNFH1LNQFu4pn…QjSHSN` | 1582 | `0x10` | `0cda3cb2baa3a97a77c8ce7d6293d252c069151cd05ebec7e32dec03cc41c43e` | no | [S23](#shared-ergotrees-across-pools) |
| `quotes[2].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[3].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |
| `quotes[3].quote_fund` | `5p177mCDoN1drGA5LmqE…PQrfVm` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | no | [S15](#shared-ergotrees-across-pools) |
| `quotes[4].quoteScript` | `2GHGXUgJzMYF4HN31PTo…V8z4aL` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | yes | [S14](#shared-ergotrees-across-pools) |

## Shared ErgoTrees across pools

Each group below is one distinct ErgoTree (by blake2b256) that appears under more than one (pool, role) entry in the tables above. Grouping is purely by byte-identical tree content; it says nothing about whether the underlying boxes are the same UTXO — these are contract scripts, and the same script can back many different boxes/pools.


### S1 — 412 bytes — `b1f733579e5f7809ee93a2cd96f807db51ef3239008d916020cbb9c5bca1ce87`

- `ergo v1 (90290924d95d)` :: `parent`  _(from `current_pools.py`)_
- `sigusd v1 (6a5506ff2e12)` :: `parent`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `parent`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `parent`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `parent`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `parent`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `parent`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `parent`  _(from `current_pools.py`)_

### S2 — 48 bytes — `2355afc01edd41d5144133de808f72fddc89f7bf8968619b5545c7835295eddc`

- `ergo v1 (90290924d95d)` :: `parameter`  _(from `current_pools.py`)_
- `sigusd v1 (6a5506ff2e12)` :: `parameter`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `parameter`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `parameter`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `parameter`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `parameter`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `parameter`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `parameter`  _(from `current_pools.py`)_

### S3 — 49 bytes — `4323163784c646f528c6d8175666029f9d60af1eb3009207d5263cf05033c0ce`

- `ergo v1 (90290924d95d)` :: `interest_parameter`  _(from `current_pools.py`)_
- `sigusd v1 (6a5506ff2e12)` :: `interest_parameter`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `interest_parameter`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `interest_parameter`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `interest_parameter`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `interest_parameter`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `interest_parameter`  _(from `current_pools.py`)_

### S4 — 450 bytes — `94b5de34a65bcfae12bbacb3e67ccd84b27962b5ea13b09f5c2425dfc1e999a2`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_lend`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_lend`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_lend`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_lend`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_lend`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_lend`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_lend`  _(from `current_pools.py`)_

### S5 — 448 bytes — `a7b06baed4d59b152baefb595d14e2d5bd9d6ad7f46610f622eaef9493c9e13d`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_withdraw`  _(from `current_pools.py`)_

### S6 — 105 bytes — `5481608cdc535be6b22bad9dbfae7f91a67812cf7e9c2ef4b472bf96c6540d5e`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_repay`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_repay`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_repay`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_repay`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_repay`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_repay`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_repay`  _(from `current_pools.py`)_

### S7 — 242 bytes — `bd369cacba5ae9e469af0464ca674bf4460de7ca1ea47fb14397a11311a16034`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_partial_repay`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_partial_repay`  _(from `proposed_pools.py`)_

### S8 — 216 bytes — `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_lend_legacy[0]`  _(from `current_pools.py`)_
- `quacks v2 (86052fc64669)` :: `proxy_lend`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_lend`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_lend`  _(from `proposed_pools.py`)_

### S9 — 176 bytes — `0e51f3b072da6129db98e043ddca3afa19cf2a06f16e0c867f6fe81be1d30018`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_lend_legacy[1]`  _(from `current_pools.py`)_

### S10 — 212 bytes — `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6`

- `sigusd v1 (6a5506ff2e12)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `quacks v1 (a694087fd217)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `sigrsv v1 (7551aef0a241)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `rosen-bridge v1 (02a406e0fc7c)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `cardano v1 (84f30401051b)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `spf v1 (0bd05d8f87df)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `bitcoin v1 (585ab31dc331)` :: `proxy_withdraw_legacy[0]`  _(from `current_pools.py`)_
- `quacks v2 (86052fc64669)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_withdraw`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_withdraw`  _(from `proposed_pools.py`)_

### S11 — 126 bytes — `91ece4bb13e02310e947d9f4af0367e98e9fd55e80474ca32f24a14e27e7e586`

- `quacks v2 (86052fc64669)` :: `proxy_repay`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_repay`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_repay`  _(from `proposed_pools.py`)_

### S12 — 51 bytes — `9ebeaefd70206f2d051746eade435068f2bfed31d385df96ee869af0e87c3327`

- `quacks v2 (86052fc64669)` :: `parameter`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `parameter`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `parameter`  _(from `proposed_pools.py`)_

### S13 — 51 bytes — `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31`

- `quacks v2 (86052fc64669)` :: `interest_parameter`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `interest_parameter`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `interest_parameter`  _(from `proposed_pools.py`)_

### S14 — 1237 bytes — `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2`

- `quacks v2 (86052fc64669)` :: `quotes[0].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (86052fc64669)` :: `quotes[1].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[0].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[1].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[3].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[4].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[0].quoteScript`  _(from `proposed_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[1].quoteScript`  _(from `proposed_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[3].quoteScript`  _(from `proposed_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[4].quoteScript`  _(from `proposed_pools.py`)_

### S15 — 51 bytes — `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa`

- `quacks v2 (86052fc64669)` :: `quotes[0].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (86052fc64669)` :: `quotes[1].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (86052fc64669)` :: `quotes[2].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[0].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[1].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[2].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[3].quote_fund`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[0].quote_fund`  _(from `proposed_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[1].quote_fund`  _(from `proposed_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[2].quote_fund`  _(from `proposed_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[3].quote_fund`  _(from `proposed_pools.py`)_

### S16 — 1371 bytes — `25248318f76b264084a0926e81f209faa7889ee3e84819e92a680b91feb2b1af`

- `quacks v2 (00fa2be6114e)` :: `pool`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `pool`  _(from `proposed_pools.py`)_

### S17 — 2125 bytes — `cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729`

- `quacks v2 (00fa2be6114e)` :: `collateral`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `collateral`  _(from `proposed_pools.py`)_

### S18 — 244 bytes — `b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d`

- `quacks v2 (00fa2be6114e)` :: `repayment`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `repayment`  _(from `proposed_pools.py`)_

### S19 — 534 bytes — `46cf8c6d44aa02d089272b2de6f0cb884a8937277f6d64df0d73a67b42d65c6e`

- `quacks v2 (00fa2be6114e)` :: `interest`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `interest`  _(from `proposed_pools.py`)_

### S20 — 474 bytes — `776b94d904ed249875e20a18d87df41eb7fb6b44379d15bf582dd2cc9215c2e4`

- `quacks v2 (00fa2be6114e)` :: `proxy_borrow`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `proxy_borrow`  _(from `proposed_pools.py`)_

### S21 — 876 bytes — `1cb2eb2419fafea3e3603c4cdd7c4c85c3c7fee75151093ebd0b94479aed918d`

- `quacks v2 (00fa2be6114e)` :: `auto_balance_address`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `auto_balance_address`  _(from `proposed_pools.py`)_

### S22 — 804 bytes — `ac6f3b0584e39f00335ef5ff95c23b56448e16f0a156ac2218e41782f5ecf22f`

- `quacks v2 (00fa2be6114e)` :: `spend_nft_address`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `spend_nft_address`  _(from `proposed_pools.py`)_

### S23 — 1582 bytes — `0cda3cb2baa3a97a77c8ce7d6293d252c069151cd05ebec7e32dec03cc41c43e`

- `quacks v2 (00fa2be6114e)` :: `quotes[2].quoteScript`  _(from `current_pools.py`)_
- `quacks v2 (00fa2be6114e)` :: `quotes[2].quoteScript`  _(from `proposed_pools.py`)_
