# `spend_nft_address` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `spend_nft_address` |
| Address (mainnet P2S) | `LRDNLxcH9Ehre8rN3EbuzAUU2pyZVdHgZwo1GDYC7i6FiW7X8XkJ6MLcbr2qkWXDt1ajKwpj2x1tXE2b4wRhamEkpRwxUuAtg2eUKgZdFsNrjLs31jugj4Wt3bExn27ntmfyJMR469sVysa14VhAMBLSnkoWpayuEb3vZFwpSn4dAm3TxsHnqJTuaAtoPoG46uNCiknz1rn2HDzq4PbAMpniQT9W2Uuh8iZt35F79MAV7fb7jgeL7xNda8FqXA1KPv8SuEAepz1V1QZqYYBLWARYvT59PFjcQScSiJEXvKmCgKgnwyeEr95aF3tvtdcEV5guYcBKUyFqhEeNCJC7MYq2kXPUpfJzzZt1wiCgFCaELvFN1kZFvCKMKzQCGhurmw2wzvYb3TBaCTqnESGfnFMGusCnPW8LMCt6NKEH61coJM6osNd5Pz3iKvDakEsJzvt4XjWiQxEPpHgrBbdG6W9FY1UWok5WEThCb4R9BJdfExS6DRbqtJnmKoN9cx3D9e8WnbkuJfLMi9YrYgRhf7n1VJDhNNqwHsEjUKipuZVuKEaaZvikoTbiifGQory5cmTVok6iFi3SYd6QmENoA6Dj7KPhLwtdC9vqgkmS9TAUGzxn3sj5SnjsqmMteG6P4EruvcBvGr5HJKDuNRVG9wCbHtzdBAtqVf42ndDmL7kspEyzV7sZoYgpiFBfbTXzd3uuD3T5v2pcByuu2b5CHdDQtzFuRoXoV9JYfMsDZLZq8jfroMW7bRxUyRAQxHoe54DsUZUKLE4PMwt5e1q6aRGadtpsU2Shk73i4cQUXJwjEatMjFa7DJAKyRdUfmbkhL7kox31czsrApojBbtas4j417Qwf99txDpiZGByNerGYwHGM3UWVBmJ8qVkGK2X6WKsaVoropqZpCZeifcPrSBv9U6vrMW4XPk833Gqg6VAyt5pfFixvDyHw3Game7DdKjvRTxpD5eijSqUMD4tQYg7bW5aedEGzdrwXNz9NpiaU7beR4bUK8uFve7w6CnDJHfphqmd3naJLqcT4ptqCLKgZBhGhKiAn5K2raQs7cdge7ywe966jrQN8uaFuE1nM4vDfmd5yHQqBvWx` |
| Tree length | 804 bytes |
| Header byte | `0x19` (binary `00011001`) |
| Bits 0-2: ErgoTree version | 1 |
| Bit 3: size flag | 1 (tree size is serialized after the header) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| Size field value | 801 (bytes after the size field: 801; equal) |
| blake2b256(tree) | `ac6f3b0584e39f00335ef5ff95c23b56448e16f0a156ac2218e41782f5ecf22f` |
| Constants in table | 35 |
| Template (root expression bytes, placeholders not substituted) | 619 bytes, blake2b256 `82c156adf493d2b71cc90c51b459e3f415abea960f09f588fc6feacfef3aa0ca` |

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
| 4 | `Coll[Byte]` | cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729 (32 bytes) | `0e20cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | blake2b256 of `collateral` tree |
| 5 | `Long` | 1100000 | `05c0a38601` |  |
| 6 | `Int` | 0 | `0400` |  |
| 7 | `Int` | 0 | `0400` |  |
| 8 | `Int` | 0 | `0400` |  |
| 9 | `Int` | 0 | `0400` |  |
| 10 | `Int` | 1 | `0402` |  |
| 11 | `Int` | 1 | `0402` |  |
| 12 | `Int` | 1000 | `04d00f` |  |
| 13 | `Long` | 1000 | `05d00f` |  |
| 14 | `Int` | 0 | `0400` |  |
| 15 | `Int` | 0 | `0400` |  |
| 16 | `Int` | 0 | `0400` |  |
| 17 | `Int` | 0 | `0400` |  |
| 18 | `Coll[Byte]` | 350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d (32 bytes) | `0e20350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d` | token id `INTEREST_NFT` |
| 19 | `Int` | 0 | `0400` |  |
| 20 | `BigInt` | BigInt(10000000000000000) | `06072386f26fc10000` |  |
| 21 | `Coll[Byte]` | b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d (32 bytes) | `0e20b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d` | blake2b256 of `repayment` tree |
| 22 | `Int` | 0 | `0400` |  |
| 23 | `Int` | 2 | `0404` |  |
| 24 | `Int` | 0 | `0400` |  |
| 25 | `Int` | 0 | `0400` |  |
| 26 | `Int` | 0 | `0400` |  |
| 27 | `Boolean` | false | `0100` |  |
| 28 | `Int` | 0 | `0400` |  |
| 29 | `Int` | 0 | `0400` |  |
| 30 | `Int` | 1 | `0402` |  |
| 31 | `Long` | 1100000 | `05c0a38601` |  |
| 32 | `Boolean` | true | `0101` |  |
| 33 | `Boolean` | false | `0100` |  |
| 34 | `Boolean` | false | `0100` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Seq(
    ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SGroupElement)))),
    ValDef(
      2,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
    ),
    ValDef(
      3,
      Array(),
      ByIndex(
        Filter(
          Outputs,
          FuncValue(
            Array((3, SBox)),
            BlockValue(
              Array(
                ValDef(
                  5,
                  Array(),
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(3, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  )
                )
              ),
              BinAnd(
                GT(SizeOf(ValUse(5, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                EQ(
                  ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                  ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None)
                )
              )
            )
          )
        ),
        IntConstant(0),
        Some(Self)
      )
    ),
    ValDef(4, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))),
    ValDef(5, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SCollectionType(SLong))))),
    ValDef(6, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))),
    ValDef(
      7,
      Array(),
      Filter(
        Inputs,
        FuncValue(
          Array((7, SBox)),
          EQ(
            CalcBlake2b256(ExtractScriptBytes(ValUse(7, SBox))),
            ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729"))
          )
        )
      )
    )
  ),
  SigmaOr(
    Seq(
      CreateProveDlog(ValUse(1, SGroupElement)),
      SigmaAnd(
        Seq(
          BoolToSigmaProp(
            BinAnd(
              BinAnd(
                BinAnd(
                  BinAnd(
                    EQ(ExtractScriptBytes(ValUse(3, SBox)), ExtractScriptBytes(Self)),
                    GE(
                      ExtractAmount(ValUse(3, SBox)),
                      ArithOp(ExtractAmount(Self), LongConstant(1100000L), OpCode @@ (-103.toByte))
                    )
                  ),
                  EQ(
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(3, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    ),
                    ValUse(2, SCollectionType(SPair(SByteArray, SLong)))
                  )
                ),
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        EQ(
                          OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R4, SOption(SByteArray))),
                          ValUse(4, SByteArray)
                        ),
                        EQ(
                          OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R5, SOption(SGroupElement))),
                          ValUse(1, SGroupElement)
                        )
                      ),
                      EQ(
                        OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R6, SOption(SCollectionType(SLong)))),
                        ValUse(5, SCollectionType(SLong))
                      )
                    ),
                    EQ(
                      OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R7, SOption(SByteArray))),
                      ValUse(6, SByteArray)
                    )
                  ),
                  EQ(
                    OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R9, SOption(SByteArray2))),
                    OptionGet(ExtractRegisterAs(Self, ErgoBox.R9, SOption(SByteArray2)))
                  )
                )
              ),
              NEQ(ExtractId(ValUse(3, SBox)), ExtractId(Self))
            )
          ),
          BoolToSigmaProp(
            If(
              GT(SizeOf(ValUse(7, SCollectionType(SBox))), IntConstant(0)),
              BlockValue(
                Seq(
                  ValDef(
                    8,
                    Array(),
                    Upcast(
                      ByIndex(
                        OptionGet(
                          ExtractRegisterAs(
                            ByIndex(
                              Filter(
                                Outputs,
                                FuncValue(
                                  Array((8, SBox)),
                                  BlockValue(
                                    Array(
                                      ValDef(
                                        10,
                                        Array(),
                                        MethodCall.typed[Value[SCollection[STuple]]](
                                          ValUse(8, SBox),
                                          SBoxMethods.getMethodByName("tokens"),
                                          Array(),
                                          Map()
                                        )
                                      )
                                    ),
                                    BinAnd(
                                      GT(SizeOf(ValUse(10, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                                      EQ(
                                        SelectField.typed[Value[SCollection[SByte.type]]](
                                          ByIndex(
                                            ValUse(10, SCollectionType(SPair(SByteArray, SLong))),
                                            IntConstant(0),
                                            None
                                          ),
                                          1.toByte
                                        ),
                                        ValUse(6, SByteArray)
                                      )
                                    )
                                  )
                                )
                              ),
                              IntConstant(0),
                              None
                            ),
                            ErgoBox.R4,
                            SOption(SCollectionType(SLong))
                          )
                        ),
                        IntConstant(1),
                        None
                      ),
                      SBigInt
                    )
                  ),
                  ValDef(
                    9,
                    Array(),
                    ArithOp(
                      ValUse(8, SBigInt),
                      ArithOp(
                        ArithOp(
                          ValUse(8, SBigInt),
                          Upcast(ByIndex(ValUse(5, SCollectionType(SLong)), IntConstant(1), None), SBigInt),
                          OpCode @@ (-100.toByte)
                        ),
                        Upcast(IntConstant(1000), SBigInt),
                        OpCode @@ (-99.toByte)
                      ),
                      OpCode @@ (-103.toByte)
                    )
                  ),
                  ValDef(10, Array(), LongConstant(1000L)),
                  ValDef(11, Array(), ByIndex(ValUse(7, SCollectionType(SBox)), IntConstant(0), None)),
                  ValDef(
                    12,
                    Array(),
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(11, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    )
                  ),
                  ValDef(
                    13,
                    Array(),
                    ByIndex(ValUse(12, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None)
                  ),
                  ValDef(
                    14,
                    Array(),
                    SelectField.typed[Value[SLong.type]](ValUse(13, SPair(SByteArray, SLong)), 2.toByte)
                  ),
                  ValDef(
                    15,
                    Array(),
                    ArithOp(
                      ArithOp(
                        Upcast(ValUse(14, SLong), SBigInt),
                        OptionGet(
                          ExtractRegisterAs(
                            ByIndex(
                              Filter(
                                MethodCall.typed[Value[SCollection[SBox.type]]](
                                  Context,
                                  SContextMethods.getMethodByName("dataInputs"),
                                  Array(),
                                  Map()
                                ),
                                FuncValue(
                                  Array((15, SBox)),
                                  BlockValue(
                                    Array(
                                      ValDef(
                                        17,
                                        Array(),
                                        MethodCall.typed[Value[SCollection[STuple]]](
                                          ValUse(15, SBox),
                                          SBoxMethods.getMethodByName("tokens"),
                                          Array(),
                                          Map()
                                        )
                                      )
                                    ),
                                    BinAnd(
                                      GT(SizeOf(ValUse(17, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
                                      EQ(
                                        SelectField.typed[Value[SCollection[SByte.type]]](
                                          ByIndex(
                                            ValUse(17, SCollectionType(SPair(SByteArray, SLong))),
                                            IntConstant(0),
                                            None
                                          ),
                                          1.toByte
                                        ),
                                        ByteArrayConstant(
                                          Helpers.decodeBytes(
                                            "350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d"
                                          )
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
                        ),
                        OpCode @@ (-100.toByte)
                      ),
                      BigIntConstant(CBigInt(new BigInteger("2386f26fc10000", 16))),
                      OpCode @@ (-99.toByte)
                    )
                  ),
                  ValDef(
                    16,
                    Array(),
                    Filter(
                      Outputs,
                      FuncValue(
                        Array((16, SBox)),
                        EQ(
                          CalcBlake2b256(ExtractScriptBytes(ValUse(16, SBox))),
                          ByteArrayConstant(
                            Helpers.decodeBytes("b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d")
                          )
                        )
                      )
                    )
                  ),
                  ValDef(
                    17,
                    Array(),
                    Filter(
                      Outputs,
                      FuncValue(Array((17, SBox)), EQ(ExtractScriptBytes(ValUse(17, SBox)), ValUse(4, SByteArray)))
                    )
                  )
                ),
                BinAnd(
                  BinAnd(
                    BinOr(
                      LT(
                        ArithOp(
                          ArithOp(ValUse(9, SBigInt), Upcast(ValUse(10, SLong), SBigInt), OpCode @@ (-100.toByte)),
                          ValUse(15, SBigInt),
                          OpCode @@ (-99.toByte)
                        ),
                        Upcast(ByIndex(ValUse(5, SCollectionType(SLong)), IntConstant(0), None), SBigInt)
                      ),
                      GE(Upcast(Height, SLong), ByIndex(ValUse(5, SCollectionType(SLong)), IntConstant(2), None))
                    ),
                    If(
                      GT(SizeOf(ValUse(16, SCollectionType(SBox))), IntConstant(0)),
                      BlockValue(
                        Seq(
                          ValDef(
                            18,
                            Array(),
                            ByIndex(
                              MethodCall.typed[Value[SCollection[STuple]]](
                                ByIndex(ValUse(16, SCollectionType(SBox)), IntConstant(0), None),
                                SBoxMethods.getMethodByName("tokens"),
                                Array(),
                                Map()
                              ),
                              IntConstant(0),
                              None
                            )
                          )
                        ),
                        BinAnd(
                          EQ(
                            SelectField.typed[Value[SCollection[SByte.type]]](
                              ValUse(18, SPair(SByteArray, SLong)),
                              1.toByte
                            ),
                            SelectField.typed[Value[SCollection[SByte.type]]](
                              ValUse(13, SPair(SByteArray, SLong)),
                              1.toByte
                            )
                          ),
                          EQ(
                            SelectField.typed[Value[SLong.type]](ValUse(18, SPair(SByteArray, SLong)), 2.toByte),
                            ValUse(14, SLong)
                          )
                        )
                      ),
                      FalseLeaf
                    )
                  ),
                  If(
                    BinAnd(
                      GT(SizeOf(ValUse(17, SCollectionType(SBox))), IntConstant(0)),
                      GT(ValUse(9, SBigInt), ValUse(15, SBigInt))
                    ),
                    BlockValue(
                      Seq(
                        ValDef(18, Array(), ByIndex(ValUse(17, SCollectionType(SBox)), IntConstant(0), None)),
                        ValDef(
                          19,
                          Array(),
                          ArithOp(
                            ArithOp(
                              ArithOp(ValUse(9, SBigInt), ValUse(15, SBigInt), OpCode @@ (-103.toByte)),
                              Upcast(ValUse(10, SLong), SBigInt),
                              OpCode @@ (-100.toByte)
                            ),
                            ValUse(9, SBigInt),
                            OpCode @@ (-99.toByte)
                          )
                        ),
                        ValDef(
                          20,
                          Array(),
                          MethodCall.typed[Value[SCollection[STuple]]](
                            ValUse(18, SBox),
                            SBoxMethods.getMethodByName("tokens"),
                            Array(),
                            Map()
                          )
                        ),
                        ValDef(
                          21,
                          Array(),
                          Slice(
                            ValUse(12, SCollectionType(SPair(SByteArray, SLong))),
                            IntConstant(1),
                            SizeOf(ValUse(12, SCollectionType(SPair(SByteArray, SLong))))
                          )
                        )
                      ),
                      BinAnd(
                        BinAnd(
                          GE(
                            Upcast(ExtractAmount(ValUse(18, SBox)), SBigInt),
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  Upcast(ExtractAmount(ValUse(11, SBox)), SBigInt),
                                  ValUse(19, SBigInt),
                                  OpCode @@ (-100.toByte)
                                ),
                                Upcast(ValUse(10, SLong), SBigInt),
                                OpCode @@ (-99.toByte)
                              ),
                              Upcast(LongConstant(1100000L), SBigInt),
                              OpCode @@ (-103.toByte)
                            )
                          ),
                          EQ(
                            SizeOf(ValUse(20, SCollectionType(SPair(SByteArray, SLong)))),
                            SizeOf(ValUse(21, SCollectionType(SPair(SByteArray, SLong))))
                          )
                        ),
                        ForAll(
                          MethodCall.typed[Value[SCollection[STuple]]](
                            ValUse(21, SCollectionType(SPair(SByteArray, SLong))),
                            SCollectionMethods.getMethodByName("zip").withConcreteTypes(
                              Map(
                                STypeVar("IV") -> SPair(SByteArray, SLong),
                                STypeVar("OV") -> SPair(SByteArray, SLong)
                              )
                            ),
                            Array(ValUse(20, SCollectionType(SPair(SByteArray, SLong)))),
                            Map()
                          ),
                          FuncValue(
                            Array((22, SPair(SPair(SByteArray, SLong), SPair(SByteArray, SLong)))),
                            BlockValue(
                              Array(
                                ValDef(
                                  24,
                                  Array(),
                                  SelectField.typed[Value[STuple]](
                                    ValUse(22, SPair(SPair(SByteArray, SLong), SPair(SByteArray, SLong))),
                                    2.toByte
                                  )
                                ),
                                ValDef(
                                  25,
                                  Array(),
                                  SelectField.typed[Value[STuple]](
                                    ValUse(22, SPair(SPair(SByteArray, SLong), SPair(SByteArray, SLong))),
                                    1.toByte
                                  )
                                )
                              ),
                              BinAnd(
                                EQ(
                                  SelectField.typed[Value[SCollection[SByte.type]]](
                                    ValUse(24, SPair(SByteArray, SLong)),
                                    1.toByte
                                  ),
                                  SelectField.typed[Value[SCollection[SByte.type]]](
                                    ValUse(25, SPair(SByteArray, SLong)),
                                    1.toByte
                                  )
                                ),
                                GE(
                                  Upcast(
                                    SelectField.typed[Value[SLong.type]](ValUse(24, SPair(SByteArray, SLong)), 2.toByte),
                                    SBigInt
                                  ),
                                  ArithOp(
                                    ArithOp(
                                      Upcast(
                                        SelectField.typed[Value[SLong.type]](
                                          ValUse(25, SPair(SByteArray, SLong)),
                                          2.toByte
                                        ),
                                        SBigInt
                                      ),
                                      ValUse(19, SBigInt),
                                      OpCode @@ (-100.toByte)
                                    ),
                                    Upcast(ValUse(10, SLong), SBigInt),
                                    OpCode @@ (-99.toByte)
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    If(LE(ValUse(9, SBigInt), ValUse(15, SBigInt)), TrueLeaf, FalseLeaf)
                  )
                )
              ),
              FalseLeaf
            )
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
| `OpCode @@ (-100.toByte)` | 0x9c | MultiplyCode (*) |
| `OpCode @@ (-99.toByte)` | 0x9d | DivisionCode (/) |

### 3b. As stored: full ErgoTree with `ConstantPlaceholder(i, T)` nodes

`SigmaPPrint(tree)`: header, constant vector, and root exactly as deserialized (placeholders not substituted).

<details><summary>Show</summary>

```scala
new ErgoTree(
  25.toByte,
  Vector(
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729")),
    LongConstant(1100000L),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(1),
    IntConstant(1),
    IntConstant(1000),
    LongConstant(1000L),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("350a2e03c403508b12895dacf833e038a0d693128485522fb884caeb23d5990d")),
    IntConstant(0),
    BigIntConstant(CBigInt(new BigInteger("2386f26fc10000", 16))),
    ByteArrayConstant(Helpers.decodeBytes("b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d")),
    IntConstant(0),
    IntConstant(2),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    FalseLeaf,
    IntConstant(0),
    IntConstant(0),
    IntConstant(1),
    LongConstant(1100000L),
    TrueLeaf,
    FalseLeaf,
    FalseLeaf
  ),
  Right(
    BlockValue(
      Array(
        ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SGroupElement)))),
        ValDef(
          2,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
        ),
        ValDef(
          3,
          Array(),
          ByIndex(
            Filter(
              Outputs,
              FuncValue(
                Array((3, SBox)),
                BlockValue(
                  Array(
                    ValDef(
                      5,
                      Array(),
                      MethodCall.typed[Value[SCollection[STuple]]](
                        ValUse(3, SBox),
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      )
                    )
                  ),
                  BinAnd(
                    GT(SizeOf(ValUse(5, SCollectionType(SPair(SByteArray, SLong)))), ConstantPlaceholder(0, SInt)),
                    EQ(
                      ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(1, SInt), None),
                      ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(2, SInt), None)
                    )
                  )
                )
              )
            ),
            ConstantPlaceholder(3, SInt),
            Some(Self)
          )
        ),
        ValDef(4, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))),
        ValDef(5, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SCollectionType(SLong))))),
        ValDef(6, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))),
        ValDef(
          7,
          Array(),
          Filter(
            Inputs,
            FuncValue(
              Array((7, SBox)),
              EQ(CalcBlake2b256(ExtractScriptBytes(ValUse(7, SBox))), ConstantPlaceholder(4, SByteArray))
            )
          )
        )
      ),
      SigmaOr(
        Array(
          CreateProveDlog(ValUse(1, SGroupElement)),
          SigmaAnd(
            Array(
              BoolToSigmaProp(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        EQ(ExtractScriptBytes(ValUse(3, SBox)), ExtractScriptBytes(Self)),
                        GE(
                          ExtractAmount(ValUse(3, SBox)),
                          ArithOp(ExtractAmount(Self), ConstantPlaceholder(5, SLong), OpCode @@ (-103.toByte))
                        )
                      ),
                      EQ(
                        MethodCall.typed[Value[SCollection[STuple]]](
                          ValUse(3, SBox),
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        ),
                        ValUse(2, SCollectionType(SPair(SByteArray, SLong)))
                      )
                    ),
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          BinAnd(
                            EQ(
                              OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R4, SOption(SByteArray))),
                              ValUse(4, SByteArray)
                            ),
                            EQ(
                              OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R5, SOption(SGroupElement))),
                              ValUse(1, SGroupElement)
                            )
                          ),
                          EQ(
                            OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R6, SOption(SCollectionType(SLong)))),
                            ValUse(5, SCollectionType(SLong))
                          )
                        ),
                        EQ(
                          OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R7, SOption(SByteArray))),
                          ValUse(6, SByteArray)
                        )
                      ),
                      EQ(
                        OptionGet(ExtractRegisterAs(ValUse(3, SBox), ErgoBox.R9, SOption(SByteArray2))),
                        OptionGet(ExtractRegisterAs(Self, ErgoBox.R9, SOption(SByteArray2)))
                      )
                    )
                  ),
                  NEQ(ExtractId(ValUse(3, SBox)), ExtractId(Self))
                )
              ),
              BoolToSigmaProp(
                If(
                  GT(SizeOf(ValUse(7, SCollectionType(SBox))), ConstantPlaceholder(6, SInt)),
                  BlockValue(
                    Array(
                      ValDef(
                        8,
                        Array(),
                        Upcast(
                          ByIndex(
                            OptionGet(
                              ExtractRegisterAs(
                                ByIndex(
                                  Filter(
                                    Outputs,
                                    FuncValue(
                                      Array((8, SBox)),
                                      BlockValue(
                                        Array(
                                          ValDef(
                                            10,
                                            Array(),
                                            MethodCall.typed[Value[SCollection[STuple]]](
                                              ValUse(8, SBox),
                                              SBoxMethods.getMethodByName("tokens"),
                                              Array(),
                                              Map()
                                            )
                                          )
                                        ),
                                        BinAnd(
                                          GT(
                                            SizeOf(ValUse(10, SCollectionType(SPair(SByteArray, SLong)))),
                                            ConstantPlaceholder(7, SInt)
                                          ),
                                          EQ(
                                            SelectField.typed[Value[SCollection[SByte.type]]](
                                              ByIndex(
                                                ValUse(10, SCollectionType(SPair(SByteArray, SLong))),
                                                ConstantPlaceholder(8, SInt),
                                                None
                                              ),
                                              1.toByte
                                            ),
                                            ValUse(6, SByteArray)
                                          )
                                        )
                                      )
                                    )
                                  ),
                                  ConstantPlaceholder(9, SInt),
                                  None
                                ),
                                ErgoBox.R4,
                                SOption(SCollectionType(SLong))
                              )
                            ),
                            ConstantPlaceholder(10, SInt),
                            None
                          ),
                          SBigInt
                        )
                      ),
                      ValDef(
                        9,
                        Array(),
                        ArithOp(
                          ValUse(8, SBigInt),
                          ArithOp(
                            ArithOp(
                              ValUse(8, SBigInt),
                              Upcast(
                                ByIndex(ValUse(5, SCollectionType(SLong)), ConstantPlaceholder(11, SInt), None),
                                SBigInt
                              ),
                              OpCode @@ (-100.toByte)
                            ),
                            Upcast(ConstantPlaceholder(12, SInt), SBigInt),
                            OpCode @@ (-99.toByte)
                          ),
                          OpCode @@ (-103.toByte)
                        )
                      ),
                      ValDef(10, Array(), ConstantPlaceholder(13, SLong)),
                      ValDef(
                        11,
                        Array(),
                        ByIndex(ValUse(7, SCollectionType(SBox)), ConstantPlaceholder(14, SInt), None)
                      ),
                      ValDef(
                        12,
                        Array(),
                        MethodCall.typed[Value[SCollection[STuple]]](
                          ValUse(11, SBox),
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        )
                      ),
                      ValDef(
                        13,
                        Array(),
                        ByIndex(
                          ValUse(12, SCollectionType(SPair(SByteArray, SLong))),
                          ConstantPlaceholder(15, SInt),
                          None
                        )
                      ),
                      ValDef(
                        14,
                        Array(),
                        SelectField.typed[Value[SLong.type]](ValUse(13, SPair(SByteArray, SLong)), 2.toByte)
                      ),
                      ValDef(
                        15,
                        Array(),
                        ArithOp(
                          ArithOp(
                            Upcast(ValUse(14, SLong), SBigInt),
                            OptionGet(
                              ExtractRegisterAs(
                                ByIndex(
                                  Filter(
                                    MethodCall.typed[Value[SCollection[SBox.type]]](
                                      Context,
                                      SContextMethods.getMethodByName("dataInputs"),
                                      Array(),
                                      Map()
                                    ),
                                    FuncValue(
                                      Array((15, SBox)),
                                      BlockValue(
                                        Array(
                                          ValDef(
                                            17,
                                            Array(),
                                            MethodCall.typed[Value[SCollection[STuple]]](
                                              ValUse(15, SBox),
                                              SBoxMethods.getMethodByName("tokens"),
                                              Array(),
                                              Map()
                                            )
                                          )
                                        ),
                                        BinAnd(
                                          GT(
                                            SizeOf(ValUse(17, SCollectionType(SPair(SByteArray, SLong)))),
                                            ConstantPlaceholder(16, SInt)
                                          ),
                                          EQ(
                                            SelectField.typed[Value[SCollection[SByte.type]]](
                                              ByIndex(
                                                ValUse(17, SCollectionType(SPair(SByteArray, SLong))),
                                                ConstantPlaceholder(17, SInt),
                                                None
                                              ),
                                              1.toByte
                                            ),
                                            ConstantPlaceholder(18, SByteArray)
                                          )
                                        )
                                      )
                                    )
                                  ),
                                  ConstantPlaceholder(19, SInt),
                                  None
                                ),
                                ErgoBox.R5,
                                SOption(SBigInt)
                              )
                            ),
                            OpCode @@ (-100.toByte)
                          ),
                          ConstantPlaceholder(20, SBigInt),
                          OpCode @@ (-99.toByte)
                        )
                      ),
                      ValDef(
                        16,
                        Array(),
                        Filter(
                          Outputs,
                          FuncValue(
                            Array((16, SBox)),
                            EQ(
                              CalcBlake2b256(ExtractScriptBytes(ValUse(16, SBox))),
                              ConstantPlaceholder(21, SByteArray)
                            )
                          )
                        )
                      ),
                      ValDef(
                        17,
                        Array(),
                        Filter(
                          Outputs,
                          FuncValue(Array((17, SBox)), EQ(ExtractScriptBytes(ValUse(17, SBox)), ValUse(4, SByteArray)))
                        )
                      )
                    ),
                    BinAnd(
                      BinAnd(
                        BinOr(
                          LT(
                            ArithOp(
                              ArithOp(ValUse(9, SBigInt), Upcast(ValUse(10, SLong), SBigInt), OpCode @@ (-100.toByte)),
                              ValUse(15, SBigInt),
                              OpCode @@ (-99.toByte)
                            ),
                            Upcast(
                              ByIndex(ValUse(5, SCollectionType(SLong)), ConstantPlaceholder(22, SInt), None),
                              SBigInt
                            )
                          ),
                          GE(
                            Upcast(Height, SLong),
                            ByIndex(ValUse(5, SCollectionType(SLong)), ConstantPlaceholder(23, SInt), None)
                          )
                        ),
                        If(
                          GT(SizeOf(ValUse(16, SCollectionType(SBox))), ConstantPlaceholder(24, SInt)),
                          BlockValue(
                            Array(
                              ValDef(
                                18,
                                Array(),
                                ByIndex(
                                  MethodCall.typed[Value[SCollection[STuple]]](
                                    ByIndex(ValUse(16, SCollectionType(SBox)), ConstantPlaceholder(25, SInt), None),
                                    SBoxMethods.getMethodByName("tokens"),
                                    Array(),
                                    Map()
                                  ),
                                  ConstantPlaceholder(26, SInt),
                                  None
                                )
                              )
                            ),
                            BinAnd(
                              EQ(
                                SelectField.typed[Value[SCollection[SByte.type]]](
                                  ValUse(18, SPair(SByteArray, SLong)),
                                  1.toByte
                                ),
                                SelectField.typed[Value[SCollection[SByte.type]]](
                                  ValUse(13, SPair(SByteArray, SLong)),
                                  1.toByte
                                )
                              ),
                              EQ(
                                SelectField.typed[Value[SLong.type]](ValUse(18, SPair(SByteArray, SLong)), 2.toByte),
                                ValUse(14, SLong)
                              )
                            )
                          ),
                          ConstantPlaceholder(27, SBoolean)
                        )
                      ),
                      If(
                        BinAnd(
                          GT(SizeOf(ValUse(17, SCollectionType(SBox))), ConstantPlaceholder(28, SInt)),
                          GT(ValUse(9, SBigInt), ValUse(15, SBigInt))
                        ),
                        BlockValue(
                          Array(
                            ValDef(
                              18,
                              Array(),
                              ByIndex(ValUse(17, SCollectionType(SBox)), ConstantPlaceholder(29, SInt), None)
                            ),
                            ValDef(
                              19,
                              Array(),
                              ArithOp(
                                ArithOp(
                                  ArithOp(ValUse(9, SBigInt), ValUse(15, SBigInt), OpCode @@ (-103.toByte)),
                                  Upcast(ValUse(10, SLong), SBigInt),
                                  OpCode @@ (-100.toByte)
                                ),
                                ValUse(9, SBigInt),
                                OpCode @@ (-99.toByte)
                              )
                            ),
                            ValDef(
                              20,
                              Array(),
                              MethodCall.typed[Value[SCollection[STuple]]](
                                ValUse(18, SBox),
                                SBoxMethods.getMethodByName("tokens"),
                                Array(),
                                Map()
                              )
                            ),
                            ValDef(
                              21,
                              Array(),
                              Slice(
                                ValUse(12, SCollectionType(SPair(SByteArray, SLong))),
                                ConstantPlaceholder(30, SInt),
                                SizeOf(ValUse(12, SCollectionType(SPair(SByteArray, SLong))))
                              )
                            )
                          ),
                          BinAnd(
                            BinAnd(
                              GE(
                                Upcast(ExtractAmount(ValUse(18, SBox)), SBigInt),
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      Upcast(ExtractAmount(ValUse(11, SBox)), SBigInt),
                                      ValUse(19, SBigInt),
                                      OpCode @@ (-100.toByte)
                                    ),
                                    Upcast(ValUse(10, SLong), SBigInt),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  Upcast(ConstantPlaceholder(31, SLong), SBigInt),
                                  OpCode @@ (-103.toByte)
                                )
                              ),
                              EQ(
                                SizeOf(ValUse(20, SCollectionType(SPair(SByteArray, SLong)))),
                                SizeOf(ValUse(21, SCollectionType(SPair(SByteArray, SLong))))
                              )
                            ),
                            ForAll(
                              MethodCall.typed[Value[SCollection[STuple]]](
                                ValUse(21, SCollectionType(SPair(SByteArray, SLong))),
                                SCollectionMethods.getMethodByName("zip").withConcreteTypes(
                                  Map(
                                    STypeVar("IV") -> SPair(SByteArray, SLong),
                                    STypeVar("OV") -> SPair(SByteArray, SLong)
                                  )
                                ),
                                Array(ValUse(20, SCollectionType(SPair(SByteArray, SLong)))),
                                Map()
                              ),
                              FuncValue(
                                Array((22, SPair(SPair(SByteArray, SLong), SPair(SByteArray, SLong)))),
                                BlockValue(
                                  Array(
                                    ValDef(
                                      24,
                                      Array(),
                                      SelectField.typed[Value[STuple]](
                                        ValUse(22, SPair(SPair(SByteArray, SLong), SPair(SByteArray, SLong))),
                                        2.toByte
                                      )
                                    ),
                                    ValDef(
                                      25,
                                      Array(),
                                      SelectField.typed[Value[STuple]](
                                        ValUse(22, SPair(SPair(SByteArray, SLong), SPair(SByteArray, SLong))),
                                        1.toByte
                                      )
                                    )
                                  ),
                                  BinAnd(
                                    EQ(
                                      SelectField.typed[Value[SCollection[SByte.type]]](
                                        ValUse(24, SPair(SByteArray, SLong)),
                                        1.toByte
                                      ),
                                      SelectField.typed[Value[SCollection[SByte.type]]](
                                        ValUse(25, SPair(SByteArray, SLong)),
                                        1.toByte
                                      )
                                    ),
                                    GE(
                                      Upcast(
                                        SelectField.typed[Value[SLong.type]](
                                          ValUse(24, SPair(SByteArray, SLong)),
                                          2.toByte
                                        ),
                                        SBigInt
                                      ),
                                      ArithOp(
                                        ArithOp(
                                          Upcast(
                                            SelectField.typed[Value[SLong.type]](
                                              ValUse(25, SPair(SByteArray, SLong)),
                                              2.toByte
                                            ),
                                            SBigInt
                                          ),
                                          ValUse(19, SBigInt),
                                          OpCode @@ (-100.toByte)
                                        ),
                                        Upcast(ValUse(10, SLong), SBigInt),
                                        OpCode @@ (-99.toByte)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        If(
                          LE(ValUse(9, SBigInt), ValUse(15, SBigInt)),
                          ConstantPlaceholder(32, SBoolean),
                          ConstantPlaceholder(33, SBoolean)
                        )
                      )
                    )
                  ),
                  ConstantPlaceholder(34, SBoolean)
                )
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

