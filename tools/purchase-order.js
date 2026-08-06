function calculateCost(pricePerBag, quantity) {
    return pricePerBag * quantity;
}

module.exports = calculateCost;

Save.

Create Tool 3

Create

purchase-order.js

Paste:

function generatePurchaseOrder(supplier, quantity) {

return `
-------------------------
PURCHASE ORDER
-------------------------

Supplier : ${supplier.name}

Location : ${supplier.location}

Quantity : ${quantity}

Unit Price : ${supplier.price}

Total : KES ${supplier.price * quantity}

Status : READY
`;

}

module.exports = generatePurchaseOrder;