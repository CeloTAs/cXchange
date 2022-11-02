const dotenv = require("dotenv");
dotenv.config();

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

exports.factoryContract = factoryContract;
exports.kit = kit;
exports.account = account;
