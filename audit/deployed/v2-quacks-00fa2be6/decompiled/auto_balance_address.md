# `auto_balance_address` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `auto_balance_address` |
| Address (mainnet P2S) | `2GQ3qdXbygDYSq2jTgcM1kLUBNFQReEVJnCLMYKsRRtPUWmw28Xu8TxNgst8yvqa1hRNHs7BYE7f1KDUeUYonLK2URR3FAfAWjLQyyv33bYAjwBqJaD6EfYTuKF8G4tGFemDQ4fGGvZ421aCdoz7wHd2KYhs4QqZdFi5tEW19U9hdZhKyx83G32GdzgnBSMD3mayEYuBHBVcmN5Zn9y72B8YtzTBwFkTAW7BgAiRDfq2EfejVPCpyAFzfgbiKc1GgUaYDnMZFNsbQY4dCHi3iYi46zzFRaVqmQ9hiTRn6xiGb6LYcc174tdBLA2tgEFrQCyAoLCpCiboG66TBX1ioSuPvc3t3rPsUaaH4kL2H7BPDMmAvWANVe6UYYHAskxj8suNsGfnVueXfRxTNBc4EMBNknzgrJGCMyDVd8T1VMJxGZtGjDP9tfNYpuTgc2GwxFCYrqd2TivGC1Kf5KicjwFyGfuboPYJNxsf5xnghRb2sAsbNh4PRzcvq5HkhmHh2xgi885Xz2NoqbNPG5w6sgP3fbCXm41ymmMmeFhvjFL6TimcJ8LkL4mV1LKDfLovXa8FYU9VjpCNboUZoiC4s6fCxcy9m8GdT9D7owTiWgVZ5vvup1vkSyy24Ryn6i7UQcrkinY9CzGBqXf3FB4MXuAXZPNwSTdkzaZYjborGaz33fKARUGKbpvmUgTmfwiZEHtv8ePkvzm5GER3YVYffju5tniKEprsdnncRbxnxE5JN4aUwUcKPLginphJRi7w7pUtHWKcrSjRAHu3xjDwYg3qaEWgJGhsRL8SNyFYakZJUZUEAoFMLgpqkZkhFvGiiLyt1FBs2aYBeDrg13qRE72kCnNuvpXEfLGwysJMsFwjTZYB2YpMxsKWdp5K6ZDyZxtdTJRMtTvwjYQkn1J2c7EJMY2fGD1XsQDDNfmut7mk15HS92vJykK7eU5cuK9R4Qs8nKjtv67Q2ZnybZNAXpSZ8GE5rUHJXgfgmNZvfGosUaXnZ3M9r3Ho8YoC1FH1bAAUbwcnsi1vb4ge6xMUA3NUCL2hLE6GiiuHtrrSD9x1UxV4ENH49zwtr8fR5i9Qc6TJTpNwtCRq5XhYV1KDQrewRU2BtW52ZGXS48Y9bxYU4hPycT9D9nC5fL9aajgidtLeWHL3LXR3daNydiLPNsGDDj2Hy7NPpeopmNZPYZDYb1UMsHi` |
| Tree length | 876 bytes |
| Header byte | `0x19` (binary `00011001`) |
| Bits 0-2: ErgoTree version | 1 |
| Bit 3: size flag | 1 (tree size is serialized after the header) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| Size field value | 873 (bytes after the size field: 873; equal) |
| blake2b256(tree) | `1cb2eb2419fafea3e3603c4cdd7c4c85c3c7fee75151093ebd0b94479aed918d` |
| Constants in table | 42 |
| Template (root expression bytes, placeholders not substituted) | 744 bytes, blake2b256 `c467d3d9dafaa24c8aa4a42cdee33f3210dad5d7b432fcfc28dd972d4ad56a50` |

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
| 0 | `Coll[Byte]` | cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729 (32 bytes) | `0e20cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | blake2b256 of `collateral` tree |
| 1 | `Int` | 0 | `0400` |  |
| 2 | `Int` | 2 | `0404` |  |
| 3 | `Int` | 1 | `0402` |  |
| 4 | `Int` | 0 | `0400` |  |
| 5 | `Int` | 0 | `0400` |  |
| 6 | `Int` | 32 | `0440` |  |
| 7 | `Int` | 32 | `0440` |  |
| 8 | `Int` | 40 | `0450` |  |
| 9 | `Int` | 2 | `0404` |  |
| 10 | `Int` | 0 | `0400` |  |
| 11 | `Int` | 3 | `0406` |  |
| 12 | `Int` | 2 | `0404` |  |
| 13 | `Int` | 1 | `0402` |  |
| 14 | `Int` | 1 | `0402` |  |
| 15 | `Int` | 2 | `0404` |  |
| 16 | `Int` | 0 | `0400` |  |
| 17 | `Int` | 0 | `0400` |  |
| 18 | `Int` | 1 | `0402` |  |
| 19 | `Int` | 0 | `0400` |  |
| 20 | `Long` | 2 | `0504` |  |
| 21 | `Long` | 2 | `0504` |  |
| 22 | `Int` | 0 | `0400` |  |
| 23 | `Int` | 0 | `0400` |  |
| 24 | `Long` | 100 | `05c801` |  |
| 25 | `Long` | 10 | `0514` |  |
| 26 | `Long` | 5000000 | `0580ade204` |  |
| 27 | `Long` | 5000000 | `0580ade204` |  |
| 28 | `Long` | 5000000 | `0580ade204` |  |
| 29 | `Int` | 0 | `0400` |  |
| 30 | `Int` | 0 | `0400` |  |
| 31 | `Int` | 0 | `0400` |  |
| 32 | `Int` | 0 | `0400` |  |
| 33 | `Int` | 0 | `0400` |  |
| 34 | `Boolean` | true | `0101` |  |
| 35 | `Int` | 1 | `0402` |  |
| 36 | `Int` | 0 | `0400` |  |
| 37 | `Int` | 0 | `0400` |  |
| 38 | `Long` | 1000000 | `0580897a` |  |
| 39 | `Boolean` | false | `0100` |  |
| 40 | `Boolean` | false | `0100` |  |
| 41 | `Boolean` | false | `0100` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Seq(
    ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SGroupElement)))),
    ValDef(
      2,
      Array(),
      ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729"))
    ),
    ValDef(
      3,
      Array(),
      Filter(
        Inputs,
        FuncValue(Array((3, SBox)), EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(3, SBox))), ValUse(2, SByteArray)))
      )
    ),
    ValDef(
      4,
      Array(),
      ByIndex(
        MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map()),
        IntConstant(0),
        None
      )
    ),
    ValDef(5, Array(), SelectField.typed[Value[SCollection[SByte.type]]](ValUse(4, SPair(SByteArray, SLong)), 1.toByte)),
    ValDef(6, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R9, SOption(SByteArray2))))
  ),
  SigmaOr(
    Seq(
      CreateProveDlog(ValUse(1, SGroupElement)),
      BoolToSigmaProp(
        If(
          EQ(SizeOf(ValUse(3, SCollectionType(SBox))), IntConstant(2)),
          BlockValue(
            Seq(
              ValDef(7, Array(), ByIndex(ValUse(3, SCollectionType(SBox)), IntConstant(1), None)),
              ValDef(8, Array(), ByIndex(ValUse(3, SCollectionType(SBox)), IntConstant(0), None))
            ),
            If(
              ForAll(
                ValUse(3, SCollectionType(SBox)),
                FuncValue(
                  Array((9, SBox)),
                  BlockValue(
                    Array(
                      ValDef(
                        11,
                        Array(),
                        OptionGet(ExtractRegisterAs(ValUse(9, SBox), ErgoBox.R8, SOption(SByteArray)))
                      )
                    ),
                    BinAnd(
                      EQ(Slice(ValUse(11, SByteArray), IntConstant(0), IntConstant(32)), ValUse(5, SByteArray)),
                      Exists(
                        ValUse(6, SByteArray2),
                        FuncValue(
                          Array((12, SByteArray)),
                          EQ(ValUse(12, SByteArray), Slice(ValUse(11, SByteArray), IntConstant(32), IntConstant(40)))
                        )
                      )
                    )
                  )
                )
              ),
              BlockValue(
                Seq(
                  ValDef(
                    9,
                    Array(),
                    ArithOp(
                      IntConstant(2),
                      MethodCall.typed[Value[SInt.type]](
                        Inputs,
                        SCollectionMethods.getMethodByName("indexOf").withConcreteTypes(Map(STypeVar("IV") -> SBox)),
                        Seq(ValUse(7, SBox), IntConstant(0)),
                        Map()
                      ),
                      OpCode @@ (-100.toByte)
                    )
                  ),
                  ValDef(10, Array(), ArithOp(ValUse(9, SInt), IntConstant(3), OpCode @@ (-102.toByte)))
                ),
                If(
                  GT(SizeOf(Outputs), ValUse(10, SInt)),
                  BlockValue(
                    Seq(
                      ValDef(
                        11,
                        Array(),
                        ByIndex(
                          OptionGet(
                            ExtractRegisterAs(
                              ByIndex(Outputs, ArithOp(ValUse(9, SInt), IntConstant(2), OpCode @@ (-102.toByte)), None),
                              ErgoBox.R4,
                              SOption(SCollectionType(SLong))
                            )
                          ),
                          IntConstant(1),
                          None
                        )
                      ),
                      ValDef(
                        12,
                        Array(),
                        ByIndex(
                          OptionGet(
                            ExtractRegisterAs(
                              ByIndex(Outputs, ValUse(10, SInt), None),
                              ErgoBox.R4,
                              SOption(SCollectionType(SLong))
                            )
                          ),
                          IntConstant(1),
                          None
                        )
                      ),
                      ValDef(
                        13,
                        Array(),
                        ByIndex(
                          Outputs,
                          ArithOp(
                            IntConstant(2),
                            MethodCall.typed[Value[SInt.type]](
                              Inputs,
                              SCollectionMethods.getMethodByName("indexOf").withConcreteTypes(
                                Map(STypeVar("IV") -> SBox)
                              ),
                              Seq(ValUse(8, SBox), IntConstant(0)),
                              Map()
                            ),
                            OpCode @@ (-100.toByte)
                          ),
                          None
                        )
                      ),
                      ValDef(14, Array(), ByIndex(Outputs, ValUse(9, SInt), None)),
                      ValDef(15, Array(), GE(ValUse(11, SLong), ValUse(12, SLong))),
                      ValDef(16, Array(), EQ(If(ValUse(15, SBoolean), IntConstant(0), IntConstant(1)), IntConstant(0))),
                      ValDef(17, Array(), If(ValUse(16, SBoolean), ValUse(13, SBox), ValUse(14, SBox))),
                      ValDef(18, Array(), ExtractAmount(ValUse(17, SBox))),
                      ValDef(19, Array(), If(ValUse(16, SBoolean), ValUse(8, SBox), ValUse(7, SBox))),
                      ValDef(20, Array(), ExtractAmount(ValUse(19, SBox))),
                      ValDef(
                        21,
                        Array(),
                        If(
                          ValUse(15, SBoolean),
                          ArithOp(ValUse(11, SLong), ValUse(12, SLong), OpCode @@ (-103.toByte)),
                          ArithOp(ValUse(12, SLong), ValUse(11, SLong), OpCode @@ (-103.toByte))
                        )
                      ),
                      ValDef(
                        22,
                        Array(),
                        If(
                          ValUse(15, SBoolean),
                          ArithOp(LongConstant(2L), ValUse(11, SLong), OpCode @@ (-100.toByte)),
                          ArithOp(LongConstant(2L), ValUse(12, SLong), OpCode @@ (-100.toByte))
                        )
                      ),
                      ValDef(
                        23,
                        Array(),
                        ArithOp(
                          ArithOp(ValUse(20, SLong), ValUse(21, SLong), OpCode @@ (-100.toByte)),
                          ValUse(22, SLong),
                          OpCode @@ (-99.toByte)
                        )
                      ),
                      ValDef(24, Array(), ArithOp(ValUse(20, SLong), ValUse(23, SLong), OpCode @@ (-103.toByte))),
                      ValDef(25, Array(), If(ValUse(16, SBoolean), ValUse(14, SBox), ValUse(13, SBox))),
                      ValDef(26, Array(), If(ValUse(16, SBoolean), ValUse(7, SBox), ValUse(8, SBox))),
                      ValDef(
                        27,
                        Array(),
                        ArithOp(ExtractAmount(ValUse(26, SBox)), ValUse(23, SLong), OpCode @@ (-102.toByte))
                      ),
                      ValDef(
                        28,
                        Array(),
                        MethodCall.typed[Value[SCollection[STuple]]](
                          ValUse(17, SBox),
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        )
                      ),
                      ValDef(
                        29,
                        Array(),
                        MethodCall.typed[Value[SCollection[STuple]]](
                          ValUse(19, SBox),
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        )
                      ),
                      ValDef(
                        30,
                        Array(),
                        Filter(
                          Outputs,
                          FuncValue(
                            Array((30, SBox)),
                            BinAnd(
                              BinAnd(
                                EQ(ExtractScriptBytes(ValUse(30, SBox)), ExtractScriptBytes(Self)),
                                GT(
                                  SizeOf(
                                    MethodCall.typed[Value[SCollection[STuple]]](
                                      ValUse(30, SBox),
                                      SBoxMethods.getMethodByName("tokens"),
                                      Array(),
                                      Map()
                                    )
                                  ),
                                  IntConstant(0)
                                )
                              ),
                              EQ(
                                SelectField.typed[Value[SCollection[SByte.type]]](
                                  ByIndex(
                                    MethodCall.typed[Value[SCollection[STuple]]](
                                      ValUse(30, SBox),
                                      SBoxMethods.getMethodByName("tokens"),
                                      Array(),
                                      Map()
                                    ),
                                    IntConstant(0),
                                    None
                                  ),
                                  1.toByte
                                ),
                                ValUse(5, SByteArray)
                              )
                            )
                          )
                        )
                      )
                    ),
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            GT(
                              ArithOp(
                                If(
                                  GT(ValUse(11, SLong), ValUse(12, SLong)),
                                  ArithOp(ValUse(11, SLong), ValUse(12, SLong), OpCode @@ (-103.toByte)),
                                  ArithOp(ValUse(12, SLong), ValUse(11, SLong), OpCode @@ (-103.toByte))
                                ),
                                LongConstant(100L),
                                OpCode @@ (-100.toByte)
                              ),
                              ArithOp(
                                LongConstant(10L),
                                If(LT(ValUse(11, SLong), ValUse(12, SLong)), ValUse(11, SLong), ValUse(12, SLong)),
                                OpCode @@ (-100.toByte)
                              )
                            ),
                            BinAnd(
                              EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(13, SBox))), ValUse(2, SByteArray)),
                              EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(14, SBox))), ValUse(2, SByteArray))
                            )
                          ),
                          GE(
                            ArithOp(
                              ExtractAmount(ValUse(13, SBox)),
                              ExtractAmount(ValUse(14, SBox)),
                              OpCode @@ (-102.toByte)
                            ),
                            ArithOp(
                              ArithOp(
                                ExtractAmount(ValUse(8, SBox)),
                                ExtractAmount(ValUse(7, SBox)),
                                OpCode @@ (-102.toByte)
                              ),
                              LongConstant(5000000L),
                              OpCode @@ (-103.toByte)
                            )
                          )
                        ),
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                BinAnd(
                                  GE(
                                    ValUse(18, SLong),
                                    ArithOp(ValUse(24, SLong), LongConstant(5000000L), OpCode @@ (-103.toByte))
                                  ),
                                  LE(ValUse(18, SLong), ValUse(24, SLong))
                                ),
                                GE(ExtractAmount(ValUse(25, SBox)), ValUse(27, SLong))
                              ),
                              LE(
                                ExtractAmount(ValUse(25, SBox)),
                                ArithOp(ValUse(27, SLong), LongConstant(5000000L), OpCode @@ (-102.toByte))
                              )
                            ),
                            BinAnd(
                              EQ(
                                ByIndex(ValUse(28, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                                ByIndex(ValUse(29, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None)
                              ),
                              EQ(
                                ByIndex(
                                  MethodCall.typed[Value[SCollection[STuple]]](
                                    ValUse(25, SBox),
                                    SBoxMethods.getMethodByName("tokens"),
                                    Array(),
                                    Map()
                                  ),
                                  IntConstant(0),
                                  None
                                ),
                                ByIndex(
                                  MethodCall.typed[Value[SCollection[STuple]]](
                                    ValUse(26, SBox),
                                    SBoxMethods.getMethodByName("tokens"),
                                    Array(),
                                    Map()
                                  ),
                                  IntConstant(0),
                                  None
                                )
                              )
                            )
                          ),
                          ForAll(
                            MethodCall.typed[Value[SCollection[SInt.type]]](
                              ValUse(29, SCollectionType(SPair(SByteArray, SLong))),
                              SCollectionMethods.getMethodByName("indices").withConcreteTypes(
                                Map(STypeVar("IV") -> SPair(SByteArray, SLong))
                              ),
                              Array(),
                              Map()
                            ),
                            FuncValue(
                              Array((31, SInt)),
                              If(
                                EQ(ValUse(31, SInt), IntConstant(0)),
                                TrueLeaf,
                                BlockValue(
                                  Array(
                                    ValDef(
                                      33,
                                      Array(),
                                      ByIndex(
                                        ValUse(28, SCollectionType(SPair(SByteArray, SLong))),
                                        ValUse(31, SInt),
                                        None
                                      )
                                    ),
                                    ValDef(
                                      34,
                                      Array(),
                                      ByIndex(
                                        ValUse(29, SCollectionType(SPair(SByteArray, SLong))),
                                        ValUse(31, SInt),
                                        None
                                      )
                                    ),
                                    ValDef(
                                      35,
                                      Array(),
                                      SelectField.typed[Value[SCollection[SByte.type]]](
                                        ValUse(34, SPair(SByteArray, SLong)),
                                        1.toByte
                                      )
                                    ),
                                    ValDef(
                                      36,
                                      Array(),
                                      SelectField.typed[Value[SLong.type]](
                                        ValUse(34, SPair(SByteArray, SLong)),
                                        2.toByte
                                      )
                                    ),
                                    ValDef(
                                      37,
                                      Array(),
                                      ArithOp(
                                        ArithOp(ValUse(36, SLong), ValUse(21, SLong), OpCode @@ (-100.toByte)),
                                        ValUse(22, SLong),
                                        OpCode @@ (-99.toByte)
                                      )
                                    )
                                  ),
                                  BinAnd(
                                    BinAnd(
                                      BinAnd(
                                        EQ(
                                          SelectField.typed[Value[SCollection[SByte.type]]](
                                            ValUse(33, SPair(SByteArray, SLong)),
                                            1.toByte
                                          ),
                                          ValUse(35, SByteArray)
                                        ),
                                        EQ(
                                          SelectField.typed[Value[SLong.type]](
                                            ValUse(33, SPair(SByteArray, SLong)),
                                            2.toByte
                                          ),
                                          ArithOp(ValUse(36, SLong), ValUse(37, SLong), OpCode @@ (-103.toByte))
                                        )
                                      ),
                                      EQ(
                                        SelectField.typed[Value[SCollection[SByte.type]]](
                                          ByIndex(
                                            MethodCall.typed[Value[SCollection[STuple]]](
                                              ValUse(25, SBox),
                                              SBoxMethods.getMethodByName("tokens"),
                                              Array(),
                                              Map()
                                            ),
                                            ValUse(31, SInt),
                                            None
                                          ),
                                          1.toByte
                                        ),
                                        ValUse(35, SByteArray)
                                      )
                                    ),
                                    EQ(
                                      SelectField.typed[Value[SLong.type]](
                                        ByIndex(
                                          MethodCall.typed[Value[SCollection[STuple]]](
                                            ValUse(25, SBox),
                                            SBoxMethods.getMethodByName("tokens"),
                                            Array(),
                                            Map()
                                          ),
                                          ValUse(31, SInt),
                                          None
                                        ),
                                        2.toByte
                                      ),
                                      ArithOp(
                                        SelectField.typed[Value[SLong.type]](
                                          ByIndex(
                                            MethodCall.typed[Value[SCollection[STuple]]](
                                              ValUse(26, SBox),
                                              SBoxMethods.getMethodByName("tokens"),
                                              Array(),
                                              Map()
                                            ),
                                            ValUse(31, SInt),
                                            None
                                          ),
                                          2.toByte
                                        ),
                                        ValUse(37, SLong),
                                        OpCode @@ (-102.toByte)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      BinAnd(
                        EQ(SizeOf(ValUse(30, SCollectionType(SBox))), IntConstant(1)),
                        BlockValue(
                          Seq(ValDef(31, Array(), ByIndex(ValUse(30, SCollectionType(SBox)), IntConstant(0), None))),
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                BinAnd(
                                  BinAnd(
                                    BinAnd(
                                      EQ(
                                        ByIndex(
                                          MethodCall.typed[Value[SCollection[STuple]]](
                                            ValUse(31, SBox),
                                            SBoxMethods.getMethodByName("tokens"),
                                            Array(),
                                            Map()
                                          ),
                                          IntConstant(0),
                                          None
                                        ),
                                        ValUse(4, SPair(SByteArray, SLong))
                                      ),
                                      EQ(
                                        OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R4, SOption(SByteArray))),
                                        OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))
                                      )
                                    ),
                                    EQ(
                                      OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R5, SOption(SByteArray2))),
                                      OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SByteArray2)))
                                    )
                                  ),
                                  EQ(
                                    OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R6, SOption(SByteArray))),
                                    OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SByteArray)))
                                  )
                                ),
                                EQ(
                                  OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R7, SOption(SGroupElement))),
                                  ValUse(1, SGroupElement)
                                )
                              ),
                              EQ(
                                OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R9, SOption(SByteArray2))),
                                ValUse(6, SByteArray2)
                              )
                            ),
                            GE(ExtractAmount(ValUse(31, SBox)), LongConstant(1000000L))
                          )
                        )
                      )
                    )
                  ),
                  FalseLeaf
                )
              ),
              FalseLeaf
            )
          ),
          FalseLeaf
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

### 3b. As stored: full ErgoTree with `ConstantPlaceholder(i, T)` nodes

`SigmaPPrint(tree)`: header, constant vector, and root exactly as deserialized (placeholders not substituted).

<details><summary>Show</summary>

```scala
new ErgoTree(
  25.toByte,
  Vector(
    ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729")),
    IntConstant(0),
    IntConstant(2),
    IntConstant(1),
    IntConstant(0),
    IntConstant(0),
    IntConstant(32),
    IntConstant(32),
    IntConstant(40),
    IntConstant(2),
    IntConstant(0),
    IntConstant(3),
    IntConstant(2),
    IntConstant(1),
    IntConstant(1),
    IntConstant(2),
    IntConstant(0),
    IntConstant(0),
    IntConstant(1),
    IntConstant(0),
    LongConstant(2L),
    LongConstant(2L),
    IntConstant(0),
    IntConstant(0),
    LongConstant(100L),
    LongConstant(10L),
    LongConstant(5000000L),
    LongConstant(5000000L),
    LongConstant(5000000L),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    TrueLeaf,
    IntConstant(1),
    IntConstant(0),
    IntConstant(0),
    LongConstant(1000000L),
    FalseLeaf,
    FalseLeaf,
    FalseLeaf
  ),
  Right(
    BlockValue(
      Array(
        ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SGroupElement)))),
        ValDef(2, Array(), ConstantPlaceholder(0, SByteArray)),
        ValDef(
          3,
          Array(),
          Filter(
            Inputs,
            FuncValue(Array((3, SBox)), EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(3, SBox))), ValUse(2, SByteArray)))
          )
        ),
        ValDef(
          4,
          Array(),
          ByIndex(
            MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map()),
            ConstantPlaceholder(1, SInt),
            None
          )
        ),
        ValDef(
          5,
          Array(),
          SelectField.typed[Value[SCollection[SByte.type]]](ValUse(4, SPair(SByteArray, SLong)), 1.toByte)
        ),
        ValDef(6, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R9, SOption(SByteArray2))))
      ),
      SigmaOr(
        Array(
          CreateProveDlog(ValUse(1, SGroupElement)),
          BoolToSigmaProp(
            If(
              EQ(SizeOf(ValUse(3, SCollectionType(SBox))), ConstantPlaceholder(2, SInt)),
              BlockValue(
                Array(
                  ValDef(7, Array(), ByIndex(ValUse(3, SCollectionType(SBox)), ConstantPlaceholder(3, SInt), None)),
                  ValDef(8, Array(), ByIndex(ValUse(3, SCollectionType(SBox)), ConstantPlaceholder(4, SInt), None))
                ),
                If(
                  ForAll(
                    ValUse(3, SCollectionType(SBox)),
                    FuncValue(
                      Array((9, SBox)),
                      BlockValue(
                        Array(
                          ValDef(
                            11,
                            Array(),
                            OptionGet(ExtractRegisterAs(ValUse(9, SBox), ErgoBox.R8, SOption(SByteArray)))
                          )
                        ),
                        BinAnd(
                          EQ(
                            Slice(ValUse(11, SByteArray), ConstantPlaceholder(5, SInt), ConstantPlaceholder(6, SInt)),
                            ValUse(5, SByteArray)
                          ),
                          Exists(
                            ValUse(6, SByteArray2),
                            FuncValue(
                              Array((12, SByteArray)),
                              EQ(
                                ValUse(12, SByteArray),
                                Slice(
                                  ValUse(11, SByteArray),
                                  ConstantPlaceholder(7, SInt),
                                  ConstantPlaceholder(8, SInt)
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  BlockValue(
                    Array(
                      ValDef(
                        9,
                        Array(),
                        ArithOp(
                          ConstantPlaceholder(9, SInt),
                          MethodCall.typed[Value[SInt.type]](
                            Inputs,
                            SCollectionMethods.getMethodByName("indexOf").withConcreteTypes(Map(STypeVar("IV") -> SBox)),
                            Array(ValUse(7, SBox), ConstantPlaceholder(10, SInt)),
                            Map()
                          ),
                          OpCode @@ (-100.toByte)
                        )
                      ),
                      ValDef(
                        10,
                        Array(),
                        ArithOp(ValUse(9, SInt), ConstantPlaceholder(11, SInt), OpCode @@ (-102.toByte))
                      )
                    ),
                    If(
                      GT(SizeOf(Outputs), ValUse(10, SInt)),
                      BlockValue(
                        Array(
                          ValDef(
                            11,
                            Array(),
                            ByIndex(
                              OptionGet(
                                ExtractRegisterAs(
                                  ByIndex(
                                    Outputs,
                                    ArithOp(ValUse(9, SInt), ConstantPlaceholder(12, SInt), OpCode @@ (-102.toByte)),
                                    None
                                  ),
                                  ErgoBox.R4,
                                  SOption(SCollectionType(SLong))
                                )
                              ),
                              ConstantPlaceholder(13, SInt),
                              None
                            )
                          ),
                          ValDef(
                            12,
                            Array(),
                            ByIndex(
                              OptionGet(
                                ExtractRegisterAs(
                                  ByIndex(Outputs, ValUse(10, SInt), None),
                                  ErgoBox.R4,
                                  SOption(SCollectionType(SLong))
                                )
                              ),
                              ConstantPlaceholder(14, SInt),
                              None
                            )
                          ),
                          ValDef(
                            13,
                            Array(),
                            ByIndex(
                              Outputs,
                              ArithOp(
                                ConstantPlaceholder(15, SInt),
                                MethodCall.typed[Value[SInt.type]](
                                  Inputs,
                                  SCollectionMethods.getMethodByName("indexOf").withConcreteTypes(
                                    Map(STypeVar("IV") -> SBox)
                                  ),
                                  Array(ValUse(8, SBox), ConstantPlaceholder(16, SInt)),
                                  Map()
                                ),
                                OpCode @@ (-100.toByte)
                              ),
                              None
                            )
                          ),
                          ValDef(14, Array(), ByIndex(Outputs, ValUse(9, SInt), None)),
                          ValDef(15, Array(), GE(ValUse(11, SLong), ValUse(12, SLong))),
                          ValDef(
                            16,
                            Array(),
                            EQ(
                              If(ValUse(15, SBoolean), ConstantPlaceholder(17, SInt), ConstantPlaceholder(18, SInt)),
                              ConstantPlaceholder(19, SInt)
                            )
                          ),
                          ValDef(17, Array(), If(ValUse(16, SBoolean), ValUse(13, SBox), ValUse(14, SBox))),
                          ValDef(18, Array(), ExtractAmount(ValUse(17, SBox))),
                          ValDef(19, Array(), If(ValUse(16, SBoolean), ValUse(8, SBox), ValUse(7, SBox))),
                          ValDef(20, Array(), ExtractAmount(ValUse(19, SBox))),
                          ValDef(
                            21,
                            Array(),
                            If(
                              ValUse(15, SBoolean),
                              ArithOp(ValUse(11, SLong), ValUse(12, SLong), OpCode @@ (-103.toByte)),
                              ArithOp(ValUse(12, SLong), ValUse(11, SLong), OpCode @@ (-103.toByte))
                            )
                          ),
                          ValDef(
                            22,
                            Array(),
                            If(
                              ValUse(15, SBoolean),
                              ArithOp(ConstantPlaceholder(20, SLong), ValUse(11, SLong), OpCode @@ (-100.toByte)),
                              ArithOp(ConstantPlaceholder(21, SLong), ValUse(12, SLong), OpCode @@ (-100.toByte))
                            )
                          ),
                          ValDef(
                            23,
                            Array(),
                            ArithOp(
                              ArithOp(ValUse(20, SLong), ValUse(21, SLong), OpCode @@ (-100.toByte)),
                              ValUse(22, SLong),
                              OpCode @@ (-99.toByte)
                            )
                          ),
                          ValDef(24, Array(), ArithOp(ValUse(20, SLong), ValUse(23, SLong), OpCode @@ (-103.toByte))),
                          ValDef(25, Array(), If(ValUse(16, SBoolean), ValUse(14, SBox), ValUse(13, SBox))),
                          ValDef(26, Array(), If(ValUse(16, SBoolean), ValUse(7, SBox), ValUse(8, SBox))),
                          ValDef(
                            27,
                            Array(),
                            ArithOp(ExtractAmount(ValUse(26, SBox)), ValUse(23, SLong), OpCode @@ (-102.toByte))
                          ),
                          ValDef(
                            28,
                            Array(),
                            MethodCall.typed[Value[SCollection[STuple]]](
                              ValUse(17, SBox),
                              SBoxMethods.getMethodByName("tokens"),
                              Array(),
                              Map()
                            )
                          ),
                          ValDef(
                            29,
                            Array(),
                            MethodCall.typed[Value[SCollection[STuple]]](
                              ValUse(19, SBox),
                              SBoxMethods.getMethodByName("tokens"),
                              Array(),
                              Map()
                            )
                          ),
                          ValDef(
                            30,
                            Array(),
                            Filter(
                              Outputs,
                              FuncValue(
                                Array((30, SBox)),
                                BinAnd(
                                  BinAnd(
                                    EQ(ExtractScriptBytes(ValUse(30, SBox)), ExtractScriptBytes(Self)),
                                    GT(
                                      SizeOf(
                                        MethodCall.typed[Value[SCollection[STuple]]](
                                          ValUse(30, SBox),
                                          SBoxMethods.getMethodByName("tokens"),
                                          Array(),
                                          Map()
                                        )
                                      ),
                                      ConstantPlaceholder(22, SInt)
                                    )
                                  ),
                                  EQ(
                                    SelectField.typed[Value[SCollection[SByte.type]]](
                                      ByIndex(
                                        MethodCall.typed[Value[SCollection[STuple]]](
                                          ValUse(30, SBox),
                                          SBoxMethods.getMethodByName("tokens"),
                                          Array(),
                                          Map()
                                        ),
                                        ConstantPlaceholder(23, SInt),
                                        None
                                      ),
                                      1.toByte
                                    ),
                                    ValUse(5, SByteArray)
                                  )
                                )
                              )
                            )
                          )
                        ),
                        BinAnd(
                          BinAnd(
                            BinAnd(
                              BinAnd(
                                GT(
                                  ArithOp(
                                    If(
                                      GT(ValUse(11, SLong), ValUse(12, SLong)),
                                      ArithOp(ValUse(11, SLong), ValUse(12, SLong), OpCode @@ (-103.toByte)),
                                      ArithOp(ValUse(12, SLong), ValUse(11, SLong), OpCode @@ (-103.toByte))
                                    ),
                                    ConstantPlaceholder(24, SLong),
                                    OpCode @@ (-100.toByte)
                                  ),
                                  ArithOp(
                                    ConstantPlaceholder(25, SLong),
                                    If(LT(ValUse(11, SLong), ValUse(12, SLong)), ValUse(11, SLong), ValUse(12, SLong)),
                                    OpCode @@ (-100.toByte)
                                  )
                                ),
                                BinAnd(
                                  EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(13, SBox))), ValUse(2, SByteArray)),
                                  EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(14, SBox))), ValUse(2, SByteArray))
                                )
                              ),
                              GE(
                                ArithOp(
                                  ExtractAmount(ValUse(13, SBox)),
                                  ExtractAmount(ValUse(14, SBox)),
                                  OpCode @@ (-102.toByte)
                                ),
                                ArithOp(
                                  ArithOp(
                                    ExtractAmount(ValUse(8, SBox)),
                                    ExtractAmount(ValUse(7, SBox)),
                                    OpCode @@ (-102.toByte)
                                  ),
                                  ConstantPlaceholder(26, SLong),
                                  OpCode @@ (-103.toByte)
                                )
                              )
                            ),
                            BinAnd(
                              BinAnd(
                                BinAnd(
                                  BinAnd(
                                    BinAnd(
                                      GE(
                                        ValUse(18, SLong),
                                        ArithOp(
                                          ValUse(24, SLong),
                                          ConstantPlaceholder(27, SLong),
                                          OpCode @@ (-103.toByte)
                                        )
                                      ),
                                      LE(ValUse(18, SLong), ValUse(24, SLong))
                                    ),
                                    GE(ExtractAmount(ValUse(25, SBox)), ValUse(27, SLong))
                                  ),
                                  LE(
                                    ExtractAmount(ValUse(25, SBox)),
                                    ArithOp(ValUse(27, SLong), ConstantPlaceholder(28, SLong), OpCode @@ (-102.toByte))
                                  )
                                ),
                                BinAnd(
                                  EQ(
                                    ByIndex(
                                      ValUse(28, SCollectionType(SPair(SByteArray, SLong))),
                                      ConstantPlaceholder(29, SInt),
                                      None
                                    ),
                                    ByIndex(
                                      ValUse(29, SCollectionType(SPair(SByteArray, SLong))),
                                      ConstantPlaceholder(30, SInt),
                                      None
                                    )
                                  ),
                                  EQ(
                                    ByIndex(
                                      MethodCall.typed[Value[SCollection[STuple]]](
                                        ValUse(25, SBox),
                                        SBoxMethods.getMethodByName("tokens"),
                                        Array(),
                                        Map()
                                      ),
                                      ConstantPlaceholder(31, SInt),
                                      None
                                    ),
                                    ByIndex(
                                      MethodCall.typed[Value[SCollection[STuple]]](
                                        ValUse(26, SBox),
                                        SBoxMethods.getMethodByName("tokens"),
                                        Array(),
                                        Map()
                                      ),
                                      ConstantPlaceholder(32, SInt),
                                      None
                                    )
                                  )
                                )
                              ),
                              ForAll(
                                MethodCall.typed[Value[SCollection[SInt.type]]](
                                  ValUse(29, SCollectionType(SPair(SByteArray, SLong))),
                                  SCollectionMethods.getMethodByName("indices").withConcreteTypes(
                                    Map(STypeVar("IV") -> SPair(SByteArray, SLong))
                                  ),
                                  Array(),
                                  Map()
                                ),
                                FuncValue(
                                  Array((31, SInt)),
                                  If(
                                    EQ(ValUse(31, SInt), ConstantPlaceholder(33, SInt)),
                                    ConstantPlaceholder(34, SBoolean),
                                    BlockValue(
                                      Array(
                                        ValDef(
                                          33,
                                          Array(),
                                          ByIndex(
                                            ValUse(28, SCollectionType(SPair(SByteArray, SLong))),
                                            ValUse(31, SInt),
                                            None
                                          )
                                        ),
                                        ValDef(
                                          34,
                                          Array(),
                                          ByIndex(
                                            ValUse(29, SCollectionType(SPair(SByteArray, SLong))),
                                            ValUse(31, SInt),
                                            None
                                          )
                                        ),
                                        ValDef(
                                          35,
                                          Array(),
                                          SelectField.typed[Value[SCollection[SByte.type]]](
                                            ValUse(34, SPair(SByteArray, SLong)),
                                            1.toByte
                                          )
                                        ),
                                        ValDef(
                                          36,
                                          Array(),
                                          SelectField.typed[Value[SLong.type]](
                                            ValUse(34, SPair(SByteArray, SLong)),
                                            2.toByte
                                          )
                                        ),
                                        ValDef(
                                          37,
                                          Array(),
                                          ArithOp(
                                            ArithOp(ValUse(36, SLong), ValUse(21, SLong), OpCode @@ (-100.toByte)),
                                            ValUse(22, SLong),
                                            OpCode @@ (-99.toByte)
                                          )
                                        )
                                      ),
                                      BinAnd(
                                        BinAnd(
                                          BinAnd(
                                            EQ(
                                              SelectField.typed[Value[SCollection[SByte.type]]](
                                                ValUse(33, SPair(SByteArray, SLong)),
                                                1.toByte
                                              ),
                                              ValUse(35, SByteArray)
                                            ),
                                            EQ(
                                              SelectField.typed[Value[SLong.type]](
                                                ValUse(33, SPair(SByteArray, SLong)),
                                                2.toByte
                                              ),
                                              ArithOp(ValUse(36, SLong), ValUse(37, SLong), OpCode @@ (-103.toByte))
                                            )
                                          ),
                                          EQ(
                                            SelectField.typed[Value[SCollection[SByte.type]]](
                                              ByIndex(
                                                MethodCall.typed[Value[SCollection[STuple]]](
                                                  ValUse(25, SBox),
                                                  SBoxMethods.getMethodByName("tokens"),
                                                  Array(),
                                                  Map()
                                                ),
                                                ValUse(31, SInt),
                                                None
                                              ),
                                              1.toByte
                                            ),
                                            ValUse(35, SByteArray)
                                          )
                                        ),
                                        EQ(
                                          SelectField.typed[Value[SLong.type]](
                                            ByIndex(
                                              MethodCall.typed[Value[SCollection[STuple]]](
                                                ValUse(25, SBox),
                                                SBoxMethods.getMethodByName("tokens"),
                                                Array(),
                                                Map()
                                              ),
                                              ValUse(31, SInt),
                                              None
                                            ),
                                            2.toByte
                                          ),
                                          ArithOp(
                                            SelectField.typed[Value[SLong.type]](
                                              ByIndex(
                                                MethodCall.typed[Value[SCollection[STuple]]](
                                                  ValUse(26, SBox),
                                                  SBoxMethods.getMethodByName("tokens"),
                                                  Array(),
                                                  Map()
                                                ),
                                                ValUse(31, SInt),
                                                None
                                              ),
                                              2.toByte
                                            ),
                                            ValUse(37, SLong),
                                            OpCode @@ (-102.toByte)
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          BinAnd(
                            EQ(SizeOf(ValUse(30, SCollectionType(SBox))), ConstantPlaceholder(35, SInt)),
                            BlockValue(
                              Array(
                                ValDef(
                                  31,
                                  Array(),
                                  ByIndex(ValUse(30, SCollectionType(SBox)), ConstantPlaceholder(36, SInt), None)
                                )
                              ),
                              BinAnd(
                                BinAnd(
                                  BinAnd(
                                    BinAnd(
                                      BinAnd(
                                        BinAnd(
                                          EQ(
                                            ByIndex(
                                              MethodCall.typed[Value[SCollection[STuple]]](
                                                ValUse(31, SBox),
                                                SBoxMethods.getMethodByName("tokens"),
                                                Array(),
                                                Map()
                                              ),
                                              ConstantPlaceholder(37, SInt),
                                              None
                                            ),
                                            ValUse(4, SPair(SByteArray, SLong))
                                          ),
                                          EQ(
                                            OptionGet(
                                              ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R4, SOption(SByteArray))
                                            ),
                                            OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))
                                          )
                                        ),
                                        EQ(
                                          OptionGet(
                                            ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R5, SOption(SByteArray2))
                                          ),
                                          OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SByteArray2)))
                                        )
                                      ),
                                      EQ(
                                        OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R6, SOption(SByteArray))),
                                        OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SByteArray)))
                                      )
                                    ),
                                    EQ(
                                      OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R7, SOption(SGroupElement))),
                                      ValUse(1, SGroupElement)
                                    )
                                  ),
                                  EQ(
                                    OptionGet(ExtractRegisterAs(ValUse(31, SBox), ErgoBox.R9, SOption(SByteArray2))),
                                    ValUse(6, SByteArray2)
                                  )
                                ),
                                GE(ExtractAmount(ValUse(31, SBox)), ConstantPlaceholder(38, SLong))
                              )
                            )
                          )
                        )
                      ),
                      ConstantPlaceholder(39, SBoolean)
                    )
                  ),
                  ConstantPlaceholder(40, SBoolean)
                )
              ),
              ConstantPlaceholder(41, SBoolean)
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

