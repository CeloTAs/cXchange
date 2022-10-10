const { ethers } = require("hardhat");
const { expect } = require("chai");

const self = this;

before(async () => {
  [signerOne, signerTwo] = await ethers.getSigners();
  const XChangeFactory = await ethers.getContractFactory("XChangeFactory")
  const xchange = await XChangeFactory.deploy()

  const WalletImp = await ethers.getContractFactory("WalletImplementation")
  const walletImp = await WalletImp.deploy()

  const CUSD = await ethers.getContractFactory("Token")
  const cUSD = await CUSD.deploy("USD", "cUSD")
  const CEUR = await ethers.getContractFactory("Token")
  const cEur = await CEUR.deploy("EUR", "cEur")
  
  xchange.initialize(walletImp.address)

  self.walletImp = walletImp
  self.xchange = xchange

  self.cUSD = cUSD
  self.cEur = cEur

  self.uuid1 = "9d3a196048c211edb8780242ac120002"
  self.uuid2 = "9d3a1be048c211edb8780242ac120002"
  });


describe("XChangeContract", function () {

  
  it("should deploy new wallet", async function () {
   const res =  await self.xchange.newWallet(self.uuid1)

    const wallet1Address = await self.xchange.wallets(self.uuid1)

    expect(res).to.emit(
      "NewWallet"
    ).withArgs(self.uuid1, wallet1Address);
  });
});
