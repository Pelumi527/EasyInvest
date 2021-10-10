<<<<<<< HEAD
=======


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
};
>>>>>>> f040aa59184bc99e0bd2870ef9dc894c9a8e4d8e
require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
<<<<<<< HEAD
  solidity:"0.8.3",
  // solidity: {
  //   compilers: [
  //     {
  //       version: "0.6.6",
  //     },
  //     {
  //       version: "0.7.0",
  //     },
  //     {
  //       version: "0.8.0",
  //       settings: {}
  //     }
  //   ]
  // },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    // ropsten: {
    //   url: process.env.ROPSTEN_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
=======
  solidity: "0.8.4",
  networks: {
    
    hardhat: {
      // forking: {
      //   url: "https://eth-mainnet.alchemyapi.io/v2/Sm9Z1X4Lkm9334MYxgV_ULOeL5bX5lbA"
      // },
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    rinkeby: {
      url:process.env.rinkeby_URL,
      accounts:[process.env.PRIVATE_KEY],
    },
    ropsten: {
      url:process.env.rinkeby_URL,
      accounts:[process.env.PRIVATE_KEY],
    }
    
   
      
    
>>>>>>> f040aa59184bc99e0bd2870ef9dc894c9a8e4d8e
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
<<<<<<< HEAD
};
=======
};



>>>>>>> f040aa59184bc99e0bd2870ef9dc894c9a8e4d8e
