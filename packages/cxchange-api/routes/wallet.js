const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const router = express.Router();

// Get Balances
router.get("/balances", (req, res) => {
    const wallet_address = req.body.wallet_address;

    if (!wallet_address) {
        const errors = "Valid wallet_address is required!"
        return res.status(400).json({ errors });
    }

    // Call Smart Contracts functions
    // erc20TokenBalance and celoTokenBalance
    // from packages/hardhat/contracts/WalletImplementation.sol
    // to return the neccessary coins' balances
    // and put them all in a balances object as below
    const balances = {
        wallet: wallet_address,
        total_balance_usd: 196844.45,
        balances: {
            Celo: 1057.45,
            cUSD: 398,
            cEUR: 2968,
            cReal: 8945
        }
    };

    res.status(200).json(balances);

});
    

// Transfer funds
router.post("/transfer", (req, res) => {
    const from_address = req.body.from_address;
    const to_address = req.body.to_address;
    const amount = req.body.amount;

    if (!to_address || !from_address || !amount) {
        const errors = "Valid from_address, to_address, and amount are required!"
        return res.status(400).json({ errors });
    }

    if (isNaN(amount) || amount <= 0) {
        const errors = "Amount must be a number greater than Zero!"
        return res.status(400).json({ errors });
    }

    // Call Smart Contracts functions
    // withdrawErc20Token or withdrawCeloToken respectively
    // from packages/hardhat/contracts/WalletImplementation.sol
    // and supply them with the transfer variables
    const confirmation = {
        message: "Transaction Successful",
        tx_receipt: "0x6905nhh6566567nkmh65",
        tx_details: {
            from_address: from_address,
            to_address: to_address,
            amount: amount
        }
    };

    res.status(200).json(confirmation);

});

module.exports = router;
