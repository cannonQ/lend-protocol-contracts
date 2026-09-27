// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/quacks.py block=generate_logic_script (python f-string template; {name} placeholders and {{ }} escapes left as written); text below this line is verbatim
{{	
	val Slippage = 2.toBigInt
	val SlippageDenom = 100.toBigInt
	val DexFeeDenom = 1000.toBigInt
	val MaximumNetworkFee = 5000000
	val LargeMultiplier = 1000000000000L
	val outLogic = OUTPUTS.filter {{
		(b : Box) => b.tokens.size > 0 && b.tokens(0) == SELF.tokens(0)
	}}(0)

	val iReport = SELF.R4[Coll[Long]].get
	val iBorrowLimit = iReport(0)
	val iMinimumValue = iReport(4)
	val iBufferGap = iReport(5)
	val iMinimumLoanAmount = iReport(6)
    val iShortLoanFee = iReport(7)
    val iShortLoanDuration = iReport(8)
    val iMaxBorrowAmount = iReport(9)
	
	val iDexNfts = SELF.R5[Coll[Coll[Byte]]].get
	val iAssetThresholds = SELF.R6[Coll[Long]].get
	
	val fReport = outLogic.R4[Coll[Long]].get
	val fBorrowLimit = fReport(0)
	val fQuotePrice = fReport(1)
	val fAggregateThreshold = fReport(2)
	val fAggregatePenalty = fReport(3) 
	val fMinimumValue = fReport(4)
	val fBufferGap = fReport(5)
	val fMinimumLoanAmount = fReport(6)
    val fShortLoanFee = fReport(7)
    val fShortLoanDuration = fReport(8)
    val fMaxBorrowAmount = fReport(9)
    
	val fDexNfts = outLogic.R5[Coll[Coll[Byte]]].get
	val primaryDexNft = fDexNfts(0)
	val secondaryDexNfts = fDexNfts.slice(1, fDexNfts.size)
	val fAssetThresholds = outLogic.R6[Coll[Long]].get
	val primaryThreshold = fAssetThresholds(0)
	val secondaryThresholds = fAssetThresholds.slice(1, fAssetThresholds.size)
	val fOrderedAssetAmounts = outLogic.R7[Coll[Long]].get
	val fOrderedQuotedAssetIds = outLogic.R8[Coll[Coll[Byte]]].get
	val fHelperIndices = outLogic.R9[Coll[Int]].get
	val fBoxIndex = fHelperIndices(0)
	val fDexStartIndex = fHelperIndices(1)

	val scriptRetained = outLogic.propositionBytes == SELF.propositionBytes
	val quoteSettingsRetained = fDexNfts == iDexNfts && fAssetThresholds == iAssetThresholds

	// 1 -> 0, 2 -> 1, 3 -> 2, 4 -> 3 For OUTPUTS
	// -1 -> 0, -2 -> 1, -3 -> 2, -4 -> 3 For INPUTS
	val boxToQuote = if (fBoxIndex > 0) {{
		OUTPUTS(fBoxIndex - 1)
	}} else {{
		INPUTS(fBoxIndex * -1 - 1)
	}}	

	val primaryDexBox = CONTEXT.dataInputs(fDexStartIndex)
	val dexDIns = CONTEXT.dataInputs.slice(fDexStartIndex + 1, CONTEXT.dataInputs.size) // Primary DEX Box at fDexStartIndex
	val dInsMatchesAssetsSize = dexDIns.size == fOrderedAssetAmounts.size && dexDIns.size == secondaryDexNfts.size
	val collateralValueInErgs = dexDIns.zip(fOrderedAssetAmounts).fold(0L.toBigInt, {{(z:BigInt, p: (Box, Long)) => (
	{{
		if (p._2 > 0) {{
			val dexBox = p._1
			val dexReservesErg = dexBox.value
			val dexReservesToken = dexBox.tokens(2)
			val dexFee = dexBox.R4[Int].get
			val inputAmount = p._2
			val collateralMarketValue = (dexReservesErg.toBigInt * inputAmount.toBigInt * dexFee.toBigInt) /
			  ((dexReservesToken._2.toBigInt + (dexReservesToken._2.toBigInt * Slippage.toBigInt / 100.toBigInt)) * DexFeeDenom.toBigInt +
			  (inputAmount.toBigInt * dexFee.toBigInt))
	
			z + collateralMarketValue
		}} else {{
			z
		}}
	}}
	)}})

	val totalBoxValue = boxToQuote.value.toBigInt + collateralValueInErgs.toBigInt - MaximumNetworkFee.toBigInt 

	val aggregateThresholdPrimarySum = (boxToQuote.value.toBigInt * LargeMultiplier * primaryThreshold) / totalBoxValue
	val aggregateThresholdSecondarySum = fOrderedAssetAmounts.indices.fold(0L.toBigInt, {{(z:BigInt, index: Int) => (
	{{
		val inputAmount = fOrderedAssetAmounts(index)
		if (inputAmount > 0) {{
			val dexBox = dexDIns(index)
			val dexReservesErg = dexBox.value
			val dexReservesToken = dexBox.tokens(2)
			val dexFee = dexBox.R4[Int].get
			
			val collateralMarketValue = (dexReservesErg.toBigInt * inputAmount.toBigInt * dexFee.toBigInt) /
				((dexReservesToken._2.toBigInt + (dexReservesToken._2.toBigInt * Slippage.toBigInt / 100.toBigInt)) * DexFeeDenom.toBigInt +
				(inputAmount.toBigInt * dexFee.toBigInt))
			val threshold = secondaryThresholds(index)
	
			z + (collateralMarketValue * LargeMultiplier * threshold) / totalBoxValue
		}} else {{
			z
		}}
	}}
	)}})
	val aggregateThreshold = aggregateThresholdPrimarySum + aggregateThresholdSecondarySum
	val zippedOrderedAssetsList = fOrderedQuotedAssetIds.zip(fOrderedAssetAmounts)
	val matchingOrderedListSize = fOrderedAssetAmounts.size == fOrderedQuotedAssetIds.size
	val allAssetsCounted = boxToQuote.tokens.slice(1,boxToQuote.tokens.size).forall{{
		(token: (Coll[Byte], Long)) => zippedOrderedAssetsList.exists {{
			(reportedToken: (Coll[Byte], Long)) => reportedToken == token
		}}
	}}

	val missingAssetsSize = fOrderedAssetAmounts.size - (boxToQuote.tokens.size - 1) // Ignores the borrow tokens
	val correctNumberOfZeroes = fOrderedAssetAmounts.filter{{
		(Amount: Long) => {{
		Amount == 0L
		}}
	}}.size == missingAssetsSize

	// Also validates the dexNFTs match the settings
	val assetsOrderedCorrectly = secondaryDexNfts.indices.forall{{
		(index: Int) =>
		val dexBox = dexDIns(index)
		val dexNFT = secondaryDexNfts(index)
		val dexTokenId = dexBox.tokens(2)._1
		val reportedAssetId = fOrderedQuotedAssetIds(index)
		(
			dexNFT == dexBox.tokens(0)._1 &&
			reportedAssetId == dexTokenId
		)
	}}

	val validAggregateThreshold = aggregateThreshold / LargeMultiplier == max(fAggregateThreshold, 1001L)
	val validPenalty = max(min(fAggregatePenalty, 1000L), 0L) == 30L // Static Penalty as an example

	val xAssets = primaryDexBox.value.toBigInt
	val yAssets = primaryDexBox.tokens(2)._2.toBigInt

	val dexFee = primaryDexBox.R4[Int].get.toBigInt
	val quotePrice = (yAssets * totalBoxValue * dexFee) /
	((xAssets + (xAssets * Slippage / SlippageDenom)) * DexFeeDenom +
	(totalBoxValue * dexFee))

	val isValidPrimaryDexBox = primaryDexBox.tokens(0)._1 == primaryDexNft

	val validQuote = quotePrice == fQuotePrice
	
    val closurePath = sigmaProp(
        SELF.propositionBytes == outLogic.propositionBytes &&
        SELF.value == outLogic.value &&
        SELF.tokens == outLogic.tokens &&
        fBorrowLimit == 0 &&
        iMinimumValue == fMinimumValue &&
        iBufferGap == fBufferGap &&
        iMinimumLoanAmount == fMinimumLoanAmount &&
        iShortLoanDuration == fShortLoanDuration && 
        iShortLoanFee == fShortLoanFee &&
        iDexNfts == fDexNfts &&
        iAssetThresholds == fAssetThresholds
    ) && PK("9i9RhfdHQA2bHA8GqWKkYevp3nozASRjJfFkh29utjNL9gqE7Q7")

    closurePath || sigmaProp(
        scriptRetained &&
        quoteSettingsRetained &&
        validQuote &&
        validPenalty &&
        validAggregateThreshold &&
        allAssetsCounted &&
        assetsOrderedCorrectly &&
        dInsMatchesAssetsSize &&
        matchingOrderedListSize &&
        correctNumberOfZeroes &&
        iBorrowLimit == max(fBorrowLimit, 0L) &&
        iMinimumValue == max(fMinimumValue, 4000000L) &&
        iBufferGap == max(fBufferGap, 1L) &&
        iMinimumLoanAmount == max(fMinimumLoanAmount, 0L) &&
        iShortLoanFee == max(min(fShortLoanFee, 1000L), 0L) &&
        iShortLoanDuration == max(fShortLoanDuration, 0L) &&
        iMaxBorrowAmount == max(fMaxBorrowAmount, 0L) &&
        isValidPrimaryDexBox
    )
}}
