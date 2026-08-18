require("dotenv").config({ quiet: true });

const readline = require("readline-sync");
const { runAgent } = require("./agents/mnada-commerce-agent");
const { checkConnection } = require("./services/blockchain/avalanche");

async function main() {
  console.log("Quantum Intelligence Core");
  console.log("Mnada Commerce Agent");
  console.log("-----------------------------");

  // Read-only connection to Avalanche Fuji
  await checkConnection();

  const request = readline.question("\nWhat do you need? ");

  try {
    const response = await runAgent(request);
    console.log("\n" + response);
  } catch (error) {
    console.error("\nError:", error.message);
  }
}

main();