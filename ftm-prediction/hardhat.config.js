require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
const privateKey = process.env.PRIVATE_KEY
const apiKey = process.env.ETHERSCAN_API_KEY
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainId: 1337
    },
    
    rinkeby: {
      // Rinkeby
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: [privateKey]
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 3,
      accounts: [privateKey]
    },
    ftm: {
      url: "https://rpc.testnet.fantom.network",
      chainId: 0xfa2,
      accounts: [privateKey]
    }
    
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: apiKey
  }
};

