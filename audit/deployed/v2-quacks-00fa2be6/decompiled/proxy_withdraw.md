# `proxy_withdraw` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `proxy_withdraw` |
| Address (mainnet P2S) | `3rEnDaoVvvfRygpGSe76qKfAi1AHLHH8xH28rWysgHDT1TwUEcY87z8NhN7TPjshdUXCXmSxfqH3U9VTH7PoSnfVp9J9CCKKUWWtb4SQbz4SetmN7qk2JNNrMoBUfaqY2YwyVJyvjx3hszibW8wJhc8eCECpCRGUTTmrjFRvQHUYRhP47DBAVWPVgkQeMDU46rw6jYBR2aooRtyjHZKsbc8WAoNjPpdmNYjv9JtJmrMNDnsX7rWqmWWsGuv953SipQsAsAZhxezGLHGEuPKKAFruJn1Pbus2N6qT3ZkP` |
| Tree length | 212 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` |
| Constants in table | 14 |
| Template (root expression bytes, placeholders not substituted) | 180 bytes, blake2b256 `289c47f7e1c40d6e109166b28e6a367ba7e757538c384b958d4e8a3e0cc1934c` |

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
| 3 | `Boolean` | false | `0100` |  |
| 4 | `Int` | 0 | `0400` |  |
| 5 | `Int` | 0 | `0400` |  |
| 6 | `Int` | 0 | `0400` |  |
| 7 | `Boolean` | false | `0100` |  |
| 8 | `Boolean` | true | `0101` |  |
| 9 | `Boolean` | true | `0101` |  |
| 10 | `Boolean` | true | `0101` |  |
| 11 | `Int` | 2 | `0404` |  |
| 12 | `Int` | 0 | `0400` |  |
| 13 | `Boolean` | false | `0100` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BoolToSigmaProp(
  BlockValue(
    Array(ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray))))),
    If(
      LT(SizeOf(Outputs), IntConstant(3)),
      BlockValue(
        Seq(
          ValDef(2, Array(), ByIndex(Outputs, IntConstant(0), None)),
          ValDef(3, Array(), ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SByteArray))),
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
          BinAnd(
            BinAnd(
              BinAnd(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      EQ(ExtractScriptBytes(ValUse(2, SBox)), ValUse(1, SByteArray)),
                      LE(
                        ArithOp(ExtractAmount(Self), ExtractAmount(ValUse(2, SBox)), OpCode @@ (-103.toByte)),
                        LongConstant(1000000L)
                      )
                    ),
                    If(
                      OptionIsDefined(ValUse(3, SOption(SByteArray))),
                      EQ(OptionGet(ValUse(3, SOption(SByteArray))), ExtractId(Self)),
                      FalseLeaf
                    )
                  ),
                  GE(Upcast(Height, SLong), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SLong))))
                ),
                If(
                  NEQ(SizeOf(ValUse(4, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
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
                  ),
                  FalseLeaf
                )
              ),
              TrueLeaf
            ),
            TrueLeaf
          ),
          TrueLeaf
        )
      ),
      BlockValue(
        Seq(
          ValDef(2, Array(), ByIndex(Outputs, IntConstant(2), None)),
          ValDef(
            3,
            Array(),
            ByIndex(
              MethodCall.typed[Value[SCollection[STuple]]](
                ValUse(2, SBox),
                SBoxMethods.getMethodByName("tokens"),
                Array(),
                Map()
              ),
              IntConstant(0),
              None
            )
          ),
          ValDef(4, Array(), ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SByteArray)))
        ),
        BinAnd(
          BinAnd(
            EQ(ExtractScriptBytes(ValUse(2, SBox)), ValUse(1, SByteArray)),
            BinAnd(
              GE(
                SelectField.typed[Value[SLong.type]](ValUse(3, SPair(SByteArray, SLong)), 2.toByte),
                OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SLong)))
              ),
              EQ(
                SelectField.typed[Value[SCollection[SByte.type]]](ValUse(3, SPair(SByteArray, SLong)), 1.toByte),
                OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))
              )
            )
          ),
          If(
            OptionIsDefined(ValUse(4, SOption(SByteArray))),
            EQ(OptionGet(ValUse(4, SOption(SByteArray))), ExtractId(Self)),
            FalseLeaf
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
    FalseLeaf,
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    FalseLeaf,
    TrueLeaf,
    TrueLeaf,
    TrueLeaf,
    IntConstant(2),
    IntConstant(0),
    FalseLeaf
  ),
  Right(
    BoolToSigmaProp(
      BlockValue(
        Array(ValDef(1, Array(), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray))))),
        If(
          LT(SizeOf(Outputs), ConstantPlaceholder(0, SInt)),
          BlockValue(
            Array(
              ValDef(2, Array(), ByIndex(Outputs, ConstantPlaceholder(1, SInt), None)),
              ValDef(3, Array(), ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R4, SOption(SByteArray))),
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
              BinAnd(
                BinAnd(
                  BinAnd(
                    BinAnd(
                      BinAnd(
                        BinAnd(
                          EQ(ExtractScriptBytes(ValUse(2, SBox)), ValUse(1, SByteArray)),
                          LE(
                            ArithOp(ExtractAmount(Self), ExtractAmount(ValUse(2, SBox)), OpCode @@ (-103.toByte)),
                            ConstantPlaceholder(2, SLong)
                          )
                        ),
                        If(
                          OptionIsDefined(ValUse(3, SOption(SByteArray))),
                          EQ(OptionGet(ValUse(3, SOption(SByteArray))), ExtractId(Self)),
                          ConstantPlaceholder(3, SBoolean)
                        )
                      ),
                      GE(Upcast(Height, SLong), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SLong))))
                    ),
                    If(
                      NEQ(SizeOf(ValUse(4, SCollectionType(SPair(SByteArray, SLong)))), ConstantPlaceholder(4, SInt)),
                      EQ(
                        ByIndex(
                          ValUse(4, SCollectionType(SPair(SByteArray, SLong))),
                          ConstantPlaceholder(5, SInt),
                          None
                        ),
                        ByIndex(
                          MethodCall.typed[Value[SCollection[STuple]]](
                            Self,
                            SBoxMethods.getMethodByName("tokens"),
                            Array(),
                            Map()
                          ),
                          ConstantPlaceholder(6, SInt),
                          None
                        )
                      ),
                      ConstantPlaceholder(7, SBoolean)
                    )
                  ),
                  ConstantPlaceholder(8, SBoolean)
                ),
                ConstantPlaceholder(9, SBoolean)
              ),
              ConstantPlaceholder(10, SBoolean)
            )
          ),
          BlockValue(
            Array(
              ValDef(2, Array(), ByIndex(Outputs, ConstantPlaceholder(11, SInt), None)),
              ValDef(
                3,
                Array(),
                ByIndex(
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(2, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  ),
                  ConstantPlaceholder(12, SInt),
                  None
                )
              ),
              ValDef(4, Array(), ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SByteArray)))
            ),
            BinAnd(
              BinAnd(
                EQ(ExtractScriptBytes(ValUse(2, SBox)), ValUse(1, SByteArray)),
                BinAnd(
                  GE(
                    SelectField.typed[Value[SLong.type]](ValUse(3, SPair(SByteArray, SLong)), 2.toByte),
                    OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SLong)))
                  ),
                  EQ(
                    SelectField.typed[Value[SCollection[SByte.type]]](ValUse(3, SPair(SByteArray, SLong)), 1.toByte),
                    OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))
                  )
                )
              ),
              If(
                OptionIsDefined(ValUse(4, SOption(SByteArray))),
                EQ(OptionGet(ValUse(4, SOption(SByteArray))), ExtractId(Self)),
                ConstantPlaceholder(13, SBoolean)
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

