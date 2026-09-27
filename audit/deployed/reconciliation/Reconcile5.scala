//> using scala 2.12.18
//> using dep org.scorexfoundation::sigma-state:5.0.8
// Compile resolved ErgoScript sources with sigmastate 5.0.x and dump tree/template/constants.
// Input: TSV lines  SRC<TAB>id<TAB>path   or   TREE<TAB>id<TAB>hex
// Output: one JSON object per line on stdout.
import sigmastate.lang.SigmaCompiler
import sigmastate.eval.CompiletimeIRContext
import sigmastate.Values.{ErgoTree, SigmaPropValue, Constant, SValue}
import sigmastate.{SType, SSigmaProp, SBoolean}
import sigmastate.serialization.{ValueSerializer, ErgoTreeSerializer}
import scorex.util.encode.Base16
import scala.io.Source

object Reconcile5 {
  def esc(s: String) = s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\t", "\\t")
  def constsJson(t: ErgoTree): String =
    t.constants.map { c => "\"" + Base16.encode(ValueSerializer.serialize(c)) + "\"" }.mkString("[", ",", "]")
  def treeJson(id: String, kind: String, v: Int, t: ErgoTree): String =
    s"""{"id":"${esc(id)}","kind":"$kind","hv":$v,"ok":true,"hex":"${Base16.encode(t.bytes)}","tmpl":"${Base16.encode(t.template)}","consts":${constsJson(t)}}"""
  def main(args: Array[String]): Unit = {
    val lines = Source.fromFile(args(0)).getLines().filter(_.trim.nonEmpty).toList
    val compiler = new SigmaCompiler(0.toByte) // mainnet prefix
    lines.foreach { line =>
      val Array(kind, id, arg) = line.split("\t", 3)
      kind match {
        case "TREE" =>
          val t = ErgoTreeSerializer.DefaultSerializer.deserializeErgoTree(Base16.decode(arg).get)
          println(treeJson(id, "TREE", t.version.toInt, t))
        case "SRC" =>
          val src = Source.fromFile(arg).mkString
          try {
            val IR = new CompiletimeIRContext
            val res = compiler.compile(Map.empty, src)(IR)
            val prop: SigmaPropValue = res.buildTree.tpe match {
              case SSigmaProp => res.buildTree.asInstanceOf[SigmaPropValue]
              case SBoolean => sigmastate.BoolToSigmaProp(res.buildTree.asInstanceOf[sigmastate.Values.BoolValue])
              case other => throw new Exception("unexpected root type " + other)
            }
            for (v <- Seq(0, 1)) {
              val t = ErgoTree.fromProposition(ErgoTree.headerWithVersion(v.toByte), prop)
              println(treeJson(id, "SRC", v, t))
            }
          } catch { case e: Throwable =>
            println(s"""{"id":"${esc(id)}","kind":"SRC","ok":false,"err":"${esc(e.getClass.getName + ": " + String.valueOf(e.getMessage))}"}""")
          }
      }
    }
  }
}
