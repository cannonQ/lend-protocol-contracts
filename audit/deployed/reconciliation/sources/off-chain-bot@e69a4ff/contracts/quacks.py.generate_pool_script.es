// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/quacks.py block=generate_pool_script (python f-string template; {name} placeholders and {{ }} escapes left as written); text below this line is verbatim
{{
	// Constants
	val InterestNFT = fromBase58("{childBoxNft}")
	val ParamaterBoxNft = fromBase58("{parameterBoxNft}")
	val CollateralContractScript = fromBase58("{collateralContractScript}")

	val MaxLendTokens = 9000000000000010L // Genesis value must give lendTokenValue = 1xLendTokenMultiplier and initialCircSupply non zero
	val MaxBorrowTokens = 9000000000000000L
	val BorrowTokenDenomination = 10000000000000000L.toBigInt
	val MinimumBoxValue = 1000000L
	val LendTokenMultipler = 1000000000000000L.toBigInt
	val LiquidationThresholdDenomination = 1000
	val defaultBufferHeight = 100000000L
	val LiquidationFeesMinimum = 4000000L

	// Current pool values
	val currentScript = SELF.propositionBytes
	val currentPoolValue = SELF.value
	val currentPoolNft = SELF.tokens(0)
	val currentLendTokens = SELF.tokens(1)
	val currentBorrowTokens = SELF.tokens(2)
	val currentPooledTokens = SELF.tokens(3)
	val currentLendTokensCirculating = MaxLendTokens - currentLendTokens._2
	val currentBorrowTokensCirculating = MaxBorrowTokens - currentBorrowTokens._2
	val currentPooledAssets = currentPooledTokens._2	

	// Successor pool values
	val successor = OUTPUTS.filter{{
		(out : Box) => out.tokens.size > 0 && out.tokens(0) == currentPoolNft
	}}(0)
	val successorScript = successor.propositionBytes
	val successorPoolValue = successor.value
	val successorPoolNft = successor.tokens(0)
	val successorLendTokens = successor.tokens(1)
	val successorBorrowTokens = successor.tokens(2)
	val successorPooledTokens = successor.tokens(3)
	val successorLendTokensCirculating = MaxLendTokens - successorLendTokens._2
	val successorBorrowTokensCirculating = MaxBorrowTokens - successorBorrowTokens._2
	val successorPooledAssets = successorPooledTokens._2

	// Validation conditions under all spending paths
	val commonConditions = (
		successorScript == currentScript && 
		successorLendTokens._1 == currentLendTokens._1 &&
		successorBorrowTokens._1 == currentBorrowTokens._1 &&
		successorPoolValue >= MinimumBoxValue &&
		successorPooledTokens._1 == currentPooledTokens._1 &&
		successor.tokens.size == SELF.tokens.size &&
		successor.R4[Boolean].get &&
		successor.R5[Boolean].get &&
		successor.R6[Boolean].get &&
		successor.R7[Boolean].get &&
		successor.R8[Boolean].get &&
		successor.R9[Boolean].get
	)
	
	// Extract Values from Interest Box
	val interestBox = CONTEXT.dataInputs.filter{{
		(b : Box) => b.tokens.size > 0 && b.tokens(0)._1 == InterestNFT
	}}(0)
	val interestBoxNFT = interestBox.tokens(0)._1
	val borrowTokenValue = interestBox.R5[BigInt].get
	val currentBorrowed = currentBorrowTokensCirculating.toBigInt * borrowTokenValue / 	BorrowTokenDenomination
	val successorBorrowed = successorBorrowTokensCirculating.toBigInt * borrowTokenValue / BorrowTokenDenomination
	
	// Extract values form poolSettings
	val poolSettings = CONTEXT.dataInputs.filter{{
		(b : Box) => b.tokens.size > 0 && b.tokens(0)._1 == ParamaterBoxNft
	}}(0)
	val serviceParamNft = poolSettings.tokens(0)
	val customLogicNFTs = poolSettings.R4[Coll[Coll[Byte]]].get
	val paramServiceFeeScript = poolSettings.R5[Coll[Byte]].get
	val feeSettings = poolSettings.R6[Coll[Long]].get

	// Calculate Lend Token valuation
	val currentLendTokenValue = LendTokenMultipler * (currentPooledAssets.toBigInt + currentBorrowed.toBigInt) / currentLendTokensCirculating.toBigInt
	val successorLendTokenValue = LendTokenMultipler * (successorPooledAssets.toBigInt + successorBorrowed.toBigInt) / successorLendTokensCirculating.toBigInt

	// Additional validation conditions specific to exchange operation
	val isLendTokenValueMaintained = successorLendTokenValue > currentLendTokenValue // Ensures the current value of an LP token has not decreased
	val isBorrowTokensUnchanged = successorBorrowTokens == currentBorrowTokens
	
	// Useful value to store
	val deltaAssetsInPool = successorPooledAssets - currentPooledAssets
	val absDeltaAssetsInPool = if (deltaAssetsInPool > 0) deltaAssetsInPool else deltaAssetsInPool * -1
	
	val plausibleServiceFeeBoxes = OUTPUTS.filter{{
		(out: Box) => out.propositionBytes == paramServiceFeeScript
	}}	
	
	// Validate service fee
	val isValidServiceFee = if (plausibleServiceFeeBoxes.size > 0) {{
		// Extract values from service fee box
		val serviceFeeBox = plausibleServiceFeeBoxes(0)
		val serviceFeeScript = serviceFeeBox.propositionBytes
		val serviceFeeValue = serviceFeeBox.value
		val serviceFeeTokens = serviceFeeBox.tokens(0)
		val serviceFeeAssets = serviceFeeTokens._2
		
		val sFeeStepOne = feeSettings(0)
		val sFeeStepTwo = feeSettings(1)
		val sFeeDivisorOne = feeSettings(2)
		val sFeeDivisorTwo = feeSettings(3)
		val sFeeDivisorThree = feeSettings(4)
		val minFee = feeSettings(5)
		
		// Calculate total service fee owed
		val totalServiceFee = if (absDeltaAssetsInPool <= sFeeStepOne) {{
			absDeltaAssetsInPool / sFeeDivisorOne
		}} else {{
			if (absDeltaAssetsInPool <= sFeeStepTwo) {{
				(absDeltaAssetsInPool - sFeeStepOne) / sFeeDivisorTwo +
				sFeeStepOne / sFeeDivisorOne
			}} else {{
				(absDeltaAssetsInPool - sFeeStepTwo - sFeeStepOne) / sFeeDivisorThree +
				sFeeStepTwo / sFeeDivisorTwo +
				sFeeStepOne / sFeeDivisorOne
			}}
		}}
			
		// Validate service fee box
		val validServiceScript = serviceFeeScript == paramServiceFeeScript
		val validServiceFeeValue = serviceFeeValue >= MinimumBoxValue
		val validServiceTokens = serviceFeeAssets >= max(totalServiceFee, minFee) && serviceFeeTokens._1 == currentPooledTokens._1
	
		// Apply validation conditions
		(
			validServiceScript &&
			validServiceFeeValue &&
			validServiceTokens
		)
	}} else {{
		false
	}}

	// Validate exchange operation
	val isValidExchange = (
		commonConditions &&
		isBorrowTokensUnchanged &&
		isLendTokenValueMaintained &&
		isValidServiceFee
	)

	// Allow for deposits
	val deltaTotalBorrowed = successorBorrowTokensCirculating - currentBorrowTokensCirculating
	
	val isLendTokensUnchanged = successorLendTokens == currentLendTokens
	val isAssetsInPoolIncreasing = deltaAssetsInPool > 0
	val isDepositDeltaBorrowedValid = deltaTotalBorrowed < 0 // Enforces a deposit to add borrow tokens to the pool

	// Validate deposit operation
	val isValidDeposit = (
		commonConditions &&
		isLendTokensUnchanged &&
		isAssetsInPoolIncreasing &&
		isDepositDeltaBorrowedValid
	)
	
	val plausibleCollateralBoxes = OUTPUTS.filter{{
		(b: Box) => blake2b256(b.propositionBytes) == CollateralContractScript
	}}	

	val isValidBorrow = if (plausibleCollateralBoxes.size > 0) {{
		val collateralBox = plausibleCollateralBoxes(0)
		val collateralIndex = OUTPUTS.map{{
			(b: Box) => b.id
		}}.indexOf(collateralBox.id, 0)
		val collateralValue = collateralBox.value
		val collateralBorrowTokens = collateralBox.tokens(0)
		val collateralBorrower = collateralBox.R4[Coll[Byte]].get
		val collateralUserPk = collateralBox.R5[GroupElement].get
		val bufferLiquidationHeight = collateralBox.R6[Long].get
		val collateralQuoteNFT = collateralBox.R7[Coll[Byte]].get
		val verifiedSpendingNFT = collateralBox.R8[Coll[Byte]].get
		val loanSettingsRecorded = collateralBox.R9[Coll[Long]].get
		val loanAmount = collateralBorrowTokens._2.toBigInt * borrowTokenValue / BorrowTokenDenomination
	
		val fQuote = OUTPUTS.filter{{
		(b: Box) => b.tokens.size > 0 && customLogicNFTs.exists{{
			(NFT: Coll[Byte]) => b.tokens(0)._1 == NFT && NFT == collateralQuoteNFT
			}}
		}}(0)
		val quoteReport = fQuote.R4[Coll[Long]].get 
		val borrowLimit = quoteReport(0)
		val quotePrice = quoteReport(1)
		val threshold = quoteReport(2)
		val penalty = quoteReport(3)
		val minimumValue = quoteReport(4)
		val bufferGap = quoteReport(5)
		val minimumLoanAmount = quoteReport(6)
		val shortLoanFee = quoteReport(7)
		val shortLoanDuration = quoteReport(8)
		val maxBorrowAmount = quoteReport(9)
		val finalBorrowedFromPool = successorBorrowTokensCirculating * borrowTokenValue / BorrowTokenDenomination
		val isUnderBorrowLimit = finalBorrowedFromPool < borrowLimit
		val isQuotedBoxValid = collateralIndex == fQuote.R9[Coll[Int]].get(0) - 1
		val isAboveMinimumValue = collateralValue > LiquidationFeesMinimum && collateralValue >= minimumValue
		val isValidSettings = (
			loanSettingsRecorded(0) == threshold &&
			loanSettingsRecorded(1) == penalty &&
			loanSettingsRecorded(2) == bufferGap &&
			loanSettingsRecorded(3) == minimumValue &&
			loanSettingsRecorded(4) == minimumLoanAmount &&
			loanSettingsRecorded(5) >= HEIGHT &&
			loanSettingsRecorded(6) == shortLoanFee &&
			loanSettingsRecorded(7) == shortLoanDuration
		)
		val isUnderMaxBorrowAmount = loanAmount <= maxBorrowAmount
		val isCorrectCollateralAmount = quotePrice >= loanAmount.toBigInt * threshold.toBigInt / LiquidationThresholdDenomination.toBigInt
		val isCorrectBufferHeight = bufferLiquidationHeight == defaultBufferHeight
		
		val isCollateralTokensPreserved = collateralBorrowTokens._2 + successorBorrowTokens._2 == currentBorrowTokens._2
		
		val isAssetsInPoolDecreasing = deltaAssetsInPool < 0
		val isAssetAmountValid = deltaAssetsInPool * -1 == loanAmount && loanAmount >= minimumLoanAmount
		val isTotalBorrowedValid = deltaTotalBorrowed == collateralBorrowTokens._2
		val isCollateralBorrowTokenIdValid = collateralBorrowTokens._1 == currentBorrowTokens._1
		(
			commonConditions &&
			successorLendTokens == currentLendTokens &&
			isCollateralTokensPreserved &&
			isAssetsInPoolDecreasing &&
			isAssetAmountValid &&
			isTotalBorrowedValid &&
			isCollateralBorrowTokenIdValid &&
			isCorrectBufferHeight &&
			isCorrectCollateralAmount &&
			isUnderBorrowLimit &&
			isQuotedBoxValid &&
			isAboveMinimumValue &&
			isValidSettings &&
			isUnderMaxBorrowAmount
		)	
	}} else {{
		false
	}}
	sigmaProp(isValidExchange || isValidDeposit || isValidBorrow)	
}}
