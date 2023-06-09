const hre = require("hardhat");

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory('AmmSwap');
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Contract deployed to this address:", contract.address);
  
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();