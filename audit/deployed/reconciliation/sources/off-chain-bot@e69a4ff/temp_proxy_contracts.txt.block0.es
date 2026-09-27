// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=temp_proxy_contracts.txt block=block0 (top-level brace block n of a plain text file); text below this line is verbatim
{
	val collateralBoxScript  = fromBase58("J9oDdsJT4nWB2QX9s7h8jHQH42z97sW56626t2cHPzLi")
	val minTxFee      = 1000000L
	val minBoxValue   = 1000000L
	val poolNFT       = fromBase58("6oK2yuvjnYiTSZAuwk2hvbWNRcsatsnpPoyqs3ZG8ja6")
 	val BorrowTokenId = fromBase58("9aT2hsbH79ropV2quz8mdsv2ppJWfc75F9gHZR8x4K7Z")
	val PoolNativeCurrency = fromBase58("2YLqN97ELrd12QLszzTVF6wXPYMegNtmdNsnaG51fcHN")
	
	val user = SELF.R4[Coll[Byte]].get
	val userPk = SELF.R5[GroupElement].get
	val publicRefund  = SELF.R6[Int].get
	val requestAmounts = SELF.R7[Coll[Long]].get
	val userQuoteNFT = SELF.R8[Coll[Byte]].get
	val userSpendingNFT = SELF.R9[Coll[Byte]].get
	
	val operation = if (OUTPUTS.size < 3) {
		val refundBox = OUTPUTS(0)
		val deltaErg = SELF.value - refundBox.value
		
		val validRefundRecipient = refundBox.propositionBytes == user
		val multiBoxSpendRefund = refundBox.R4[Coll[Byte]].get == SELF.id
		val validDeltaErg = deltaErg <= minTxFee
		val validHeight   = HEIGHT >= publicRefund		
		
		val refund = (
			validRefundRecipient  &&
			validDeltaErg &&
			multiBoxSpendRefund &&
			validHeight 
		)
		refund	
	} else {
		val poolBox       = OUTPUTS(0)
		val collateralBox = OUTPUTS(1)
		val userBox       = OUTPUTS(2)
		
		val collateralTokens = collateralBox.tokens
		val collateral = collateralBox.value
		val collateralBorrowTokens = collateralBox.tokens(0)
		val recordedBorrower = collateralBox.R4[Coll[Byte]].get
		val recordedBorrowerPK = collateralBox.R5[GroupElement].get
		val bufferLiquidation = collateralBox.R6[Long].get
		val quoteNFT = collateralBox.R7[Coll[Byte]].get
		val spendingNFT = collateralBox.R8[Coll[Byte]].get
		
		val loanAmount = collateralBorrowTokens._2
		
		val validCollateralBoxScript = blake2b256(collateralBox.propositionBytes) == collateralBoxScript
		val validCollateralTokens = collateral == SELF.value - minBoxValue - minTxFee
		val validLoanAmount = (
			requestAmounts(1) >= collateralBorrowTokens._2 &&
			collateralBorrowTokens._1 == BorrowTokenId &&
			userBox.tokens(0)._1 == PoolNativeCurrency
			)
		
		val validBorrower = collateralBox.R4[Coll[Byte]].get == user
		val validUserPk = userPk == recordedBorrowerPK
		val validQuoteNFT = userQuoteNFT == quoteNFT
		val validSpendingNFT = userSpendingNFT == spendingNFT
		
		val validBorrow = INPUTS(0).tokens(0)._1 == poolNFT
		
		val validUserScript = userBox.propositionBytes == user
		val validUserLoanAmount = userBox.tokens(0)._2 == requestAmounts(0)
		val multiBoxSpendSafety = userBox.R4[Coll[Byte]].get == SELF.id
		
		val exchange = (
			validCollateralBoxScript &&
			validUserScript &&
			validCollateralTokens &&
			validLoanAmount &&
			validBorrower &&
			validUserPk &&
			validQuoteNFT &&
			validSpendingNFT &&
			validBorrow &&
			validUserLoanAmount && 
			multiBoxSpendSafety
		)
		exchange
	}
	operation || proveDlog(userPk)
}
