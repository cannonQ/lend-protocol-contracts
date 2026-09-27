# `proxy_lend` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `proxy_lend` |
| Address (mainnet P2S) | `KeFZdXyRkmbbDumvWSR1sijFcEbnqF7EL3YprErvspPHs3wmQ3qcD64X5JdjYARbxF4SAYivys3FgqfDgdjQNoa5ULahXEY4SAQNPPK6VLZFMGHjBmzgo7CS5MTDxcuxLvrFUZVHthy2y5DK7Bf7TqUC5TQoVFQxEgsLNpHSd5eG7s9KoGdVY2H1s4HhiEgAzUTmTqiQSaeUr4qpn8erxg8ajR74W4bVyBzovJ8oduDiHPznnrCZnZBhU3NdjLre3MDBHqEkrHnpR9hkEgACDxDLaS8cvaLXsRdejY9qaohVs` |
| Tree length | 216 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` |
| Constants in table | 13 |
| Template (root expression bytes, placeholders not substituted) | 186 bytes, blake2b256 `ffd5a8239157265f1fee985be2f30378969b22cd449cdc552b995536c04cda03` |

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
| 8 | `Int` | 2 | `0404` |  |
| 9 | `Int` | 0 | `0400` |  |
| 10 | `Int` | 0 | `0400` |  |
| 11 | `Boolean` | false | `0100` |  |
| 12 | `Boolean` | false | `0100` |  |

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
        )
      ),
      BlockValue(
        Seq(
          ValDef(2, Array(), ByIndex(Outputs, IntConstant(2), None)),
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
          ValDef(4, Array(), ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SByteArray)))
        ),
        BinAnd(
          BinAnd(
            EQ(ExtractScriptBytes(ValUse(2, SBox)), ValUse(1, SByteArray)),
            If(
              GT(SizeOf(ValUse(3, SCollectionType(SPair(SByteArray, SLong)))), IntConstant(0)),
              BlockValue(
                Seq(
                  ValDef(
                    5,
                    Array(),
                    ByIndex(ValUse(3, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None)
                  )
                ),
                BinAnd(
                  EQ(
                    SelectField.typed[Value[SCollection[SByte.type]]](ValUse(5, SPair(SByteArray, SLong)), 1.toByte),
                    OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))
                  ),
                  GE(
                    SelectField.typed[Value[SLong.type]](ValUse(5, SPair(SByteArray, SLong)), 2.toByte),
                    OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SLong)))
                  )
                )
              ),
              FalseLeaf
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
    IntConstant(2),
    IntConstant(0),
    IntConstant(0),
    FalseLeaf,
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
                  ByIndex(ValUse(4, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(5, SInt), None),
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
            )
          ),
          BlockValue(
            Array(
              ValDef(2, Array(), ByIndex(Outputs, ConstantPlaceholder(8, SInt), None)),
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
              ValDef(4, Array(), ExtractRegisterAs(ValUse(2, SBox), ErgoBox.R7, SOption(SByteArray)))
            ),
            BinAnd(
              BinAnd(
                EQ(ExtractScriptBytes(ValUse(2, SBox)), ValUse(1, SByteArray)),
                If(
                  GT(SizeOf(ValUse(3, SCollectionType(SPair(SByteArray, SLong)))), ConstantPlaceholder(9, SInt)),
                  BlockValue(
                    Array(
                      ValDef(
                        5,
                        Array(),
                        ByIndex(
                          ValUse(3, SCollectionType(SPair(SByteArray, SLong))),
                          ConstantPlaceholder(10, SInt),
                          None
                        )
                      )
                    ),
                    BinAnd(
                      EQ(
                        SelectField.typed[Value[SCollection[SByte.type]]](ValUse(5, SPair(SByteArray, SLong)), 1.toByte),
                        OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SByteArray)))
                      ),
                      GE(
                        SelectField.typed[Value[SLong.type]](ValUse(5, SPair(SByteArray, SLong)), 2.toByte),
                        OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SLong)))
                      )
                    )
                  ),
                  ConstantPlaceholder(11, SBoolean)
                )
              ),
              If(
                OptionIsDefined(ValUse(4, SOption(SByteArray))),
                EQ(OptionGet(ValUse(4, SOption(SByteArray))), ExtractId(Self)),
                ConstantPlaceholder(12, SBoolean)
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

