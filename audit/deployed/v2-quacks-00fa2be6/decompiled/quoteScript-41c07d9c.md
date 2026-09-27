# `quoteScript-41c07d9c` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `quotes[0].quoteScript`, `quotes[1].quoteScript`, `quotes[3].quoteScript`, `quotes[4].quoteScript` |
| Address (mainnet P2S) | `2GHGXUgJzMYF4HN31PTotrY2azq2t1ueHJABDHu7qYmYHesuDwXARy5xG2FXoSL7Cqk6Cw9rsRtPHb7KTkv9w91ADPrwgz4LfevwpkPLHb5ajsMZsTxyor7PLiL8aHXj1igzrLo4J25njxxepzvaGRbNayLWir9YcHCd3JCo13BLfg7AM1kpU6rc2G45wPZw3geEGxYkQzhMr6qtKmCxuwUqbGmosYAcpSzBa2AmsUBsDTVaEkcZD5CKK95cLoWpbPAakGt1sspx5QeLyfBUguiaLnLNPMbtvVGyfTgG6tMFh7aG5EXP1wQBFBSwLCwEecQNQVQaVBkrQzhHNyUnmcehopGB54JMMfGQDvGMmLjQzLtnTcpVGVV1T3tbyHY5ifGTxcQ1KTDRWoGSr2nn1F2dHAoUbeN3YSffEvaF6kLKsaW1oYCDWzfRPsnD9AwgAiL2YyCxbQbmsF3N8DCgaUoBnRKLuUzGcdDooZH5gTV7JN68i9xjEkFAGmiFYVHSYdgxGgrDuH8rhhJMyJJn9ypU7R8wgEG5C1s3rXcCtpWypZr2XL4swMi9GkNgvLYKF47jEw9DprQLa9d1JVgUfNijbr6hQdbcmbEvcBL4QWTRfp7ifvConoNLCahLZhM6DMfmDgpMEYbxshRbUpX3pHXkLUctNbHZfyQVrcNMFUbDqPYbVhrjDyKYMYzFpLYjRo6StdSajfY86ZXQtZvCC9PsZZuhmnQrXmZd9RzJriQpFB5qweMm8McXep9Lnmf1FezNSVDwpRJve213Gz3Xm7psLCnCLWHqWcwyHGNGGwSPEZ83KrEpZyyxX9bALUN7icRTK9pNsCSPSs4qjreYgLgu6EjaoL3HazWSFKYf6k5cJuDfDpWZen198X1y7snBcG2piTBYTsKxhgbyPHpNgcE4vhgQ7Uw2so13ekYHMdcjtSkNRYyxDJCLQqzn5M34dXvtosoqGgKveGjYVa9qqW5TzQgpyVtwGCVfsXnYu4hvLjc5PX2NG9dmVaTH8yMTt7RgHeiGzRzhsEhRXynMcH1nrSRj2sW9pK9mgefmp6TPXiFSPAQgBib9zbBuCYJaW1iLvwnFU8kT9K379ek8DJkGXqfq32kRaH6WkW1NMpRSxnCSgPRcADajvv1uJZKkqBQkrHEZrg3ASKL9WM4LwpCy2VHzeEikuGmFmbqHRSUEo5uUXRCmaPzghThLNo6CVXXpGRRFCUebX2DeBkCAQ6fcVJ3Kyt6JLmpWsZieMvf3ybZgju3oBfquSYcnRFkcBgdiMV74MGi2QJzqi3bNRU24HkZztM4YHCfSNvMpmSLjJn6Q1ZCobkYNjxtLFqcy8nrrDYPAdvcKBFG9MUWRk5Ha9Bn1p9ZoMUuNtUTcKQfhWb7SdHFoi2Dc6roqraRGhWuHcgoYCXZAs6vALTHmcJGDfN7KVRM4wVi93mrHz4vrrmPEuaF29kFfhZrqW119f1pVtnjAS9siNtRtXM2u587h1g7jpgbz2ay88oQLmU4QFRueXBYRZHiLbNoz7wNYqSTkxMTAtKLd4HAscLMyeLU3unyuVC3bvBAzWozYE4Toci1eNGFJJrvoNVg2Nu1ebC8k3EpBXZWRDvriNWuNLf97PhUKPcF8mktU5qzqTPAs6E7GNqbQGpXisVQ8CWs5y5c1Aw7PUgnukMxjoERuaxvvwpV8z4aL` |
| Tree length | 1237 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` |
| Constants in table | 63 |
| Template (root expression bytes, placeholders not substituted) | 1057 bytes, blake2b256 `0e33f2ef264b0ae9c4151b338a155ff340cbdfba1feac17f3e92e60aae64f6ae` |

### Input and round-trip checks

- Address decoded by sigmastate `ErgoAddressEncoder` (mainnet, Base58 checksum verified by the decoder): P2S content bytes equal the JSON `ergotree_hex`: yes
- All JSON entries for this tree carry identical `ergotree_hex`: yes
- Recomputed blake2b256 equals JSON `blake2b256_tree`: yes
- Byte length equals JSON `tree_bytes`: yes
- Deserialization: `ErgoTreeSerializer.DefaultSerializer.deserializeErgoTree` returned a fully parsed tree (`root` is `Right`)
- Round-trip A, `DefaultSerializer.serializeErgoTree(deserializedTree)` equals input bytes: PASS
- Round-trip B, freshly built `ErgoTree(header, constants, root).bytes` (no cached input bytes) equals input bytes: PASS
- Layout check, header + size field + constant count + serialized constants (column 4 below) + template equals input bytes: PASS

## 2. Constants

Parsed by `ErgoTreeSerializer.DefaultSerializer`. Column 4 is each constant re-serialized by `ConstantSerializer` (type code + data), the exact bytes in the tree's constant table. Column 5 lists exact byte matches of a `Coll[Byte]` constant against the same input JSON (a `token_id`, a tree's blake2b256, or a tree's full bytes); blank means no match in that file.

| # | Type | Value | Serialized (type + data, hex) | Equals (input JSON) |
|---|---|---|---|---|
| 0 | `Int` | 0 | `0400` |  |
| 1 | `Int` | 0 | `0400` |  |
| 2 | `Int` | 0 | `0400` |  |
| 3 | `Int` | 0 | `0400` |  |
| 4 | `Int` | 0 | `0400` |  |
| 5 | `Int` | 4 | `0408` |  |
| 6 | `Int` | 4 | `0408` |  |
| 7 | `Int` | 5 | `040a` |  |
| 8 | `Int` | 5 | `040a` |  |
| 9 | `Int` | 6 | `040c` |  |
| 10 | `Int` | 6 | `040c` |  |
| 11 | `Int` | 8 | `0410` |  |
| 12 | `Int` | 8 | `0410` |  |
| 13 | `Int` | 7 | `040e` |  |
| 14 | `Int` | 7 | `040e` |  |
| 15 | `Int` | 1 | `0402` |  |
| 16 | `Int` | 0 | `0400` |  |
| 17 | `Int` | 0 | `0400` |  |
| 18 | `Int` | 1 | `0402` |  |
| 19 | `Int` | -1 | `0401` |  |
| 20 | `Int` | 1 | `0402` |  |
| 21 | `Int` | 1 | `0402` |  |
| 22 | `BigInt` | BigInt(0) | `060100` |  |
| 23 | `BigInt` | BigInt(2) | `060102` |  |
| 24 | `BigInt` | BigInt(100) | `060164` |  |
| 25 | `BigInt` | BigInt(1000) | `060203e8` |  |
| 26 | `Long` | 0 | `0500` |  |
| 27 | `Int` | 2 | `0404` |  |
| 28 | `Int` | 5000000 | `0480ade204` |  |
| 29 | `Long` | 1000000000000 | `0580c0a8ca9a3a` |  |
| 30 | `Int` | 1 | `0402` |  |
| 31 | `Long` | 0 | `0500` |  |
| 32 | `SigmaProp` | ProveDlog(public key 03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96) | `08cd03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96` |  |
| 33 | `Int` | 2 | `0404` |  |
| 34 | `Int` | 1 | `0402` |  |
| 35 | `Int` | 3 | `0406` |  |
| 36 | `Long` | 1000 | `05d00f` |  |
| 37 | `Long` | 0 | `0500` |  |
| 38 | `Long` | 30 | `053c` |  |
| 39 | `Int` | 0 | `0400` |  |
| 40 | `Long` | 0 | `0500` |  |
| 41 | `Int` | 2 | `0404` |  |
| 42 | `Int` | 1 | `0402` |  |
| 43 | `Int` | 2 | `0404` |  |
| 44 | `Long` | 1001 | `05d20f` |  |
| 45 | `Int` | 1 | `0402` |  |
| 46 | `Int` | 0 | `0400` |  |
| 47 | `Int` | 2 | `0404` |  |
| 48 | `Long` | 0 | `0500` |  |
| 49 | `Int` | 1 | `0402` |  |
| 50 | `Int` | 0 | `0400` |  |
| 51 | `Long` | 0 | `0500` |  |
| 52 | `Long` | 4000000 | `0580a4e803` |  |
| 53 | `Long` | 1 | `0502` |  |
| 54 | `Long` | 0 | `0500` |  |
| 55 | `Long` | 1000 | `05d00f` |  |
| 56 | `Long` | 0 | `0500` |  |
| 57 | `Long` | 0 | `0500` |  |
| 58 | `Int` | 9 | `0412` |  |
| 59 | `Int` | 9 | `0412` |  |
| 60 | `Long` | 0 | `0500` |  |
| 61 | `Int` | 0 | `0400` |  |
| 62 | `Int` | 0 | `0400` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Seq(
    ValDef(1, Array(), ExtractScriptBytes(Self)),
    ValDef(
      2,
      Array(),
      ByIndex(
        Filter(
          Outputs,
          FuncValue(
            Array((2, SBox)),
            BlockValue(
              Array(
                ValDef(
                  4,
                  Array(),
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(2, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  )
                )
              ),
              BinAnd(
                GT(SizeOf(ValUse(4, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                EQ(
                  ByIndex(ValUse(4, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                  ByIndex(
                    MethodCall.typed[Value[SCollection[STuple]]](
                      Self,
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    ),
                    IntConstant(0),
                    None
                  )
                )
              )
            )
          )
        ),
        IntConstant(0),
        None
      )
    ),
    ValDef(3, Array(), ExtractScriptBytes(ValUse(2, SBox))),
    ValDef(4, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SCollectionType(SLong))))),
    ValDef(5, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(0), None)),
    ValDef(6, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SCollectionType(SLong))))),
    ValDef(7, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(4), None)),
    ValDef(8, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(4), None)),
    ValDef(9, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(5), None)),
    ValDef(10, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(5), None)),
    ValDef(11, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(6), None)),
    ValDef(12, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(6), None)),
    ValDef(13, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(8), None)),
    ValDef(14, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(8), None)),
    ValDef(15, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(7), None)),
    ValDef(16, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(7), None)),
    ValDef(17, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SByteArray2)))),
    ValDef(18, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R5, SOption(SByteArray2)))),
    ValDef(19, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SCollectionType(SLong))))),
    ValDef(20, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R6, SOption(SCollectionType(SLong))))),
    ValDef(
      21,
      Array(),
      MethodCall.typed[Value[SCollection[SBox.type]]](
        Context,
        SContextMethods.getMethodByName("dataInputs"),
        Array(),
        Map()
      )
    ),
    ValDef(22, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R9, SOption(SCollectionType(SInt))))),
    ValDef(23, Array(), ByIndex(ValUse(22, SCollectionType(SInt)), IntConstant(1), None)),
    ValDef(24, Array(), ByIndex(ValUse(21, SCollectionType(SBox)), ValUse(23, SInt), None)),
    ValDef(
      25,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](
        ValUse(24, SBox),
        SBoxMethods.getMethodByName("tokens"),
        Array(),
        Map()
      )
    ),
    ValDef(26, Array(), ByIndex(ValUse(22, SCollectionType(SInt)), IntConstant(0), None)),
    ValDef(
      27,
      Array(),
      If(
        GT(ValUse(26, SInt), IntConstant(0)),
        ByIndex(Outputs, ArithOp(ValUse(26, SInt), IntConstant(1), OpCode @@ (-103.toByte)), None),
        ByIndex(
          Inputs,
          ArithOp(
            ArithOp(ValUse(26, SInt), IntConstant(-1), OpCode @@ (-100.toByte)),
            IntConstant(1),
            OpCode @@ (-103.toByte)
          ),
          None
        )
      )
    ),
    ValDef(28, Array(), Upcast(ExtractAmount(ValUse(27, SBox)), SBigInt)),
    ValDef(
      29,
      Array(),
      Slice(
        ValUse(21, SCollectionType(SBox)),
        ArithOp(ValUse(23, SInt), IntConstant(1), OpCode @@ (-102.toByte)),
        SizeOf(ValUse(21, SCollectionType(SBox)))
      )
    ),
    ValDef(30, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SCollectionType(SLong))))),
    ValDef(31, Array(), BigIntConstant(CBigInt(new BigInteger("0", 16)))),
    ValDef(32, Array(), BigIntConstant(CBigInt(new BigInteger("2", 16)))),
    ValDef(33, Array(), BigIntConstant(CBigInt(new BigInteger("64", 16)))),
    ValDef(34, Array(), BigIntConstant(CBigInt(new BigInteger("3e8", 16)))),
    ValDef(
      35,
      Array(),
      ArithOp(
        ArithOp(
          ValUse(28, SBigInt),
          Fold(
            MethodCall.typed[Value[SCollection[STuple]]](
              ValUse(29, SCollectionType(SBox)),
              SCollectionMethods.getMethodByName("zip").withConcreteTypes(
                Map(STypeVar("IV") -> SBox, STypeVar("OV") -> SLong)
              ),
              Array(ValUse(30, SCollectionType(SLong))),
              Map()
            ),
            ValUse(31, SBigInt),
            FuncValue(
              Array((35, SPair(SBigInt, SPair(SBox, SLong)))),
              BlockValue(
                Array(
                  ValDef(
                    37,
                    Array(),
                    SelectField.typed[Value[STuple]](ValUse(35, SPair(SBigInt, SPair(SBox, SLong))), 2.toByte)
                  ),
                  ValDef(38, Array(), SelectField.typed[Value[SLong.type]](ValUse(37, SPair(SBox, SLong)), 2.toByte)),
                  ValDef(39, Array(), SelectField.typed[Value[SBox.type]](ValUse(37, SPair(SBox, SLong)), 1.toByte)),
                  ValDef(
                    40,
                    Array(),
                    SelectField.typed[Value[SBigInt.type]](ValUse(35, SPair(SBigInt, SPair(SBox, SLong))), 1.toByte)
                  )
                ),
                If(
                  GT(ValUse(38, SLong), LongConstant(0L)),
                  BlockValue(
                    Seq(
                      ValDef(41, Array(), Upcast(ValUse(38, SLong), SBigInt)),
                      ValDef(
                        42,
                        Array(),
                        Upcast(OptionGet(ExtractRegisterAs(ValUse(39, SBox), ErgoBox.R4, SOption(SInt))), SBigInt)
                      ),
                      ValDef(
                        43,
                        Array(),
                        Upcast(
                          SelectField.typed[Value[SLong.type]](
                            ByIndex(
                              MethodCall.typed[Value[SCollection[STuple]]](
                                ValUse(39, SBox),
                                SBoxMethods.getMethodByName("tokens"),
                                Array(),
                                Map()
                              ),
                              IntConstant(2),
                              None
                            ),
                            2.toByte
                          ),
                          SBigInt
                        )
                      )
                    ),
                    ArithOp(
                      ValUse(40, SBigInt),
                      ArithOp(
                        ArithOp(
                          ArithOp(
                            Upcast(ExtractAmount(ValUse(39, SBox)), SBigInt),
                            ValUse(41, SBigInt),
                            OpCode @@ (-100.toByte)
                          ),
                          ValUse(42, SBigInt),
                          OpCode @@ (-100.toByte)
                        ),
                        ArithOp(
                          ArithOp(
                            ArithOp(
                              ValUse(43, SBigInt),
                              ArithOp(
                                ArithOp(ValUse(43, SBigInt), ValUse(32, SBigInt), OpCode @@ (-100.toByte)),
                                ValUse(33, SBigInt),
                                OpCode @@ (-99.toByte)
                              ),
                              OpCode @@ (-102.toByte)
                            ),
                            ValUse(34, SBigInt),
                            OpCode @@ (-100.toByte)
                          ),
                          ArithOp(ValUse(41, SBigInt), ValUse(42, SBigInt), OpCode @@ (-100.toByte)),
                          OpCode @@ (-102.toByte)
                        ),
                        OpCode @@ (-99.toByte)
                      ),
                      OpCode @@ (-102.toByte)
                    )
                  ),
                  ValUse(40, SBigInt)
                )
              )
            )
          ),
          OpCode @@ (-102.toByte)
        ),
        Upcast(IntConstant(5000000), SBigInt),
        OpCode @@ (-103.toByte)
      )
    ),
    ValDef(36, Array(), Upcast(OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R4, SOption(SInt))), SBigInt)),
    ValDef(37, Array(), Upcast(ExtractAmount(ValUse(24, SBox)), SBigInt)),
    ValDef(38, Array(), LongConstant(1000000000000L)),
    ValDef(
      39,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](
        ValUse(27, SBox),
        SBoxMethods.getMethodByName("tokens"),
        Array(),
        Map()
      )
    ),
    ValDef(40, Array(), SizeOf(ValUse(39, SCollectionType(SPair(SByteArray, SLong))))),
    ValDef(41, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R8, SOption(SByteArray2)))),
    ValDef(42, Array(), Slice(ValUse(18, SByteArray2), IntConstant(1), SizeOf(ValUse(18, SByteArray2)))),
    ValDef(43, Array(), SizeOf(ValUse(29, SCollectionType(SBox)))),
    ValDef(44, Array(), SizeOf(ValUse(30, SCollectionType(SLong))))
  ),
  SigmaOr(
    Seq(
      SigmaAnd(
        Seq(
          BoolToSigmaProp(
            BinAnd(
              BinAnd(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                EQ(ValUse(1, SByteArray), ValUse(3, SByteArray)),
                                EQ(ExtractAmount(Self), ExtractAmount(ValUse(2, SBox)))
                              ),
                              EQ(
                                MethodCall.typed[Value[SCollection[STuple]]](
                                  Self,
                                  SBoxMethods.getMethodByName("tokens"),
                                  Array(),
                                  Map()
                                ),
                                MethodCall.typed[Value[SCollection[STuple]]](
                                  ValUse(2, SBox),
                                  SBoxMethods.getMethodByName("tokens"),
                                  Array(),
                                  Map()
                                )
                              )
                            ),
                            EQ(ValUse(5, SLong), LongConstant(0L))
                          ),
                          EQ(ValUse(7, SLong), ValUse(8, SLong))
                        ),
                        EQ(ValUse(9, SLong), ValUse(10, SLong))
                      ),
                      EQ(ValUse(11, SLong), ValUse(12, SLong))
                    ),
                    EQ(ValUse(13, SLong), ValUse(14, SLong))
                  ),
                  EQ(ValUse(15, SLong), ValUse(16, SLong))
                ),
                EQ(ValUse(17, SByteArray2), ValUse(18, SByteArray2))
              ),
              EQ(ValUse(19, SCollectionType(SLong)), ValUse(20, SCollectionType(SLong)))
            )
          ),
          SigmaPropConstant(
            CSigmaProp(
              ProveDlog(Helpers.decodeECPoint("03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96"))
            )
          )
        )
      ),
      BoolToSigmaProp(
        BinAnd(
          BinAnd(
            BinAnd(
              BinAnd(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                BinAnd(
                                  BinAnd(
                                    BinAnd(
                                      BinAnd(
                                        BinAnd(
                                          EQ(ValUse(3, SByteArray), ValUse(1, SByteArray)),
                                          BinAnd(
                                            EQ(ValUse(18, SByteArray2), ValUse(17, SByteArray2)),
                                            EQ(ValUse(20, SCollectionType(SLong)), ValUse(19, SCollectionType(SLong)))
                                          )
                                        ),
                                        EQ(
                                          ArithOp(
                                            ArithOp(
                                              ArithOp(
                                                Upcast(
                                                  SelectField.typed[Value[SLong.type]](
                                                    ByIndex(
                                                      ValUse(25, SCollectionType(SPair(SByteArray, SLong))),
                                                      IntConstant(2),
                                                      None
                                                    ),
                                                    2.toByte
                                                  ),
                                                  SBigInt
                                                ),
                                                ValUse(35, SBigInt),
                                                OpCode @@ (-100.toByte)
                                              ),
                                              ValUse(36, SBigInt),
                                              OpCode @@ (-100.toByte)
                                            ),
                                            ArithOp(
                                              ArithOp(
                                                ArithOp(
                                                  ValUse(37, SBigInt),
                                                  ArithOp(
                                                    ArithOp(
                                                      ValUse(37, SBigInt),
                                                      ValUse(32, SBigInt),
                                                      OpCode @@ (-100.toByte)
                                                    ),
                                                    ValUse(33, SBigInt),
                                                    OpCode @@ (-99.toByte)
                                                  ),
                                                  OpCode @@ (-102.toByte)
                                                ),
                                                ValUse(34, SBigInt),
                                                OpCode @@ (-100.toByte)
                                              ),
                                              ArithOp(ValUse(35, SBigInt), ValUse(36, SBigInt), OpCode @@ (-100.toByte)),
                                              OpCode @@ (-102.toByte)
                                            ),
                                            OpCode @@ (-99.toByte)
                                          ),
                                          Upcast(
                                            ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(1), None),
                                            SBigInt
                                          )
                                        )
                                      ),
                                      EQ(
                                        ArithOp(
                                          ArithOp(
                                            ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(3), None),
                                            LongConstant(1000L),
                                            OpCode @@ (-95.toByte)
                                          ),
                                          LongConstant(0L),
                                          OpCode @@ (-94.toByte)
                                        ),
                                        LongConstant(30L)
                                      )
                                    ),
                                    EQ(
                                      ArithOp(
                                        ArithOp(
                                          ArithOp(
                                            ArithOp(
                                              ArithOp(
                                                ValUse(28, SBigInt),
                                                Upcast(ValUse(38, SLong), SBigInt),
                                                OpCode @@ (-100.toByte)
                                              ),
                                              Upcast(
                                                ByIndex(ValUse(20, SCollectionType(SLong)), IntConstant(0), None),
                                                SBigInt
                                              ),
                                              OpCode @@ (-100.toByte)
                                            ),
                                            ValUse(35, SBigInt),
                                            OpCode @@ (-99.toByte)
                                          ),
                                          Fold(
                                            MethodCall.typed[Value[SCollection[SInt.type]]](
                                              ValUse(30, SCollectionType(SLong)),
                                              SCollectionMethods.getMethodByName("indices").withConcreteTypes(
                                                Map(STypeVar("IV") -> SLong)
                                              ),
                                              Array(),
                                              Map()
                                            ),
                                            ValUse(31, SBigInt),
                                            FuncValue(
                                              Array((45, SPair(SBigInt, SInt))),
                                              BlockValue(
                                                Array(
                                                  ValDef(
                                                    47,
                                                    Array(),
                                                    SelectField.typed[Value[SInt.type]](
                                                      ValUse(45, SPair(SBigInt, SInt)),
                                                      2.toByte
                                                    )
                                                  ),
                                                  ValDef(
                                                    48,
                                                    Array(),
                                                    ByIndex(ValUse(30, SCollectionType(SLong)), ValUse(47, SInt), None)
                                                  ),
                                                  ValDef(
                                                    49,
                                                    Array(),
                                                    SelectField.typed[Value[SBigInt.type]](
                                                      ValUse(45, SPair(SBigInt, SInt)),
                                                      1.toByte
                                                    )
                                                  )
                                                ),
                                                If(
                                                  GT(ValUse(48, SLong), LongConstant(0L)),
                                                  BlockValue(
                                                    Seq(
                                                      ValDef(
                                                        50,
                                                        Array(),
                                                        ByIndex(
                                                          ValUse(29, SCollectionType(SBox)),
                                                          ValUse(47, SInt),
                                                          None
                                                        )
                                                      ),
                                                      ValDef(51, Array(), Upcast(ValUse(48, SLong), SBigInt)),
                                                      ValDef(
                                                        52,
                                                        Array(),
                                                        Upcast(
                                                          OptionGet(
                                                            ExtractRegisterAs(
                                                              ValUse(50, SBox),
                                                              ErgoBox.R4,
                                                              SOption(SInt)
                                                            )
                                                          ),
                                                          SBigInt
                                                        )
                                                      ),
                                                      ValDef(
                                                        53,
                                                        Array(),
                                                        Upcast(
                                                          SelectField.typed[Value[SLong.type]](
                                                            ByIndex(
                                                              MethodCall.typed[Value[SCollection[STuple]]](
                                                                ValUse(50, SBox),
                                                                SBoxMethods.getMethodByName("tokens"),
                                                                Array(),
                                                                Map()
                                                              ),
                                                              IntConstant(2),
                                                              None
                                                            ),
                                                            2.toByte
                                                          ),
                                                          SBigInt
                                                        )
                                                      )
                                                    ),
                                                    ArithOp(
                                                      ValUse(49, SBigInt),
                                                      ArithOp(
                                                        ArithOp(
                                                          ArithOp(
                                                            ArithOp(
                                                              ArithOp(
                                                                ArithOp(
                                                                  Upcast(ExtractAmount(ValUse(50, SBox)), SBigInt),
                                                                  ValUse(51, SBigInt),
                                                                  OpCode @@ (-100.toByte)
                                                                ),
                                                                ValUse(52, SBigInt),
                                                                OpCode @@ (-100.toByte)
                                                              ),
                                                              ArithOp(
                                                                ArithOp(
                                                                  ArithOp(
                                                                    ValUse(53, SBigInt),
                                                                    ArithOp(
                                                                      ArithOp(
                                                                        ValUse(53, SBigInt),
                                                                        ValUse(32, SBigInt),
                                                                        OpCode @@ (-100.toByte)
                                                                      ),
                                                                      ValUse(33, SBigInt),
                                                                      OpCode @@ (-99.toByte)
                                                                    ),
                                                                    OpCode @@ (-102.toByte)
                                                                  ),
                                                                  ValUse(34, SBigInt),
                                                                  OpCode @@ (-100.toByte)
                                                                ),
                                                                ArithOp(
                                                                  ValUse(51, SBigInt),
                                                                  ValUse(52, SBigInt),
                                                                  OpCode @@ (-100.toByte)
                                                                ),
                                                                OpCode @@ (-102.toByte)
                                                              ),
                                                              OpCode @@ (-99.toByte)
                                                            ),
                                                            Upcast(ValUse(38, SLong), SBigInt),
                                                            OpCode @@ (-100.toByte)
                                                          ),
                                                          Upcast(
                                                            ByIndex(
                                                              Slice(
                                                                ValUse(20, SCollectionType(SLong)),
                                                                IntConstant(1),
                                                                SizeOf(ValUse(20, SCollectionType(SLong)))
                                                              ),
                                                              ValUse(47, SInt),
                                                              None
                                                            ),
                                                            SBigInt
                                                          ),
                                                          OpCode @@ (-100.toByte)
                                                        ),
                                                        ValUse(35, SBigInt),
                                                        OpCode @@ (-99.toByte)
                                                      ),
                                                      OpCode @@ (-102.toByte)
                                                    )
                                                  ),
                                                  ValUse(49, SBigInt)
                                                )
                                              )
                                            )
                                          ),
                                          OpCode @@ (-102.toByte)
                                        ),
                                        Upcast(ValUse(38, SLong), SBigInt),
                                        OpCode @@ (-99.toByte)
                                      ),
                                      Upcast(
                                        ArithOp(
                                          ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(2), None),
                                          LongConstant(1001L),
                                          OpCode @@ (-94.toByte)
                                        ),
                                        SBigInt
                                      )
                                    )
                                  ),
                                  ForAll(
                                    Slice(
                                      ValUse(39, SCollectionType(SPair(SByteArray, SLong))),
                                      IntConstant(1),
                                      ValUse(40, SInt)
                                    ),
                                    FuncValue(
                                      Array((45, SPair(SByteArray, SLong))),
                                      Exists(
                                        MethodCall.typed[Value[SCollection[STuple]]](
                                          ValUse(41, SByteArray2),
                                          SCollectionMethods.getMethodByName("zip").withConcreteTypes(
                                            Map(STypeVar("IV") -> SByteArray, STypeVar("OV") -> SLong)
                                          ),
                                          Array(ValUse(30, SCollectionType(SLong))),
                                          Map()
                                        ),
                                        FuncValue(
                                          Array((47, SPair(SByteArray, SLong))),
                                          EQ(ValUse(47, SPair(SByteArray, SLong)), ValUse(45, SPair(SByteArray, SLong)))
                                        )
                                      )
                                    )
                                  )
                                ),
                                ForAll(
                                  MethodCall.typed[Value[SCollection[SInt.type]]](
                                    ValUse(42, SByteArray2),
                                    SCollectionMethods.getMethodByName("indices").withConcreteTypes(
                                      Map(STypeVar("IV") -> SByteArray)
                                    ),
                                    Array(),
                                    Map()
                                  ),
                                  FuncValue(
                                    Array((45, SInt)),
                                    BlockValue(
                                      Array(
                                        ValDef(
                                          47,
                                          Array(),
                                          MethodCall.typed[Value[SCollection[STuple]]](
                                            ByIndex(ValUse(29, SCollectionType(SBox)), ValUse(45, SInt), None),
                                            SBoxMethods.getMethodByName("tokens"),
                                            Array(),
                                            Map()
                                          )
                                        )
                                      ),
                                      BinAnd(
                                        EQ(
                                          ByIndex(ValUse(42, SByteArray2), ValUse(45, SInt), None),
                                          SelectField.typed[Value[SCollection[SByte.type]]](
                                            ByIndex(
                                              ValUse(47, SCollectionType(SPair(SByteArray, SLong))),
                                              IntConstant(0),
                                              None
                                            ),
                                            1.toByte
                                          )
                                        ),
                                        EQ(
                                          ByIndex(ValUse(41, SByteArray2), ValUse(45, SInt), None),
                                          SelectField.typed[Value[SCollection[SByte.type]]](
                                            ByIndex(
                                              ValUse(47, SCollectionType(SPair(SByteArray, SLong))),
                                              IntConstant(2),
                                              None
                                            ),
                                            1.toByte
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                              BinAnd(
                                EQ(ValUse(43, SInt), ValUse(44, SInt)),
                                EQ(ValUse(43, SInt), SizeOf(ValUse(42, SByteArray2)))
                              )
                            ),
                            EQ(ValUse(44, SInt), SizeOf(ValUse(41, SByteArray2)))
                          ),
                          EQ(
                            SizeOf(
                              Filter(
                                ValUse(30, SCollectionType(SLong)),
                                FuncValue(Array((45, SLong)), EQ(ValUse(45, SLong), LongConstant(0L)))
                              )
                            ),
                            ArithOp(
                              ValUse(44, SInt),
                              ArithOp(ValUse(40, SInt), IntConstant(1), OpCode @@ (-103.toByte)),
                              OpCode @@ (-103.toByte)
                            )
                          )
                        ),
                        EQ(
                          ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(0), None),
                          ArithOp(ValUse(5, SLong), LongConstant(0L), OpCode @@ (-94.toByte))
                        )
                      ),
                      EQ(ValUse(7, SLong), ArithOp(ValUse(8, SLong), LongConstant(4000000L), OpCode @@ (-94.toByte)))
                    ),
                    EQ(ValUse(9, SLong), ArithOp(ValUse(10, SLong), LongConstant(1L), OpCode @@ (-94.toByte)))
                  ),
                  EQ(ValUse(11, SLong), ArithOp(ValUse(12, SLong), LongConstant(0L), OpCode @@ (-94.toByte)))
                ),
                EQ(
                  ValUse(15, SLong),
                  ArithOp(
                    ArithOp(ValUse(16, SLong), LongConstant(1000L), OpCode @@ (-95.toByte)),
                    LongConstant(0L),
                    OpCode @@ (-94.toByte)
                  )
                )
              ),
              EQ(ValUse(13, SLong), ArithOp(ValUse(14, SLong), LongConstant(0L), OpCode @@ (-94.toByte)))
            ),
            EQ(
              ByIndex(ValUse(6, SCollectionType(SLong)), IntConstant(9), None),
              ArithOp(
                ByIndex(ValUse(4, SCollectionType(SLong)), IntConstant(9), None),
                LongConstant(0L),
                OpCode @@ (-94.toByte)
              )
            )
          ),
          EQ(
            SelectField.typed[Value[SCollection[SByte.type]]](
              ByIndex(ValUse(25, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
              1.toByte
            ),
            ByIndex(ValUse(18, SByteArray2), IntConstant(0), None)
          )
        )
      )
    )
  )
)
```

