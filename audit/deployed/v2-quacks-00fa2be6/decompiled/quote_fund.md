# `quote_fund` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `quotes[0].quote_fund`, `quotes[1].quote_fund`, `quotes[2].quote_fund`, `quotes[3].quote_fund` |
| Address (mainnet P2S) | `5p177mCDoN1drGA5LmqEfssGHLm9CwHWrGYcwxTSY34uZh18RrbGCyXCrdkn19ouYuEng5PQrfVm` |
| Tree length | 51 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` |
| Constants in table | 2 |
| Template (root expression bytes, placeholders not substituted) | 9 bytes, blake2b256 `66fe412fc4e1d84a78a952ed5cfa399d87ee4acf8eb9e446124219257d0235fa` |

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
| 0 | `Int` | -12924510 | `04bbd9a90c` |  |
| 1 | `SigmaProp` | ProveDlog(public key 03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96) | `08cd03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96` |  |

**What this 51-byte tree is (read off the parsed AST):** The root is not a single ProveDlog. It is `SigmaAnd` over 2 items:

  1. BoolToSigmaProp(GT(Height, IntConstant(-12924510))), i.e. HEIGHT > -12924510
  2. ProveDlog(public key 03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96)

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
SigmaAnd(
  Seq(
    BoolToSigmaProp(GT(Height, IntConstant(-12924510))),
    SigmaPropConstant(
      CSigmaProp(ProveDlog(Helpers.decodeECPoint("03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96")))
    )
  )
)
```

### 3b. As stored: full ErgoTree with `ConstantPlaceholder(i, T)` nodes

`SigmaPPrint(tree)`: header, constant vector, and root exactly as deserialized (placeholders not substituted).

<details><summary>Show</summary>

```scala
new ErgoTree(
  16.toByte,
  Vector(
    IntConstant(-12924510),
    SigmaPropConstant(
      CSigmaProp(ProveDlog(Helpers.decodeECPoint("03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96")))
    )
  ),
  Right(SigmaAnd(Array(BoolToSigmaProp(GT(Height, ConstantPlaceholder(0, SInt))), ConstantPlaceholder(1, SSigmaProp))))
)
```

</details>

## 4. How produced

sigma-state 6.0.6 (`sigma-state_2.12-6.0.6.jar` + `sigma-state_2.12-6.0.6-tests.jar` for `sigmastate.helpers.SigmaPPrint`), `pprint_2.12-0.6.3.jar`, Scala 2.12.21, Java 17.0.19; ergo-appkit not used. Command: `scala-cli run --server=false --jar "$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')" decompile.scala -- test-frontend/v2-latest-quacks-00fa2be6.json <out-dir> decompile.scala` (script source in `README.md`).

