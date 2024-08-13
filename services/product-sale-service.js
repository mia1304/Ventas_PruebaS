// services/product-sale-service.js

function sellProduct(product) {
    if (!product) {
        throw new Error('Product is required');
    }

    if (product.stock <= 0) {
        throw new Error('Insufficient stock');
    }

    product.stock -= 1;

    return product;
}

module.exports = { sellProduct };
