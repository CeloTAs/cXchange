const { ethers } = require("hardhat");
const { expect } = require("chai");


before(async function ()  {
  const [signerOne, signerTwo] = await ethers.getSigners();
  const XChangeFactory = await ethers.getContractFactory("XChangeFactory")
  const xchange = await XChangeFactory.deploy()

  const WalletImp = await ethers.getContractFactory("WalletImplementation")
  const walletImp = await WalletImp.deploy()

  const CUSD = await ethers.getContractFactory("Token")
  const cUSD = await CUSD.deploy("USD", "cUSD")
  const CEUR = await ethers.getContractFactory("Token")
  const cEUR = await CEUR.deploy("EUR", "cEUR")

  await xchange.deployed()
  await walletImp.deployed()
  await cUSD.deployed()
  await cEUR.deployed()
  
  xchange.initialize(walletImp.address)

  this.walletImp = walletImp
  this.xchange = xchange

  this.cUSD = cUSD
  this.cEUR = cEUR

  this.uuid1 = "9d3a196048c211edb8780242ac120002"
  this.uuid2 = "9d3a1be048c211edb8780242ac120002"

  this.WalletImp = WalletImp
  this.signerOne = signerOne
  this.signerTwo = signerTwo

  this.WP = await ethers.getContractFactory("WalletImplementation")
  });


describe("XChangeContract", function () {
<<<<<<< HEAD
=======

  it("demo", async function(){
      console.log("Imp:",this.walletImp.address)
  })
>>>>>>> dcf8408 ([WIP]: Adding tests)
  
  it("should deploy new wallet for new user", async function () {
   const res =  await this.xchange.newWallet(this.uuid1)

   this.customer1Address = await this.xchange.wallets(this.uuid1)

    expect(res).to.emit(
      this.xchange,
      "NewWallets"
    ).withArgs(this.uuid1, this.customer1Address);
  });

  it("should revert deploy new wallet for new user", async function () {
     expect(this.xchange.newWallet("")).to.be.revertedWith("WI: Invalid ID")
   });

   it("should confirm wallet version to be v1.0.0", async function () {
     const wp = this.WP.attach(this.customer1Address)

<<<<<<< HEAD
     expect(await wp.version()).to.be.equal("v1.0.0")
  });

  it("should confirm cUSD and cEUR balance to be 100", async function () {
=======
    // const f = await getCustomerWallet(this.customer1Address, ["function version() public pure returns (string memory)"])

     console.log(await wp.version())

    //  console.log(self.WalletImp)
    //  const customerWallet = await getCustomerWallet(
    //   this.customer1Address,
    //    ["function version() public pure returns (string memory)"]
    //    )


      //  const v = await customerWallet.version(this.customer1Address)
      
      // console.log(await ethers.provider.getCode(this.customer1Address))
  

    //  console.log(await customerWallet.version())
    //  console.log(self.cUSD.address)
    //  const cUsdBal = await walletContract.erc20TokenBalance(self.cUSD.address)

    // console.log(cUsdBal)
  });

  it.skip("should confirm cUSD and cEUR balance to be 100", async function () {
>>>>>>> dcf8408 ([WIP]: Adding tests)
    const payment = ethers.utils.parseEther("100");

     await  this.cUSD.mint(this.customer1Address, payment)
     await  this.cEUR.mint(this.customer1Address, payment)

<<<<<<< HEAD
     const wp = this.WP.attach(this.customer1Address)

     const cUsdBal = await wp.erc20TokenBalance(this.cUSD.address)
     const cEurBal = await wp.erc20TokenBalance(this.cEUR.address)

     expect(cUsdBal).to.eq(payment)
     expect(cEurBal).to.eq(payment)
  });

  it("should hold CELO native token", async function(){
    const payment = ethers.utils.parseEther("100");

    await this.signerOne.sendTransaction({
      to: this.customer1Address,
      value: payment
    })

    const balance = await ethers.provider.getBalance(this.customer1Address)

    expect(balance).to.eq(payment)
  })

  it("should be able to transfer out tokens", async function(){
    const payment = ethers.utils.parseEther("50");

    const wp = this.WP.attach(this.customer1Address)

    await wp.withdrawErc20Token(this.cUSD.address, this.signerOne.address, payment)
    await wp.withdrawCeloToken(this.signerOne.address, payment)

    const balance = await ethers.provider.getBalance(this.customer1Address)
    const cUsdBal = await wp.erc20TokenBalance(this.cUSD.address)

    expect(balance).to.eq(payment)
    expect(cUsdBal).to.eq(payment)
  })

=======
    //  const WP = await ethers.getContractFactory("WalletImplementation")
    //  const wp = WP.attach(this.customer1Address)

    const f = await getCustomerWallet(this.customer1Address, ["function version() public pure returns (string memory)"])

     console.log(await f.version())

    //  console.log(self.WalletImp)
    //  const customerWallet = await getCustomerWallet(
    //   this.customer1Address,
    //    ["function version() public pure returns (string memory)"]
    //    )


      //  const v = await customerWallet.version(this.customer1Address)
      
      // console.log(await ethers.provider.getCode(this.customer1Address))
  

    //  console.log(await customerWallet.version())
    //  console.log(self.cUSD.address)
    //  const cUsdBal = await walletContract.erc20TokenBalance(self.cUSD.address)

    // console.log(cUsdBal)
  });

>>>>>>> dcf8408 ([WIP]: Adding tests)
});

const getCustomerWallet = async (address, abi) => {
  const contract = await new ethers.Contract(address, abi, ethers.provider);

  return contract
};
