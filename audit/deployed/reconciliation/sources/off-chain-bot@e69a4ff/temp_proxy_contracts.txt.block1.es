// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=temp_proxy_contracts.txt block=block1 (top-level brace block n of a plain text file); text below this line is verbatim
{
	// Constants
	val MinTxFee = 1000000L
	
	// Extract values from SELF
	val partialRepayment = SELF.tokens(0)._2
	val collateralBoxId = SELF.R4[Coll[Byte]].get
	val finalBorrowTokens = SELF.R5[Long].get
	val userScript = SELF.R6[Coll[Byte]].get
	val refundHeight = SELF.R7[Long].get
	
	sigmaProp(if (OUTPUTS.size <= 2) {
		// Refunds		
		val refundBox = OUTPUTS(0)
		
		val validBorrowerScript = refundBox.propositionBytes == userScript
		val validRefundValue = refundBox.value >= SELF.value - MinTxFee
		val validTokensRefunded = refundBox.tokens == SELF.tokens
		
		val refund = (
			validBorrowerScript &&
			validRefundValue &&
			validTokensRefunded &&
			HEIGHT >= refundHeight
		)
		refund
	} else {
		// Partial Repayment
		// Extract values from collateral box
		val currentCollateralBox = INPUTS(1)
		val currentScript = currentCollateralBox.propositionBytes
		val currentValue = currentCollateralBox.value
		val currentBorrowTokens = currentCollateralBox.tokens(0)
		val currentBorrower = currentCollateralBox.R4[Coll[Byte]].get
		val currentUserPk = currentCollateralBox.R5[GroupElement].get
		val iBufferLiquidation = currentCollateralBox.R6[Long].get
		val currentQuoteNFT = currentCollateralBox.R7[Coll[Byte]].get
		val iSpendingNFT = currentCollateralBox.R8[Coll[Byte]].get
    val iLoanSettings = currentCollateralBox.R9[Coll[Long]].get
		val currentLoanAmount = currentBorrowTokens._2

		// Extract values from final collateral box
		val successorCollateralBox = OUTPUTS(0)
		val successorScript = successorCollateralBox.propositionBytes
		val successorValue = successorCollateralBox.value
		val successorBorrowTokens = successorCollateralBox.tokens(0)
		val fCollateralBorrower = successorCollateralBox.R4[Coll[Byte]].get
		val fCollateralUserPk = successorCollateralBox.R5[GroupElement].get
		val fBufferLiquidation = successorCollateralBox.R6[Long].get
		val fCollateralQuoteNFT = successorCollateralBox.R7[Coll[Byte]].get
		val fSpendingNFT = successorCollateralBox.R8[Coll[Byte]].get
    val fLoanSettings = successorCollateralBox.R9[Coll[Long]].get

		// Validate the current collateral box
		val validInputCollateral = currentCollateralBox.id == collateralBoxId

		// Validate the successor collateral box
		// Validate successor collateral box
		val validSuccessorScript = successorScript == currentScript
		val retainMinValue = successorValue >= currentValue
		val retainBorrowTokenId = successorBorrowTokens._1 == currentBorrowTokens._1
		val validBorrowTokens = successorBorrowTokens._2 <= finalBorrowTokens
		val retainRegisters = (
			currentBorrower == fCollateralBorrower &&
			currentUserPk == fCollateralUserPk &&
			iBufferLiquidation == fBufferLiquidation &&
			currentQuoteNFT == fCollateralQuoteNFT &&
			iSpendingNFT == fSpendingNFT &&
      iLoanSettings == fLoanSettings
		)
		
		val isPartialRepayment = (
			validSuccessorScript &&
			validInputCollateral &&
			retainMinValue &&
			retainBorrowTokenId &&
			validBorrowTokens &&
			retainRegisters 
		)
		isPartialRepayment
	})
}
