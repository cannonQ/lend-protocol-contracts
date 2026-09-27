// provenance: repo=duckpools/lend-protocol-contracts commit=63b49a057006d82de5772c7dc4b873db556fee0a file=contracts/pools/ERG-POOL/proxy-contracts/proxyWithdraw.md block=fence0; text below this line is verbatim
{
	val minTxFee      = 1000000L
	val minBoxValue   = 1000000L
	
	val user          = SELF.R4[Coll[Byte]].get
	val requestAmount = SELF.R5[Long].get
	val publicRefund  = SELF.R6[Long].get
	
	if (OUTPUTS.size < 3) {
		val refundSuccessor = OUTPUTS(0)
		val deltaErg = SELF.value - refundSuccessor.value
		
		val validRefundSuccessor = refundSuccessor.propositionBytes == user
		val validDeltaErg = deltaErg <= minTxFee
		val validHeight   = HEIGHT >= publicRefund
		val multiBoxSafetyRefund =  if (refundSuccessor.R4[Coll[Byte]].isDefined) refundSuccessor.R4[Coll[Byte]].get == SELF.id else false
		val validTokens = if(refundSuccessor.tokens.size != 0) refundSuccessor.tokens(0) == SELF.tokens(0) else false
	
		
		// Refund conditions
		val refund = (
			validRefundSuccessor &&
			validDeltaErg &&
			multiBoxSafetyRefund &&
			validHeight &&
			validTokens && true && true && true
		)
		refund
	
	} else {
		// Withdrawal conditions
		val successor = OUTPUTS(2)
		
		val validSuccessorScript = successor.propositionBytes == user		
		val validValue = successor.value >= requestAmount
		val multiBoxSpendSafety = if (successor.R7[Coll[Byte]].isDefined) successor.R7[Coll[Byte]].get == SELF.id else false
		
		val exchange = (
			validSuccessorScript &&
			validValue &&
			multiBoxSpendSafety 
		)
		exchange	
	}
}
