# `pool` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `pool` |
| Address (mainnet P2S) | `2FkbKwmZBuK9AD57fwqTHHBZoXoRCihRRU5RLAdfEzPNvFivTMThoQFjnXPgNoDs9t4TwAgirk1DNdtyCvZ9MrzN2b3XGefL9t955YXBjajM3EqWu9TJpGWxuGatKeEdXrQCKXvydHfyfeZEdh8RyKyVUPpQQBYdFaryj8DXzNCZ14xpGRftXPqEVvJ57ocvRaz4Gf1XWF6cc3BL9YpQXLpfbLZAuz81GJGNyeEnWWVSe5twm12kiSGYGZMytAF4JHUU938tDB97iNWqfxxL34HxJHf44vDwEwniRUfnM5PMLUh2iXP2kixMod2dxXbJxtrDPddRvRuKEd76XX1Lo5Z7bz9LL6GDBwi2Q71cdWYznfqvuyHYsEJw7rhnKUzRChW7LuUMg5JDVTudSjz52XHE3LxxXLAeUte7yrzi8iNHpjAXxKVMn1b3D3zFeh8k4TCM3VmnJ3goyPTgbAn59bUdkumER94eg9fMkb4P9CSLGbcgde6PHD1g3GoBvQi8r4GUVot8fyxqYhJ9EsCWH7NrBRVjovuLZQtES9nP1vB5Dqka6T13nLpisWr1iPZqsjK5qc5UrBTgCiR3NVtrGRsivjvFdQiHTocdGpcd7hazkArwpMvoDSygaeghqfXLCNbpq4mKm5kPAWe7hjsXNFUroNcnT8TuTYmo3FS1289pZuqtragZ3R1QPejwpQG7QxqMMnnLYsgJV6kcC3BjZVZBUM1A7ZXiC4Fo27KU1iThaRNW8p6UZ92K8nowZ8211mNL4aJbo5Bpd2pWQGaa9Bkr3TPJJhC9rHNB6sLhhDth2LD3fr79dgJT1EzNdAVgH8F9fXUENrBXhvdfs9AmVU7ZvNAJgTGpvmpnyKX35uDMYuC1wv5cp69zurBkNjgsTxdSnuQFdWhVWRbAgALMtejEHeSpY7XsYKxC7jjJdZq9fCKYtAuvxTcUj1LXSU2XV53LJnAV96D7q8TdW6NDUKp97xXmyawie8oL6cUXfVVvCxEnm5w2b3Q3GaXr2vTF3GmS9bHtk4r7n3YwenEvdgeJ2htX5n14bNg5yYe9ktQKUU6REmQVxnK2rJjwfnx7MNQZ1ym47d1gEQGqwdPVbvWi61LPB11h5xKDUTW3RaSGJmBLCvqPjg2SEbzeuPkoXTMMDimCNYS7Hwfe8QsFpP9mvWf5Gr1azQCrw4GnDQRyLCitT9Fah3Hb2Z8aT1bk1m35EP6qwzc3uyxRB1H8tcDGGf7WTTimPChzkRkz7pEerLU57xkb4pB42XFxcoQqH8r2aRkR4hYY5QCCXYtNke3TjZ7ZakZUHULJfW3CahRngJuXn2XHo6EmhJXBkFVLFXDTHh8LKqna6jSRp29fiahBFwGJNxc8BkXhwUKzZaeF51s58qNFCWfdybq1r4xePSrSmgJczdMb1j2bTDLesRs9f6W4S5H6s43XT3LFmydEbVuieHfQwuj4y9moC6Mp1H8G5kRtHtzJecFm3ovUu6DnkvMeMz2wyYAWoaGvcFyHS9gAXQHCcS8CoF9pNXdsfkKX2pskKNFDBjhMb4QEGPCpvh3TVE4RBx19am2j29ZJhbVbaDmsWHLWeMrJ9T9P6iUtgcXrt82ZHAM8EZmxChyGu9a75muvugyjMkUA6x3RGBVMJHc4xNWtQiivsh6ykuua4mht3zJELVawmRkpXs75aSJoPdbatD82reifAknX3gCiY3NaqFhHq3hot9TaGdyna7EPqmXv2s2mb25KkCPAeHC8oiFVzouF6bzpKWt81zmEBA8k9ZdcVe5MC2a4k7rwV9t1CyFkBEJe6nNTbdYJXp7FUBTdurEhxKQVaUZPYGj8Z1autWE186eobGiFr6AGg6KiDpBietm7UJqSkds` |
| Tree length | 1371 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `25248318f76b264084a0926e81f209faa7889ee3e84819e92a680b91feb2b1af` |
| Constants in table | 73 |
| Template (root expression bytes, placeholders not substituted) | 1074 bytes, blake2b256 `e01193533f3db2a395076f438739672d0b5cc8d76eacc39b57e555a31f9ffa38` |

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
| 4 | `Int` | 1 | `0402` |  |
| 5 | `Int` | 1 | `0402` |  |
| 6 | `Int` | 2 | `0404` |  |
| 7 | `Int` | 2 | `0404` |  |
| 8 | `Int` | 3 | `0406` |  |
| 9 | `Int` | 3 | `0406` |  |
| 10 | `Long` | 1000000 | `0580897a` |  |
| 11 | `BigInt` | BigInt(1000000000000000) | `0607038d7ea4c68000` |  |
| 12 | `Long` | 9000000000000000 | `058080d4aff9dcfc1f` |  |
| 13 | `Int` | 0 | `0400` |  |
| 14 | `Int` | 0 | `0400` |  |
| 15 | `Coll[Byte]` | 350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d (32 bytes) | `0e20350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d` | token id `INTEREST_NFT` |
| 16 | `Int` | 0 | `0400` |  |
| 17 | `BigInt` | BigInt(10000000000000000) | `06072386f26fc10000` |  |
| 18 | `Long` | 9000000000000000 | `058080d4aff9dcfc1f` |  |
| 19 | `Int` | 0 | `0400` |  |
| 20 | `Int` | 0 | `0400` |  |
| 21 | `Coll[Byte]` | 43380618ba064e48282ccbfef37653edea77d812f6edc8f22993e1e80cac9c08 (32 bytes) | `0e2043380618ba064e48282ccbfef37653edea77d812f6edc8f22993e1e80cac9c08` | token id `PARAMETER_NFT` |
| 22 | `Int` | 0 | `0400` |  |
| 23 | `Long` | 0 | `0500` |  |
| 24 | `Long` | -1 | `0501` |  |
| 25 | `Coll[Byte]` | cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729 (32 bytes) | `0e20cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | blake2b256 of `collateral` tree |
| 26 | `Long` | 9000000000000010 | `059480d4aff9dcfc1f` |  |
| 27 | `Long` | 9000000000000010 | `059480d4aff9dcfc1f` |  |
| 28 | `Int` | 0 | `0400` |  |
| 29 | `Int` | 0 | `0400` |  |
| 30 | `Int` | 0 | `0400` |  |
| 31 | `Int` | 0 | `0400` |  |
| 32 | `Int` | 2 | `0404` |  |
| 33 | `Int` | 1 | `0402` |  |
| 34 | `Int` | 3 | `0406` |  |
| 35 | `Long` | 1000000 | `0580897a` |  |
| 36 | `Int` | 4 | `0408` |  |
| 37 | `Int` | 5 | `040a` |  |
| 38 | `Boolean` | false | `0100` |  |
| 39 | `Long` | 0 | `0500` |  |
| 40 | `Int` | 0 | `0400` |  |
| 41 | `Int` | 0 | `0400` |  |
| 42 | `Int` | 0 | `0400` |  |
| 43 | `Int` | 0 | `0400` |  |
| 44 | `Int` | 0 | `0400` |  |
| 45 | `Int` | 0 | `0400` |  |
| 46 | `Int` | 6 | `040c` |  |
| 47 | `Int` | 2 | `0404` |  |
| 48 | `Int` | 4 | `0408` |  |
| 49 | `Long` | 0 | `0500` |  |
| 50 | `Long` | -1 | `0501` |  |
| 51 | `Long` | 100000000 | `058084af5f` |  |
| 52 | `Int` | 1 | `0402` |  |
| 53 | `Int` | 1000 | `04d00f` |  |
| 54 | `Int` | 0 | `0400` |  |
| 55 | `Int` | 0 | `0400` |  |
| 56 | `Int` | 0 | `0400` |  |
| 57 | `Int` | 1 | `0402` |  |
| 58 | `Long` | 4000000 | `0580a4e803` |  |
| 59 | `Int` | 0 | `0400` |  |
| 60 | `Int` | 1 | `0402` |  |
| 61 | `Int` | 3 | `0406` |  |
| 62 | `Int` | 2 | `0404` |  |
| 63 | `Int` | 5 | `040a` |  |
| 64 | `Int` | 3 | `0406` |  |
| 65 | `Int` | 4 | `0408` |  |
| 66 | `Int` | 5 | `040a` |  |
| 67 | `Int` | 6 | `040c` |  |
| 68 | `Int` | 7 | `040e` |  |
| 69 | `Int` | 7 | `040e` |  |
| 70 | `Int` | 8 | `0410` |  |
| 71 | `Int` | 9 | `0412` |  |
| 72 | `Boolean` | false | `0100` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Seq(
    ValDef(
      1,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
    ),
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
                  ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None)
                )
              )
            )
          )
        ),
        IntConstant(0),
        None
      )
    ),
    ValDef(
      3,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](
        ValUse(2, SBox),
        SBoxMethods.getMethodByName("tokens"),
        Array(),
        Map()
      )
    ),
    ValDef(4, Array(), ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), IntConstant(1), None)),
    ValDef(5, Array(), ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), IntConstant(1), None)),
    ValDef(6, Array(), ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), IntConstant(2), None)),
    ValDef(7, Array(), ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), IntConstant(2), None)),
    ValDef(8, Array(), SelectField.typed[Value[SCollection[SByte.type]]](ValUse(7, SPair(SByteArray, SLong)), 1.toByte)),
    ValDef(9, Array(), ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), IntConstant(3), None)),
    ValDef(10, Array(), ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), IntConstant(3), None)),
    ValDef(
      11,
      Array(),
      SelectField.typed[Value[SCollection[SByte.type]]](ValUse(10, SPair(SByteArray, SLong)), 1.toByte)
    ),
    ValDef(
      12,
      Array(),
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
                            EQ(ExtractScriptBytes(ValUse(2, SBox)), ExtractScriptBytes(Self)),
                            EQ(
                              SelectField.typed[Value[SCollection[SByte.type]]](
                                ValUse(4, SPair(SByteArray, SLong)),
                                1.toByte
                              ),
                              SelectField.typed[Value[SCollection[SByte.type]]](
                                ValUse(5, SPair(SByteArray, SLong)),
                                1.toByte
                              )
                            )
                          ),
                          EQ(
                            SelectField.typed[Value[SCollection[SByte.type]]](
                              ValUse(6, SPair(SByteArray, SLong)),
                              1.toByte
                            ),
                            ValUse(8, SByteArray)
                          )
                        ),
                        GE(ExtractAmount(ValUse(2, SBox)), LongConstant(1000000L))
                      ),
                      EQ(
                        SelectField.typed[Value[SCollection[SByte.type]]](ValUse(9, SPair(SByteArray, SLong)), 1.toByte),
                        ValUse(11, SByteArray)
                      )
                    ),
                    EQ(
                      SizeOf(ValUse(3, SCollectionType(SPair(SByteArray, SLong)))),
                      SizeOf(ValUse(1, SCollectionType(SPair(SByteArray, SLong))))
                    )
                  ),
                  OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SBoolean)))
                ),
                OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R5, SOption(SBoolean)))
              ),
              OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R6, SOption(SBoolean)))
            ),
            OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SBoolean)))
          ),
          OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R8, SOption(SBoolean)))
        ),
        OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R9, SOption(SBoolean)))
      )
    ),
    ValDef(13, Array(), BigIntConstant(CBigInt(new BigInteger("38d7ea4c68000", 16)))),
    ValDef(14, Array(), SelectField.typed[Value[SLong.type]](ValUse(9, SPair(SByteArray, SLong)), 2.toByte)),
    ValDef(15, Array(), SelectField.typed[Value[SLong.type]](ValUse(6, SPair(SByteArray, SLong)), 2.toByte)),
    ValDef(16, Array(), ArithOp(LongConstant(9000000000000000L), ValUse(15, SLong), OpCode @@ (-103.toByte))),
    ValDef(
      17,
      Array(),
      MethodCall.typed[Value[SCollection[SBox.type]]](
        Context,
        SContextMethods.getMethodByName("dataInputs"),
        Array(),
        Map()
      )
    ),
    ValDef(
      18,
      Array(),
      OptionGet(
        ExtractRegisterAs(
          ByIndex(
            Filter(
              ValUse(17, SCollectionType(SBox)),
              FuncValue(
                Array((18, SBox)),
                BlockValue(
                  Array(
                    ValDef(
                      20,
                      Array(),
                      MethodCall.typed[Value[SCollection[STuple]]](
                        ValUse(18, SBox),
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      )
                    )
                  ),
                  BinAnd(
                    GT(SizeOf(ValUse(20, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                    EQ(
                      SelectField.typed[Value[SCollection[SByte.type]]](
                        ByIndex(ValUse(20, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                        1.toByte
                      ),
                      ByteArrayConstant(
                        Helpers.decodeBytes("350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d")
                      )
                    )
                  )
                )
              )
            ),
            IntConstant(0),
            None
          ),
          ErgoBox.R5,
          SOption(SBigInt)
        )
      )
    ),
    ValDef(19, Array(), BigIntConstant(CBigInt(new BigInteger("2386f26fc10000", 16)))),
    ValDef(
      20,
      Array(),
      ArithOp(
        ArithOp(Upcast(ValUse(16, SLong), SBigInt), ValUse(18, SBigInt), OpCode @@ (-100.toByte)),
        ValUse(19, SBigInt),
        OpCode @@ (-99.toByte)
      )
    ),
    ValDef(21, Array(), SelectField.typed[Value[SLong.type]](ValUse(10, SPair(SByteArray, SLong)), 2.toByte)),
    ValDef(22, Array(), SelectField.typed[Value[SLong.type]](ValUse(7, SPair(SByteArray, SLong)), 2.toByte)),
    ValDef(23, Array(), ArithOp(LongConstant(9000000000000000L), ValUse(22, SLong), OpCode @@ (-103.toByte))),
    ValDef(
      24,
      Array(),
      ByIndex(
        Filter(
          ValUse(17, SCollectionType(SBox)),
          FuncValue(
            Array((24, SBox)),
            BlockValue(
              Array(
                ValDef(
                  26,
                  Array(),
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(24, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  )
                )
              ),
              BinAnd(
                GT(SizeOf(ValUse(26, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                EQ(
                  SelectField.typed[Value[SCollection[SByte.type]]](
                    ByIndex(ValUse(26, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                    1.toByte
                  ),
                  ByteArrayConstant(
                    Helpers.decodeBytes("43380618ba064e48282ccbfef37653edea77d812f6edc8f22993e1e80cac9c08")
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
    ValDef(25, Array(), OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R5, SOption(SByteArray)))),
    ValDef(
      26,
      Array(),
      Filter(Outputs, FuncValue(Array((26, SBox)), EQ(ExtractScriptBytes(ValUse(26, SBox)), ValUse(25, SByteArray))))
    ),
    ValDef(27, Array(), OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R6, SOption(SCollectionType(SLong))))),
    ValDef(28, Array(), ArithOp(ValUse(14, SLong), ValUse(21, SLong), OpCode @@ (-103.toByte))),
    ValDef(29, Array(), GT(ValUse(28, SLong), LongConstant(0L))),
    ValDef(
      30,
      Array(),
      If(
        ValUse(29, SBoolean),
        ValUse(28, SLong),
        ArithOp(ValUse(28, SLong), LongConstant(-1L), OpCode @@ (-100.toByte))
      )
    ),
    ValDef(31, Array(), EQ(ValUse(4, SPair(SByteArray, SLong)), ValUse(5, SPair(SByteArray, SLong)))),
    ValDef(32, Array(), ArithOp(ValUse(16, SLong), ValUse(23, SLong), OpCode @@ (-103.toByte))),
    ValDef(
      33,
      Array(),
      Filter(
        Outputs,
        FuncValue(
          Array((33, SBox)),
          EQ(
            CalcBlake2b256(ExtractScriptBytes(ValUse(33, SBox))),
            ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729"))
          )
        )
      )
    )
  ),
  BoolToSigmaProp(
    BinOr(
      BinOr(
        BinAnd(
          BinAnd(
            BinAnd(ValUse(12, SBoolean), EQ(ValUse(6, SPair(SByteArray, SLong)), ValUse(7, SPair(SByteArray, SLong)))),
            GT(
              ArithOp(
                ArithOp(
                  ValUse(13, SBigInt),
                  ArithOp(Upcast(ValUse(14, SLong), SBigInt), ValUse(20, SBigInt), OpCode @@ (-102.toByte)),
                  OpCode @@ (-100.toByte)
                ),
                Upcast(
                  ArithOp(
                    LongConstant(9000000000000010L),
                    SelectField.typed[Value[SLong.type]](ValUse(4, SPair(SByteArray, SLong)), 2.toByte),
                    OpCode @@ (-103.toByte)
                  ),
                  SBigInt
                ),
                OpCode @@ (-99.toByte)
              ),
              ArithOp(
                ArithOp(
                  ValUse(13, SBigInt),
                  ArithOp(
                    Upcast(ValUse(21, SLong), SBigInt),
                    ArithOp(
                      ArithOp(Upcast(ValUse(23, SLong), SBigInt), ValUse(18, SBigInt), OpCode @@ (-100.toByte)),
                      ValUse(19, SBigInt),
                      OpCode @@ (-99.toByte)
                    ),
                    OpCode @@ (-102.toByte)
                  ),
                  OpCode @@ (-100.toByte)
                ),
                Upcast(
                  ArithOp(
                    LongConstant(9000000000000010L),
                    SelectField.typed[Value[SLong.type]](ValUse(5, SPair(SByteArray, SLong)), 2.toByte),
                    OpCode @@ (-103.toByte)
                  ),
                  SBigInt
                ),
                OpCode @@ (-99.toByte)
              )
            )
          ),
          If(
            GT(SizeOf(ValUse(26, SCollectionType(SBox))), IntConstant(0)),
            BlockValue(
              Seq(
                ValDef(34, Array(), ByIndex(ValUse(26, SCollectionType(SBox)), IntConstant(0), None)),
                ValDef(
                  35,
                  Array(),
                  ByIndex(
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(34, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    ),
                    IntConstant(0),
                    None
                  )
                ),
                ValDef(36, Array(), ByIndex(ValUse(27, SCollectionType(SLong)), IntConstant(0), None)),
                ValDef(37, Array(), ByIndex(ValUse(27, SCollectionType(SLong)), IntConstant(2), None)),
                ValDef(38, Array(), ByIndex(ValUse(27, SCollectionType(SLong)), IntConstant(1), None)),
                ValDef(39, Array(), ByIndex(ValUse(27, SCollectionType(SLong)), IntConstant(3), None))
              ),
              BinAnd(
                BinAnd(
                  EQ(ExtractScriptBytes(ValUse(34, SBox)), ValUse(25, SByteArray)),
                  GE(ExtractAmount(ValUse(34, SBox)), LongConstant(1000000L))
                ),
                BinAnd(
                  GE(
                    SelectField.typed[Value[SLong.type]](ValUse(35, SPair(SByteArray, SLong)), 2.toByte),
                    ArithOp(
                      If(
                        LE(ValUse(30, SLong), ValUse(36, SLong)),
                        ArithOp(ValUse(30, SLong), ValUse(37, SLong), OpCode @@ (-99.toByte)),
                        If(
                          LE(ValUse(30, SLong), ValUse(38, SLong)),
                          ArithOp(
                            ArithOp(
                              ArithOp(ValUse(30, SLong), ValUse(36, SLong), OpCode @@ (-103.toByte)),
                              ValUse(39, SLong),
                              OpCode @@ (-99.toByte)
                            ),
                            ArithOp(ValUse(36, SLong), ValUse(37, SLong), OpCode @@ (-99.toByte)),
                            OpCode @@ (-102.toByte)
                          ),
                          ArithOp(
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ArithOp(ValUse(30, SLong), ValUse(38, SLong), OpCode @@ (-103.toByte)),
                                  ValUse(36, SLong),
                                  OpCode @@ (-103.toByte)
                                ),
                                ByIndex(ValUse(27, SCollectionType(SLong)), IntConstant(4), None),
                                OpCode @@ (-99.toByte)
                              ),
                              ArithOp(ValUse(38, SLong), ValUse(39, SLong), OpCode @@ (-99.toByte)),
                              OpCode @@ (-102.toByte)
                            ),
                            ArithOp(ValUse(36, SLong), ValUse(37, SLong), OpCode @@ (-99.toByte)),
                            OpCode @@ (-102.toByte)
                          )
                        )
                      ),
                      ByIndex(ValUse(27, SCollectionType(SLong)), IntConstant(5), None),
                      OpCode @@ (-94.toByte)
                    )
                  ),
                  EQ(
                    SelectField.typed[Value[SCollection[SByte.type]]](ValUse(35, SPair(SByteArray, SLong)), 1.toByte),
                    ValUse(11, SByteArray)
                  )
                )
              )
            ),
            FalseLeaf
          )
        ),
        BinAnd(
          BinAnd(BinAnd(ValUse(12, SBoolean), ValUse(31, SBoolean)), ValUse(29, SBoolean)),
          LT(ValUse(32, SLong), LongConstant(0L))
        )
      ),
      If(
        GT(SizeOf(ValUse(33, SCollectionType(SBox))), IntConstant(0)),
        BlockValue(
          Seq(
            ValDef(34, Array(), ByIndex(ValUse(33, SCollectionType(SBox)), IntConstant(0), None)),
            ValDef(
              35,
              Array(),
              ByIndex(
                MethodCall.typed[Value[SCollection[STuple]]](
                  ValUse(34, SBox),
                  SBoxMethods.getMethodByName("tokens"),
                  Array(),
                  Map()
                ),
                IntConstant(0),
                None
              )
            ),
            ValDef(36, Array(), SelectField.typed[Value[SLong.type]](ValUse(35, SPair(SByteArray, SLong)), 2.toByte)),
            ValDef(
              37,
              Array(),
              ArithOp(
                ArithOp(Upcast(ValUse(36, SLong), SBigInt), ValUse(18, SBigInt), OpCode @@ (-100.toByte)),
                ValUse(19, SBigInt),
                OpCode @@ (-99.toByte)
              )
            ),
            ValDef(
              38,
              Array(),
              ByIndex(
                Filter(
                  Outputs,
                  FuncValue(
                    Array((38, SBox)),
                    BlockValue(
                      Array(
                        ValDef(
                          40,
                          Array(),
                          MethodCall.typed[Value[SCollection[STuple]]](
                            ValUse(38, SBox),
                            SBoxMethods.getMethodByName("tokens"),
                            Array(),
                            Map()
                          )
                        )
                      ),
                      BinAnd(
                        GT(SizeOf(ValUse(40, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                        Exists(
                          OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R4, SOption(SByteArray2))),
                          FuncValue(
                            Array((41, SByteArray)),
                            BinAnd(
                              EQ(
                                SelectField.typed[Value[SCollection[SByte.type]]](
                                  ByIndex(ValUse(40, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                                  1.toByte
                                ),
                                ValUse(41, SByteArray)
                              ),
                              EQ(
                                ValUse(41, SByteArray),
                                OptionGet(ExtractRegisterAs(ValUse(34, SBox), ErgoBox.R7, SOption(SByteArray)))
                              )
                            )
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
            ValDef(
              39,
              Array(),
              OptionGet(ExtractRegisterAs(ValUse(38, SBox), ErgoBox.R4, SOption(SCollectionType(SLong))))
            ),
            ValDef(40, Array(), ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(6), None)),
            ValDef(41, Array(), ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(2), None)),
            ValDef(42, Array(), ExtractAmount(ValUse(34, SBox))),
            ValDef(43, Array(), ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(4), None)),
            ValDef(
              44,
              Array(),
              OptionGet(ExtractRegisterAs(ValUse(34, SBox), ErgoBox.R9, SOption(SCollectionType(SLong))))
            )
          ),
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
                                  BinAnd(ValUse(12, SBoolean), ValUse(31, SBoolean)),
                                  EQ(
                                    ArithOp(ValUse(36, SLong), ValUse(15, SLong), OpCode @@ (-102.toByte)),
                                    ValUse(22, SLong)
                                  )
                                ),
                                LT(ValUse(28, SLong), LongConstant(0L))
                              ),
                              BinAnd(
                                EQ(
                                  Upcast(
                                    ArithOp(ValUse(28, SLong), LongConstant(-1L), OpCode @@ (-100.toByte)),
                                    SBigInt
                                  ),
                                  ValUse(37, SBigInt)
                                ),
                                GE(ValUse(37, SBigInt), Upcast(ValUse(40, SLong), SBigInt))
                              )
                            ),
                            EQ(ValUse(32, SLong), ValUse(36, SLong))
                          ),
                          EQ(
                            SelectField.typed[Value[SCollection[SByte.type]]](
                              ValUse(35, SPair(SByteArray, SLong)),
                              1.toByte
                            ),
                            ValUse(8, SByteArray)
                          )
                        ),
                        EQ(
                          OptionGet(ExtractRegisterAs(ValUse(34, SBox), ErgoBox.R6, SOption(SLong))),
                          LongConstant(100000000L)
                        )
                      ),
                      GE(
                        Upcast(ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(1), None), SBigInt),
                        ArithOp(
                          ArithOp(ValUse(37, SBigInt), Upcast(ValUse(41, SLong), SBigInt), OpCode @@ (-100.toByte)),
                          Upcast(IntConstant(1000), SBigInt),
                          OpCode @@ (-99.toByte)
                        )
                      )
                    ),
                    LT(
                      ValUse(20, SBigInt),
                      Upcast(ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(0), None), SBigInt)
                    )
                  ),
                  EQ(
                    MethodCall.typed[Value[SInt.type]](
                      MapCollection(Outputs, FuncValue(Array((45, SBox)), ExtractId(ValUse(45, SBox)))),
                      SCollectionMethods.getMethodByName("indexOf").withConcreteTypes(Map(STypeVar("IV") -> SByteArray)),
                      Seq(ExtractId(ValUse(34, SBox)), IntConstant(0)),
                      Map()
                    ),
                    ArithOp(
                      ByIndex(
                        OptionGet(ExtractRegisterAs(ValUse(38, SBox), ErgoBox.R9, SOption(SCollectionType(SInt)))),
                        IntConstant(0),
                        None
                      ),
                      IntConstant(1),
                      OpCode @@ (-103.toByte)
                    )
                  )
                ),
                BinAnd(GT(ValUse(42, SLong), LongConstant(4000000L)), GE(ValUse(42, SLong), ValUse(43, SLong)))
              ),
              BinAnd(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            EQ(ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(0), None), ValUse(41, SLong)),
                            EQ(
                              ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(1), None),
                              ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(3), None)
                            )
                          ),
                          EQ(
                            ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(2), None),
                            ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(5), None)
                          )
                        ),
                        EQ(ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(3), None), ValUse(43, SLong))
                      ),
                      EQ(ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(4), None), ValUse(40, SLong))
                    ),
                    GE(ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(5), None), Upcast(Height, SLong))
                  ),
                  EQ(
                    ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(6), None),
                    ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(7), None)
                  )
                ),
                EQ(
                  ByIndex(ValUse(44, SCollectionType(SLong)), IntConstant(7), None),
                  ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(8), None)
                )
              )
            ),
            LE(ValUse(37, SBigInt), Upcast(ByIndex(ValUse(39, SCollectionType(SLong)), IntConstant(9), None), SBigInt))
          )
        ),
        FalseLeaf
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
    IntConstant(1),
    IntConstant(1),
    IntConstant(2),
    IntConstant(2),
    IntConstant(3),
    IntConstant(3),
    LongConstant(1000000L),
    BigIntConstant(CBigInt(new BigInteger("38d7ea4c68000", 16))),
    LongConstant(9000000000000000L),
    IntConstant(0),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d")),
    IntConstant(0),
    BigIntConstant(CBigInt(new BigInteger("2386f26fc10000", 16))),
    LongConstant(9000000000000000L),
    IntConstant(0),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("43380618ba064e48282ccbfef37653edea77d812f6edc8f22993e1e80cac9c08")),
    IntConstant(0),
    LongConstant(0L),
    LongConstant(-1L),
    ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729")),
    LongConstant(9000000000000010L),
    LongConstant(9000000000000010L),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(2),
    IntConstant(1),
    IntConstant(3),
    LongConstant(1000000L),
    IntConstant(4),
    IntConstant(5),
    FalseLeaf,
    LongConstant(0L),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(6),
    IntConstant(2),
    IntConstant(4),
    LongConstant(0L),
    LongConstant(-1L),
    LongConstant(100000000L),
    IntConstant(1),
    IntConstant(1000),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(1),
    LongConstant(4000000L),
    IntConstant(0),
    IntConstant(1),
    IntConstant(3),
    IntConstant(2),
    IntConstant(5),
    IntConstant(3),
    IntConstant(4),
    IntConstant(5),
    IntConstant(6),
    IntConstant(7),
    IntConstant(7),
    IntConstant(8),
    IntConstant(9),
    FalseLeaf
  ),
  Right(
    BlockValue(
      Array(
        ValDef(
          1,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
        ),
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
                      ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(2, SInt), None)
                    )
                  )
                )
              )
            ),
            ConstantPlaceholder(3, SInt),
            None
          )
        ),
        ValDef(
          3,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](
            ValUse(2, SBox),
            SBoxMethods.getMethodByName("tokens"),
            Array(),
            Map()
          )
        ),
        ValDef(
          4,
          Array(),
          ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(4, SInt), None)
        ),
        ValDef(
          5,
          Array(),
          ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(5, SInt), None)
        ),
        ValDef(
          6,
          Array(),
          ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(6, SInt), None)
        ),
        ValDef(
          7,
          Array(),
          ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(7, SInt), None)
        ),
        ValDef(
          8,
          Array(),
          SelectField.typed[Value[SCollection[SByte.type]]](ValUse(7, SPair(SByteArray, SLong)), 1.toByte)
        ),
        ValDef(
          9,
          Array(),
          ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(8, SInt), None)
        ),
        ValDef(
          10,
          Array(),
          ByIndex(ValUse(1, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(9, SInt), None)
        ),
        ValDef(
          11,
          Array(),
          SelectField.typed[Value[SCollection[SByte.type]]](ValUse(10, SPair(SByteArray, SLong)), 1.toByte)
        ),
        ValDef(
          12,
          Array(),
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
                                EQ(ExtractScriptBytes(ValUse(2, SBox)), ExtractScriptBytes(Self)),
                                EQ(
                                  SelectField.typed[Value[SCollection[SByte.type]]](
                                    ValUse(4, SPair(SByteArray, SLong)),
                                    1.toByte
                                  ),
                                  SelectField.typed[Value[SCollection[SByte.type]]](
                                    ValUse(5, SPair(SByteArray, SLong)),
                                    1.toByte
                                  )
                                )
                              ),
                              EQ(
                                SelectField.typed[Value[SCollection[SByte.type]]](
                                  ValUse(6, SPair(SByteArray, SLong)),
                                  1.toByte
                                ),
                                ValUse(8, SByteArray)
                              )
                            ),
                            GE(ExtractAmount(ValUse(2, SBox)), ConstantPlaceholder(10, SLong))
                          ),
                          EQ(
                            SelectField.typed[Value[SCollection[SByte.type]]](
                              ValUse(9, SPair(SByteArray, SLong)),
                              1.toByte
                            ),
                            ValUse(11, SByteArray)
                          )
                        ),
                        EQ(
                          SizeOf(ValUse(3, SCollectionType(SPair(SByteArray, SLong)))),
                          SizeOf(ValUse(1, SCollectionType(SPair(SByteArray, SLong))))
                        )
                      ),
                      OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SBoolean)))
                    ),
                    OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R5, SOption(SBoolean)))
                  ),
                  OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R6, SOption(SBoolean)))
                ),
                OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SBoolean)))
              ),
              OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R8, SOption(SBoolean)))
            ),
            OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R9, SOption(SBoolean)))
          )
        ),
        ValDef(13, Array(), ConstantPlaceholder(11, SBigInt)),
        ValDef(14, Array(), SelectField.typed[Value[SLong.type]](ValUse(9, SPair(SByteArray, SLong)), 2.toByte)),
        ValDef(15, Array(), SelectField.typed[Value[SLong.type]](ValUse(6, SPair(SByteArray, SLong)), 2.toByte)),
        ValDef(16, Array(), ArithOp(ConstantPlaceholder(12, SLong), ValUse(15, SLong), OpCode @@ (-103.toByte))),
        ValDef(
          17,
          Array(),
          MethodCall.typed[Value[SCollection[SBox.type]]](
            Context,
            SContextMethods.getMethodByName("dataInputs"),
            Array(),
            Map()
          )
        ),
        ValDef(
          18,
          Array(),
          OptionGet(
            ExtractRegisterAs(
              ByIndex(
                Filter(
                  ValUse(17, SCollectionType(SBox)),
                  FuncValue(
                    Array((18, SBox)),
                    BlockValue(
                      Array(
                        ValDef(
                          20,
                          Array(),
                          MethodCall.typed[Value[SCollection[STuple]]](
                            ValUse(18, SBox),
                            SBoxMethods.getMethodByName("tokens"),
                            Array(),
                            Map()
                          )
                        )
                      ),
                      BinAnd(
                        GT(SizeOf(ValUse(20, SCollectionType(SPair(SByteArray, SLong)))), ConstantPlaceholder(13, SInt)),
                        EQ(
                          SelectField.typed[Value[SCollection[SByte.type]]](
                            ByIndex(
                              ValUse(20, SCollectionType(SPair(SByteArray, SLong))),
                              ConstantPlaceholder(14, SInt),
                              None
                            ),
                            1.toByte
                          ),
                          ConstantPlaceholder(15, SByteArray)
                        )
                      )
                    )
                  )
                ),
                ConstantPlaceholder(16, SInt),
                None
              ),
              ErgoBox.R5,
              SOption(SBigInt)
            )
          )
        ),
        ValDef(19, Array(), ConstantPlaceholder(17, SBigInt)),
        ValDef(
          20,
          Array(),
          ArithOp(
            ArithOp(Upcast(ValUse(16, SLong), SBigInt), ValUse(18, SBigInt), OpCode @@ (-100.toByte)),
            ValUse(19, SBigInt),
            OpCode @@ (-99.toByte)
          )
        ),
        ValDef(21, Array(), SelectField.typed[Value[SLong.type]](ValUse(10, SPair(SByteArray, SLong)), 2.toByte)),
        ValDef(22, Array(), SelectField.typed[Value[SLong.type]](ValUse(7, SPair(SByteArray, SLong)), 2.toByte)),
        ValDef(23, Array(), ArithOp(ConstantPlaceholder(18, SLong), ValUse(22, SLong), OpCode @@ (-103.toByte))),
        ValDef(
          24,
          Array(),
          ByIndex(
            Filter(
              ValUse(17, SCollectionType(SBox)),
              FuncValue(
                Array((24, SBox)),
                BlockValue(
                  Array(
                    ValDef(
                      26,
                      Array(),
                      MethodCall.typed[Value[SCollection[STuple]]](
                        ValUse(24, SBox),
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      )
                    )
                  ),
                  BinAnd(
                    GT(SizeOf(ValUse(26, SCollectionType(SPair(SByteArray, SLong)))), ConstantPlaceholder(19, SInt)),
                    EQ(
                      SelectField.typed[Value[SCollection[SByte.type]]](
                        ByIndex(
                          ValUse(26, SCollectionType(SPair(SByteArray, SLong))),
                          ConstantPlaceholder(20, SInt),
                          None
                        ),
                        1.toByte
                      ),
                      ConstantPlaceholder(21, SByteArray)
                    )
                  )
                )
              )
            ),
            ConstantPlaceholder(22, SInt),
            None
          )
        ),
        ValDef(25, Array(), OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R5, SOption(SByteArray)))),
        ValDef(
          26,
          Array(),
          Filter(
            Outputs,
            FuncValue(Array((26, SBox)), EQ(ExtractScriptBytes(ValUse(26, SBox)), ValUse(25, SByteArray)))
          )
        ),
        ValDef(27, Array(), OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R6, SOption(SCollectionType(SLong))))),
        ValDef(28, Array(), ArithOp(ValUse(14, SLong), ValUse(21, SLong), OpCode @@ (-103.toByte))),
        ValDef(29, Array(), GT(ValUse(28, SLong), ConstantPlaceholder(23, SLong))),
        ValDef(
          30,
          Array(),
          If(
            ValUse(29, SBoolean),
            ValUse(28, SLong),
            ArithOp(ValUse(28, SLong), ConstantPlaceholder(24, SLong), OpCode @@ (-100.toByte))
          )
        ),
        ValDef(31, Array(), EQ(ValUse(4, SPair(SByteArray, SLong)), ValUse(5, SPair(SByteArray, SLong)))),
        ValDef(32, Array(), ArithOp(ValUse(16, SLong), ValUse(23, SLong), OpCode @@ (-103.toByte))),
        ValDef(
          33,
          Array(),
          Filter(
            Outputs,
            FuncValue(
              Array((33, SBox)),
              EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(33, SBox))), ConstantPlaceholder(25, SByteArray))
            )
          )
        )
      ),
      BoolToSigmaProp(
        BinOr(
          BinOr(
            BinAnd(
              BinAnd(
                BinAnd(
                  ValUse(12, SBoolean),
                  EQ(ValUse(6, SPair(SByteArray, SLong)), ValUse(7, SPair(SByteArray, SLong)))
                ),
                GT(
                  ArithOp(
                    ArithOp(
                      ValUse(13, SBigInt),
                      ArithOp(Upcast(ValUse(14, SLong), SBigInt), ValUse(20, SBigInt), OpCode @@ (-102.toByte)),
                      OpCode @@ (-100.toByte)
                    ),
                    Upcast(
                      ArithOp(
                        ConstantPlaceholder(26, SLong),
                        SelectField.typed[Value[SLong.type]](ValUse(4, SPair(SByteArray, SLong)), 2.toByte),
                        OpCode @@ (-103.toByte)
                      ),
                      SBigInt
                    ),
                    OpCode @@ (-99.toByte)
                  ),
                  ArithOp(
                    ArithOp(
                      ValUse(13, SBigInt),
                      ArithOp(
                        Upcast(ValUse(21, SLong), SBigInt),
                        ArithOp(
                          ArithOp(Upcast(ValUse(23, SLong), SBigInt), ValUse(18, SBigInt), OpCode @@ (-100.toByte)),
                          ValUse(19, SBigInt),
                          OpCode @@ (-99.toByte)
                        ),
                        OpCode @@ (-102.toByte)
                      ),
                      OpCode @@ (-100.toByte)
                    ),
                    Upcast(
                      ArithOp(
                        ConstantPlaceholder(27, SLong),
                        SelectField.typed[Value[SLong.type]](ValUse(5, SPair(SByteArray, SLong)), 2.toByte),
                        OpCode @@ (-103.toByte)
                      ),
                      SBigInt
                    ),
                    OpCode @@ (-99.toByte)
                  )
                )
              ),
              If(
                GT(SizeOf(ValUse(26, SCollectionType(SBox))), ConstantPlaceholder(28, SInt)),
                BlockValue(
                  Array(
                    ValDef(34, Array(), ByIndex(ValUse(26, SCollectionType(SBox)), ConstantPlaceholder(29, SInt), None)),
                    ValDef(
                      35,
                      Array(),
                      ByIndex(
                        MethodCall.typed[Value[SCollection[STuple]]](
                          ValUse(34, SBox),
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        ),
                        ConstantPlaceholder(30, SInt),
                        None
                      )
                    ),
                    ValDef(
                      36,
                      Array(),
                      ByIndex(ValUse(27, SCollectionType(SLong)), ConstantPlaceholder(31, SInt), None)
                    ),
                    ValDef(
                      37,
                      Array(),
                      ByIndex(ValUse(27, SCollectionType(SLong)), ConstantPlaceholder(32, SInt), None)
                    ),
                    ValDef(
                      38,
                      Array(),
                      ByIndex(ValUse(27, SCollectionType(SLong)), ConstantPlaceholder(33, SInt), None)
                    ),
                    ValDef(
                      39,
                      Array(),
                      ByIndex(ValUse(27, SCollectionType(SLong)), ConstantPlaceholder(34, SInt), None)
                    )
                  ),
                  BinAnd(
                    BinAnd(
                      EQ(ExtractScriptBytes(ValUse(34, SBox)), ValUse(25, SByteArray)),
                      GE(ExtractAmount(ValUse(34, SBox)), ConstantPlaceholder(35, SLong))
                    ),
                    BinAnd(
                      GE(
                        SelectField.typed[Value[SLong.type]](ValUse(35, SPair(SByteArray, SLong)), 2.toByte),
                        ArithOp(
                          If(
                            LE(ValUse(30, SLong), ValUse(36, SLong)),
                            ArithOp(ValUse(30, SLong), ValUse(37, SLong), OpCode @@ (-99.toByte)),
                            If(
                              LE(ValUse(30, SLong), ValUse(38, SLong)),
                              ArithOp(
                                ArithOp(
                                  ArithOp(ValUse(30, SLong), ValUse(36, SLong), OpCode @@ (-103.toByte)),
                                  ValUse(39, SLong),
                                  OpCode @@ (-99.toByte)
                                ),
                                ArithOp(ValUse(36, SLong), ValUse(37, SLong), OpCode @@ (-99.toByte)),
                                OpCode @@ (-102.toByte)
                              ),
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(ValUse(30, SLong), ValUse(38, SLong), OpCode @@ (-103.toByte)),
                                      ValUse(36, SLong),
                                      OpCode @@ (-103.toByte)
                                    ),
                                    ByIndex(ValUse(27, SCollectionType(SLong)), ConstantPlaceholder(36, SInt), None),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  ArithOp(ValUse(38, SLong), ValUse(39, SLong), OpCode @@ (-99.toByte)),
                                  OpCode @@ (-102.toByte)
                                ),
                                ArithOp(ValUse(36, SLong), ValUse(37, SLong), OpCode @@ (-99.toByte)),
                                OpCode @@ (-102.toByte)
                              )
                            )
                          ),
                          ByIndex(ValUse(27, SCollectionType(SLong)), ConstantPlaceholder(37, SInt), None),
                          OpCode @@ (-94.toByte)
                        )
                      ),
                      EQ(
                        SelectField.typed[Value[SCollection[SByte.type]]](
                          ValUse(35, SPair(SByteArray, SLong)),
                          1.toByte
                        ),
                        ValUse(11, SByteArray)
                      )
                    )
                  )
                ),
                ConstantPlaceholder(38, SBoolean)
              )
            ),
            BinAnd(
              BinAnd(BinAnd(ValUse(12, SBoolean), ValUse(31, SBoolean)), ValUse(29, SBoolean)),
              LT(ValUse(32, SLong), ConstantPlaceholder(39, SLong))
            )
          ),
          If(
            GT(SizeOf(ValUse(33, SCollectionType(SBox))), ConstantPlaceholder(40, SInt)),
            BlockValue(
              Array(
                ValDef(34, Array(), ByIndex(ValUse(33, SCollectionType(SBox)), ConstantPlaceholder(41, SInt), None)),
                ValDef(
                  35,
                  Array(),
                  ByIndex(
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(34, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    ),
                    ConstantPlaceholder(42, SInt),
                    None
                  )
                ),
                ValDef(
                  36,
                  Array(),
                  SelectField.typed[Value[SLong.type]](ValUse(35, SPair(SByteArray, SLong)), 2.toByte)
                ),
                ValDef(
                  37,
                  Array(),
                  ArithOp(
                    ArithOp(Upcast(ValUse(36, SLong), SBigInt), ValUse(18, SBigInt), OpCode @@ (-100.toByte)),
                    ValUse(19, SBigInt),
                    OpCode @@ (-99.toByte)
                  )
                ),
                ValDef(
                  38,
                  Array(),
                  ByIndex(
                    Filter(
                      Outputs,
                      FuncValue(
                        Array((38, SBox)),
                        BlockValue(
                          Array(
                            ValDef(
                              40,
                              Array(),
                              MethodCall.typed[Value[SCollection[STuple]]](
                                ValUse(38, SBox),
                                SBoxMethods.getMethodByName("tokens"),
                                Array(),
                                Map()
                              )
                            )
                          ),
                          BinAnd(
                            GT(
                              SizeOf(ValUse(40, SCollectionType(SPair(SByteArray, SLong)))),
                              ConstantPlaceholder(43, SInt)
                            ),
                            Exists(
                              OptionGet(ExtractRegisterAs(ValUse(24, SBox), ErgoBox.R4, SOption(SByteArray2))),
                              FuncValue(
                                Array((41, SByteArray)),
                                BinAnd(
                                  EQ(
                                    SelectField.typed[Value[SCollection[SByte.type]]](
                                      ByIndex(
                                        ValUse(40, SCollectionType(SPair(SByteArray, SLong))),
                                        ConstantPlaceholder(44, SInt),
                                        None
                                      ),
                                      1.toByte
                                    ),
                                    ValUse(41, SByteArray)
                                  ),
                                  EQ(
                                    ValUse(41, SByteArray),
                                    OptionGet(ExtractRegisterAs(ValUse(34, SBox), ErgoBox.R7, SOption(SByteArray)))
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    ConstantPlaceholder(45, SInt),
                    None
                  )
                ),
                ValDef(
                  39,
                  Array(),
                  OptionGet(ExtractRegisterAs(ValUse(38, SBox), ErgoBox.R4, SOption(SCollectionType(SLong))))
                ),
                ValDef(40, Array(), ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(46, SInt), None)),
                ValDef(41, Array(), ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(47, SInt), None)),
                ValDef(42, Array(), ExtractAmount(ValUse(34, SBox))),
                ValDef(43, Array(), ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(48, SInt), None)),
                ValDef(
                  44,
                  Array(),
                  OptionGet(ExtractRegisterAs(ValUse(34, SBox), ErgoBox.R9, SOption(SCollectionType(SLong))))
                )
              ),
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
                                      BinAnd(ValUse(12, SBoolean), ValUse(31, SBoolean)),
                                      EQ(
                                        ArithOp(ValUse(36, SLong), ValUse(15, SLong), OpCode @@ (-102.toByte)),
                                        ValUse(22, SLong)
                                      )
                                    ),
                                    LT(ValUse(28, SLong), ConstantPlaceholder(49, SLong))
                                  ),
                                  BinAnd(
                                    EQ(
                                      Upcast(
                                        ArithOp(
                                          ValUse(28, SLong),
                                          ConstantPlaceholder(50, SLong),
                                          OpCode @@ (-100.toByte)
                                        ),
                                        SBigInt
                                      ),
                                      ValUse(37, SBigInt)
                                    ),
                                    GE(ValUse(37, SBigInt), Upcast(ValUse(40, SLong), SBigInt))
                                  )
                                ),
                                EQ(ValUse(32, SLong), ValUse(36, SLong))
                              ),
                              EQ(
                                SelectField.typed[Value[SCollection[SByte.type]]](
                                  ValUse(35, SPair(SByteArray, SLong)),
                                  1.toByte
                                ),
                                ValUse(8, SByteArray)
                              )
                            ),
                            EQ(
                              OptionGet(ExtractRegisterAs(ValUse(34, SBox), ErgoBox.R6, SOption(SLong))),
                              ConstantPlaceholder(51, SLong)
                            )
                          ),
                          GE(
                            Upcast(
                              ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(52, SInt), None),
                              SBigInt
                            ),
                            ArithOp(
                              ArithOp(ValUse(37, SBigInt), Upcast(ValUse(41, SLong), SBigInt), OpCode @@ (-100.toByte)),
                              Upcast(ConstantPlaceholder(53, SInt), SBigInt),
                              OpCode @@ (-99.toByte)
                            )
                          )
                        ),
                        LT(
                          ValUse(20, SBigInt),
                          Upcast(
                            ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(54, SInt), None),
                            SBigInt
                          )
                        )
                      ),
                      EQ(
                        MethodCall.typed[Value[SInt.type]](
                          MapCollection(Outputs, FuncValue(Array((45, SBox)), ExtractId(ValUse(45, SBox)))),
                          SCollectionMethods.getMethodByName("indexOf").withConcreteTypes(
                            Map(STypeVar("IV") -> SByteArray)
                          ),
                          Array(ExtractId(ValUse(34, SBox)), ConstantPlaceholder(55, SInt)),
                          Map()
                        ),
                        ArithOp(
                          ByIndex(
                            OptionGet(ExtractRegisterAs(ValUse(38, SBox), ErgoBox.R9, SOption(SCollectionType(SInt)))),
                            ConstantPlaceholder(56, SInt),
                            None
                          ),
                          ConstantPlaceholder(57, SInt),
                          OpCode @@ (-103.toByte)
                        )
                      )
                    ),
                    BinAnd(
                      GT(ValUse(42, SLong), ConstantPlaceholder(58, SLong)),
                      GE(ValUse(42, SLong), ValUse(43, SLong))
                    )
                  ),
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                EQ(
                                  ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(59, SInt), None),
                                  ValUse(41, SLong)
                                ),
                                EQ(
                                  ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(60, SInt), None),
                                  ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(61, SInt), None)
                                )
                              ),
                              EQ(
                                ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(62, SInt), None),
                                ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(63, SInt), None)
                              )
                            ),
                            EQ(
                              ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(64, SInt), None),
                              ValUse(43, SLong)
                            )
                          ),
                          EQ(
                            ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(65, SInt), None),
                            ValUse(40, SLong)
                          )
                        ),
                        GE(
                          ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(66, SInt), None),
                          Upcast(Height, SLong)
                        )
                      ),
                      EQ(
                        ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(67, SInt), None),
                        ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(68, SInt), None)
                      )
                    ),
                    EQ(
                      ByIndex(ValUse(44, SCollectionType(SLong)), ConstantPlaceholder(69, SInt), None),
                      ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(70, SInt), None)
                    )
                  )
                ),
                LE(
                  ValUse(37, SBigInt),
                  Upcast(ByIndex(ValUse(39, SCollectionType(SLong)), ConstantPlaceholder(71, SInt), None), SBigInt)
                )
              )
            ),
            ConstantPlaceholder(72, SBoolean)
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

