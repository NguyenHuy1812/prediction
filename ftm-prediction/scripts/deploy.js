// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PredictFTM = await ethers.getContractFactory('FTMPricePrediction')
  const predictFTM = await PredictFTM.deploy("0xf4766552D15AE4d256Ad41B6cf2933482B0680dc", "0x54368f872259814A10AC56BF0CCbAa737f62df0b", "0x54368f872259814A10AC56BF0CCbAa737f62df0b", 300, 180, "1000000000000000000", 300, 300);
  await predictFTM.deployed();

  console.log("FTMPrediction deployed to:", predictFTM.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});