`ArithOp` opcode legend (names from `sigma.serialization.OpCodes`):

| As printed | Byte | sigmastate name |
|---|---|---|
| `OpCode @@ (-103.toByte)` | 0x99 | MinusCode (-) |
| `OpCode @@ (-102.toByte)` | 0x9a | PlusCode (+) |
| `OpCode @@ (-100.toByte)` | 0x9c | MultiplyCode (*) |
| `OpCode @@ (-99.toByte)` | 0x9d | DivisionCode (/) |
| `OpCode @@ (-95.toByte)` | 0xa1 | MinCode (min) |
| `OpCode @@ (-94.toByte)` | 0xa2 | MaxCode (max) |

### 3b. As stored: full ErgoTree with `ConstantPlaceholder(i, T)` nodes

`SigmaPPrint(tree)`: header, constant vector, and root exactly as deserialized (placeholders not substituted).

<details><summary>Show</summary>

```scala
new ErgoTree(
  16.toByte,
  Vector(
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(4),
    IntConstant(4),
    IntConstant(5),
    IntConstant(5),
    IntConstant(6),
    IntConstant(6),
    IntConstant(8),
    IntConstant(8),
    IntConstant(7),
    IntConstant(7),
    IntConstant(1),
    IntConstant(0),
    IntConstant(0),
    IntConstant(1),
    IntConstant(-1),
    IntConstant(1),
    IntConstant(1),
    BigIntConstant(CBigInt(new BigInteger("0", 16))),
    BigIntConstant(CBigInt(new BigInteger("2", 16))),
    BigIntConstant(CBigInt(new BigInteger("64", 16))),
    BigIntConstant(CBigInt(new BigInteger("3e8", 16))),
    LongConstant(0L),
    IntConstant(2),
    IntConstant(5000000),
    LongConstant(1000000000000L),
    IntConstant(1),
    LongConstant(0L),
    SigmaPropConstant(
      CSigmaProp(ProveDlog(Helpers.decodeECPoint("03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96")))
    ),
    IntConstant(2),
    IntConstant(1),
    IntConstant(3),
    LongConstant(1000L),
    LongConstant(0L),
    LongConstant(30L),
    IntConstant(0),
    LongConstant(0L),
    IntConstant(2),
    IntConstant(1),
    IntConstant(2),
    LongConstant(1001L),
    IntConstant(1),
    IntConstant(0),
    IntConstant(2),
    LongConstant(0L),
    IntConstant(1),
    IntConstant(0),
    LongConstant(0L),
    LongConstant(4000000L),
    LongConstant(1L),
    LongConstant(0L),
    LongConstant(1000L),
    LongConstant(0L),
    LongConstant(0L),
    IntConstant(9),
    IntConstant(9),
    LongConstant(0L),
    IntConstant(0),
    IntConstant(0)
  ),
  Right(
    BlockValue(
      Array(
        ValDef(1, Array(), ExtractScriptBytes(Self)),
        ValDef(
          2,
          Array(),
          ByIndex(
            Filter(
              Outputs,
              FuncValue(
                Array((2, SBox)),
                BlockValue(
                  Array(
                    ValDef(
                      4,
                      Array(),
                      MethodCall.typed[Value[SCollection[STuple]]](
                        ValUse(2, SBox),
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      )
                    )
                  ),
                  BinAnd(
                    GT(SizeOf(ValUse(4, SCollectionType(SPair(SByteArray, SLong)))), ConstantPlaceholder(0, SInt)),
                    EQ(
                      ByIndex(ValUse(4, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(1, SInt), None),
                      ByIndex(
                        MethodCall.typed[Value[SCollection[STuple]]](
                          Self,
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        ),
                        ConstantPlaceholder(2, SInt),
                        None
                      )
                    )
                  )
                )
              )
            ),
            ConstantPlaceholder(3, SInt),
            None
          )
        ),
        ValDef(3, Array(), ExtractScriptBytes(ValUse(2, SBox))),
        ValDef(4, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SCollectionType(SLong))))),
        ValDef(5, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(4, SInt), None)),
        ValDef(6, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SCollectionType(SLong))))),
        ValDef(7, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(5, SInt), None)),
        ValDef(8, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(6, SInt), None)),
        ValDef(9, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(7, SInt), None)),
        ValDef(10, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(8, SInt), None)),
        ValDef(11, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(9, SInt), None)),
        ValDef(12, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(10, SInt), None)),
        ValDef(13, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(11, SInt), None)),
        ValDef(14, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(12, SInt), None)),
        ValDef(15, Array(), ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(13, SInt), None)),
        ValDef(16, Array(), ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(14, SInt), None)),
        ValDef(17, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SByteArray2)))),
        ValDef(18, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R5, SOption(SByteArray2)))),
        ValDef(19, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SCollectionType(SLong))))),
        ValDef(20, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R6, SOption(SCollectionType(SLong))))),
        ValDef(
          21,
          Array(),
          MethodCall.typed[Value[SCollection[SBox.type]]](
            Context,
            SContextMethods.getMethodByName("dataInputs"),
            Array(),
            Map()
          )
        ),
        ValDef(22, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R9, SOption(SCollectionType(SInt))))),
        ValDef(23, Array(), ByIndex(ValUse(22, SCollectionType(SInt)), ConstantPlaceholder(15, SInt), None)),
        ValDef(24, Array(), ByIndex(ValUse(21, SCollectionType(SBox)), ValUse(23, SInt), None)),
        ValDef(
          25,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](
            ValUse(24, SBox),
            SBoxMethods.getMethodByName("tokens"),
            Array(),
            Map()
          )
        ),
        ValDef(26, Array(), ByIndex(ValUse(22, SCollectionType(SInt)), ConstantPlaceholder(16, SInt), None)),
        ValDef(
          27,
          Array(),
          If(
            GT(ValUse(26, SInt), ConstantPlaceholder(17, SInt)),
            ByIndex(Outputs, ArithOp(ValUse(26, SInt), ConstantPlaceholder(18, SInt), OpCode @@ (-103.toByte)), None),
            ByIndex(
              Inputs,
              ArithOp(
                ArithOp(ValUse(26, SInt), ConstantPlaceholder(19, SInt), OpCode @@ (-100.toByte)),
                ConstantPlaceholder(20, SInt),
                OpCode @@ (-103.toByte)
              ),
              None
            )
          )
        ),
        ValDef(28, Array(), Upcast(ExtractAmount(ValUse(27, SBox)), SBigInt)),
        ValDef(
          29,
          Array(),
          Slice(
            ValUse(21, SCollectionType(SBox)),
            ArithOp(ValUse(23, SInt), ConstantPlaceholder(21, SInt), OpCode @@ (-102.toByte)),
            SizeOf(ValUse(21, SCollectionType(SBox)))
          )
        ),
        ValDef(30, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SCollectionType(SLong))))),
        ValDef(31, Array(), ConstantPlaceholder(22, SBigInt)),
        ValDef(32, Array(), ConstantPlaceholder(23, SBigInt)),
        ValDef(33, Array(), ConstantPlaceholder(24, SBigInt)),
        ValDef(34, Array(), ConstantPlaceholder(25, SBigInt)),
        ValDef(
          35,
          Array(),
          ArithOp(
            ArithOp(
              ValUse(28, SBigInt),
              Fold(
                MethodCall.typed[Value[SCollection[STuple]]](
                  ValUse(29, SCollectionType(SBox)),
                  SCollectionMethods.getMethodByName("zip").withConcreteTypes(
                    Map(STypeVar("IV") -> SBox, STypeVar("OV") -> SLong)
                  ),
                  Array(ValUse(30, SCollectionType(SLong))),
                  Map()
                ),
                ValUse(31, SBigInt),
                FuncValue(
                  Array((35, SPair(SBigInt, SPair(SBox, SLong)))),
                  BlockValue(
                    Array(
                      ValDef(
                        37,
                        Array(),
                        SelectField.typed[Value[STuple]](ValUse(35, SPair(SBigInt, SPair(SBox, SLong))), 2.toByte)
                      ),
                      ValDef(
                        38,
                        Array(),
                        SelectField.typed[Value[SLong.type]](ValUse(37, SPair(SBox, SLong)), 2.toByte)
                      ),
                      ValDef(39, Array(), SelectField.typed[Value[SBox.type]](ValUse(37, SPair(SBox, SLong)), 1.toByte)),
                      ValDef(
                        40,
                        Array(),
                        SelectField.typed[Value[SBigInt.type]](ValUse(35, SPair(SBigInt, SPair(SBox, SLong))), 1.toByte)
                      )
                    ),
                    If(
                      GT(ValUse(38, SLong), ConstantPlaceholder(26, SLong)),
                      BlockValue(
                        Array(
                          ValDef(41, Array(), Upcast(ValUse(38, SLong), SBigInt)),
                          ValDef(
                            42,
                            Array(),
                            Upcast(OptionGet(ExtractRegisterAs(ValUse(39, SBox), ErgoBox.R4, SOption(SInt))), SBigInt)
                          ),
                          ValDef(
                            43,
                            Array(),
                            Upcast(
                              SelectField.typed[Value[SLong.type]](
                                ByIndex(
                                  MethodCall.typed[Value[SCollection[STuple]]](
                                    ValUse(39, SBox),
                                    SBoxMethods.getMethodByName("tokens"),
                                    Array(),
                                    Map()
                                  ),
                                  ConstantPlaceholder(27, SInt),
                                  None
                                ),
                                2.toByte
                              ),
                              SBigInt
                            )
                          )
                        ),
                        ArithOp(
                          ValUse(40, SBigInt),
                          ArithOp(
                            ArithOp(
                              ArithOp(
                                Upcast(ExtractAmount(ValUse(39, SBox)), SBigInt),
                                ValUse(41, SBigInt),
                                OpCode @@ (-100.toByte)
                              ),
                              ValUse(42, SBigInt),
                              OpCode @@ (-100.toByte)
                            ),
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ValUse(43, SBigInt),
                                  ArithOp(
                                    ArithOp(ValUse(43, SBigInt), ValUse(32, SBigInt), OpCode @@ (-100.toByte)),
                                    ValUse(33, SBigInt),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  OpCode @@ (-102.toByte)
                                ),
                                ValUse(34, SBigInt),
                                OpCode @@ (-100.toByte)
                              ),
                              ArithOp(ValUse(41, SBigInt), ValUse(42, SBigInt), OpCode @@ (-100.toByte)),
                              OpCode @@ (-102.toByte)
                            ),
                            OpCode @@ (-99.toByte)
                          ),
                          OpCode @@ (-102.toByte)
                        )
                      ),
                      ValUse(40, SBigInt)
                    )
                  )
                )
              ),
              OpCode @@ (-102.toByte)
            ),
            Upcast(ConstantPlaceholder(28, SInt), SBigInt),
            OpCode @@ (-103.toByte)
          )
        ),
        ValDef(36, Array(), Upcast(OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R4, SOption(SInt))), SBigInt)),
        ValDef(37, Array(), Upcast(ExtractAmount(ValUse(24, SBox)), SBigInt)),
        ValDef(38, Array(), ConstantPlaceholder(29, SLong)),
        ValDef(
          39,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](
            ValUse(27, SBox),
            SBoxMethods.getMethodByName("tokens"),
            Array(),
            Map()
          )
        ),
        ValDef(40, Array(), SizeOf(ValUse(39, SCollectionType(SPair(SByteArray, SLong))))),
        ValDef(41, Array(), OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R8, SOption(SByteArray2)))),
        ValDef(
          42,
          Array(),
          Slice(ValUse(18, SByteArray2), ConstantPlaceholder(30, SInt), SizeOf(ValUse(18, SByteArray2)))
        ),
        ValDef(43, Array(), SizeOf(ValUse(29, SCollectionType(SBox)))),
        ValDef(44, Array(), SizeOf(ValUse(30, SCollectionType(SLong))))
      ),
      SigmaOr(
        Array(
          SigmaAnd(
            Array(
              BoolToSigmaProp(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                BinAnd(
                                  BinAnd(
                                    EQ(ValUse(1, SByteArray), ValUse(3, SByteArray)),
                                    EQ(ExtractAmount(Self), ExtractAmount(ValUse(2, SBox)))
                                  ),
                                  EQ(
                                    MethodCall.typed[Value[SCollection[STuple]]](
                                      Self,
                                      SBoxMethods.getMethodByName("tokens"),
                                      Array(),
                                      Map()
                                    ),
                                    MethodCall.typed[Value[SCollection[STuple]]](
                                      ValUse(2, SBox),
                                      SBoxMethods.getMethodByName("tokens"),
                                      Array(),
                                      Map()
                                    )
                                  )
                                ),
                                EQ(ValUse(5, SLong), ConstantPlaceholder(31, SLong))
                              ),
                              EQ(ValUse(7, SLong), ValUse(8, SLong))
                            ),
                            EQ(ValUse(9, SLong), ValUse(10, SLong))
                          ),
                          EQ(ValUse(11, SLong), ValUse(12, SLong))
                        ),
                        EQ(ValUse(13, SLong), ValUse(14, SLong))
                      ),
                      EQ(ValUse(15, SLong), ValUse(16, SLong))
                    ),
                    EQ(ValUse(17, SByteArray2), ValUse(18, SByteArray2))
                  ),
                  EQ(ValUse(19, SCollectionType(SLong)), ValUse(20, SCollectionType(SLong)))
                )
              ),
              ConstantPlaceholder(32, SSigmaProp)
            )
          ),
          BoolToSigmaProp(
            BinAnd(
              BinAnd(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                BinAnd(
                                  BinAnd(
                                    BinAnd(
                                      BinAnd(
                                        BinAnd(
                                          BinAnd(
                                            BinAnd(
                                              EQ(ValUse(3, SByteArray), ValUse(1, SByteArray)),
                                              BinAnd(
                                                EQ(ValUse(18, SByteArray2), ValUse(17, SByteArray2)),
                                                EQ(
                                                  ValUse(20, SCollectionType(SLong)),
                                                  ValUse(19, SCollectionType(SLong))
                                                )
                                              )
                                            ),
                                            EQ(
                                              ArithOp(
                                                ArithOp(
                                                  ArithOp(
                                                    Upcast(
                                                      SelectField.typed[Value[SLong.type]](
                                                        ByIndex(
                                                          ValUse(25, SCollectionType(SPair(SByteArray, SLong))),
                                                          ConstantPlaceholder(33, SInt),
                                                          None
                                                        ),
                                                        2.toByte
                                                      ),
                                                      SBigInt
                                                    ),
                                                    ValUse(35, SBigInt),
                                                    OpCode @@ (-100.toByte)
                                                  ),
                                                  ValUse(36, SBigInt),
                                                  OpCode @@ (-100.toByte)
                                                ),
                                                ArithOp(
                                                  ArithOp(
                                                    ArithOp(
                                                      ValUse(37, SBigInt),
                                                      ArithOp(
                                                        ArithOp(
                                                          ValUse(37, SBigInt),
                                                          ValUse(32, SBigInt),
                                                          OpCode @@ (-100.toByte)
                                                        ),
                                                        ValUse(33, SBigInt),
                                                        OpCode @@ (-99.toByte)
                                                      ),
                                                      OpCode @@ (-102.toByte)
                                                    ),
                                                    ValUse(34, SBigInt),
                                                    OpCode @@ (-100.toByte)
                                                  ),
                                                  ArithOp(
                                                    ValUse(35, SBigInt),
                                                    ValUse(36, SBigInt),
                                                    OpCode @@ (-100.toByte)
                                                  ),
                                                  OpCode @@ (-102.toByte)
                                                ),
                                                OpCode @@ (-99.toByte)
                                              ),
                                              Upcast(
                                                ByIndex(
                                                  ValUse(4, SCollectionType(SLong)),
                                                  ConstantPlaceholder(34, SInt),
                                                  None
                                                ),
                                                SBigInt
                                              )
                                            )
                                          ),
                                          EQ(
                                            ArithOp(
                                              ArithOp(
                                                ByIndex(
                                                  ValUse(4, SCollectionType(SLong)),
                                                  ConstantPlaceholder(35, SInt),
                                                  None
                                                ),
                                                ConstantPlaceholder(36, SLong),
                                                OpCode @@ (-95.toByte)
                                              ),
                                              ConstantPlaceholder(37, SLong),
                                              OpCode @@ (-94.toByte)
                                            ),
                                            ConstantPlaceholder(38, SLong)
                                          )
                                        ),
                                        EQ(
                                          ArithOp(
                                            ArithOp(
                                              ArithOp(
                                                ArithOp(
                                                  ArithOp(
                                                    ValUse(28, SBigInt),
                                                    Upcast(ValUse(38, SLong), SBigInt),
                                                    OpCode @@ (-100.toByte)
                                                  ),
                                                  Upcast(
                                                    ByIndex(
                                                      ValUse(20, SCollectionType(SLong)),
                                                      ConstantPlaceholder(39, SInt),
                                                      None
                                                    ),
                                                    SBigInt
                                                  ),
                                                  OpCode @@ (-100.toByte)
                                                ),
                                                ValUse(35, SBigInt),
                                                OpCode @@ (-99.toByte)
                                              ),
                                              Fold(
                                                MethodCall.typed[Value[SCollection[SInt.type]]](
                                                  ValUse(30, SCollectionType(SLong)),
                                                  SCollectionMethods.getMethodByName("indices").withConcreteTypes(
                                                    Map(STypeVar("IV") -> SLong)
                                                  ),
                                                  Array(),
                                                  Map()
                                                ),
                                                ValUse(31, SBigInt),
                                                FuncValue(
                                                  Array((45, SPair(SBigInt, SInt))),
                                                  BlockValue(
                                                    Array(
                                                      ValDef(
                                                        47,
                                                        Array(),
                                                        SelectField.typed[Value[SInt.type]](
                                                          ValUse(45, SPair(SBigInt, SInt)),
                                                          2.toByte
                                                        )
                                                      ),
                                                      ValDef(
                                                        48,
                                                        Array(),
                                                        ByIndex(
                                                          ValUse(30, SCollectionType(SLong)),
                                                          ValUse(47, SInt),
                                                          None
                                                        )
                                                      ),
                                                      ValDef(
                                                        49,
                                                        Array(),
                                                        SelectField.typed[Value[SBigInt.type]](
                                                          ValUse(45, SPair(SBigInt, SInt)),
                                                          1.toByte
                                                        )
                                                      )
                                                    ),
                                                    If(
                                                      GT(ValUse(48, SLong), ConstantPlaceholder(40, SLong)),
                                                      BlockValue(
                                                        Array(
                                                          ValDef(
                                                            50,
                                                            Array(),
                                                            ByIndex(
                                                              ValUse(29, SCollectionType(SBox)),
                                                              ValUse(47, SInt),
                                                              None
                                                            )
                                                          ),
                                                          ValDef(51, Array(), Upcast(ValUse(48, SLong), SBigInt)),
                                                          ValDef(
                                                            52,
                                                            Array(),
                                                            Upcast(
                                                              OptionGet(
                                                                ExtractRegisterAs(
                                                                  ValUse(50, SBox),
                                                                  ErgoBox.R4,
                                                                  SOption(SInt)
                                                                )
                                                              ),
                                                              SBigInt
                                                            )
                                                          ),
                                                          ValDef(
                                                            53,
                                                            Array(),
                                                            Upcast(
                                                              SelectField.typed[Value[SLong.type]](
                                                                ByIndex(
                                                                  MethodCall.typed[Value[SCollection[STuple]]](
                                                                    ValUse(50, SBox),
                                                                    SBoxMethods.getMethodByName("tokens"),
                                                                    Array(),
                                                                    Map()
                                                                  ),
                                                                  ConstantPlaceholder(41, SInt),
                                                                  None
                                                                ),
                                                                2.toByte
                                                              ),
                                                              SBigInt
                                                            )
                                                          )
                                                        ),
                                                        ArithOp(
                                                          ValUse(49, SBigInt),
                                                          ArithOp(
                                                            ArithOp(
                                                              ArithOp(
                                                                ArithOp(
                                                                  ArithOp(
                                                                    ArithOp(
                                                                      Upcast(ExtractAmount(ValUse(50, SBox)), SBigInt),
                                                                      ValUse(51, SBigInt),
                                                                      OpCode @@ (-100.toByte)
                                                                    ),
                                                                    ValUse(52, SBigInt),
                                                                    OpCode @@ (-100.toByte)
                                                                  ),
                                                                  ArithOp(
                                                                    ArithOp(
                                                                      ArithOp(
                                                                        ValUse(53, SBigInt),
                                                                        ArithOp(
                                                                          ArithOp(
                                                                            ValUse(53, SBigInt),
                                                                            ValUse(32, SBigInt),
                                                                            OpCode @@ (-100.toByte)
                                                                          ),
                                                                          ValUse(33, SBigInt),
                                                                          OpCode @@ (-99.toByte)
                                                                        ),
                                                                        OpCode @@ (-102.toByte)
                                                                      ),
                                                                      ValUse(34, SBigInt),
                                                                      OpCode @@ (-100.toByte)
                                                                    ),
                                                                    ArithOp(
                                                                      ValUse(51, SBigInt),
                                                                      ValUse(52, SBigInt),
                                                                      OpCode @@ (-100.toByte)
                                                                    ),
                                                                    OpCode @@ (-102.toByte)
                                                                  ),
                                                                  OpCode @@ (-99.toByte)
                                                                ),
                                                                Upcast(ValUse(38, SLong), SBigInt),
                                                                OpCode @@ (-100.toByte)
                                                              ),
                                                              Upcast(
                                                                ByIndex(
                                                                  Slice(
                                                                    ValUse(20, SCollectionType(SLong)),
                                                                    ConstantPlaceholder(42, SInt),
                                                                    SizeOf(ValUse(20, SCollectionType(SLong)))
                                                                  ),
                                                                  ValUse(47, SInt),
                                                                  None
                                                                ),
                                                                SBigInt
                                                              ),
                                                              OpCode @@ (-100.toByte)
                                                            ),
                                                            ValUse(35, SBigInt),
                                                            OpCode @@ (-99.toByte)
                                                          ),
                                                          OpCode @@ (-102.toByte)
                                                        )
                                                      ),
                                                      ValUse(49, SBigInt)
                                                    )
                                                  )
                                                )
                                              ),
                                              OpCode @@ (-102.toByte)
                                            ),
                                            Upcast(ValUse(38, SLong), SBigInt),
                                            OpCode @@ (-99.toByte)
                                          ),
                                          Upcast(
                                            ArithOp(
                                              ByIndex(
                                                ValUse(4, SCollectionType(SLong)),
                                                ConstantPlaceholder(43, SInt),
                                                None
                                              ),
                                              ConstantPlaceholder(44, SLong),
                                              OpCode @@ (-94.toByte)
                                            ),
                                            SBigInt
                                          )
                                        )
                                      ),
                                      ForAll(
                                        Slice(
                                          ValUse(39, SCollectionType(SPair(SByteArray, SLong))),
                                          ConstantPlaceholder(45, SInt),
                                          ValUse(40, SInt)
                                        ),
                                        FuncValue(
                                          Array((45, SPair(SByteArray, SLong))),
                                          Exists(
                                            MethodCall.typed[Value[SCollection[STuple]]](
                                              ValUse(41, SByteArray2),
                                              SCollectionMethods.getMethodByName("zip").withConcreteTypes(
                                                Map(STypeVar("IV") -> SByteArray, STypeVar("OV") -> SLong)
                                              ),
                                              Array(ValUse(30, SCollectionType(SLong))),
                                              Map()
                                            ),
                                            FuncValue(
                                              Array((47, SPair(SByteArray, SLong))),
                                              EQ(
                                                ValUse(47, SPair(SByteArray, SLong)),
                                                ValUse(45, SPair(SByteArray, SLong))
                                              )
                                            )
                                          )
                                        )
                                      )
                                    ),
                                    ForAll(
                                      MethodCall.typed[Value[SCollection[SInt.type]]](
                                        ValUse(42, SByteArray2),
                                        SCollectionMethods.getMethodByName("indices").withConcreteTypes(
                                          Map(STypeVar("IV") -> SByteArray)
                                        ),
                                        Array(),
                                        Map()
                                      ),
                                      FuncValue(
                                        Array((45, SInt)),
                                        BlockValue(
                                          Array(
                                            ValDef(
                                              47,
                                              Array(),
                                              MethodCall.typed[Value[SCollection[STuple]]](
                                                ByIndex(ValUse(29, SCollectionType(SBox)), ValUse(45, SInt), None),
                                                SBoxMethods.getMethodByName("tokens"),
                                                Array(),
                                                Map()
                                              )
                                            )
                                          ),
                                          BinAnd(
                                            EQ(
                                              ByIndex(ValUse(42, SByteArray2), ValUse(45, SInt), None),
                                              SelectField.typed[Value[SCollection[SByte.type]]](
                                                ByIndex(
                                                  ValUse(47, SCollectionType(SPair(SByteArray, SLong))),
                                                  ConstantPlaceholder(46, SInt),
                                                  None
                                                ),
                                                1.toByte
                                              )
                                            ),
                                            EQ(
                                              ByIndex(ValUse(41, SByteArray2), ValUse(45, SInt), None),
                                              SelectField.typed[Value[SCollection[SByte.type]]](
                                                ByIndex(
                                                  ValUse(47, SCollectionType(SPair(SByteArray, SLong))),
                                                  ConstantPlaceholder(47, SInt),
                                                  None
                                                ),
                                                1.toByte
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  ),
                                  BinAnd(
                                    EQ(ValUse(43, SInt), ValUse(44, SInt)),
                                    EQ(ValUse(43, SInt), SizeOf(ValUse(42, SByteArray2)))
                                  )
                                ),
                                EQ(ValUse(44, SInt), SizeOf(ValUse(41, SByteArray2)))
                              ),
                              EQ(
                                SizeOf(
                                  Filter(
                                    ValUse(30, SCollectionType(SLong)),
                                    FuncValue(Array((45, SLong)), EQ(ValUse(45, SLong), ConstantPlaceholder(48, SLong)))
                                  )
                                ),
                                ArithOp(
                                  ValUse(44, SInt),
                                  ArithOp(ValUse(40, SInt), ConstantPlaceholder(49, SInt), OpCode @@ (-103.toByte)),
                                  OpCode @@ (-103.toByte)
                                )
                              )
                            ),
                            EQ(
                              ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(50, SInt), None),
                              ArithOp(ValUse(5, SLong), ConstantPlaceholder(51, SLong), OpCode @@ (-94.toByte))
                            )
                          ),
                          EQ(
                            ValUse(7, SLong),
                            ArithOp(ValUse(8, SLong), ConstantPlaceholder(52, SLong), OpCode @@ (-94.toByte))
                          )
                        ),
                        EQ(
                          ValUse(9, SLong),
                          ArithOp(ValUse(10, SLong), ConstantPlaceholder(53, SLong), OpCode @@ (-94.toByte))
                        )
                      ),
                      EQ(
                        ValUse(11, SLong),
                        ArithOp(ValUse(12, SLong), ConstantPlaceholder(54, SLong), OpCode @@ (-94.toByte))
                      )
                    ),
                    EQ(
                      ValUse(15, SLong),
                      ArithOp(
                        ArithOp(ValUse(16, SLong), ConstantPlaceholder(55, SLong), OpCode @@ (-95.toByte)),
                        ConstantPlaceholder(56, SLong),
                        OpCode @@ (-94.toByte)
                      )
                    )
                  ),
                  EQ(
                    ValUse(13, SLong),
                    ArithOp(ValUse(14, SLong), ConstantPlaceholder(57, SLong), OpCode @@ (-94.toByte))
                  )
                ),
                EQ(
                  ByIndex(ValUse(6, SCollectionType(SLong)), ConstantPlaceholder(58, SInt), None),
                  ArithOp(
                    ByIndex(ValUse(4, SCollectionType(SLong)), ConstantPlaceholder(59, SInt), None),
                    ConstantPlaceholder(60, SLong),
                    OpCode @@ (-94.toByte)
                  )
                )
              ),
              EQ(
                SelectField.typed[Value[SCollection[SByte.type]]](
                  ByIndex(ValUse(25, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(61, SInt), None),
                  1.toByte
                ),
                ByIndex(ValUse(18, SByteArray2), ConstantPlaceholder(62, SInt), None)
              )
            )
          )
        )
      )
    )
  )
)
```

</details>

## 4. How produced

sigma-state 6.0.6 (`sigma-state_2.12-6.0.6.jar` + `sigma-state_2.12-6.0.6-tests.jar` for `sigmastate.helpers.SigmaPPrint`), `pprint_2.12-0.6.3.jar`, Scala 2.12.21, Java 17.0.19; ergo-appkit not used. Command: `scala-cli run --server=false --jar "$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')" decompile.scala -- test-frontend/v2-latest-quacks-00fa2be6.json <out-dir> decompile.scala` (script source in `README.md`).

