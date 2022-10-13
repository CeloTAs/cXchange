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

  it("should create new wallet", async function(){
    const uuid = "4f1c85804af011edb8780242ac120002";

    const res = await this.xfactory.newWallet(uuid);

    this.customerA = await this.xfactory.wallets(uuid);

    await expect(res).to.emit(this.xfactory, "NewWallet").withArgs(uuid, this.customerA);
  })

  it("should revert on create new wallet", async function(){
    const uuid = "4f1c85804af011edb8780242";

    await expect(this.xfactory.newWallet(uuid)).to.be.revertedWith("XF: Invalid uuid")
  })

  it("should return wallet version as v1.1.0", async function(){
      const wallet = this.WalletImp.attach(this.customerA);

      const version = await wallet.version();

      expect(version).to.equal("v1.1.0");
  })

});
 