// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/autobalance_script.md block=fence1; text below this line is verbatim
val nftProofGiven = INPUTS.filter{
    (b: Box) => b.tokens.size > 0 &&
                b.tokens(0)._1 == iSpendingNFTShort &&
                b.R9[Coll[Coll[Byte]]].get(selfIndex) == iSpendingNFTEnd
}.size > 0
