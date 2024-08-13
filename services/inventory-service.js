function checkStock(product, quantity) {
    if (!product) {
        throw new Error('Product is required');
    }

    if (quantity <= 0) {
        throw new Error('Quantity must be greater than zero');
    }

    if (product.stock < quantity) {
        throw new Error('Insufficient stock');
    }

    return true;
}

function updateStock(product, quantity) {
    if (product.stock < quantity) {
        throw new Error('Insufficient stock to complete the transaction');
    }

    product.stock -= quantity;
    return product;
}

module.exports = { checkStock, updateStock };
