const { ethers } = require("ethers");

// Avalanche Fuji Testnet RPC
const RPC_URL = "https://api.avax-test.network/ext/bc/C/rpc";

// Create a provider
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Test the connection
async function checkConnection() {
    try {
        const blockNumber = await provider.getBlockNumber();
        console.log("✅ Connected to Avalanche Fuji");
        console.log("Latest Block:", blockNumber);
    } catch (error) {
        console.error("❌ Connection failed");
        console.error(error.message);
    }
}

module.exports = {
    provider,
    checkConnection
};