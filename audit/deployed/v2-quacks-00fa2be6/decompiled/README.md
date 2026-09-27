# Decompiled deployed ErgoTrees — duckpools v2 QUACKS pool `00fa2be6…`

Mechanical decompilation of every distinct ErgoTree behind the P2S addresses of the latest duckpools v2 QUACKS pool (POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`). Each file gives the header decode, the constant table, and the expression as printed by sigmastate's own pretty-printer. No assessment is made here.

## Input

- File: `test-frontend/v2-latest-quacks-00fa2be6.json` (in the audit working directory, next to this repo checkout)
- sha256 of the input file: `e7fa3da039b15003afe4aff865d5c8cc1fe63188fdf0f4a9a0e04c5f7f98f9ed`
- In-repo copy: `../deployed.json` (next to this directory). If its sha256 equals the value above, it is the same input and can be passed to the script instead.
- JSON entries carrying `ergotree_hex`: 22; distinct trees (deduplicated by blake2b256 of the tree bytes): 16

## Trees

| File | JSON role key(s) | Bytes | Header | blake2b256 | Constants | Address→bytes | Hash | Length | Round-trip A | Round-trip B | Layout |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [`pool.md`](pool.md) | `pool` | 1371 | `0x10` | `25248318f76b264084a0926e81f209faa7889ee3e84819e92a680b91feb2b1af` | 73 | yes | yes | yes | PASS | PASS | PASS |
| [`collateral.md`](collateral.md) | `collateral` | 2125 | `0x10` | `cf54c33e8718d89441b7ba772d1ca7ada5289cfee5a6bf07d3ac3268a15e9729` | 88 | yes | yes | yes | PASS | PASS | PASS |
| [`repayment.md`](repayment.md) | `repayment` | 244 | `0x10` | `b0a0595bc2d5993f301d5dd85e8e17403d4df634b7b31e5b3e44066724eb566d` | 15 | yes | yes | yes | PASS | PASS | PASS |
| [`interest.md`](interest.md) | `interest` | 534 | `0x10` | `46cf8c6d44aa02d089272b2de6f0cb884a8937277f6d64df0d73a67b42d65c6e` | 20 | yes | yes | yes | PASS | PASS | PASS |
| [`proxy_lend.md`](proxy_lend.md) | `proxy_lend` | 216 | `0x10` | `dd9959700fcef302ff2c90bb25f60978c284af1b28be59d28e1b46422b7a951e` | 13 | yes | yes | yes | PASS | PASS | PASS |
| [`proxy_withdraw.md`](proxy_withdraw.md) | `proxy_withdraw` | 212 | `0x10` | `5f358f59d6d1804a0fd8375412a8db782a19c6cc394f011b123c135b19b48fe6` | 14 | yes | yes | yes | PASS | PASS | PASS |
| [`proxy_borrow.md`](proxy_borrow.md) | `proxy_borrow` | 474 | `0x10` | `776b94d904ed249875e20a18d87df41eb7fb6b44379d15bf582dd2cc9215c2e4` | 21 | yes | yes | yes | PASS | PASS | PASS |
| [`proxy_repay.md`](proxy_repay.md) | `proxy_repay` | 126 | `0x10` | `91ece4bb13e02310e947d9f4af0367e98e9fd55e80474ca32f24a14e27e7e586` | 4 | yes | yes | yes | PASS | PASS | PASS |
| [`proxy_partial_repay.md`](proxy_partial_repay.md) | `proxy_partial_repay` | 159 | `0x10` | `eed14bd64f4e29f0ab5ff4623a54778e4d3913b38c736909c96368a93fac29fb` | 8 | yes | yes | yes | PASS | PASS | PASS |
| [`parameter.md`](parameter.md) | `parameter` | 51 | `0x10` | `9ebeaefd70206f2d051746eade435068f2bfed31d385df96ee869af0e87c3327` | 2 | yes | yes | yes | PASS | PASS | PASS |
| [`interest_parameter.md`](interest_parameter.md) | `interest_parameter` | 51 | `0x10` | `7f42b828f9abbb92a9ce0ef1c68701f81722894492578316a843cc2e49082f31` | 2 | yes | yes | yes | PASS | PASS | PASS |
| [`quoteScript-41c07d9c.md`](quoteScript-41c07d9c.md) | `quotes[0].quoteScript`, `quotes[1].quoteScript`, `quotes[3].quoteScript`, `quotes[4].quoteScript` | 1237 | `0x10` | `41c07d9c2894ed46b23d5f30762eff3f6efb39c53822bcc5a886fe0756a44ee2` | 63 | yes | yes | yes | PASS | PASS | PASS |
| [`quote_fund.md`](quote_fund.md) | `quotes[0].quote_fund`, `quotes[1].quote_fund`, `quotes[2].quote_fund`, `quotes[3].quote_fund` | 51 | `0x10` | `4cb272b5e52d5f8c54ce52a002355e50e4ea751c4e0d0439a7766377fc96b4fa` | 2 | yes | yes | yes | PASS | PASS | PASS |
| [`quoteScript-0cda3cb2.md`](quoteScript-0cda3cb2.md) | `quotes[2].quoteScript` | 1582 | `0x10` | `0cda3cb2baa3a97a77c8ce7d6293d252c069151cd05ebec7e32dec03cc41c43e` | 78 | yes | yes | yes | PASS | PASS | PASS |
| [`auto_balance_address.md`](auto_balance_address.md) | `auto_balance_address` | 876 | `0x19` | `1cb2eb2419fafea3e3603c4cdd7c4c85c3c7fee75151093ebd0b94479aed918d` | 42 | yes | yes | yes | PASS | PASS | PASS |
| [`spend_nft_address.md`](spend_nft_address.md) | `spend_nft_address` | 804 | `0x19` | `ac6f3b0584e39f00335ef5ff95c23b56448e16f0a156ac2218e41782f5ecf22f` | 35 | yes | yes | yes | PASS | PASS | PASS |

Round-trip result: 16 of 16 trees re-serialize to the exact input bytes by both methods. Every tree also passed the address, hash, length and layout checks.

Negative control (run by the same script):

- `proxy_repay.md` with constant #1 (`Int` 0, serialized `0400`) rewritten as the non-minimal VLQ `048000`. The mutated bytes (127) were accepted by the deserializer: yes. Round-trip A on the mutated bytes: FAIL. Round-trip B: FAIL. (Expected: accepted, then both round-trips FAIL, because the serializer writes the canonical `0400`. This shows the round-trip columns compare re-serialized bytes and do not echo the input.) Control behaved as expected: yes

## Trees that share a template

`tree.template` is the root expression bytes with `ConstantPlaceholder` nodes, without the constant table. Trees with the same template hash have the same expression and differ only in constant values.

- `parameter`, `interest_parameter`: template blake2b256 `9662579c80ed310211eb23d3904b51fce2ac0ddf020bdbe1b3efd1513f121042`. Constants that differ: #1 (`parameter` = -10202111; `interest_parameter` = -10202112).

Column meanings:

- **Header**: first byte of the tree. Bits 0-2 = ErgoTree version, bit 3 = size field present, bit 4 = constant segregation. `0x10` = version 0, no size field, constants segregated. `0x19` = version 1, size field present, constants segregated.
- **Address→bytes**: the address string was decoded by sigmastate `ErgoAddressEncoder` (mainnet prefix; the decoder verifies the Base58 checksum) and the P2S content bytes compared with the JSON `ergotree_hex`.
- **Hash / Length**: recomputed blake2b256 and byte length compared with the JSON `blake2b256_tree` / `tree_bytes`.
- **Round-trip A**: `ErgoTreeSerializer.DefaultSerializer.serializeErgoTree(deserializeErgoTree(bytes))` equals the input bytes. For a fully parsed tree this re-serializes the AST; it does not echo the input (it only echoes for `UnparsedErgoTree`, which every tree here is checked not to be).
- **Round-trip B**: a new `ErgoTree(header, constants, root)` built from the parsed parts (no cached input bytes), then `.bytes`, equals the input bytes.
- **Layout**: header byte + size field (if any) + constant count + each constant re-serialized by `ConstantSerializer` + `tree.template` equals the input bytes. This ties the hex in each constants table to the on-chain bytes.

## What each file contains

1. Header: role key(s), address, length, header byte decoded bit by bit, blake2b256, size field (v1 trees), template hash, and the checks above.
2. Constants: index, sigmastate type, value, serialized hex, and exact matches of `Coll[Byte]` constants against token ids / tree hashes / tree bytes in the same input JSON. ProveDlog constants show the compressed public key hex. For trees of 64 bytes or fewer, a one-line statement of what the root is, read off the parsed AST.
3. Decompiled expression: (3a) `SigmaPPrint(tree.toProposition(replaceConstants = true))`, constants resolved by sigmastate; (3b) `SigmaPPrint(tree)`, the tree as stored with `ConstantPlaceholder` nodes, under a collapsed block. An `ArithOp` opcode legend follows 3a where `ArithOp` occurs.
4. How produced.

Printer notes. `sigmastate.helpers.SigmaPPrint` prints Scala constructor syntax, not ErgoScript. Reading aids: `ValDef(n, …, e)` binds id `n` to `e`, and `ValUse(n, T)` reads it. `BlockValue(defs, e)` is a block. `FuncValue(args, body)` is a lambda. `ExtractRegisterAs(box, ErgoBox.Rk, SOption(T))` is `box.Rk[T]`. `OptionGet` is `.get`. `ByIndex(coll, i, None)` is `coll(i)`. `Self`/`Outputs`/`Inputs`/`Height` are `SELF`/`OUTPUTS`/`INPUTS`/`HEIGHT`. `BinAnd`/`BinOr` are `&&`/`||`. `MethodCall(obj, T.getMethodByName("m"), args, …)` is `obj.m(args)`. `Coll[Byte]` values print as `Helpers.decodeBytes("<hex>")`, `Array[Byte]` as `ErgoAlgos.decodeUnsafe("<hex>")`, and group elements as `Helpers.decodeECPoint("<hex>")`.

## Toolchain

- sigma-state `6.0.6` (`org.scorexfoundation:sigma-state_2.12:6.0.6`), loaded from `sigma-state_2.12-6.0.6.jar`: `ErgoTreeSerializer`, `ErgoAddressEncoder`, `ConstantSerializer`, `ErgoTree.toProposition`
- `sigma-state_2.12-6.0.6-tests.jar` (published classifier `tests` of the same artifact): `sigmastate.helpers.SigmaPPrint`, the pretty-printer. It is test-scoped upstream; the classes are used unmodified from the Maven Central jar.
- `pprint_2.12-0.6.3.jar` (the pprint version sigma-state 6.0.6 declares for its tests)
- Scala 2.12.21 via scala-cli; Java 17.0.19
- ergo-appkit: not used

Why sigma-state 6.0.6: it is the newest release on Maven Central, and it parses both header variants present here (`0x10` and `0x19`). `SigmaPPrint` was found in the `-tests` jars checked (6.0.2, 6.0.6) and in none of the main jars checked (5.0.7, 5.0.8, 5.0.12, 6.0.2, 6.0.6); no `PrettyPrintErgoTree` class exists in any of them. The 5.0.x `-tests` jars were not checked.

## Reproduce

Build outside the repo. The script below is the exact generator; save it as `decompile.scala` in an empty directory, then:

```sh
TESTS_JAR="$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')"
scala-cli run --server=false --jar "$TESTS_JAR" decompile.scala -- \
  /path/to/test-frontend/v2-latest-quacks-00fa2be6.json ./out decompile.scala
diff -r ./out <repo>/audit/deployed/v2-quacks-00fa2be6/decompiled   # expect no differences, other than the Java version string if yours differs
```

scala-cli collapses two classifiers of one module into one dependency, which is why the tests jar is passed with `--jar` rather than a second `//> using dep`.

<details><summary>decompile.scala (sha256 <code>82f4ecef57e2b4bff525b91bef4615a32551df999b4d8e0284f6321039457539</code>)</summary>

```scala
//> using scala 2.12.21
//> using dep org.scorexfoundation::sigma-state:6.0.6
//> using dep com.lihaoyi::pprint:0.6.3
// sigmastate.helpers.SigmaPPrint ships only in the published sigma-state_2.12-6.0.6-tests.jar.
// scala-cli collapses two classifiers of one module, so that jar is passed on the command line:
//   scala-cli run --server=false \
//     --jar "$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')" \
//     decompile.scala -- <input.json> <out-dir> <path-to-this-script>

import java.io.File
import java.nio.charset.StandardCharsets.UTF_8
import java.nio.file.{Files, Paths}
import java.security.MessageDigest

import scala.collection.mutable
import scala.util.{Failure, Success, Try}

import io.circe.parser.parse
import org.ergoplatform.{ErgoAddressEncoder, Pay2SAddress}
import scorex.crypto.hash.Blake2b256
import scorex.util.encode.Base16
import sigma.ast._
import sigma.ast.syntax.SValue
import sigma.crypto.EcPointType
import sigma.data._
import sigma.serialization.ErgoTreeSerializer.DefaultSerializer
import sigma.serialization.{ConstantSerializer, GroupElementSerializer, OpCodes, SigmaSerializer}
import sigmastate.helpers.SigmaPPrint

object Decompile {

  val SigmaStateVersion = "6.0.6"
  val PPrintWidth = 120

  final case class Entry(key: String, address: String, hex: String, treeBytes: Int, blake: String, checksumOk: Option[Boolean])

  final case class Result(
    file: String,
    role: String,
    keys: Seq[String],
    address: String,
    hash: String,
    length: Int,
    header: Int,
    deserialized: Boolean,
    roundTripA: Option[Boolean],
    roundTripB: Option[Boolean],
    layoutOk: Option[Boolean],
    addressOk: Boolean,
    hashOk: Boolean,
    lengthOk: Boolean,
    nConstants: Option[Int],
    printer: String,
    error: Option[String],
    templateHash: Option[String],
    consts: Seq[(String, String)]
  )

  def hex(b: Array[Byte]): String = Base16.encode(b)
  def blake(b: Array[Byte]): String = hex(Blake2b256(b))
  def sha256File(p: String): String =
    hex(MessageDigest.getInstance("SHA-256").digest(Files.readAllBytes(Paths.get(p))))

  def pp(x: Any): String = SigmaPPrint(x, width = PPrintWidth, height = Int.MaxValue).plainText

  def yn(b: Boolean): String = if (b) "yes" else "NO"
  def pf(b: Boolean): String = if (b) "PASS" else "FAIL"

  // ---------------------------------------------------------------- constant rendering
  def geHex(p: EcPointType): String = hex(GroupElementSerializer.toBytes(p))

  def renderSigma(sb: SigmaBoolean): String = sb match {
    case ProveDlog(p)               => s"ProveDlog(public key ${geHex(p)})"
    case ProveDHTuple(g, h, u, v)   => s"ProveDHTuple(g=${geHex(g)}, h=${geHex(h)}, u=${geHex(u)}, v=${geHex(v)})"
    case CAND(cs)                   => cs.map(renderSigma).mkString("CAND(", ", ", ")")
    case COR(cs)                    => cs.map(renderSigma).mkString("COR(", ", ", ")")
    case CTHRESHOLD(k, cs)          => cs.map(renderSigma).mkString(s"CTHRESHOLD($k, ", ", ", ")")
    case t: TrivialProp             => s"TrivialProp(${t.condition})"
    case other                      => other.toString
  }

  def renderValue(v: Any): String = v match {
    case c: sigma.Coll[_] if c.tItem == sigma.ByteType =>
      val arr = c.toArray.asInstanceOf[Array[Byte]]
      s"${hex(arr)} (${arr.length} bytes)"
    case c: sigma.Coll[_]       => c.toArray.map(renderValue).mkString("Coll(", ", ", ")")
    case (a, b)                 => s"(${renderValue(a)}, ${renderValue(b)})"
    case p: CSigmaProp          => renderSigma(p.sigmaTree)
    case g: CGroupElement       => s"GroupElement(${geHex(g.wrappedValue)})"
    case b: CBigInt             => s"BigInt(${b.wrappedValue.toString})"
    case x @ (_: Byte | _: Short | _: Int | _: Long | _: Boolean) => x.toString
    case other                  => Try(pp(other)).getOrElse(other.toString).replace("\n", " ")
  }

  def constBytes(c: Constant[SType]): Array[Byte] = {
    val w = SigmaSerializer.startWriter()
    ConstantSerializer(DeserializationSigmaBuilder).serialize(c, w)
    w.toBytes
  }

  def uintBytes(n: Int): Array[Byte] = {
    val w = SigmaSerializer.startWriter()
    w.putUInt(n.toLong)
    w.toBytes
  }

  // ---------------------------------------------------------------- short-tree description (mechanical, from the AST)
  def describeSigmaItem(v: SValue): String = v match {
    case SigmaPropConstant(p: CSigmaProp)                 => renderSigma(p.sigmaTree)
    case BoolToSigmaProp(GT(Height, IntConstant(n)))      => s"BoolToSigmaProp(GT(Height, IntConstant($n))), i.e. HEIGHT > $n"
    case BoolToSigmaProp(GE(Height, IntConstant(n)))      => s"BoolToSigmaProp(GE(Height, IntConstant($n))), i.e. HEIGHT >= $n"
    case BoolToSigmaProp(LT(Height, IntConstant(n)))      => s"BoolToSigmaProp(LT(Height, IntConstant($n))), i.e. HEIGHT < $n"
    case other                                            => pp(other).replace("\n", " ")
  }

  def describeShort(prop: SValue): String = prop match {
    case SigmaPropConstant(p: CSigmaProp) =>
      s"The root is a single SigmaProp constant: ${renderSigma(p.sigmaTree)}."
    case SigmaAnd(items) =>
      s"The root is not a single ProveDlog. It is `SigmaAnd` over ${items.length} items:\n\n" +
        items.zipWithIndex.map { case (it, i) => s"  ${i + 1}. ${describeSigmaItem(it)}" }.mkString("\n")
    case SigmaOr(items) =>
      s"The root is not a single ProveDlog. It is `SigmaOr` over ${items.length} items:\n\n" +
        items.zipWithIndex.map { case (it, i) => s"  ${i + 1}. ${describeSigmaItem(it)}" }.mkString("\n")
    case other =>
      "The root is not a single ProveDlog; see the expression below."
  }

  // ---------------------------------------------------------------- opcode legend
  val arithNames: Map[Byte, String] = Map(
    OpCodes.PlusCode -> "PlusCode (+)",
    OpCodes.MinusCode -> "MinusCode (-)",
    OpCodes.MultiplyCode -> "MultiplyCode (*)",
    OpCodes.DivisionCode -> "DivisionCode (/)",
    OpCodes.ModuloCode -> "ModuloCode (%)",
    OpCodes.MinCode -> "MinCode (min)",
    OpCodes.MaxCode -> "MaxCode (max)",
    OpCodes.BitOrCode -> "BitOrCode (|)",
    OpCodes.BitAndCode -> "BitAndCode (&)",
    OpCodes.BitXorCode -> "BitXorCode (^)",
    OpCodes.BitShiftRightCode -> "BitShiftRightCode (>>)",
    OpCodes.BitShiftLeftCode -> "BitShiftLeftCode (<<)",
    OpCodes.BitShiftRightZeroedCode -> "BitShiftRightZeroedCode (>>>)"
  ).map { case (k, v) => (k: Byte) -> v }

  val opCodeRe = """OpCode @@ \((-?\d+)\.toByte\)""".r

  def legend(text: String): Seq[String] =
    opCodeRe.findAllMatchIn(text).map(_.group(1).toInt.toByte).toSeq.distinct.sorted.map { b =>
      val name = arithNames.getOrElse(b, "(not an ArithOp code in the legend table)")
      f"| `OpCode @@ (${b.toInt}.toByte)` | 0x${b & 0xff}%02x | $name |"
    }

  // ---------------------------------------------------------------- toolchain facts
  def jarOf(c: Class[_]): String =
    Try(new File(c.getProtectionDomain.getCodeSource.getLocation.toURI).getName).getOrElse("?")

  lazy val sigmaJar = jarOf(classOf[ErgoTree])
  lazy val pprintJar = jarOf(classOf[pprint.PPrinter])
  lazy val testsJar = jarOf(SigmaPPrint.getClass)
  lazy val javaVersion = System.getProperty("java.version")
  lazy val scalaVersion = scala.util.Properties.versionNumberString

  val command =
    "scala-cli run --server=false --jar \"$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')\" " +
      "decompile.scala -- test-frontend/v2-latest-quacks-00fa2be6.json <out-dir> decompile.scala"

  def howProduced: String =
    s"sigma-state $SigmaStateVersion (`$sigmaJar` + `$testsJar` for `sigmastate.helpers.SigmaPPrint`), " +
      s"`$pprintJar`, Scala $scalaVersion, Java $javaVersion; ergo-appkit not used. " +
      s"Command: `$command` (script source in `README.md`)."

  // ---------------------------------------------------------------- main
  def main(args: Array[String]): Unit = {
    require(args.length == 3, "usage: decompile <input.json> <out-dir> <this-script-path>")
    val Array(jsonPath, outDir, scriptPath) = args
    Files.createDirectories(Paths.get(outDir))

    val json = parse(new String(Files.readAllBytes(Paths.get(jsonPath)), UTF_8)).fold(throw _, identity)
    val obj = json.asObject.getOrElse(sys.error("top-level JSON is not an object"))

    val entries: Seq[Entry] = obj.toList.flatMap { case (k, v) =>
      val c = v.hcursor
      c.downField("ergotree_hex").as[String].toOption.map { h =>
        Entry(
          key = k,
          address = c.downField("address").as[String].getOrElse(""),
          hex = h.toLowerCase,
          treeBytes = c.downField("tree_bytes").as[Int].getOrElse(-1),
          blake = c.downField("blake2b256_tree").as[String].getOrElse(""),
          checksumOk = c.downField("checksum_ok").as[Boolean].toOption
        )
      }
    }

    // group by recomputed tree hash, preserving JSON order
    val groups = mutable.LinkedHashMap.empty[String, mutable.ArrayBuffer[Entry]]
    entries.foreach { e =>
      val h = blake(Base16.decode(e.hex).get)
      groups.getOrElseUpdate(h, mutable.ArrayBuffer.empty) += e
    }

    def roleOf(key: String): String = key.replaceAll("""^quotes\[\d+\]\.""", "")
    val hashesPerRole: Map[String, Set[String]] =
      groups.toSeq.flatMap { case (h, es) => es.map(e => roleOf(e.key) -> h) }.groupBy(_._1).mapValues(_.map(_._2).toSet)

    val tokenIds: Seq[(String, String)] = obj.toList.flatMap { case (k, v) =>
      v.hcursor.downField("token_id").as[String].toOption.map(id => id.toLowerCase -> k)
    }
    // exact-match labels for Coll[Byte] constants: JSON token ids, tree hashes, tree bytes (file names as below)
    lazy val xref: Map[String, Seq[String]] = {
      val fileOf: Map[String, String] = groups.toSeq.map { case (h, es) =>
        val role = roleOf(es.head.key)
        h -> (if (hashesPerRole(role).size > 1) s"$role-${h.take(8)}" else role)
      }.toMap
      val labels = tokenIds.map { case (id, k) => id -> s"token id `$k`" } ++
        groups.toSeq.flatMap { case (h, es) => Seq(h -> s"blake2b256 of `${fileOf(h)}` tree", es.head.hex -> s"bytes of `${fileOf(h)}` tree") }
      labels.groupBy(_._1).mapValues(_.map(_._2).distinct)
    }
    def xrefOf(c: Constant[SType]): String = c.value match {
      case coll: sigma.Coll[_] if coll.tItem == sigma.ByteType =>
        xref.getOrElse(hex(coll.toArray.asInstanceOf[Array[Byte]]), Nil).mkString("; ")
      case _ => ""
    }
    val encoder = ErgoAddressEncoder(ErgoAddressEncoder.MainnetNetworkPrefix)
    val parsedTrees = mutable.LinkedHashMap.empty[String, (Array[Byte], ErgoTree)]

    val results = groups.toSeq.map { case (hash, es) =>
      val first = es.head
      val roles = es.map(e => roleOf(e.key)).distinct
      require(roles.size == 1, s"one tree under several role names: $roles")
      val role = roles.head
      val file = if (hashesPerRole(role).size > 1) s"$role-${hash.take(8)}" else role
      val bytes = Base16.decode(first.hex).get
      val addrs = es.map(_.address).distinct

      // --- input consistency checks
      val addrChecks = addrs.map { a =>
        val decoded = encoder.fromString(a)
        a -> (decoded match {
          case Success(p2s: Pay2SAddress) => Right(java.util.Arrays.equals(p2s.contentBytes, bytes))
          case Success(other)             => Left(s"not a P2S address: ${other.getClass.getSimpleName}")
          case Failure(t)                 => Left(s"${t.getClass.getName}: ${t.getMessage}")
        })
      }
      val addressOk = addrChecks.forall(_._2 == Right(true))
      val hashOk = es.forall(_.blake.toLowerCase == hash)
      val lengthOk = es.forall(_.treeBytes == bytes.length)
      val allHexSame = es.map(_.hex).distinct.size == 1

      val h = bytes(0) & 0xff
      val version = h & 0x07
      val sizeFlag = (h & 0x08) != 0
      val segFlag = (h & 0x10) != 0
      val hi = (h & 0xe0) >> 5

      val parsed = Try(DefaultSerializer.deserializeErgoTree(bytes))

      val sb = new StringBuilder
      def ln(s: String = ""): Unit = sb.append(s).append('\n')

      ln(s"# `$file` — decompiled ErgoTree")
      ln()
      ln("Duckpools v2 QUACKS pool, POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`. " +
        "Source of the bytes: `test-frontend/v2-latest-quacks-00fa2be6.json` (address → ErgoTree). " +
        "Mechanical decompilation only; no assessment.")
      ln()
      ln("## 1. Header")
      ln()
      ln("| Field | Value |")
      ln("|---|---|")
      ln(s"| JSON role key(s) | ${es.map(e => s"`${e.key}`").mkString(", ")} |")
      addrs.foreach(a => ln(s"| Address (mainnet P2S) | `$a` |"))
      ln(s"| Tree length | ${bytes.length} bytes |")
      ln(f"| Header byte | `0x$h%02x` (binary `${String.format("%8s", Integer.toBinaryString(h)).replace(' ', '0')}`) |")
      ln(s"| Bits 0-2: ErgoTree version | $version |")
      ln(s"| Bit 3: size flag | ${if (sizeFlag) "1 (tree size is serialized after the header)" else "0 (no size field)"} |")
      ln(s"| Bit 4: constant segregation | ${if (segFlag) "1 (constants segregated into a table; root uses ConstantPlaceholder)" else "0 (constants inline)"} |")
      ln(s"| Bits 5-7 (reserved / GZIP / multi-byte header) | ${if (hi == 0) "all 0" else s"NON-ZERO: $hi"} |")
      if (sizeFlag) {
        val r = SigmaSerializer.startReader(bytes, 1)
        val sz = r.getUInt().toInt
        val after = bytes.length - r.position
        ln(s"| Size field value | $sz (bytes after the size field: $after; ${if (sz == after) "equal" else "NOT EQUAL"}) |")
      }
      ln(s"| blake2b256(tree) | `$hash` |")
      parsed match {
        case Success(t) if t.isRightParsed =>
          ln(s"| Constants in table | ${t.constants.length} |")
          val tpl = t.template
          ln(s"| Template (root expression bytes, placeholders not substituted) | ${tpl.length} bytes, blake2b256 `${blake(tpl)}` |")
        case _ =>
      }
      ln()
      ln("### Input and round-trip checks")
      ln()
      addrChecks.foreach { case (a, r) =>
        ln(s"- Address decoded by sigmastate `ErgoAddressEncoder` (mainnet, Base58 checksum verified by the decoder): " +
          (r match { case Right(ok) => s"P2S content bytes equal the JSON `ergotree_hex`: ${yn(ok)}"; case Left(err) => s"ERROR `$err`" }))
      }
      ln(s"- All JSON entries for this tree carry identical `ergotree_hex`: ${yn(allHexSame)}")
      ln(s"- Recomputed blake2b256 equals JSON `blake2b256_tree`: ${yn(hashOk)}")
      ln(s"- Byte length equals JSON `tree_bytes`: ${yn(lengthOk)}")

      var rtA: Option[Boolean] = None
      var rtB: Option[Boolean] = None
      var layout: Option[Boolean] = None
      var nConst: Option[Int] = None
      var printer = "none"
      var err: Option[String] = None
      var tplHash: Option[String] = None
      var constList: Seq[(String, String)] = Nil

      parsed match {
        case Failure(t) =>
          err = Some(s"${t.getClass.getName}: ${t.getMessage}")
          ln(s"- Deserialization: FAILED")
          ln()
          ln("```")
          ln(err.get)
          ln("```")
          ln()
          ln("No decompilation is given for this tree.")
        case Success(t) if !t.isRightParsed =>
          val e = t.root.left.get.error
          err = Some(s"UnparsedErgoTree: ${e.getClass.getName}: ${e.getMessage}")
          ln(s"- Deserialization: returned `UnparsedErgoTree` (root not parsed)")
          ln()
          ln("```")
          ln(err.get)
          ln("```")
          ln()
          ln("No decompilation is given for this tree.")
        case Success(t) =>
          nConst = Some(t.constants.length)
          tplHash = Some(blake(t.template))
          constList = t.constants.map(c => (c.tpe.toTermString, renderValue(c.value)))
          parsedTrees(file) = (bytes, t)
          ln(s"- Deserialization: `ErgoTreeSerializer.DefaultSerializer.deserializeErgoTree` returned a fully parsed tree (`root` is `Right`)")
          val a = DefaultSerializer.serializeErgoTree(t)
          rtA = Some(java.util.Arrays.equals(a, bytes))
          ln(s"- Round-trip A, `DefaultSerializer.serializeErgoTree(deserializedTree)` equals input bytes: ${pf(rtA.get)}")
          val fresh = ErgoTree(t.header, t.constants, t.root.right.get)
          val b = fresh.bytes
          rtB = Some(java.util.Arrays.equals(b, bytes))
          ln(s"- Round-trip B, freshly built `ErgoTree(header, constants, root).bytes` (no cached input bytes) equals input bytes: ${pf(rtB.get)}")
          // exact layout: header [+ size] + count + constants + template
          val sizePart: Array[Byte] = if (t.hasSize) {
            val r = SigmaSerializer.startReader(bytes, 1); r.getUInt(); bytes.slice(1, r.position)
          } else Array.emptyByteArray
          val constPart: Array[Byte] =
            if (t.isConstantSegregation) Array.concat(uintBytes(t.constants.length) +: t.constants.map(constBytes): _*)
            else Array.emptyByteArray
          val rebuilt: Array[Byte] = Array(bytes(0)) ++ sizePart ++ constPart ++ t.template
          layout = Some(java.util.Arrays.equals(rebuilt, bytes))
          ln(s"- Layout check, header + size field + constant count + serialized constants (column 4 below) + template equals input bytes: ${pf(layout.get)}")
          ln()

          // ---- constants
          ln("## 2. Constants")
          ln()
          if (t.constants.isEmpty) ln("No constants.")
          else {
            ln("Parsed by `ErgoTreeSerializer.DefaultSerializer`. Column 4 is each constant re-serialized by `ConstantSerializer` (type code + data), the exact bytes in the tree's constant table. " +
              "Column 5 lists exact byte matches of a `Coll[Byte]` constant against the same input JSON (a `token_id`, a tree's blake2b256, or a tree's full bytes); blank means no match in that file.")
            ln()
            ln("| # | Type | Value | Serialized (type + data, hex) | Equals (input JSON) |")
            ln("|---|---|---|---|---|")
            t.constants.zipWithIndex.foreach { case (c, i) =>
              ln(s"| $i | `${c.tpe.toTermString}` | ${renderValue(c.value)} | `${hex(constBytes(c))}` | ${xrefOf(c)} |")
            }
          }
          ln()
          if (bytes.length <= 64) {
            ln(s"**What this ${bytes.length}-byte tree is (read off the parsed AST):** ${describeShort(t.toProposition(true))}")
            ln()
          }

          // ---- expression
          ln("## 3. Decompiled expression")
          ln()
          ln("Printer: `sigmastate.helpers.SigmaPPrint` (sigma-state 6.0.6), sigmastate's own pretty-printer. It prints the ErgoTree AST as Scala constructor syntax " +
            "(`ValDef` / `ValUse` are `val` bindings by id, `BlockValue` is a `{ val ...; expr }` block, `FuncValue` is a lambda, `MethodCall` names the method). " +
            "sigma-state 6.0.6 has no printer that emits ErgoScript surface syntax.")
          ln()
          ln("### 3a. Constants resolved")
          ln()
          ln("`tree.toProposition(replaceConstants = true)`: sigmastate substitutes every `ConstantPlaceholder(i, T)` with constant `i` from the table in section 2.")
          ln()
          val resolved = Try(pp(t.toProposition(true)))
          val resolvedText = resolved match {
            case Success(s) => printer = "SigmaPPrint"; s
            case Failure(e) =>
              printer = "ErgoTree.toString (SigmaPPrint failed)"
              err = Some(s"SigmaPPrint failed: ${e.getClass.getName}: ${e.getMessage}")
              s"// SigmaPPrint failed: ${e.getMessage}\n" + t.toProposition(true).toString
          }
          ln("```scala")
          ln(resolvedText)
          ln("```")
          ln()
          val leg = legend(resolvedText)
          if (leg.nonEmpty) {
            ln("`ArithOp` opcode legend (names from `sigma.serialization.OpCodes`):")
            ln()
            ln("| As printed | Byte | sigmastate name |")
            ln("|---|---|---|")
            leg.foreach(l => ln(l))
            ln()
          }
          ln("### 3b. As stored: full ErgoTree with `ConstantPlaceholder(i, T)` nodes")
          ln()
          ln("`SigmaPPrint(tree)`: header, constant vector, and root exactly as deserialized (placeholders not substituted).")
          ln()
          val stored = Try(pp(t)).getOrElse(t.toString)
          ln("<details><summary>Show</summary>")
          ln()
          ln("```scala")
          ln(stored)
          ln("```")
          ln()
          ln("</details>")
          ln()
      }

      ln("## 4. How produced")
      ln()
      ln(howProduced)
      ln()
      Files.write(Paths.get(outDir, s"$file.md"), sb.toString.getBytes(UTF_8))

      Result(file, role, es.map(_.key), addrs.mkString(" "), hash, bytes.length, h,
        parsed.toOption.exists(_.isRightParsed), rtA, rtB, layout, addressOk, hashOk, lengthOk, nConst, printer, err,
        tplHash, constList)
    }

    // ---------------------------------------------------------------- README
    val sb = new StringBuilder
    def ln(s: String = ""): Unit = sb.append(s).append('\n')
    val scriptSrc = new String(Files.readAllBytes(Paths.get(scriptPath)), UTF_8)

    ln("# Decompiled deployed ErgoTrees — duckpools v2 QUACKS pool `00fa2be6…`")
    ln()
    ln("Mechanical decompilation of every distinct ErgoTree behind the P2S addresses of the latest duckpools v2 QUACKS pool " +
      "(POOL_NFT `00fa2be6114e58ec0f213a93492bd44e554ae28540026604eea1092a980ff98e`). Each file gives the header decode, the constant table, " +
      "and the expression as printed by sigmastate's own pretty-printer. No assessment is made here.")
    ln()
    ln("## Input")
    ln()
    ln("- File: `test-frontend/v2-latest-quacks-00fa2be6.json` (in the audit working directory, next to this repo checkout)")
    ln(s"- sha256 of the input file: `${sha256File(jsonPath)}`")
    ln("- In-repo copy: `../deployed.json` (next to this directory). If its sha256 equals the value above, it is the same input and can be passed to the script instead.")
    ln(s"- JSON entries carrying `ergotree_hex`: ${entries.length}; distinct trees (deduplicated by blake2b256 of the tree bytes): ${results.length}")
    ln()
    ln("## Trees")
    ln()
    ln("| File | JSON role key(s) | Bytes | Header | blake2b256 | Constants | Address→bytes | Hash | Length | Round-trip A | Round-trip B | Layout |")
    ln("|---|---|---|---|---|---|---|---|---|---|---|---|")
    def opt(o: Option[Boolean]): String = o.map(pf).getOrElse("n/a")
    results.foreach { r =>
      ln(f"| [`${r.file}.md`](${r.file}.md) | ${r.keys.map(k => s"`$k`").mkString(", ")} | ${r.length} | `0x${r.header}%02x` | `${r.hash}` | ${r.nConstants.map(_.toString).getOrElse("n/a")} | ${yn(r.addressOk)} | ${yn(r.hashOk)} | ${yn(r.lengthOk)} | ${opt(r.roundTripA)} | ${opt(r.roundTripB)} | ${opt(r.layoutOk)} |")
    }
    ln()
    val allPass = results.forall(r => r.deserialized && r.roundTripA.contains(true) && r.roundTripB.contains(true) && r.layoutOk.contains(true) && r.addressOk && r.hashOk && r.lengthOk)
    val nPass = results.count(r => r.roundTripA.contains(true) && r.roundTripB.contains(true))
    ln(s"Round-trip result: $nPass of ${results.length} trees re-serialize to the exact input bytes by both methods. " +
      (if (allPass) "Every tree also passed the address, hash, length and layout checks." else "At least one check did not pass; see the table and the per-tree file."))
    results.filter(_.error.isDefined).foreach { r => ln(s"- `${r.file}`: `${r.error.get}`") }
    ln()
    // ---- negative control: prove the round-trip comparison can fail
    val zeroInt = Array[Byte](0x04, 0x00)
    val nonMinimalZeroInt = Array[Byte](0x04, 0x80.toByte, 0x00)
    val candidate = parsedTrees.toSeq
      .filter { case (_, (_, t)) => !t.hasSize && t.isConstantSegregation }
      .sortBy { case (_, (b, _)) => b.length }
      .flatMap { case (f, (b, t)) =>
        t.constants.indexWhere(c => java.util.Arrays.equals(constBytes(c), zeroInt)) match {
          case -1 => None
          case i  => Some((f, b, t, i))
        }
      }.headOption
    ln("Negative control (run by the same script):")
    ln()
    candidate match {
      case Some((f, b, t, i)) =>
        val mutated = Array.concat(Array(b(0)) +: uintBytes(t.constants.length) +:
          (t.constants.zipWithIndex.map { case (c, j) => if (j == i) nonMinimalZeroInt else constBytes(c) } :+ t.template): _*)
        val mt = Try(DefaultSerializer.deserializeErgoTree(mutated))
        val (mRight, mA, mB) = mt match {
          case Success(x) if x.isRightParsed =>
            (true,
              java.util.Arrays.equals(DefaultSerializer.serializeErgoTree(x), mutated),
              java.util.Arrays.equals(ErgoTree(x.header, x.constants, x.root.right.get).bytes, mutated))
          case _ => (false, false, false)
        }
        ln(s"- `$f.md` with constant #$i (`Int` 0, serialized `0400`) rewritten as the non-minimal VLQ `048000`. " +
          s"The mutated bytes (${mutated.length}) were accepted by the deserializer: ${yn(mRight)}. " +
          s"Round-trip A on the mutated bytes: ${pf(mA)}. Round-trip B: ${pf(mB)}. " +
          s"(Expected: accepted, then both round-trips FAIL, because the serializer writes the canonical `0400`. " +
          s"This shows the round-trip columns compare re-serialized bytes and do not echo the input.) " +
          s"Control behaved as expected: ${yn(mRight && !mA && !mB)}")
      case None =>
        ln("- No v0 tree with an `Int` 0 constant was found; the control was not run.")
    }
    ln()

    // ---- shared templates
    ln("## Trees that share a template")
    ln()
    ln("`tree.template` is the root expression bytes with `ConstantPlaceholder` nodes, without the constant table. Trees with the same template hash have the same expression and differ only in constant values.")
    ln()
    val byTpl = results.filter(_.templateHash.isDefined).groupBy(_.templateHash.get).toSeq
      .filter(_._2.size > 1).sortBy(g => results.indexWhere(_.templateHash == Some(g._1)))
    if (byTpl.isEmpty) ln("No two distinct trees share a template.")
    byTpl.foreach { case (th, rs) =>
      val n = rs.map(_.consts.size).max
      val diffs = (0 until n).filter(i => rs.map(_.consts.lift(i)).distinct.size > 1)
      ln(s"- ${rs.map(r => s"`${r.file}`").mkString(", ")}: template blake2b256 `$th`. " +
        (if (diffs.isEmpty) "No constant differs."
         else "Constants that differ: " + diffs.map { i =>
           s"#$i (" + rs.map(r => s"`${r.file}` = ${r.consts.lift(i).map(_._2).getOrElse("absent")}").mkString("; ") + ")"
         }.mkString(", ") + "."))
    }
    ln()

    ln("Column meanings:")
    ln()
    ln("- **Header**: first byte of the tree. Bits 0-2 = ErgoTree version, bit 3 = size field present, bit 4 = constant segregation. " +
      "`0x10` = version 0, no size field, constants segregated. `0x19` = version 1, size field present, constants segregated.")
    ln("- **Address→bytes**: the address string was decoded by sigmastate `ErgoAddressEncoder` (mainnet prefix; the decoder verifies the Base58 checksum) and the P2S content bytes compared with the JSON `ergotree_hex`.")
    ln("- **Hash / Length**: recomputed blake2b256 and byte length compared with the JSON `blake2b256_tree` / `tree_bytes`.")
    ln("- **Round-trip A**: `ErgoTreeSerializer.DefaultSerializer.serializeErgoTree(deserializeErgoTree(bytes))` equals the input bytes. " +
      "For a fully parsed tree this re-serializes the AST; it does not echo the input (it only echoes for `UnparsedErgoTree`, which every tree here is checked not to be).")
    ln("- **Round-trip B**: a new `ErgoTree(header, constants, root)` built from the parsed parts (no cached input bytes), then `.bytes`, equals the input bytes.")
    ln("- **Layout**: header byte + size field (if any) + constant count + each constant re-serialized by `ConstantSerializer` + `tree.template` equals the input bytes. This ties the hex in each constants table to the on-chain bytes.")
    ln()
    ln("## What each file contains")
    ln()
    ln("1. Header: role key(s), address, length, header byte decoded bit by bit, blake2b256, size field (v1 trees), template hash, and the checks above.")
    ln("2. Constants: index, sigmastate type, value, serialized hex, and exact matches of `Coll[Byte]` constants against token ids / tree hashes / tree bytes in the same input JSON. ProveDlog constants show the compressed public key hex. For trees of 64 bytes or fewer, a one-line statement of what the root is, read off the parsed AST.")
    ln("3. Decompiled expression: (3a) `SigmaPPrint(tree.toProposition(replaceConstants = true))`, constants resolved by sigmastate; (3b) `SigmaPPrint(tree)`, the tree as stored with `ConstantPlaceholder` nodes, under a collapsed block. An `ArithOp` opcode legend follows 3a where `ArithOp` occurs.")
    ln("4. How produced.")
    ln()
    ln("Printer notes. `sigmastate.helpers.SigmaPPrint` prints Scala constructor syntax, not ErgoScript. Reading aids: `ValDef(n, …, e)` binds id `n` to `e`, and `ValUse(n, T)` reads it. " +
      "`BlockValue(defs, e)` is a block. `FuncValue(args, body)` is a lambda. `ExtractRegisterAs(box, ErgoBox.Rk, SOption(T))` is `box.Rk[T]`. `OptionGet` is `.get`. " +
      "`ByIndex(coll, i, None)` is `coll(i)`. `Self`/`Outputs`/`Inputs`/`Height` are `SELF`/`OUTPUTS`/`INPUTS`/`HEIGHT`. `BinAnd`/`BinOr` are `&&`/`||`. " +
      "`MethodCall(obj, T.getMethodByName(\"m\"), args, …)` is `obj.m(args)`. " +
      "`Coll[Byte]` values print as `Helpers.decodeBytes(\"<hex>\")`, `Array[Byte]` as `ErgoAlgos.decodeUnsafe(\"<hex>\")`, and group elements as `Helpers.decodeECPoint(\"<hex>\")`.")
    ln()
    ln("## Toolchain")
    ln()
    ln(s"- sigma-state `$SigmaStateVersion` (`org.scorexfoundation:sigma-state_2.12:$SigmaStateVersion`), loaded from `$sigmaJar`: `ErgoTreeSerializer`, `ErgoAddressEncoder`, `ConstantSerializer`, `ErgoTree.toProposition`")
    ln(s"- `$testsJar` (published classifier `tests` of the same artifact): `sigmastate.helpers.SigmaPPrint`, the pretty-printer. It is test-scoped upstream; the classes are used unmodified from the Maven Central jar.")
    ln(s"- `$pprintJar` (the pprint version sigma-state $SigmaStateVersion declares for its tests)")
    ln(s"- Scala $scalaVersion via scala-cli; Java $javaVersion")
    ln("- ergo-appkit: not used")
    ln()
    ln("Why sigma-state 6.0.6: it is the newest release on Maven Central, and it parses both header variants present here (`0x10` and `0x19`). " +
      "`SigmaPPrint` was found in the `-tests` jars checked (6.0.2, 6.0.6) and in none of the main jars checked (5.0.7, 5.0.8, 5.0.12, 6.0.2, 6.0.6); " +
      "no `PrettyPrintErgoTree` class exists in any of them. The 5.0.x `-tests` jars were not checked.")
    ln()
    ln("## Reproduce")
    ln()
    ln("Build outside the repo. The script below is the exact generator; save it as `decompile.scala` in an empty directory, then:")
    ln()
    ln("```sh")
    ln("TESTS_JAR=\"$(cs fetch --intransitive 'org.scorexfoundation:sigma-state_2.12:6.0.6,classifier=tests')\"")
    ln("scala-cli run --server=false --jar \"$TESTS_JAR\" decompile.scala -- \\")
    ln("  /path/to/test-frontend/v2-latest-quacks-00fa2be6.json ./out decompile.scala")
    ln("diff -r ./out <repo>/audit/deployed/v2-quacks-00fa2be6/decompiled   # expect no differences, other than the Java version string if yours differs")
    ln("```")
    ln()
    ln("scala-cli collapses two classifiers of one module into one dependency, which is why the tests jar is passed with `--jar` rather than a second `//> using dep`.")
    ln()
    ln(s"<details><summary>decompile.scala (sha256 <code>${hex(MessageDigest.getInstance("SHA-256").digest(scriptSrc.getBytes(UTF_8)))}</code>)</summary>")
    ln()
    ln("```scala")
    ln(scriptSrc.stripSuffix("\n"))
    ln("```")
    ln()
    ln("</details>")
    Files.write(Paths.get(outDir, "README.md"), sb.toString.getBytes(UTF_8))

    results.foreach { r =>
      println(f"${r.file}%-28s ${r.length}%5d 0x${r.header}%02x deser=${r.deserialized} A=${r.roundTripA} B=${r.roundTripB} layout=${r.layoutOk} addr=${r.addressOk} hash=${r.hashOk} len=${r.lengthOk} printer=${r.printer} err=${r.error}")
    }
    println(s"ALL_PASS=$allPass trees=${results.length}")
  }
}
```

</details>
