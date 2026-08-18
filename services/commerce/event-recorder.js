const crypto = require("crypto");

function recordCommerceEvent(event) {
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(event))
    .digest("hex");

  console.log("\nCommerce Event:");
  console.log(event);

  console.log("\nEvent Hash:");
  console.log(hash);

  return hash;
}

module.exports = {
  recordCommerceEvent,
};