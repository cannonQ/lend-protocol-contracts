// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/quacks.py block=generate_collateral_script (python f-string template; {name} placeholders and {{ }} escapes left as written); text below this line is verbatim
{{	
	// * Implicit Conditions
	// Constants
	val RepaymentContractScript = fromBase58("{repaymentScript}")
	val InterestNFT = fromBase58("{interestNft}")
	val PoolCurrencyId = fromBase58("{poolCurrencyId}")
	val BorrowTokenDenomination = 10000000000000000L.toBigInt
	val LiquidationThresholdDenom = 1000
	val PenaltyDenom = 1000
	val MinimumTransactionFee = 1000000L
	val MinimumBoxValue = 1000000L
	val defaultBuffer = 100000000L
	val storageRentLength = 980000L // Slightly less than full storage rent length for sanity

	// Current Collateral Box
	val currentScript = SELF.propositionBytes
	val currentValue = SELF.value
	val currentBorrowTokens = SELF.tokens(0)
	val iCollateralTokens = SELF.tokens.slice(1, SELF.tokens.size)
	val currentBorrower = SELF.R4[Coll[Byte]].get
	val currentUserPk = SELF.R5[GroupElement].get
	val iBufferLiquidation = SELF.R6[Long].get
	val currentQuoteNFT = SELF.R7[Coll[Byte]].get
	val iSpendingNFT = SELF.R8[Coll[Byte]].get
    val iSpendingNFTShort = iSpendingNFT.slice(0, 32)
    val iSpendingNFTEnd = iSpendingNFT.slice(32, 40)
	val iLoanSettings = SELF.R9[Coll[Long]].get
	val loanAmount = currentBorrowTokens._2
	val iThreshold = iLoanSettings(0)
	val iPenalty = iLoanSettings(1)
	val iBufferGap = iLoanSettings(2)
	val iMinimumValue = iLoanSettings(3)
	val iBorrowHeight = iLoanSettings(5)
    val shortLoanFee = iLoanSettings(6)
    val shortLoanDuration = iLoanSettings(7)
	
	// Extract values from interest box
	val interestBox = CONTEXT.dataInputs.filter{{
		(b: Box) => b.tokens.size > 0 && b.tokens(0)._1 == InterestNFT
	}}(0)
	val borrowTokenValue = interestBox.R5[BigInt].get
    
    val baseTotalOwed = loanAmount.toBigInt * borrowTokenValue / BorrowTokenDenomination
    val isInShortLoanDuration = HEIGHT < iBorrowHeight + shortLoanDuration
	val totalOwed = if (isInShortLoanDuration) {{
	    baseTotalOwed * (shortLoanFee.toBigInt + PenaltyDenom.toBigInt) / PenaltyDenom.toBigInt
    }} else {{
	    baseTotalOwed
	}}

	// Fetch Collateral Quote Box
	val fQuotes = OUTPUTS.filter{{
		(b: Box) => b.tokens.size > 0 && b.tokens(0)._1 == currentQuoteNFT
	}}
	
	val collateralInputs = INPUTS.filter{{
    	(b: Box) => b.propositionBytes == SELF.propositionBytes
	}}	
	val selfCollateralIndex = collateralInputs.indexOf(SELF, 0)
	val selfIndex = INPUTS.indexOf(SELF, 0)
	val isOnlyOneCollateralInput = collateralInputs.size == 1

	if (fQuotes.size > 0) {{
		val fQuote = fQuotes.getOrElse(selfCollateralIndex, SELF)
		val quoteReport = fQuote.R4[Coll[Long]].get
		val quotePrice = quoteReport(1)
		val iThresholdQuoted = quoteReport(2)
		val iPenaltyQuoted = quoteReport(3)

		val fCollaterals = OUTPUTS.filter{{
			(b: Box) => b.propositionBytes == SELF.propositionBytes
		}}

		val fRepayments = OUTPUTS.filter{{
			(b: Box) => blake2b256(b.propositionBytes) == RepaymentContractScript
		}} 

		if (fCollaterals.size > 0) {{
			val fCollateral = fCollaterals.getOrElse(selfCollateralIndex, SELF)
			val collateralIndex = OUTPUTS.map{{
				(b: Box) => b.id
			}}.indexOf(fCollateral.id, 0)
			val isQuotedBoxValid = collateralIndex == fQuote.R9[Coll[Int]].get(0) - 1

			val fCollateralValue = fCollateral.value
			val fCollateralBorrowTokens = fCollateral.tokens(0)
			val fCollateralTokens = fCollateral.tokens.slice(1, fCollateral.tokens.size)
			val fCollateralBorrower = fCollateral.R4[Coll[Byte]].get
			val fCollateralUserPk = fCollateral.R5[GroupElement].get
			val fBufferLiquidation = fCollateral.R6[Long].get
			val fCollateralQuoteNFT = fCollateral.R7[Coll[Byte]].get
			val fSpendingNFT = fCollateral.R8[Coll[Byte]].get
			val fLoanSettings = fCollateral.R9[Coll[Long]].get
			val fBufferGap = fLoanSettings(2)
			val fMinimumValue = fLoanSettings(3)

			val bufferLiquidationSame = fBufferLiquidation == iBufferLiquidation
			val retainLoanSettings = fLoanSettings.slice(0,8) == iLoanSettings.slice(0,8)

			val fCollateralCommon = (
			    fCollateralValue >= iMinimumValue &&
				fCollateralBorrowTokens._1 == currentBorrowTokens._1 &&
				fCollateralBorrower == currentBorrower &&
				fCollateralUserPk == currentUserPk &&
				fCollateralQuoteNFT == currentQuoteNFT
			)
			if (fRepayments.size > 0) {{
				// Partial Repay and Automated Actions
				val fRepayment = fRepayments.getOrElse(selfIndex, SELF)		

				val fRepaymentValue = fRepayment.value
				val fRepaymentBorrowTokens = fRepayment.tokens(0)
				val fRepaymentLoanTokens = fRepayment.tokens(1)
				val repaymentMade = fRepaymentLoanTokens._2

				val expectedBorrowTokens = currentBorrowTokens._2.toBigInt - (repaymentMade.toBigInt * BorrowTokenDenomination.toBigInt / borrowTokenValue.toBigInt)
				val validBorrowTokens = fCollateralBorrowTokens._2.toBigInt >= expectedBorrowTokens

				val fRepaymentCommon = (
					fRepaymentValue >= MinimumTransactionFee &&
					fRepaymentBorrowTokens._1 == currentBorrowTokens._1 &&
					fRepaymentLoanTokens._1 == PoolCurrencyId
				)	

				// Specific Partial Repay Conditions				
				val finalTotalOwed = fCollateralBorrowTokens._2 * borrowTokenValue / BorrowTokenDenomination
				val isSufficientCollateral = quotePrice >= finalTotalOwed.toBigInt * iThreshold.toBigInt / LiquidationThresholdDenom.toBigInt
				val isTokensUntouched = fCollateralTokens == iCollateralTokens

				val partialRepayment = sigmaProp(
					// Complete Collateral Checks (Value, Borrow Token Amount, Tokens, Buffer)
					fCollateralCommon &&
					isQuotedBoxValid &&
                    iSpendingNFT == fSpendingNFT &&
					fCollateralValue >= currentValue &&
					fCollateralValue <= currentValue + 10 * MinimumTransactionFee &&
					validBorrowTokens &&
					isTokensUntouched &&
					bufferLiquidationSame &&
					retainLoanSettings &&
					// Complete Repayment Checks (Borrow Token Amount, Loan Token Amount*)
					fRepaymentCommon &&
					fRepaymentBorrowTokens._2 == currentBorrowTokens._2 - fCollateralBorrowTokens._2 &&
					isSufficientCollateral &&
					isOnlyOneCollateralInput &&
					!isInShortLoanDuration
				)
				partialRepayment
			}} else {{
				// Prep Liquidation and Adjust Collateteral
				// Specific Ready to liquidate conditions
				val finalTotalOwed = fCollateralBorrowTokens._2 * borrowTokenValue / BorrowTokenDenomination
				val isSufficientCollateral = quotePrice >= finalTotalOwed.toBigInt * iThreshold.toBigInt / LiquidationThresholdDenom.toBigInt

				val readyToLiquidate = sigmaProp(
					// Complete Collateral Checks (Value, Borrow Token Amount, Settings)
					fCollateralCommon &&
					isQuotedBoxValid &&
                    iSpendingNFT == fSpendingNFT &&
					fCollateralValue >= currentValue - MinimumTransactionFee &&
					fCollateralValue <= currentValue + 10 * MinimumTransactionFee &&
					fCollateral.tokens == SELF.tokens &&
					fBufferLiquidation > HEIGHT + iBufferGap && fBufferLiquidation < HEIGHT + iBufferGap + 5 &&
					!isSufficientCollateral &&
					retainLoanSettings &&
					isOnlyOneCollateralInput			
				)
				
				val resetLiquidate = sigmaProp(
					// Complete Collateral Checks (Value, Borrow Token Amount, Settings)
					fCollateralCommon &&
					isQuotedBoxValid &&
					iSpendingNFT == fSpendingNFT &&
					fCollateralValue >= currentValue - MinimumTransactionFee &&
					fCollateralValue <= currentValue + 10 * MinimumTransactionFee &&
					fCollateral.tokens == SELF.tokens &&
					iBufferLiquidation != defaultBuffer &&
					fBufferLiquidation == defaultBuffer &&
					isSufficientCollateral &&
					retainLoanSettings &&
					isOnlyOneCollateralInput			
				)

				val isValidCollateral = quotePrice >= totalOwed.toBigInt * iThresholdQuoted.toBigInt / LiquidationThresholdDenom.toBigInt
				val isValidNewSettings = fLoanSettings(0) == iThresholdQuoted && fLoanSettings(1) == iPenaltyQuoted
				val nftProofGiven = INPUTS.filter{{
					(b: Box) => b.tokens.size > 0 && b.tokens(0)._1 == iSpendingNFTShort && b.R9[Coll[Coll[Byte]]].get(selfIndex) == iSpendingNFTEnd
				}}.size > 0
				val adjustCollateral = (sigmaProp(nftProofGiven) || proveDlog(currentUserPk)) && 
				sigmaProp(
					// Complete Collateral Checks (Value, Borrow Token Amount, Settings)
					fCollateralCommon &&
					isQuotedBoxValid &&
                    iSpendingNFT == fSpendingNFT &&
					isValidCollateral &&
					fCollateralBorrowTokens == currentBorrowTokens &&
					fBufferLiquidation == defaultBuffer &&
					isSufficientCollateral &&
					isValidNewSettings &&
					collateralInputs.size == fCollaterals.size &&
					fBufferGap == iBufferGap &&
					fMinimumValue == iMinimumValue &&
                    fLoanSettings(5) == iLoanSettings(5) &&  // Preserve iBorrowHeight
                    fLoanSettings(6) == iLoanSettings(6) &&  // Preserve shortLoanFee
                    fLoanSettings(7) == iLoanSettings(7)     // Preserve shortLoanDuration
				)
				
            val adjustSpendNFT = (sigmaProp(nftProofGiven) || proveDlog(currentUserPk)) && 
				sigmaProp(
					// Complete Collateral Checks (Value, Borrow Token Amount, Settings)
					fCollateralCommon &&
					fCollateralValue == currentValue &&
					fCollateral.tokens == SELF.tokens &&
					fCollateralBorrower == currentBorrower &&
					fCollateralUserPk == currentUserPk &&
					fCollateralQuoteNFT == currentQuoteNFT &&
					fLoanSettings == iLoanSettings &&
					collateralInputs.size == fCollaterals.size
				)
				readyToLiquidate || resetLiquidate || adjustCollateral || adjustSpendNFT
			}}

		}} else {{
			val collateralIndex = INPUTS.map{{
				(b: Box) => b.id
			}}.indexOf(SELF.id, 0)
			val isQuotedBoxValid = collateralIndex == fQuote.R9[Coll[Int]].get(0) * -1 - 1
			val fRepayment = fRepayments.getOrElse(0, SELF)

			val fRepaymentValue = fRepayment.value
			val fRepaymentBorrowTokens = fRepayment.tokens(0)
			val fRepaymentLoanTokens = fRepayment.tokens(1)
			val repaymentMade = fRepaymentLoanTokens._2

			val fRepaymentCommon = (
				fRepaymentValue >= MinimumTransactionFee &&
				fRepaymentBorrowTokens._1 == currentBorrowTokens._1 &&
				fRepaymentLoanTokens._1 == PoolCurrencyId &&
				fRepayment.id != SELF.id
			)	

			val liquidationAllowed = (
				(
					quotePrice <= totalOwed.toBigInt * iThreshold.toBigInt / LiquidationThresholdDenom.toBigInt &&
					HEIGHT >= iBufferLiquidation
				) || 
				HEIGHT > SELF.creationInfo._1 + storageRentLength
			)

			val repaymentAmount = fRepaymentLoanTokens._2

			// Apply penalty on repayment and borrower share
			val borrowerShare = ((quotePrice - totalOwed.toBigInt) * (PenaltyDenom.toBigInt - iPenalty.toBigInt)) / PenaltyDenom.toBigInt
			val applyPenalty = if (borrowerShare < 1.toBigInt) {{
				repaymentAmount.toBigInt >= quotePrice
			}} else {{
				val validRepayment = repaymentAmount.toBigInt >= totalOwed.toBigInt + ((quotePrice - totalOwed.toBigInt) * iPenalty.toBigInt / PenaltyDenom.toBigInt)
				val borrowBox = OUTPUTS.filter{{
					(b: Box) => b.propositionBytes == currentBorrower
				}}.getOrElse(0, SELF)
				val validBorrowerShare = borrowBox.tokens(0)._2.toBigInt >= borrowerShare
				val validBorrowerShareId = borrowBox.tokens(0)._1 == PoolCurrencyId
				validRepayment && validBorrowerShare && validBorrowerShareId && borrowBox.id != SELF.id
			}}   

			val liquidate = sigmaProp(
				liquidationAllowed &&
				// Complete Repayment Checks (Borrow Token Amount, Loan Token Amount*)
				fRepaymentCommon &&
				fRepaymentBorrowTokens._2 == currentBorrowTokens._2 &&
				applyPenalty &&
				isQuotedBoxValid &&
				isOnlyOneCollateralInput
			)
			liquidate
		}}
	}} else {{
		val fRepayment = OUTPUTS.filter{{
			(b: Box) => blake2b256(b.propositionBytes) == RepaymentContractScript
		}}.getOrElse(0, SELF)

		val fRepaymentValue = fRepayment.value
		val fRepaymentBorrowTokens = fRepayment.tokens(0)
		val fRepaymentLoanTokens = fRepayment.tokens(1)
		val repaymentMade = fRepaymentLoanTokens._2

		val fRepaymentCommon = (
			fRepaymentValue >= MinimumBoxValue + MinimumTransactionFee &&
			fRepaymentBorrowTokens._1 == currentBorrowTokens._1 &&
			fRepaymentLoanTokens._1 == PoolCurrencyId &&
			fRepayment.id != SELF.id
		)	

        val nftProofGiven = INPUTS.filter{{
			(b: Box) => b.tokens.size > 0 && b.tokens(0)._1 == iSpendingNFTShort && b.R9[Coll[Coll[Byte]]].get(selfIndex) == iSpendingNFTEnd
        }}.size > 0
        
        val validUseOfCollateral = if (nftProofGiven) {{
            true
        }} else {{
            val borrowBox = OUTPUTS.filter{{
                (b: Box) => b.propositionBytes == currentBorrower
            }}.getOrElse(0, SELF)
            val borrowerValue = borrowBox.value
            (
                borrowerValue >= currentValue - MinimumTransactionFee &&
                borrowBox.tokens == iCollateralTokens &&
                borrowBox.id != SELF.id
            )
        }}
		val repayment = sigmaProp(
			// Complete Repayment Checks (Borrow Token Amount, Loan Token Amount*)
			fRepaymentCommon &&
			fRepaymentBorrowTokens._2 == currentBorrowTokens._2 &&
			fRepaymentLoanTokens._2 > totalOwed &&
			validUseOfCollateral &&
			isOnlyOneCollateralInput
		)
		repayment
	}}
}}
