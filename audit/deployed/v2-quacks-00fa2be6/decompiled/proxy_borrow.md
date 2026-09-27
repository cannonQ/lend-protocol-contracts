# `proxy_borrow` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `proxy_borrow` |
| Address (mainnet P2S) | `2H6MZUwvVUd37EZfGgfuKuae1aBXb4cpnd4xCjtCYKTMqK6PDSpPXat9kfNBC8KAZsQrYsif81hZ83zoXKBuxyi5h9KcYjrv3Y8gf8ngE9NiNNMvyQHpGhwTHeH8YBkGBgym8cUv5m64YdFxKKHGbTuhMo28vXxdiq5MCnFEFRqKvf5qJSNKf2RLgoRvCMM12whnjACicRWiEVp4VTtxVEdVK4DembTFd5C8LqkS6D4wwew8BG2zLLUuQsCTz2y1BFmYLmQraSpkQD2VNqAgHyHMTQAciQei8XRrirnKEgifbLA25vL55V52VSZPV6SHg9eKTKsfeqPqiHXK3JANz2bZXm39pTFyvFSCBvPJqWttTxgD4gUhKVhM3Pr8c2ESKcQam2TTGde3WZoNEjvALLHtBeXiSUyBvLCryPbnZsB59TMnRB9rthTa5BPvjJiw4SmXUXPTkF6fUy32avczyjrG9aYgiuE25FRK2EALSTS9eZqGpgY9JcfwK8FfVsSvYucmnhrWpFKymLaWsnMeqywTnuccsqFhFRzfNm5MSqkyrYrDWiosYtdKzkqjPKssEBeVD5Gfr2njxDEbA6CeJbByEb53vEmzq2nCcsCBLTM26HF5PbetWcDPbhvfMUzz3CfrMGc2qPvdTg` |
| Tree length | 474 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `776b94d904ed249875e20a18d87df41eb7fb6b44379d15bf582dd2cc9215c2e4` |
| Constants in table | 21 |
| Template (root expression bytes, placeholders not substituted) | 296 bytes, blake2b256 `af3051b6cd3cfd6dab3d0af273c905572b1bfcc582d2d61fed987ce97c1b1ec2` |

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
| 0 | `Int` | 3 | `0406` |  |
| 1 | `Int` | 0 | `0400` |  |
| 2 | `Long` | 1000000 | `0580897a` |  |
| 3 | `Int` | 1 | `0402` |  |
| 4 | `Int` | 2 | `0404` |  |
| 5 | `Int` | 0 | `0400` |  |
| 6 | `Coll[Byte]` | cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729 (32 bytes) | `0e20cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | blake2b256 of `collateral` tree |
| 7 | `Long` | 1000000 | `0580897a` |  |
| 8 | `Long` | 1000000 | `0580897a` |  |
| 9 | `Int` | 1 | `0402` |  |
| 10 | `Int` | 1 | `0402` |  |
| 11 | `Coll[Byte]` | 1eaf32e2dafc2706e6d5641903eb612637af6a4d970700d452b08e2612b32b39 (32 bytes) | `0e201eaf32e2dafc2706e6d5641903eb612637af6a4d970700d452b08e2612b32b39` | token id `BORROW_TOKEN` |
| 12 | `Int` | 0 | `0400` |  |
| 13 | `Coll[Byte]` | 089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f (32 bytes) | `0e20089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f` | token id `CURRENCY_ID`; token id `CURRENCY_ID_DB` |
| 14 | `Int` | 5 | `040a` |  |
| 15 | `Int` | 10 | `0414` |  |
| 16 | `Int` | 0 | `0400` |  |
| 17 | `Int` | 0 | `0400` |  |
| 18 | `Coll[Byte]` | 00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e (32 bytes) | `0e2000fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e` | token id `POOL_NFT` |
| 19 | `Int` | 0 | `0400` |  |
| 20 | `Int` | 0 | `0400` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Array(
    ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))),
    ValDef(2, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SCollectionType(SLong))))),
    ValDef(3, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R9, SOption(SGroupElement))))
  ),
  SigmaOr(
    Seq(
      BoolToSigmaProp(
        If(
          LT(SizeOf(Outputs), IntConstant(3)),
          BlockValue(
            Seq(ValDef(4, Array(), ByIndex(Outputs, IntConstant(0), None))),
            BinAnd(
              BinAnd(
                BinAnd(
                  EQ(ExtractScriptBytes(ValUse(4, SBox)), ValUse(1, SByteArray)),
                  LE(
                    ArithOp(ExtractAmount(Self), ExtractAmount(ValUse(4, SBox)), OpCode @@ (-103.toByte)),
                    LongConstant(1000000L)
                  )
                ),
                EQ(OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R4, SOption(SByteArray))), ExtractId(Self))
              ),
              GE(Height, OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SInt))))
            )
          ),
          BlockValue(
            Seq(
              ValDef(4, Array(), ByIndex(Outputs, IntConstant(1), None)),
              ValDef(5, Array(), ByIndex(Outputs, IntConstant(2), None)),
              ValDef(
                6,
                Array(),
                MethodCall.typed[Value[SCollection[STuple]]](
                  ValUse(4, SBox),
                  SBoxMethods.getMethodByName("tokens"),
                  Array(),
                  Map()
                )
              ),
              ValDef(7, Array(), ByIndex(ValUse(6, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None))
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
                                  EQ(
                                    CalcBlake2b256(ExtractScriptBytes(ValUse(4, SBox))),
                                    ByteArrayConstant(
                                      Helpers.decodeBytes(
                                        "cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729"
                                      )
                                    )
                                  ),
                                  EQ(ExtractScriptBytes(ValUse(5, SBox)), ValUse(1, SByteArray))
                                ),
                                BinAnd(
                                  EQ(
                                    ExtractAmount(ValUse(4, SBox)),
                                    ArithOp(
                                      ArithOp(ExtractAmount(Self), LongConstant(1000000L), OpCode @@ (-103.toByte)),
                                      LongConstant(1000000L),
                                      OpCode @@ (-103.toByte)
                                    )
                                  ),
                                  EQ(
                                    Slice(
                                      ValUse(6, SCollectionType(SPair(SByteArray, SLong))),
                                      IntConstant(1),
                                      SizeOf(ValUse(6, SCollectionType(SPair(SByteArray, SLong))))
                                    ),
                                    MethodCall.typed[Value[SCollection[STuple]]](
                                      Self,
                                      SBoxMethods.getMethodByName("tokens"),
                                      Array(),
                                      Map()
                                    )
                                  )
                                )
                              ),
                              BinAnd(
                                BinAnd(
                                  GE(
                                    ByIndex(ValUse(2, SCollectionType(SLong)), IntConstant(1), None),
                                    SelectField.typed[Value[SLong.type]](ValUse(7, SPair(SByteArray, SLong)), 2.toByte)
                                  ),
                                  EQ(
                                    SelectField.typed[Value[SCollection[SByte.type]]](
                                      ValUse(7, SPair(SByteArray, SLong)),
                                      1.toByte
                                    ),
                                    ByteArrayConstant(
                                      Helpers.decodeBytes(
                                        "1eaf32e2dafc2706e6d5641903eb612637af6a4d970700d452b08e2612b32b39"
                                      )
                                    )
                                  )
                                ),
                                EQ(
                                  SelectField.typed[Value[SCollection[SByte.type]]](
                                    ByIndex(
                                      MethodCall.typed[Value[SCollection[STuple]]](
                                        ValUse(5, SBox),
                                        SBoxMethods.getMethodByName("tokens"),
                                        Array(),
                                        Map()
                                      ),
                                      IntConstant(0),
                                      None
                                    ),
                                    1.toByte
                                  ),
                                  ByteArrayConstant(
                                    Helpers.decodeBytes(
                                      "089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f"
                                    )
                                  )
                                )
                              )
                            ),
                            EQ(
                              OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R4, SOption(SByteArray))),
                              ValUse(1, SByteArray)
                            )
                          ),
                          EQ(
                            OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R8, SOption(SByteArray))),
                            OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))
                          )
                        ),
                        LE(
                          ByIndex(
                            OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R9, SOption(SCollectionType(SLong)))),
                            IntConstant(5),
                            None
                          ),
                          Upcast(ArithOp(Height, IntConstant(10), OpCode @@ (-102.toByte)), SLong)
                        )
                      ),
                      EQ(
                        OptionGet(ExtractRegisterAs(Self, ErgoBox.R8, SOption(SByteArray))),
                        OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R7, SOption(SByteArray)))
                      )
                    ),
                    EQ(
                      ValUse(3, SGroupElement),
                      OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R5, SOption(SGroupElement)))
                    )
                  ),
                  EQ(
                    SelectField.typed[Value[SCollection[SByte.type]]](
                      ByIndex(
                        MethodCall.typed[Value[SCollection[STuple]]](
                          ByIndex(Inputs, IntConstant(0), None),
                          SBoxMethods.getMethodByName("tokens"),
                          Array(),
                          Map()
                        ),
                        IntConstant(0),
                        None
                      ),
                      1.toByte
                    ),
                    ByteArrayConstant(
                      Helpers.decodeBytes("00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e")
                    )
                  )
                ),
                EQ(
                  SelectField.typed[Value[SLong.type]](
                    ByIndex(
                      MethodCall.typed[Value[SCollection[STuple]]](
                        ValUse(5, SBox),
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      ),
                      IntConstant(0),
                      None
                    ),
                    2.toByte
                  ),
                  ByIndex(ValUse(2, SCollectionType(SLong)), IntConstant(0), None)
                )
              ),
              EQ(OptionGet(ExtractRegisterAs(ValUse(5, SBox), ErgoBox.R4, SOption(SByteArray))), ExtractId(Self))
            )
          )
        )
      ),
      CreateProveDlog(ValUse(3, SGroupElement))
    )
  )
)
```

