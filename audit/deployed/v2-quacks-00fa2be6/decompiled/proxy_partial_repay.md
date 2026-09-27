# `proxy_partial_repay` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `proxy_partial_repay` |
| Address (mainnet P2S) | `cLNgwy6mZGijjc9EfNhwyPqwvF46CSJPxjoLJm9AvdoCiNfhMfPnbWeZDpHaov6HBZzKaJKzSkj5t4pobnwM6C5cfJgi8A99BgNZmYceJ2Qcb8Ec7a2HkArKViHT24hpKDw2nPFmHSNmwBt1W1t5sd9gBiW2Ypzk54W9nJZaGgDmjUmsjiFnaezDwsABUv8CFVSZaAjk5whPUn9t4t383zRs26M9UqC` |
| Tree length | 159 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `eed14bd64f4e29f0ab5ff4623a54778e4d3913b38c736909c96368a93fac29fb` |
| Constants in table | 8 |
| Template (root expression bytes, placeholders not substituted) | 139 bytes, blake2b256 `8bb412886aea5e75f095cdcf821d4619d66aa490b8388799ee7f6be8d9ef918f` |

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
| 0 | `Int` | 2 | `0404` |  |
| 1 | `Int` | 0 | `0400` |  |
| 2 | `Long` | 1000000 | `0580897a` |  |
| 3 | `Int` | 0 | `0400` |  |
| 4 | `Int` | 0 | `0400` |  |
| 5 | `Int` | 0 | `0400` |  |
| 6 | `Int` | 0 | `0400` |  |
| 7 | `Int` | 0 | `0400` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BoolToSigmaProp(
  If(
    LE(SizeOf(Outputs), IntConstant(2)),
    BlockValue(
      Seq(ValDef(1, Array(), ByIndex(Outputs, IntConstant(0), None))),
      BinAnd(
        BinAnd(
          BinAnd(
            EQ(ExtractScriptBytes(ValUse(1, SBox)), OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SByteArray)))),
            GE(
              ExtractAmount(ValUse(1, SBox)),
              ArithOp(ExtractAmount(Self), LongConstant(1000000L), OpCode @@ (-103.toByte))
            )
          ),
          EQ(
            MethodCall.typed[Value[SCollection[STuple]]](
              ValUse(1, SBox),
              SBoxMethods.getMethodByName("tokens"),
              Array(),
              Map()
            ),
            MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
          )
        ),
        GE(Upcast(Height, SLong), OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SLong))))
      )
    ),
    BlockValue(
      Seq(
        ValDef(1, Array(), ByIndex(Inputs, IntConstant(0), None)),
        ValDef(2, Array(), ByIndex(Outputs, IntConstant(0), None))
      ),
      BinAnd(
        BinAnd(
          BinAnd(
            BinAnd(
              EQ(ExtractId(ValUse(1, SBox)), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))),
              EQ(ExtractScriptBytes(ValUse(2, SBox)), ExtractScriptBytes(ValUse(1, SBox)))
            ),
            GE(ExtractAmount(ValUse(2, SBox)), ExtractAmount(ValUse(1, SBox)))
          ),
          EQ(
            SelectField.typed[Value[SCollection[SByte.type]]](
              ByIndex(
                MethodCall.typed[Value[SCollection[STuple]]](
                  ValUse(2, SBox),
                  SBoxMethods.getMethodByName("tokens"),
                  Array(),
                  Map()
                ),
                IntConstant(0),
                None
              ),
              1.toByte
            ),
            SelectField.typed[Value[SCollection[SByte.type]]](
              ByIndex(
                MethodCall.typed[Value[SCollection[STuple]]](
                  ValUse(1, SBox),
                  SBoxMethods.getMethodByName("tokens"),
                  Array(),
                  Map()
                ),
                IntConstant(0),
                None
              ),
              1.toByte
            )
          )
        ),
        EQ(
          SelectField.typed[Value[SLong.type]](
            ByIndex(
              MethodCall.typed[Value[SCollection[STuple]]](
                ValUse(2, SBox),
                SBoxMethods.getMethodByName("tokens"),
                Array(),
                Map()
              ),
              IntConstant(0),
              None
            ),
            2.toByte
          ),
          OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SLong)))
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
    IntConstant(2),
    IntConstant(0),
    LongConstant(1000000L),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0),
    IntConstant(0)
  ),
  Right(
    BoolToSigmaProp(
      If(
        LE(SizeOf(Outputs), ConstantPlaceholder(0, SInt)),
        BlockValue(
          Array(ValDef(1, Array(), ByIndex(Outputs, ConstantPlaceholder(1, SInt), None))),
          BinAnd(
            BinAnd(
              BinAnd(
                EQ(
                  ExtractScriptBytes(ValUse(1, SBox)),
                  OptionGet(ExtractRegisterAs(Self, ErgoBox.R6, SOption(SByteArray)))
                ),
                GE(
                  ExtractAmount(ValUse(1, SBox)),
                  ArithOp(ExtractAmount(Self), ConstantPlaceholder(2, SLong), OpCode @@ (-103.toByte))
                )
              ),
              EQ(
                MethodCall.typed[Value[SCollection[STuple]]](
                  ValUse(1, SBox),
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
            GE(Upcast(Height, SLong), OptionGet(ExtractRegisterAs(Self, ErgoBox.R7, SOption(SLong))))
          )
        ),
        BlockValue(
          Array(
            ValDef(1, Array(), ByIndex(Inputs, ConstantPlaceholder(3, SInt), None)),
            ValDef(2, Array(), ByIndex(Outputs, ConstantPlaceholder(4, SInt), None))
          ),
          BinAnd(
            BinAnd(
              BinAnd(
                BinAnd(
                  EQ(ExtractId(ValUse(1, SBox)), OptionGet(ExtractRegisterAs(Self, ErgoBox.R4, SOption(SByteArray)))),
                  EQ(ExtractScriptBytes(ValUse(2, SBox)), ExtractScriptBytes(ValUse(1, SBox)))
                ),
                GE(ExtractAmount(ValUse(2, SBox)), ExtractAmount(ValUse(1, SBox)))
              ),
              EQ(
                SelectField.typed[Value[SCollection[SByte.type]]](
                  ByIndex(
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(2, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    ),
                    ConstantPlaceholder(5, SInt),
                    None
                  ),
                  1.toByte
                ),
                SelectField.typed[Value[SCollection[SByte.type]]](
                  ByIndex(
                    MethodCall.typed[Value[SCollection[STuple]]](
                      ValUse(1, SBox),
                      SBoxMethods.getMethodByName("tokens"),
                      Array(),
                      Map()
                    ),
                    ConstantPlaceholder(6, SInt),
                    None
                  ),
                  1.toByte
                )
              )
            ),
            EQ(
              SelectField.typed[Value[SLong.type]](
                ByIndex(
                  MethodCall.typed[Value[SCollection[STuple]]](
                    ValUse(2, SBox),
                    SBoxMethods.getMethodByName("tokens"),
                    Array(),
                    Map()
                  ),
                  ConstantPlaceholder(7, SInt),
                  None
                ),
                2.toByte
              ),
              OptionGet(ExtractRegisterAs(Self, ErgoBox.R5, SOption(SLong)))
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

