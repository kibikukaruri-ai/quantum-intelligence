const readline = require('readline-sync');
const { runAgent } = require('./agents/mnada-commerce-agent');

async function main() {
  console.log('Quantum Intelligence Core');
  console.log('Mnada Commerce Agent');
  console.log('-----------------------------');

  const request = readline.question('What do you need? ');

  try {
    const response = await runAgent(request);

    console.log('\nAgent recommendation:\n');
    console.log(response);
  } catch (error) {
    console.error('\nError:', error.message);
  }
}

main();