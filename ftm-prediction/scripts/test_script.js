const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/FtmPricePrediction.sol/FtmPricePrediction.json");

// Provider
const alchemyProvider = new ethers.getDefaultProvider("http://localhost:8545", API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Contract
const FtmPricePrediction = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

console.log("genesisStartRound ", FtmPricePrediction.genesisStartRound());
//console.log("genesisLockRound ", FtmPricePrediction.genesisLockRound());
//console.log("executeRound ", FtmPricePrediction.executeRound());