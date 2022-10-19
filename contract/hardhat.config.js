
// HTTPS
// https://eth-goerli.g.alchemy.com/v2/rhXW_zPW_9Kxv87kSND69ZEMW4SiGXz0

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rhXW_zPW_9Kxv87kSND69ZEMW4SiGXz0",
      accounts: ["0afe1ac15c725823e950a1d0058e5f8762ab937fe813fa3b207b767db6774630"]
    }
  }
}

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };
