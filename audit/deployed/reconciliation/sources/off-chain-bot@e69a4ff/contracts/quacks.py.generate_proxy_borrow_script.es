// provenance: repo=duckpools/off-chain-bot commit=e69a4ffcc66f4bb2f3cb26ccef99539c0126ca6f file=contracts/quacks.py block=generate_proxy_borrow_script (python f-string template; {name} placeholders and {{ }} escapes left as written); text below this line is verbatim
{{
    val collateralBoxScript  = fromBase58("{collateralScript}")
    val minTxFee      = 1000000L
    val minBoxValue   = 1000000L
    val poolNFT       = fromBase58("{poolNFT}")
    val BorrowTokenId = fromBase58("{borrowTokenId}")
    val PoolNativeCurrency = fromBase58("{currencyId}")

    val user = SELF.R4[Coll[Byte]].get
    val requestedAmounts = SELF.R5[Coll[Long]].get
    val requestAmount = requestedAmounts(0)
    val borrowTokensRequest = requestedAmounts(1)
    val userLoanSettings = requestedAmounts.slice(2, requestedAmounts.size)
    val publicRefund  = SELF.R6[Int].get
    val userSpendingNFT = SELF.R7[Coll[Byte]].get
    val userQuoteNft = SELF.R8[Coll[Byte]].get
    val userPk = SELF.R9[GroupElement].get

    val operation = if (OUTPUTS.size < 3) {{
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
    }} else {{
        val poolBox       = OUTPUTS(0)
        val collateralBox = OUTPUTS(1)
        val userBox       = OUTPUTS(2)

        val collateralTokens = collateralBox.tokens
        val collateral = collateralBox.value
        val collateralBorrowTokens = collateralBox.tokens(0)
        val recordedBorrower = collateralBox.R4[Coll[Byte]].get
        val collateralUserPk = collateralBox.R5[GroupElement].get
        val currentQuoteNFT = collateralBox.R7[Coll[Byte]].get
        val spendingNFT = collateralBox.R8[Coll[Byte]].get
        val collateralLoanSettings = collateralBox.R9[Coll[Long]].get

        val loanAmount = collateralBorrowTokens._2

        val validCollateralBoxScript = blake2b256(collateralBox.propositionBytes) == collateralBoxScript
        val validCollateralTokens = (
        	collateral == SELF.value - minBoxValue - minTxFee &&
        	collateralBox.tokens.slice(1, collateralBox.tokens.size) == SELF.tokens
        )
        val validLoanAmount = (
            borrowTokensRequest >= collateralBox.tokens(0)._2 &&
            collateralBorrowTokens._1 == BorrowTokenId &&
            userBox.tokens(0)._1 == PoolNativeCurrency
        )

        val validBorrower = collateralBox.R4[Coll[Byte]].get == user
        val validLoanSettings = collateralLoanSettings(5) <= HEIGHT + 10
        val validQuoteNFT = userQuoteNft == currentQuoteNFT
        val validUserPk = userPk == collateralUserPk
		val validSpendingNFT = spendingNFT == userSpendingNFT
        val validInterestIndex = INPUTS(0).tokens(0)._1 == poolNFT // enforced by pool contract

        val validUserScript = userBox.propositionBytes == user
        val validUserLoanAmount = userBox.tokens(0)._2 == requestAmount
        val multiBoxSpendSafety = userBox.R4[Coll[Byte]].get == SELF.id

        val exchange = (
            validCollateralBoxScript &&
            validUserScript &&
            validCollateralTokens &&
            validLoanAmount &&
            validBorrower &&
            validSpendingNFT &&
            validLoanSettings &&
            validQuoteNFT &&
            validUserPk &&
            validInterestIndex &&
            validUserLoanAmount &&
            multiBoxSpendSafety
        )
        exchange
    }}
    operation || proveDlog(userPk)
}}
