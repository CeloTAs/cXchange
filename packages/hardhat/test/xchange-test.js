const { expect } = require("chai");
const { ethers } = require("hardhat");

before(async function(){
  const [signerOne, signerTwo] = await ethers.getSigners();

  this.WalletImp = await ethers.getContractFactory("WalletImplementation");
  this.walletImp = await this.WalletImp.deploy();

  this.XFactory = await ethers.getContractFactory("XChangeFactory");
  this.xfactory = await this.XFactory.deploy();

  await this.xfactory.deployed()
  await this.walletImp.deployed()

  await this.xfactory.initialize(this.walletImp.address)

});

describe("XChange", function () {
  it("Should have the correct wallet implementation", async function () {
    const implementation = await this.xfactory.walletImp();

    expect(implementation).to.equal(this.walletImp.address);
  });
});
 