`ArithOp` opcode legend (names from `sigma.serialization.OpCodes`):

| As printed | Byte | sigmastate name |
|---|---|---|
| `OpCode @@ (-103.toByte)` | 0x99 | MinusCode (-) |
| `OpCode @@ (-102.toByte)` | 0x9a | PlusCode (+) |

### 3b. As stored: full ErgoTree with `ConstantPlaceholder(i, T)` nodes

`SigmaPPrint(tree)`: header, constant vector, and root exactly as deserialized (placeholders not substituted).

<details><summary>Show</summary>

```scala
new ErgoTree(
  16.toByte,
  Vector(
    IntConstant(3),
    IntConstant(0),
    LongConstant(1000000L),
    IntConstant(1),
    IntConstant(2),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729")),
    LongConstant(1000000L),
    LongConstant(1000000L),
    IntConstant(1),
    IntConstant(1),
    ByteArrayConstant(Helpers.decodeBytes("1eaf32e2dafc2706e6d5641903eb612637af6a4d970700d452b08e2612b32b39")),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f")),
    IntConstant(5),
    IntConstant(10),
    IntConstant(0),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e")),
    IntConstant(0),
    IntConstant(0)
  ),
  Right(
    BlockValue(
      Array(
        ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))),
        ValDef(2, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SCollectionType(SLong))))),
        ValDef(3, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R9, SOption(SGroupElement))))
      ),
      SigmaOr(
        Array(
          BoolToSigmaProp(
            If(
              LT(SizeOf(Outputs), ConstantPlaceholder(0, SInt)),
              BlockValue(
                Array(ValDef(4, Array(), ByIndex(Outputs, ConstantPlaceholder(1, SInt), None))),
                BinAnd(
                  BinAnd(
                    BinAnd(
                      EQ(ExtractScriptBytes(ValUse(4, SBox)), ValUse(1, SByteArray)),
                      LE(
                        ArithOp(ExtractAmount(Self), ExtractAmount(ValUse(4, SBox)), OpCode @@ (-103.toByte)),
                        ConstantPlaceholder(2, SLong)
                      )
                    ),
                    EQ(OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R4, SOption(SByteArray))), ExtractId(Self))
                  ),
                  GE(Height, OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SInt))))
                )
              ),
              BlockValue(
                Array(
                  ValDef(4, Array(), ByIndex(Outputs, ConstantPlaceholder(3, SInt), None)),
                  ValDef(5, Array(), ByIndex(Outputs, ConstantPlaceholder(4, SInt), None)),
                  ValDef(
                    6,
                    Array(),
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(4, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    )
                  ),
                  ValDef(
                    7,
                    Array(),
                    ByIndex(ValUse(6, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(5, SInt), None)
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
                                      EQ(
                                        CalcBlake2b256(ExtractScriptBytes(ValUse(4, SBox))),
                                        ConstantPlaceholder(6, SByteArray)
                                      ),
                                      EQ(ExtractScriptBytes(ValUse(5, SBox)), ValUse(1, SByteArray))
                                    ),
                                    BinAnd(
                                      EQ(
                                        ExtractAmount(ValUse(4, SBox)),
                                        ArithOp(
                                          ArithOp(
                                            ExtractAmount(Self),
                                            ConstantPlaceholder(7, SLong),
                                            OpCode @@ (-103.toByte)
                                          ),
                                          ConstantPlaceholder(8, SLong),
                                          OpCode @@ (-103.toByte)
                                        )
                                      ),
                                      EQ(
                                        Slice(
                                          ValUse(6, SCollectionType(SPair(SByteArray, SLong))),
                                          ConstantPlaceholder(9, SInt),
                                          SizeOf(ValUse(6, SCollectionType(SPair(SByteArray, SLong))))
                                        ),
                                        MethodCall.typed[Value[SCollection[STuple]]](
                                          Self,
                                          SBoxMethods.getMethodByName("tokens"),
                                          Array(),
                                          Map()
                                        )
                                      )
                                    )
                                  ),
                                  BinAnd(
                                    BinAnd(
                                      GE(
                                        ByIndex(ValUse(2, SCollectionType(SLong)), ConstantPlaceholder(10, SInt), None),
                                        SelectField.typed[Value[SLong.type]](
                                          ValUse(7, SPair(SByteArray, SLong)),
                                          2.toByte
                                        )
                                      ),
                                      EQ(
                                        SelectField.typed[Value[SCollection[SByte.type]]](
                                          ValUse(7, SPair(SByteArray, SLong)),
                                          1.toByte
                                        ),
                                        ConstantPlaceholder(11, SByteArray)
                                      )
                                    ),
                                    EQ(
                                      SelectField.typed[Value[SCollection[SByte.type]]](
                                        ByIndex(
                                          MethodCall.typed[Value[SCollection[STuple]]](
                                            ValUse(5, SBox),
                                            SBoxMethods.getMethodByName("tokens"),
                                            Array(),
                                            Map()
                                          ),
                                          ConstantPlaceholder(12, SInt),
                                          None
                                        ),
                                        1.toByte
                                      ),
                                      ConstantPlaceholder(13, SByteArray)
                                    )
                                  )
                                ),
                                EQ(
                                  OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R4, SOption(SByteArray))),
                                  ValUse(1, SByteArray)
                                )
                              ),
                              EQ(
                                OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R8, SOption(SByteArray))),
                                OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))
                              )
                            ),
                            LE(
                              ByIndex(
                                OptionGet(
                                  ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R9, SOption(SCollectionType(SLong)))
                                ),
                                ConstantPlaceholder(14, SInt),
                                None
                              ),
                              Upcast(ArithOp(Height, ConstantPlaceholder(15, SInt), OpCode @@ (-102.toByte)), SLong)
                            )
                          ),
                          EQ(
                            OptionGet(ExtractRegisterAs(Self, ErgoBox.R8, SOption(SByteArray))),
                            OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R7, SOption(SByteArray)))
                          )
                        ),
                        EQ(
                          ValUse(3, SGroupElement),
                          OptionGet(ExtractRegisterAs(ValUse(4, SBox), ErgoBox.R5, SOption(SGroupElement)))
                        )
                      ),
                      EQ(
                        SelectField.typed[Value[SCollection[SByte.type]]](
                          ByIndex(
                            MethodCall.typed[Value[SCollection[STuple]]](
                              ByIndex(Inputs, ConstantPlaceholder(16, SInt), None),
                              SBoxMethods.getMethodByName("tokens"),
                              Array(),
                              Map()
                            ),
                            ConstantPlaceholder(17, SInt),
                            None
                          ),
                          1.toByte
                        ),
                        ConstantPlaceholder(18, SByteArray)
                      )
                    ),
                    EQ(
                      SelectField.typed[Value[SLong.type]](
                        ByIndex(
                          MethodCall.typed[Value[SCollection[STuple]]](
                            ValUse(5, SBox),
                            SBoxMethods.getMethodByName("tokens"),
                            Array(),
                            Map()
                          ),
                          ConstantPlaceholder(19, SInt),
                          None
                        ),
                        2.toByte
                      ),
                      ByIndex(ValUse(2, SCollectionType(SLong)), ConstantPlaceholder(20, SInt), None)
                    )
                  ),
                  EQ(OptionGet(ExtractRegisterAs(ValUse(5, SBox), ErgoBox.R4, SOption(SByteArray))), ExtractId(Self))
                )
              )
            )
          ),
          CreateProveDlog(ValUse(3, SGroupElement))
        )
      )
    )
  )
)
```

</details>

## 4. How produced

sigma-state 6.0.6 (`sigma-state_2.12-6.0.6.jar` + `sigma-state_2.12-6.0.6-tests.jar` for `sigmastate.helpers.SigmaPPrint`), `pprint_2.12-0.6.3.jar`, Scala 2.12.21, Java 17.0.19; ergo-appkit not used. Command: `scala-cli run --server=false --jar "$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')" decompile.scala -- test-frontend/v2-latest-quacks-00fa2be6.json <out-dir> decompile.scala` (script source in `README.md`).

