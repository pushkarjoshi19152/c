// Setup: npm install @alch/alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");
require("dotenv").config()
const API_KEY = process.env.API_KEY

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
    apiKey: API_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

async function main() {
    const latestBlock = await alchemy.core.getBlockNumber();
    console.log("The latest block number is", latestBlock);
}

main();