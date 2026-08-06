function generatePurchaseOrder(supplier, quantity) {
  return `
-------------------------
PURCHASE ORDER
-------------------------

Supplier: ${supplier.name}
Location: ${supplier.location}
Quantity: ${quantity}
Unit Price: KES ${supplier.price}
Total: KES ${supplier.price * quantity}

Status: READY
`;
}

module.exports = generatePurchaseOrder;