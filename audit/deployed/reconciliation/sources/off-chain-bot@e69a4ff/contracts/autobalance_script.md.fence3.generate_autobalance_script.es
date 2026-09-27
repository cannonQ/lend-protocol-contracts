// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/autobalance_script.md block=fence3.generate_autobalance_script (python f-string template inside the fence; {name} placeholders and {{ }} escapes left as written); text below this line is verbatim
{{
    val CollateralContractScript = fromBase58("{collateralScript}")
    val MinimumBoxValue = 1000000L
    val BalanceThresholdNumerator = 10L
    val BalanceThresholdDenominator = 100L
    val MaxTransactionFees = 5000000L

    val spendNftId = SELF.tokens(0)._1
    val groupSpecialBytes = SELF.R5[Coll[Coll[Byte]]].get
    val userPk = SELF.R7[GroupElement].get
    val groupSpecialBytesR9 = SELF.R9[Coll[Coll[Byte]]].get

    val collateralInputs = INPUTS.filter {{
        (b: Box) => blake2b256(b.propositionBytes) == CollateralContractScript
    }}
    val numCollaterals = collateralInputs.size

    val hasValidCollateralCount = numCollaterals == 2

    val autobalanceConditions = if (hasValidCollateralCount) {{

        val collateral0 = collateralInputs(0)
        val collateral1 = collateralInputs(1)

        val allCollateralsValid = collateralInputs.forall {{ (collateral: Box) =>
            val collateralR8 = collateral.R8[Coll[Byte]].get
            val collateralSpendNft = collateralR8.slice(0, 32)
            val collateralSpecialBytes = collateralR8.slice(32, 40)

            val matchesSpendNft = collateralSpendNft == spendNftId
            val isMember = groupSpecialBytesR9.exists {{ (gb: Coll[Byte]) => gb == collateralSpecialBytes }}

            matchesSpendNft && isMember
        }}

        if (allCollateralsValid) {{
            val collateral0Index = INPUTS.indexOf(collateral0, 0)
            val collateral1Index = INPUTS.indexOf(collateral1, 0)

            val quoteBox0Index = 2 * collateral1Index + 2
            val quoteBox1Index = 2 * collateral1Index + 3
            val outputCollateral0Index = 2 * collateral0Index
            val outputCollateral1Index = 2 * collateral1Index

            if (OUTPUTS.size > quoteBox1Index) {{
                val quoteBox0 = OUTPUTS(quoteBox0Index)
                val quoteBox1 = OUTPUTS(quoteBox1Index)

                val quoteReport0 = quoteBox0.R4[Coll[Long]].get
                val quoteReport1 = quoteBox1.R4[Coll[Long]].get

                val quotePrice0 = quoteReport0(1)
                val quotePrice1 = quoteReport1(1)

                val priceDiff = if (quotePrice0 > quotePrice1) quotePrice0 - quotePrice1 else quotePrice1 - quotePrice0
                val minPrice = if (quotePrice0 < quotePrice1) quotePrice0 else quotePrice1
                val hasSufficientImbalance = priceDiff * BalanceThresholdDenominator > BalanceThresholdNumerator * minPrice

                val outputCollateral0 = OUTPUTS(outputCollateral0Index)
                val outputCollateral1 = OUTPUTS(outputCollateral1Index)

                val outputCollateralsValid = (
                    blake2b256(outputCollateral0.propositionBytes) == CollateralContractScript &&
                    blake2b256(outputCollateral1.propositionBytes) == CollateralContractScript
                )

                val largerIndex = if (quotePrice0 >= quotePrice1) 0 else 1
                val transferNumerator = if (quotePrice0 >= quotePrice1) quotePrice0 - quotePrice1 else quotePrice1 - quotePrice0
                val transferDenominator = if (quotePrice0 >= quotePrice1) 2 * quotePrice0 else 2 * quotePrice1

                val largerInput = if (largerIndex == 0) collateral0 else collateral1
                val smallerInput = if (largerIndex == 0) collateral1 else collateral0
                val largerOutput = if (largerIndex == 0) outputCollateral0 else outputCollateral1
                val smallerOutput = if (largerIndex == 0) outputCollateral1 else outputCollateral0

                val largerErg = largerInput.value
                val smallerErg = smallerInput.value
                val ergTransfer = (largerErg * transferNumerator) / transferDenominator

                val expectedLargerErg = largerErg - ergTransfer
                val expectedSmallerErg = smallerErg + ergTransfer

                val ergRebalancedCorrectly = (
                    largerOutput.value >= expectedLargerErg - MaxTransactionFees &&
                    largerOutput.value <= expectedLargerErg &&
                    smallerOutput.value >= expectedSmallerErg &&
                    smallerOutput.value <= expectedSmallerErg + MaxTransactionFees
                )

                val inputTotalValue = collateral0.value + collateral1.value
                val outputTotalValue = outputCollateral0.value + outputCollateral1.value
                val valuesPreserved = outputTotalValue >= inputTotalValue - MaxTransactionFees

                val borrowTokensPreserved = (
                    largerOutput.tokens(0) == largerInput.tokens(0) &&
                    smallerOutput.tokens(0) == smallerInput.tokens(0)
                )

                val tokensRebalancedCorrectly = largerInput.tokens.indices.forall {{ (i: Int) =>
                    if (i == 0) {{
                        true
                    }} else {{
                        val tokenId = largerInput.tokens(i)._1
                        val largerAmount = largerInput.tokens(i)._2
                        val smallerAmount = smallerInput.tokens(i)._2
                        val tokenTransfer = (largerAmount * transferNumerator) / transferDenominator

                        val expectedLarger = largerAmount - tokenTransfer
                        val expectedSmaller = smallerAmount + tokenTransfer

                        largerOutput.tokens(i)._1 == tokenId &&
                        largerOutput.tokens(i)._2 == expectedLarger &&
                        smallerOutput.tokens(i)._1 == tokenId &&
                        smallerOutput.tokens(i)._2 == expectedSmaller
                    }}
                }}

                val rebalancedCorrectly = ergRebalancedCorrectly && borrowTokensPreserved && tokensRebalancedCorrectly

                val autobalanceOutputs = OUTPUTS.filter {{ (b: Box) =>
                    b.propositionBytes == SELF.propositionBytes &&
                    b.tokens.size > 0 &&
                    b.tokens(0)._1 == spendNftId
                }}

                val autobalanceRecreated = autobalanceOutputs.size == 1 && {{
                    val successor = autobalanceOutputs(0)

                    successor.tokens(0) == SELF.tokens(0) &&
                    successor.R4[Coll[Byte]].get == SELF.R4[Coll[Byte]].get &&
                    successor.R5[Coll[Coll[Byte]]].get == groupSpecialBytes &&
                    successor.R6[Coll[Byte]].get == SELF.R6[Coll[Byte]].get &&
                    successor.R7[GroupElement].get == userPk &&
                    successor.R9[Coll[Coll[Byte]]].get == groupSpecialBytesR9 &&
                    successor.value >= MinimumBoxValue
                }}

                hasSufficientImbalance &&
                outputCollateralsValid &&
                valuesPreserved &&
                rebalancedCorrectly &&
                autobalanceRecreated

            }} else {{
                false
            }}
        }} else {{
            false
        }}
    }} else {{
        false
    }}

    proveDlog(userPk) || sigmaProp(autobalanceConditions)
}}
