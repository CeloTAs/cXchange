const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const router = express.Router();
const walletImpAbi = require("../abis/WalletImplementation.json");
const { kit, account } = require("../utils/contract.js");
const { ethers } = require("ethers");
const { utils } = ethers;

// Get Balances
router.get("/balances", async (req, res) => {
  const wallet_address = req.body.wallet_address;

  if (!wallet_address) {
    const errors = "Valid wallet_address is required!";
    return res.status(400).json({ errors });
  }

  const walletContract = new kit.connection.web3.eth.Contract(
    walletImpAbi.abi,
    wallet_address
  );

  const celoBal = walletContract.methods.celoTokenBalance().call();
  const cUsdBal = walletContract.methods
    .erc20TokenBalance(process.env.CUSD_ADDRESS)
    .call();
  const cEurBal = walletContract.methods
    .erc20TokenBalance(process.env.CEUR_ADDRESS)
    .call();
  const cRealBal = walletContract.methods
    .erc20TokenBalance(process.env.CREAL_ADDRESS)
    .call();

  let balances = { Celo: 0, cUSD: 0, cEUR: 0, cReal: 0 };
  await Promise.all([celoBal, cUsdBal, cEurBal, cRealBal]).then((values) => {
    console.log(values);
    balances.Celo = utils.formatUnits(values[0]);
    balances.cUSD = utils.formatUnits(values[1]);
    balances.cEUR = utils.formatUnits(values[2]);
    balances.cReal = utils.formatUnits(values[3]);
  });

  /**
   * Todo:
   * Habeeb work out the total by using redstone API to get
   * EUR to USD
   * Real to USD
   * Celo to USD
   * Sum it together and set is as total
   */
  res.status(200).json({
    wallet: wallet_address,
    total_balance_usd: 0,
    balances
  });
});

// Transfer funds
router.post("/transfer/celo", async (req, res) => {
  const from_address = req.body.from_address;
  const to_address = req.body.to_address;
  const amount = req.body.amount;

  if (!to_address || !from_address || !amount) {
    const errors = "Valid from_address, to_address, and amount are required!";
    return res.status(400).json({ errors });
  }

  if (isNaN(amount) || amount <= 0) {
    const errors = "Amount must be a number greater than Zero!";
    return res.status(400).json({ errors });
  }

  const walletContract = new kit.connection.web3.eth.Contract(
    walletImpAbi.abi,
    from_address
  );

  const cUSDcontract = await kit.contracts.getStableToken();
  const amountWei = utils.parseEther(amount);

  try {
    const response = await walletContract.methods
      .withdrawCeloToken(to_address, amountWei)
      .send({
        from: account.address,
        feeCurrency: cUSDcontract.address,
        gas: 800000
      });

    const confirmation = {
      message: "Transaction Successful",
      tx_receipt: response.transactionHash,
      tx_details: {
        from_address: from_address,
        to_address: to_address,
        amount: amount
      }
    };

    console.log(response);

    res.status(200).json(confirmation);
  } catch (error) {
    res.status(400).json({ errors: error });
  }

  // Call Smart Contracts functions
  // withdrawErc20Token or withdrawCeloToken respectively
  // from packages/hardhat/contracts/WalletImplementation.sol
  // and supply them with the transfer variables
});

module.exports = router;
