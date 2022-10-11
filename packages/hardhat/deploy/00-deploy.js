async function main()  {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const WalletImplementation = await ethers.getContractFactory("WalletImplementation"); 
  const walImp = await WalletImplementation.deploy(); 

  await walImp.deployed()

  const XChangeFactory = await ethers.getContractFactory("XChangeFactory");
  const xchange = await upgrades.deployProxy(XChangeFactory, [walImp.address]);
  
  await xchange.deployed();

  console.table({"Wallet Implementation": walImp.address, "XChangeFactory": xchange.address})
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // ┌───────────────────────┬──────────────────────────────────────────────┐
  // │        (index)        │                    Values                    │
  // ├───────────────────────┼──────────────────────────────────────────────┤
  // │ Wallet Implementation │ '0xD28F3246f047Efd4059B24FA1fa587eD9fa3e77F' │
  // │    XChangeFactory     │ '0xF357118EBd576f3C812c7875B1A1651a7f140E9C' │
  // └───────────────────────┴──────────────────────────────────────────────┘
  //https://alfajores.celoscan.io/address/0x15F2ea83eB97ede71d84Bd04fFF29444f6b7cd52#code