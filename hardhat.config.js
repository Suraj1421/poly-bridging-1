require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { POLYGON_URL, SEPOLIA_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon_amoy: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
