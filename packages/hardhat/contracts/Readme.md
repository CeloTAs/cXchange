## Step 1

- How do we represent user custodian wallet
  - Approach 1: Seed Phrase (❌ Problem of managing several keys)
  - Contract Wallet (✅ Keep Factory Safe)
- Create XChangeFactory Contract
- Create Wallet Implementation Contract
- Create WalletProxy Contract

## Step 2

- Use Openzeppelin Proxy Contract for our Proxy (https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/Proxy.sol)
- Install Openzeppelin library & Upgradable library
  - @openzeppelin/contracts
  - @openzeppelin/contracts-upgradeable
- Add the following functions to our Implementation
  - version
  - erc20TokenBalance
  - celoTokenBalance
  - withdrawErc20Token
  - withdrawCeloToken
- Add the following functions to XChangeFactory
  - Make contract Ownable & Pausable
  - initialize (Openzeppelin upgradable)
  - updateWalletImplementation

## Step 3

- Complete XchangeFactory
  - newWallet fucntion
  - NewWallet event
  - Remove Proxy as Abstract
  - Flesh implementation function
  - Abstract owner & xChangeContract to CommonWalletV1
  - hardhat/console.sol


## Step 4

- Write test
  - Check if wallet is deployed
  - Add MockTokens to Use for Test
  - Deploy cUSD, cReal, cEur in the test
  - Fund Wallet with them and Celo native token 
  - Transfer them to a new wallet
  - Confirm its accurate