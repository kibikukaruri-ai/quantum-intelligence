const fs = require('fs');

function searchSuppliers(product) {
  const suppliers = JSON.parse(
    fs.readFileSync('./data/suppliers.json', 'utf8')
  );

  return suppliers
    .filter(
      s =>
        s.product.toLowerCase() === product.toLowerCase() &&
        s.verified === true
    )
    .sort((a, b) => a.price - b.price);
}

module.exports = { searchSuppliers };