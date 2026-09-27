# `repayment` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `repayment` |
| Address (mainnet P2S) | `r5zW3yf586Wj9MQRJ8huLn8hV2QGdzWmsrgsvBEAWXGqa2VZ31kEhJ3v8GDJteCPBjLb8LSsFyjxaRUQDciwpiNVsbf2PdJvAKBH4Skg4xDDAk8WuJq2F8AzaSMGTkHT9noEtojEHSxDtqsbJXgtPm5DwemgYGYJDFt325LURmKSMrZaazDMmHPtU4EWAkN3p549CMYGrGERoXRy5xHuQrqwFdjJgcRgJXF3qTnBV288LNnH8v7YzhPVcGX9w9VVtwJDegW2SpdVe3e9tzMLCGc1nrUYaFgKjqxSCdhx8oaFT3QqyDGwyqJCNSxzinx2oTqA9jX5HoYbtB2cgUd` |
| Tree length | 244 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d` |
| Constants in table | 15 |
| Template (root expression bytes, placeholders not substituted) | 164 bytes, blake2b256 `9ae767baf7ca3cb22c5558e200b051ebb2ca2ffb0595c71ff47b1df8b6393661` |

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
| 1 | `Coll[Byte]` | 00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e (32 bytes) | `0e2000fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e` | token id `POOL_NFT` |
| 2 | `Int` | 0 | `0400` |  |
| 3 | `Int` | 1 | `0402` |  |
| 4 | `Int` | 3 | `0406` |  |
| 5 | `Int` | 0 | `0400` |  |
| 6 | `Int` | 0 | `0400` |  |
| 7 | `Long` | 1000000 | `0580897a` |  |
| 8 | `Int` | 3 | `0406` |  |
| 9 | `Long` | 9000000000000000 | `058080d4aff9dcfc1f` |  |
| 10 | `Int` | 2 | `0404` |  |
| 11 | `Long` | 9000000000000000 | `058080d4aff9dcfc1f` |  |
| 12 | `Int` | 2 | `0404` |  |
| 13 | `Int` | 0 | `0400` |  |
| 14 | `Int` | 1 | `0402` |  |

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
BlockValue(
  Seq(
    ValDef(1, Array(), ByIndex(Outputs, IntConstant(0), None)),
    ValDef(
      2,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](
        ValUse(1, SBox),
        SBoxMethods.getMethodByName("tokens"),
        Array(),
        Map()
      )
    ),
    ValDef(
      3,
      Array(),
      ByteArrayConstant(Helpers.decodeBytes("00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e"))
    ),
    ValDef(4, Array(), ByIndex(Inputs, IntConstant(0), None)),
    ValDef(
      5,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](
        ValUse(4, SBox),
        SBoxMethods.getMethodByName("tokens"),
        Array(),
        Map()
      )
    ),
    ValDef(
      6,
      Array(),
      MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
    ),
    ValDef(7, Array(), ByIndex(ValUse(6, SCollectionType(SPair(SByteArray, SLong))), IntConstant(1), None)),
    ValDef(8, Array(), ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), IntConstant(3), None))
  ),
  BoolToSigmaProp(
    BinAnd(
      BinAnd(
        BinAnd(
          BinAnd(
            BinAnd(
              EQ(
                SelectField.typed[Value[SCollection[SByte.type]]](
                  ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                  1.toByte
                ),
                ValUse(3, SByteArray)
              ),
              EQ(
                SelectField.typed[Value[SCollection[SByte.type]]](
                  ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
                  1.toByte
                ),
                ValUse(3, SByteArray)
              )
            ),
            GE(
              ArithOp(ExtractAmount(ValUse(1, SBox)), ExtractAmount(ValUse(4, SBox)), OpCode @@ (-103.toByte)),
              ArithOp(ExtractAmount(Self), LongConstant(1000000L), OpCode @@ (-103.toByte))
            )
          ),
          BinAnd(
            EQ(
              SelectField.typed[Value[SLong.type]](ValUse(7, SPair(SByteArray, SLong)), 2.toByte),
              ArithOp(
                SelectField.typed[Value[SLong.type]](
                  ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), IntConstant(3), None),
                  2.toByte
                ),
                SelectField.typed[Value[SLong.type]](ValUse(8, SPair(SByteArray, SLong)), 2.toByte),
                OpCode @@ (-103.toByte)
              )
            ),
            EQ(
              SelectField.typed[Value[SCollection[SByte.type]]](ValUse(7, SPair(SByteArray, SLong)), 1.toByte),
              SelectField.typed[Value[SCollection[SByte.type]]](ValUse(8, SPair(SByteArray, SLong)), 1.toByte)
            )
          )
        ),
        EQ(
          ArithOp(
            ArithOp(
              LongConstant(9000000000000000L),
              SelectField.typed[Value[SLong.type]](
                ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), IntConstant(2), None),
                2.toByte
              ),
              OpCode @@ (-103.toByte)
            ),
            ArithOp(
              LongConstant(9000000000000000L),
              SelectField.typed[Value[SLong.type]](
                ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), IntConstant(2), None),
                2.toByte
              ),
              OpCode @@ (-103.toByte)
            ),
            OpCode @@ (-103.toByte)
          ),
          SelectField.typed[Value[SLong.type]](
            ByIndex(ValUse(6, SCollectionType(SPair(SByteArray, SLong))), IntConstant(0), None),
            2.toByte
          )
        )
      ),
      EQ(ByIndex(Inputs, IntConstant(1), None), Self)
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
    IntConstant(0),
    ByteArrayConstant(Helpers.decodeBytes("00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e")),
    IntConstant(0),
    IntConstant(1),
    IntConstant(3),
    IntConstant(0),
    IntConstant(0),
    LongConstant(1000000L),
    IntConstant(3),
    LongConstant(9000000000000000L),
    IntConstant(2),
    LongConstant(9000000000000000L),
    IntConstant(2),
    IntConstant(0),
    IntConstant(1)
  ),
  Right(
    BlockValue(
      Array(
        ValDef(1, Array(), ByIndex(Outputs, ConstantPlaceholder(0, SInt), None)),
        ValDef(
          2,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](
            ValUse(1, SBox),
            SBoxMethods.getMethodByName("tokens"),
            Array(),
            Map()
          )
        ),
        ValDef(3, Array(), ConstantPlaceholder(1, SByteArray)),
        ValDef(4, Array(), ByIndex(Inputs, ConstantPlaceholder(2, SInt), None)),
        ValDef(
          5,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](
            ValUse(4, SBox),
            SBoxMethods.getMethodByName("tokens"),
            Array(),
            Map()
          )
        ),
        ValDef(
          6,
          Array(),
          MethodCall.typed[Value[SCollection[STuple]]](Self, SBoxMethods.getMethodByName("tokens"), Array(), Map())
        ),
        ValDef(
          7,
          Array(),
          ByIndex(ValUse(6, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(3, SInt), None)
        ),
        ValDef(
          8,
          Array(),
          ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(4, SInt), None)
        )
      ),
      BoolToSigmaProp(
        BinAnd(
          BinAnd(
            BinAnd(
              BinAnd(
                BinAnd(
                  EQ(
                    SelectField.typed[Value[SCollection[SByte.type]]](
                      ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(5, SInt), None),
                      1.toByte
                    ),
                    ValUse(3, SByteArray)
                  ),
                  EQ(
                    SelectField.typed[Value[SCollection[SByte.type]]](
                      ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(6, SInt), None),
                      1.toByte
                    ),
                    ValUse(3, SByteArray)
                  )
                ),
                GE(
                  ArithOp(ExtractAmount(ValUse(1, SBox)), ExtractAmount(ValUse(4, SBox)), OpCode @@ (-103.toByte)),
                  ArithOp(ExtractAmount(Self), ConstantPlaceholder(7, SLong), OpCode @@ (-103.toByte))
                )
              ),
              BinAnd(
                EQ(
                  SelectField.typed[Value[SLong.type]](ValUse(7, SPair(SByteArray, SLong)), 2.toByte),
                  ArithOp(
                    SelectField.typed[Value[SLong.type]](
                      ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(8, SInt), None),
                      2.toByte
                    ),
                    SelectField.typed[Value[SLong.type]](ValUse(8, SPair(SByteArray, SLong)), 2.toByte),
                    OpCode @@ (-103.toByte)
                  )
                ),
                EQ(
                  SelectField.typed[Value[SCollection[SByte.type]]](ValUse(7, SPair(SByteArray, SLong)), 1.toByte),
                  SelectField.typed[Value[SCollection[SByte.type]]](ValUse(8, SPair(SByteArray, SLong)), 1.toByte)
                )
              )
            ),
            EQ(
              ArithOp(
                ArithOp(
                  ConstantPlaceholder(9, SLong),
                  SelectField.typed[Value[SLong.type]](
                    ByIndex(ValUse(5, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(10, SInt), None),
                    2.toByte
                  ),
                  OpCode @@ (-103.toByte)
                ),
                ArithOp(
                  ConstantPlaceholder(11, SLong),
                  SelectField.typed[Value[SLong.type]](
                    ByIndex(ValUse(2, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(12, SInt), None),
                    2.toByte
                  ),
                  OpCode @@ (-103.toByte)
                ),
                OpCode @@ (-103.toByte)
              ),
              SelectField.typed[Value[SLong.type]](
                ByIndex(ValUse(6, SCollectionType(SPair(SByteArray, SLong))), ConstantPlaceholder(13, SInt), None),
                2.toByte
              )
            )
          ),
          EQ(ByIndex(Inputs, ConstantPlaceholder(14, SInt), None), Self)
        )
      )
    )
  )
)
```

</details>

## 4. How produced

sigma-state 6.0.6 (`sigma-state_2.12-6.0.6.jar` + `sigma-state_2.12-6.0.6-tests.jar` for `sigmastate.helpers.SigmaPPrint`), `pprint_2.12-0.6.3.jar`, Scala 2.12.21, Java 17.0.19; ergo-appkit not used. Command: `scala-cli run --server=false --jar "$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')" decompile.scala -- test-frontend/v2-latest-quacks-00fa2be6.json <out-dir> decompile.scala` (script source in `README.md`).

