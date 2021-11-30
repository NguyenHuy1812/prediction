// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PREDICTFTMFactory = await ethers.getContractFactory("FtmPricePrediction");
  console.log("Deploying predictFTM....")
  // const predictFTM = await upgrades.deployProxy(PREDICTFTMFactory,["0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", 
  // "0xAc0C26a77ed87a910AC10cB6f88EfCE60731a644", 
  // "0xAc0C26a77ed87a910AC10cB6f88EfCE60731a644", 
  // 300, 
  // 180, 
  // "1000000000000000000", 
  // 300, 
  // 300]);

  const predictFTM = await upgrades.deployProxy(PREDICTFTMFactory,["0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", 
  "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", 
  "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", 
  300, 
  180, 
  "1000000000000000000", 
  300, 
  300]);


  await predictFTM.deployed();

  console.log("Greeter deployed to:", predictFTM.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// _oracleAddress:         0xf4766552D15AE4d256Ad41B6cf2933482B0680dc, 
// _adminAddress:          0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266, 
// _operatorAddress:       0x70997970c51812dc3a010c7d01b50e0d17dc79c8, 
// _intervalSeconds:       300, 
// _bufferSeconds:         180, 
// _minBetAmount:          1000000000000000000, 
// _oracleUpdateAllowance: 300, 
// _treasuryFee:           300, 
// overrides