# `interest` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `interest` |
| Address (mainnet P2S) | `zxFnr6XrdtpugAYXqkLFbKFM3xDFvBb634noBhaqkcqcrbTwJEwVvHhCFAYhvt1wJzEPSRr4mXzmRC4g1TuZfxqq7KzF4N4p1qC42L6gpDPznENFERWUdX9pXJGgdFkhWACR2WenxxhNgKSgdpptf1hZsG6ZQFkbnbp8RzEdBPex32uDfsQYskX7jjiVrwd9qCzX1KTCFv2JWVBSgzyGSvdy5JExop1YYJQUfqED1NVjckzKuVin8nuY6YyWrdA7FBy18wWtUPKWWsCqXdDia1uqtdpK7JAqmfgPQo81zx8H276nqpXRVSfsHW6nEVWLX9au195uPQEscX3uBY4f1QzUtJG45jejT3AonWAhCArwzVFYNiFqPdaBbCJQyTrvpJqzRtUraiWTNWejiHQdS8AT2TkNZQ2NBxCRx5bPmYoD5AZu78uBHjfyhfwfcWaMzrrZyxphMR6ZSfQY3FuSWHPeEqmqLcXESei7saeraLVCW8D8QK1JuhMX8tRiYH3CPZu3kK2k3E5pkU9i3xJTJYeeQqVtQQNQJvWyCyC8AGZSp2ZCGcAjz1CDZ5dtqhmjLVwPcz99nSFpcKS8T5cRHTC893kxVujArVNCuJ5ua3SLqGVdNLQwdx4WBGZcjoHczCH8kcewSAfKpHQpndU9izuUfV9KuEp8qXMemPhnSPVf5D7MdbhJLfXoUmySe3Nf8aDDavfVNUoSeTxxz7oncwuhmpcC65p` |
| Tree length | 534 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `46cf8c6d44aa02d089272b2de6f0cb884a8937277f6d64df0d73a67b42d65c6e` |
| Constants in table | 20 |
| Template (root expression bytes, placeholders not substituted) | 407 bytes, blake2b256 `49e5c6017deda9147eda33a9b93e01b09c96a0dd4e04a998a2e0911cd5a02d4a` |

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
| 1 | `Long` | 100000000 | `058084af5f` |  |
| 2 | `Int` | 1 | `0402` |  |
| 3 | `Int` | 0 | `0400` |  |
| 4 | `Long` | 9000000000000000 | `058080d4aff9dcfc1f` |  |
| 5 | `Int` | 2 | `0404` |  |
| 6 | `Long` | 10000000000000000 | `05808088fccdbcc323` |  |
| 7 | `Int` | 3 | `0406` |  |
| 8 | `Int` | 2000000 | `048092f401` |  |
| 9 | `Int` | 0 | `0400` |  |
| 10 | `Int` | 1 | `0402` |  |
| 11 | `Int` | 2 | `0404` |  |
| 12 | `Int` | 3 | `0406` |  |
| 13 | `Int` | 4 | `0408` |  |
| 14 | `Int` | 5 | `040a` |  |
| 15 | `Int` | 120 | `04f001` |  |
| 16 | `Int` | 0 | `0400` |  |
| 17 | `Coll[Byte]` | 00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e (32 bytes) | `0e2000fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e` | token id `POOL_NFT` |
| 18 | `Int` | 0 | `0400` |  |
| 19 | `Coll[Byte]` | 43d2c214ff7552074418317e860fb3d27dd2043679767f840fcbb681abfd0f3e (32 bytes) | `0e2043d2c214ff7552074418317e860fb3d27dd2043679767f840fcbb681abfd0f3e` | token id `INTEREST_PARAMETER_NFT` |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Seq(
    ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SLong)))),
    ValDef(2, Array(), ByIndex(Outputs, IntConstant(0), None)),
    ValDef(3, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SBigInt)))),
    ValDef(4, Array(), LongConstant(100000000L)),
    ValDef(
      5,
      Array(),
      MethodCall.typed[Value[SCollection[SBox.type]]](
        Context,
        SContextMethods.getMethodByName("dataInputs"),
        Array(),
        Map()
      )
    ),
    ValDef(6, Array(), ByIndex(ValUse(5, SCollectionType(SBox)), IntConstant(1), None)),
    ValDef(7, Array(), OptionGet(ExtractRegisterAs(ValUse(6, SBox), ErgoBox.R4, SOption(SCollectionType(SLong))))),
    ValDef(
      8,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](
        ByIndex(ValUse(5, SCollectionType(SBox)), IntConstant(0), None),
        SBoxMethods.getMethodByName("tokens"),
        Array(),
        Map()
      )
    ),
    ValDef(
      9,
      Array(),
      ArithOp(
        ArithOp(
          Upcast(
            ArithOp(
              LongConstant(9000000000000000L),
              SelectField.typed[Value[SLong.type]](
                ByIndex(ValUse(8, SCollectionType(SPair(SByteArray, SLong))), IntConstant(2), None),
                2.toByte
              ),
              OpCode @@ (-103.toByte)
            ),
            SBigInt
          ),
          ValUse(3, SBigInt),
          OpCode @@ (-100.toByte)
        ),
        Upcast(LongConstant(10000000000000000L), SBigInt),
        OpCode @@ (-99.toByte)
      )
    ),
    ValDef(
      10,
      Array(),
      ArithOp(
        ArithOp(Upcast(ValUse(4, SLong), SBigInt), ValUse(9, SBigInt), OpCode @@ (-100.toByte)),
        ArithOp(
          Upcast(
            SelectField.typed[Value[SLong.type]](
              ByIndex(ValUse(8, SCollectionType(SPair(SByteArray, SLong))), IntConstant(3), None),
              2.toByte
            ),
            SBigInt
          ),
          ValUse(9, SBigInt),
          OpCode @@ (-102.toByte)
        ),
        OpCode @@ (-99.toByte)
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
                    GE(Upcast(Height, SLong), ValUse(1, SLong)),
                    EQ(ExtractScriptBytes(Self), ExtractScriptBytes(ValUse(2, SBox)))
                  ),
                  GE(
                    ExtractAmount(ValUse(2, SBox)),
                    ArithOp(ExtractAmount(Self), Upcast(IntConstant(2000000), SLong), OpCode @@ (-103.toByte))
                  )
                ),
                EQ(
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(2, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  ),
                  MethodCall.typed[Value[SCollection[STuple]]](
                    Self,
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  )
                )
              ),
              EQ(
                OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R5, SOption(SBigInt))),
                ArithOp(
                  ArithOp(
                    ValUse(3, SBigInt),
                    ArithOp(
                      Upcast(ValUse(4, SLong), SBigInt),
                      ArithOp(
                        ArithOp(
                          ArithOp(
                            ArithOp(
                              ArithOp(
                                Upcast(ByIndex(ValUse(7, SCollectionType(SLong)), IntConstant(0), None), SBigInt),
                                ArithOp(
                                  ArithOp(
                                    Upcast(ByIndex(ValUse(7, SCollectionType(SLong)), IntConstant(1), None), SBigInt),
                                    ValUse(10, SBigInt),
                                    OpCode @@ (-100.toByte)
                                  ),
                                  Upcast(ValUse(4, SLong), SBigInt),
                                  OpCode @@ (-99.toByte)
                                ),
                                OpCode @@ (-102.toByte)
                              ),
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      Upcast(ByIndex(ValUse(7, SCollectionType(SLong)), IntConstant(2), None), SBigInt),
                                      ValUse(10, SBigInt),
                                      OpCode @@ (-100.toByte)
                                    ),
                                    Upcast(ValUse(4, SLong), SBigInt),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  ValUse(10, SBigInt),
                                  OpCode @@ (-100.toByte)
                                ),
                                Upcast(ValUse(4, SLong), SBigInt),
                                OpCode @@ (-99.toByte)
                              ),
                              OpCode @@ (-102.toByte)
                            ),
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        Upcast(
                                          ByIndex(ValUse(7, SCollectionType(SLong)), IntConstant(3), None),
                                          SBigInt
                                        ),
                                        ValUse(10, SBigInt),
                                        OpCode @@ (-100.toByte)
                                      ),
                                      Upcast(ValUse(4, SLong), SBigInt),
                                      OpCode @@ (-99.toByte)
                                    ),
                                    ValUse(10, SBigInt),
                                    OpCode @@ (-100.toByte)
                                  ),
                                  Upcast(ValUse(4, SLong), SBigInt),
                                  OpCode @@ (-99.toByte)
                                ),
                                ValUse(10, SBigInt),
                                OpCode @@ (-100.toByte)
                              ),
                              Upcast(ValUse(4, SLong), SBigInt),
                              OpCode @@ (-99.toByte)
                            ),
                            OpCode @@ (-102.toByte)
                          ),
                          ArithOp(
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        ArithOp(
                                          Upcast(
                                            ByIndex(ValUse(7, SCollectionType(SLong)), IntConstant(4), None),
                                            SBigInt
                                          ),
                                          ValUse(10, SBigInt),
                                          OpCode @@ (-100.toByte)
                                        ),
                                        Upcast(ValUse(4, SLong), SBigInt),
                                        OpCode @@ (-99.toByte)
                                      ),
                                      ValUse(10, SBigInt),
                                      OpCode @@ (-100.toByte)
                                    ),
                                    Upcast(ValUse(4, SLong), SBigInt),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  ValUse(10, SBigInt),
                                  OpCode @@ (-100.toByte)
                                ),
                                Upcast(ValUse(4, SLong), SBigInt),
                                OpCode @@ (-99.toByte)
                              ),
                              ValUse(10, SBigInt),
                              OpCode @@ (-100.toByte)
                            ),
                            Upcast(ValUse(4, SLong), SBigInt),
                            OpCode @@ (-99.toByte)
                          ),
                          OpCode @@ (-102.toByte)
                        ),
                        ArithOp(
                          ArithOp(
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        ArithOp(
                                          ArithOp(
                                            Upcast(
                                              ByIndex(ValUse(7, SCollectionType(SLong)), IntConstant(5), None),
                                              SBigInt
                                            ),
                                            ValUse(10, SBigInt),
                                            OpCode @@ (-100.toByte)
                                          ),
                                          Upcast(ValUse(4, SLong), SBigInt),
                                          OpCode @@ (-99.toByte)
                                        ),
                                        ValUse(10, SBigInt),
                                        OpCode @@ (-100.toByte)
                                      ),
                                      Upcast(ValUse(4, SLong), SBigInt),
                                      OpCode @@ (-99.toByte)
                                    ),
                                    ValUse(10, SBigInt),
                                    OpCode @@ (-100.toByte)
                                  ),
                                  Upcast(ValUse(4, SLong), SBigInt),
                                  OpCode @@ (-99.toByte)
                                ),
                                ValUse(10, SBigInt),
                                OpCode @@ (-100.toByte)
                              ),
                              Upcast(ValUse(4, SLong), SBigInt),
                              OpCode @@ (-99.toByte)
                            ),
                            ValUse(10, SBigInt),
                            OpCode @@ (-100.toByte)
                          ),
                          Upcast(ValUse(4, SLong), SBigInt),
                          OpCode @@ (-99.toByte)
                        ),
                        OpCode @@ (-102.toByte)
                      ),
                      OpCode @@ (-102.toByte)
                    ),
                    OpCode @@ (-100.toByte)
                  ),
                  Upcast(ValUse(4, SLong), SBigInt),
                  OpCode @@ (-99.toByte)
                )
              )
            ),
            EQ(
              OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SLong))),
              ArithOp(ValUse(1, SLong), Upcast(IntConstant(120), SLong), OpCode @@ (-102.toByte))
            )
          ),
          EQ(
            SelectField.typed[Value[SCollection[SByte.type]]](
              ByIndex(ValUse(8, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
              1.toByte
            ),
            ByteArrayConstant(Helpers.decodeBytes("00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e"))
          )
        ),
        EQ(
          SelectField.typed[Value[SCollection[SByte.type]]](
            ByIndex(
              MethodCall.typed[Value[SCollection[STuple]]](
                ValUse(6, SBox),
                SBoxMethods.getMethodByName("tokens"),
                Array(),
                Map()
              ),
              IntConstant(0),
              None
            ),
            1.toByte
          ),
          ByteArrayConstant(Helpers.decodeBytes("43d2c214ff7552074418317e860fb3d27dd2043679767f840fcbb681abfd0f3e"))
        )
      ),
      BinAnd(
        BinAnd(
          BinAnd(
            OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R6, SOption(SBoolean))),
            OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SBoolean)))
          ),
          OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R8, SOption(SBoolean)))
        ),
        OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R9, SOption(SBoolean)))
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
  16.toByte,
  Vector(
    IntConstant(0),
    LongConstant(100000000L),
    IntConstant(1),
    IntConstant(0),
    LongConstant(9000000000000000L),
    IntConstant(2),
    LongConstant(10000000000000000L),
    IntConstant(3),
    IntConstant(2000000),
    IntConstant(0),
    IntConstant(1),
    IntConstant(2),
    IntConstant(3),
    IntConstant(4),
    IntConstant(5),
    IntConstant(120),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e")),
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("43d2c214ff7552074418317e860fb3d27dd2043679767f840fcbb681abfd0f3e"))
  ),
  Right(
    BlockValue(
      Array(
        ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SLong)))),
        ValDef(2, Array(), ByIndex(Outputs, ConstantPlaceholder(0, SInt), None)),
        ValDef(3, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SBigInt)))),
        ValDef(4, Array(), ConstantPlaceholder(1, SLong)),
        ValDef(
          5,
          Array(),
          MethodCall.typed[Value[SCollection[SBox.type]]](
            Context,
            SContextMethods.getMethodByName("dataInputs"),
            Array(),
            Map()
          )
        ),
        ValDef(6, Array(), ByIndex(ValUse(5, SCollectionType(SBox)), ConstantPlaceholder(2, SInt), None)),
        ValDef(7, Array(), OptionGet(ExtractRegisterAs(ValUse(6, SBox), ErgoBox.R4, SOption(SCollectionType(SLong))))),
        ValDef(
          8,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](
            ByIndex(ValUse(5, SCollectionType(SBox)), ConstantPlaceholder(3, SInt), None),
            SBoxMethods.getMethodByName("tokens"),
            Array(),
            Map()
          )
        ),
        ValDef(
          9,
          Array(),
          ArithOp(
            ArithOp(
              Upcast(
                ArithOp(
                  ConstantPlaceholder(4, SLong),
                  SelectField.typed[Value[SLong.type]](
                    ByIndex(ValUse(8, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(5, SInt), None),
                    2.toByte
                  ),
                  OpCode @@ (-103.toByte)
                ),
                SBigInt
              ),
              ValUse(3, SBigInt),
              OpCode @@ (-100.toByte)
            ),
            Upcast(ConstantPlaceholder(6, SLong), SBigInt),
            OpCode @@ (-99.toByte)
          )
        ),
        ValDef(
          10,
          Array(),
          ArithOp(
            ArithOp(Upcast(ValUse(4, SLong), SBigInt), ValUse(9, SBigInt), OpCode @@ (-100.toByte)),
            ArithOp(
              Upcast(
                SelectField.typed[Value[SLong.type]](
                  ByIndex(ValUse(8, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(7, SInt), None),
                  2.toByte
                ),
                SBigInt
              ),
              ValUse(9, SBigInt),
              OpCode @@ (-102.toByte)
            ),
            OpCode @@ (-99.toByte)
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
                        GE(Upcast(Height, SLong), ValUse(1, SLong)),
                        EQ(ExtractScriptBytes(Self), ExtractScriptBytes(ValUse(2, SBox)))
                      ),
                      GE(
                        ExtractAmount(ValUse(2, SBox)),
                        ArithOp(
                          ExtractAmount(Self),
                          Upcast(ConstantPlaceholder(8, SInt), SLong),
                          OpCode @@ (-103.toByte)
                        )
                      )
                    ),
                    EQ(
                      MethodCall.typed[Value[SCollection[STuple]]](
                        ValUse(2, SBox),
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      ),
                      MethodCall.typed[Value[SCollection[STuple]]](
                        Self,
                        SBoxMethods.getMethodByName("tokens"),
                        Array(),
                        Map()
                      )
                    )
                  ),
                  EQ(
                    OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R5, SOption(SBigInt))),
                    ArithOp(
                      ArithOp(
                        ValUse(3, SBigInt),
                        ArithOp(
                          Upcast(ValUse(4, SLong), SBigInt),
                          ArithOp(
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    Upcast(
                                      ByIndex(ValUse(7, SCollectionType(SLong)), ConstantPlaceholder(9, SInt), None),
                                      SBigInt
                                    ),
                                    ArithOp(
                                      ArithOp(
                                        Upcast(
                                          ByIndex(
                                            ValUse(7, SCollectionType(SLong)),
                                            ConstantPlaceholder(10, SInt),
                                            None
                                          ),
                                          SBigInt
                                        ),
                                        ValUse(10, SBigInt),
                                        OpCode @@ (-100.toByte)
                                      ),
                                      Upcast(ValUse(4, SLong), SBigInt),
                                      OpCode @@ (-99.toByte)
                                    ),
                                    OpCode @@ (-102.toByte)
                                  ),
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        ArithOp(
                                          Upcast(
                                            ByIndex(
                                              ValUse(7, SCollectionType(SLong)),
                                              ConstantPlaceholder(11, SInt),
                                              None
                                            ),
                                            SBigInt
                                          ),
                                          ValUse(10, SBigInt),
                                          OpCode @@ (-100.toByte)
                                        ),
                                        Upcast(ValUse(4, SLong), SBigInt),
                                        OpCode @@ (-99.toByte)
                                      ),
                                      ValUse(10, SBigInt),
                                      OpCode @@ (-100.toByte)
                                    ),
                                    Upcast(ValUse(4, SLong), SBigInt),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  OpCode @@ (-102.toByte)
                                ),
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        ArithOp(
                                          ArithOp(
                                            Upcast(
                                              ByIndex(
                                                ValUse(7, SCollectionType(SLong)),
                                                ConstantPlaceholder(12, SInt),
                                                None
                                              ),
                                              SBigInt
                                            ),
                                            ValUse(10, SBigInt),
                                            OpCode @@ (-100.toByte)
                                          ),
                                          Upcast(ValUse(4, SLong), SBigInt),
                                          OpCode @@ (-99.toByte)
                                        ),
                                        ValUse(10, SBigInt),
                                        OpCode @@ (-100.toByte)
                                      ),
                                      Upcast(ValUse(4, SLong), SBigInt),
                                      OpCode @@ (-99.toByte)
                                    ),
                                    ValUse(10, SBigInt),
                                    OpCode @@ (-100.toByte)
                                  ),
                                  Upcast(ValUse(4, SLong), SBigInt),
                                  OpCode @@ (-99.toByte)
                                ),
                                OpCode @@ (-102.toByte)
                              ),
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        ArithOp(
                                          ArithOp(
                                            ArithOp(
                                              Upcast(
                                                ByIndex(
                                                  ValUse(7, SCollectionType(SLong)),
                                                  ConstantPlaceholder(13, SInt),
                                                  None
                                                ),
                                                SBigInt
                                              ),
                                              ValUse(10, SBigInt),
                                              OpCode @@ (-100.toByte)
                                            ),
                                            Upcast(ValUse(4, SLong), SBigInt),
                                            OpCode @@ (-99.toByte)
                                          ),
                                          ValUse(10, SBigInt),
                                          OpCode @@ (-100.toByte)
                                        ),
                                        Upcast(ValUse(4, SLong), SBigInt),
                                        OpCode @@ (-99.toByte)
                                      ),
                                      ValUse(10, SBigInt),
                                      OpCode @@ (-100.toByte)
                                    ),
                                    Upcast(ValUse(4, SLong), SBigInt),
                                    OpCode @@ (-99.toByte)
                                  ),
                                  ValUse(10, SBigInt),
                                  OpCode @@ (-100.toByte)
                                ),
                                Upcast(ValUse(4, SLong), SBigInt),
                                OpCode @@ (-99.toByte)
                              ),
                              OpCode @@ (-102.toByte)
                            ),
                            ArithOp(
                              ArithOp(
                                ArithOp(
                                  ArithOp(
                                    ArithOp(
                                      ArithOp(
                                        ArithOp(
                                          ArithOp(
                                            ArithOp(
                                              ArithOp(
                                                Upcast(
                                                  ByIndex(
                                                    ValUse(7, SCollectionType(SLong)),
                                                    ConstantPlaceholder(14, SInt),
                                                    None
                                                  ),
                                                  SBigInt
                                                ),
                                                ValUse(10, SBigInt),
                                                OpCode @@ (-100.toByte)
                                              ),
                                              Upcast(ValUse(4, SLong), SBigInt),
                                              OpCode @@ (-99.toByte)
                                            ),
                                            ValUse(10, SBigInt),
                                            OpCode @@ (-100.toByte)
                                          ),
                                          Upcast(ValUse(4, SLong), SBigInt),
                                          OpCode @@ (-99.toByte)
                                        ),
                                        ValUse(10, SBigInt),
                                        OpCode @@ (-100.toByte)
                                      ),
                                      Upcast(ValUse(4, SLong), SBigInt),
                                      OpCode @@ (-99.toByte)
                                    ),
                                    ValUse(10, SBigInt),
                                    OpCode @@ (-100.toByte)
                                  ),
                                  Upcast(ValUse(4, SLong), SBigInt),
                                  OpCode @@ (-99.toByte)
                                ),
                                ValUse(10, SBigInt),
                                OpCode @@ (-100.toByte)
                              ),
                              Upcast(ValUse(4, SLong), SBigInt),
                              OpCode @@ (-99.toByte)
                            ),
                            OpCode @@ (-102.toByte)
                          ),
                          OpCode @@ (-102.toByte)
                        ),
                        OpCode @@ (-100.toByte)
                      ),
                      Upcast(ValUse(4, SLong), SBigInt),
                      OpCode @@ (-99.toByte)
                    )
                  )
                ),
                EQ(
                  OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SLong))),
                  ArithOp(ValUse(1, SLong), Upcast(ConstantPlaceholder(15, SInt), SLong), OpCode @@ (-102.toByte))
                )
              ),
              EQ(
                SelectField.typed[Value[SCollection[SByte.type]]](
                  ByIndex(ValUse(8, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(16, SInt), None),
                  1.toByte
                ),
                ConstantPlaceholder(17, SByteArray)
              )
            ),
            EQ(
              SelectField.typed[Value[SCollection[SByte.type]]](
                ByIndex(
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(6, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  ),
                  ConstantPlaceholder(18, SInt),
                  None
                ),
                1.toByte
              ),
              ConstantPlaceholder(19, SByteArray)
            )
          ),
          BinAnd(
            BinAnd(
              BinAnd(
                OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R6, SOption(SBoolean))),
                OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SBoolean)))
              ),
              OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R8, SOption(SBoolean)))
            ),
            OptionGet(ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R9, SOption(SBoolean)))
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

