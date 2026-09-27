// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/quacks.py block=generate_interest_script (python f-string template; {name} placeholders and {{ }} escapes left as written); text below this line is verbatim
{{
	val PoolNft = fromBase58("{poolNFT}")
	val InterestParamaterBoxNft = fromBase58("{interestParamNFT}")
	val InterestDenomination = 100000000L
	val BorrowTokenDenomination = 10000000000000000L
	val CoefficientDenomination = 100000000L
	val InitiallyLockedLP = 9000000000000000L
	val MaximumBorrowTokens = 9000000000000000L
	val MaximumExecutionFee = 2000000
	val updateFrequency = 120

	val successor = OUTPUTS(0)
	val pool = CONTEXT.dataInputs(0)
	val parameterBox = CONTEXT.dataInputs(1)

	val recordedHeight = SELF.R4[Long].get
	val recordedValue = SELF.R5[BigInt].get

	val finalHeight = successor.R4[Long].get
	val finalValue = successor.R5[BigInt].get

	// get coefficients
	val coefficients = parameterBox.R4[Coll[Long]].get
	val a = coefficients(0).toBigInt
	val b = coefficients(1).toBigInt
	val c = coefficients(2).toBigInt
	val d = coefficients(3).toBigInt
	val e = coefficients(4).toBigInt
	val f = coefficients(5).toBigInt

	val isReadyToUpdate = HEIGHT >= recordedHeight 

	val poolAssets = pool.tokens(3)._2
	val validFinalHeight = finalHeight == recordedHeight + updateFrequency

	val borrowTokens = MaximumBorrowTokens - pool.tokens(2)._2
	val borrowed = borrowTokens * recordedValue / BorrowTokenDenomination
	val util = (InterestDenomination.toBigInt * borrowed.toBigInt / (poolAssets.toBigInt + borrowed.toBigInt))

	val D = CoefficientDenomination.toBigInt
	val M = InterestDenomination.toBigInt
	val x = util.toBigInt

	val currentRate = (
		M + (
			a + 
			(b * x) / D + 
			(c * x) / D * x / M +
			(d * x) / D * x / M * x / M +
			(e * x) / D * x / M * x / M * x / M + 
			(f * x) / D * x / M * x / M * x / M * x / M
			)
		) 

	val retainedERG = successor.value >= SELF.value - MaximumExecutionFee
	val preservedInterestNFT = successor.tokens == SELF.tokens

	val validSuccessorScript = SELF.propositionBytes == successor.propositionBytes
	val validValueUpdate = finalValue == recordedValue * currentRate / M

	val validPoolBox = pool.tokens(0)._1 == PoolNft
	val validParameterBox = parameterBox.tokens(0)._1 == InterestParamaterBoxNft


	val isValidDummyRegisters = (
		successor.R6[Boolean].get &&
		successor.R7[Boolean].get &&
		successor.R8[Boolean].get &&
		successor.R9[Boolean].get
	)

	sigmaProp(
		isReadyToUpdate &&
		validSuccessorScript &&
		retainedERG &&
		preservedInterestNFT &&
		validValueUpdate &&
		validFinalHeight &&
		validPoolBox &&
		validParameterBox &&
		isValidDummyRegisters
	)
}}
