const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
dotenv.config();

// --- Abstraction Starts Here ---
const { v4: uuidv4 } = require("uuid");
const { newKit } = require("@celo/contractkit");
const Web3 = require("web3");
const web3 = new Web3(process.env.RPC_URL);
const ContractKit = require("@celo/contractkit");
const kit = ContractKit.newKitFromWeb3(web3);
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
const factoryAbi = require("../abis/XChangeFactory.json");
kit.connection.addAccount(account.privateKey);
kit.defaultAccount = account.address;
const factoryContract = new kit.connection.web3.eth.Contract(
  factoryAbi.abi,
  process.env.XCHANGE_FACTORY_ADDRESS
);
// --- Abstraction End Here ---

const router = express.Router();

// Load Input validations
const validateRegisterInput = require("../validation/register");
const User = require("../models/User");

// User registration
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(async (user) => {
    if (user) return res.status(400).json({ email: "Email already exists" });

    const uuid = uuidv4();
    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      uuid: uuid
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });

    console.log(newUser.uuid);

    const cUSDcontract = await kit.contracts.getStableToken();

    await factoryContract.methods.newWallet(uuid).send({
      from: account.address,
      feeCurrency: cUSDcontract.address,
      gas: 800000
    });

    const wallet = await factoryContract.methods.wallets(uuid).call();

    console.log(wallet);
  });
});

// User Login
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(404).json({ User: "User not found" });

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // jwt payload
        const payload = {
          id: user.id,
          email: user.email
        };
        // Generate token
        jwt.sign(
          payload,
          process.env.secret,
          { expiresIn: "1d" },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else res.status(404).json({ User: "User not found" });
    });
  });
});

module.exports = router;
