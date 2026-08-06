require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');
const { searchSuppliers } = require('../tools/supplier-search');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function runAgent(userRequest) {
  const suppliers = searchSuppliers('Cement 50kg');

  const supplierContext = suppliers
    .map(
      s =>
        `${s.supplier} (${s.location}) - KES ${s.price} - Verified: ${s.verified}`
    )
    .join('\n');

  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-latest',
    max_tokens: 300,
    messages: [
      {
        role: 'user',
        content: `
You are the Mnada Commerce Agent.

Merchant request:
${userRequest}

Available verified suppliers:
${supplierContext}

Give the best recommendation, explain why, estimate savings, and provide a short purchase recommendation.
        `,
      },
    ],
  });

  return response.content[0].text;
}

module.exports = { runAgent };