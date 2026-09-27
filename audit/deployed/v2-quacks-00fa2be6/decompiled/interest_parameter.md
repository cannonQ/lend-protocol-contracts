# `interest_parameter` — decompiled ErgoTree

Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). Mechanical decompilation only; no assessment.

## 1. Header

| Field | Value |
|---|---|
| JSON role key(s) | `interest_parameter` |
| Address (mainnet P2S) | `5p17C57VD3UBEed82YvERS2PSQvAocXzcoEW7khEEgmaCnRgs8tbe8A3bRtULBWPaEN9fWCEFji5` |
| Tree length | 51 bytes |
| Header byte | `0x10` (binary `00010000`) |
| Bits 0-2: ErgoTree version | 0 |
| Bit 3: size flag | 0 (no size field) |
| Bit 4: constant segregation | 1 (constants segregated into a table; root uses ConstantPlaceholder) |
| Bits 5-7 (reserved / GZIP / multi-byte header) | all 0 |
| blake2b256(tree) | `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31` |
| Constants in table | 2 |
| Template (root expression bytes, placeholders not substituted) | 9 bytes, blake2b256 `9662579c80ed310211eb23d3904b51fce2ac0ddf020bdbe1b3efd1513f121042` |

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
| 0 | `SigmaProp` | ProveDlog(public key 03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96) | `08cd03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96` |  |
| 1 | `Int` | -10202112 | `04ffafdd09` |  |

**What this 51-byte tree is (read off the parsed AST):** The root is not a single ProveDlog. It is `SigmaAnd` over 2 items:

  1. ProveDlog(public key 03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96)
  2. BoolToSigmaProp(GT(Height, IntConstant(-10202112))), i.e. HEIGHT > -10202112

## 3. Decompiled expression

Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax (`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.

### 3a. Constants resolved

`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.

```scala
SigmaAnd(
  Seq(
    SigmaPropConstant(
      CSigmaProp(ProveDlog(Helpers.decodeECPoint("03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96")))
    ),
    BoolToSigmaProp(GT(Height, IntConstant(-10202112)))
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
    SigmaPropConstant(
      CSigmaProp(ProveDlog(Helpers.decodeECPoint("03dda8fe44b65ff96eb9dd442e6f10aca93f7351e96f2cbb1862c21a9055bc8b96")))
    ),
    IntConstant(-10202112)
  ),
  Right(SigmaAnd(Array(ConstantPlaceholder(0, SSigmaProp), BoolToSigmaProp(GT(Height, ConstantPlaceholder(1, SInt))))))
)
```

</details>

## 4. How produced

sigma-state 6.0.6 (`sigma-state_2.12-6.0.6.jar` + `sigma-state_2.12-6.0.6-tests.jar` for `sigmastate.helpers.SigmaPPrint`), `pprint_2.12-0.6.3.jar`, Scala 2.12.21, Java 17.0.19; ergo-appkit not used. Command: `scala-cli run --server=false --jar "$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')" decompile.scala -- test-frontend/v2-latest-quacks-00fa2be6.json <out-dir> decompile.scala` (script source in `README.md`).

