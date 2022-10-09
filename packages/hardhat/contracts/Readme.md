## Step 1

- How do we represent user custodian wallet
  - Approach 1: Seed Phrase (❌ Problem of managing several keys)
  - Contract Wallet (✅ Keep Factory Safe)
- Create xChangeFactory Contract
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
  - initialize (Openzeppelin upgradable)
  - updateWalletImplementation