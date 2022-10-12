async function main()  {
  const Contract = await ethers.getContractFactory("Contract"); 
  const c = await Contract.deploy(); 

  await c.deployed()

  };

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
