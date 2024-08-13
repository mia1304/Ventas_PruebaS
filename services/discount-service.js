function applyDiscount(product, discountCode) {
    if (!discountCode) {
        throw new Error('Discount code is required');
    }

    if (!discountCode.isValid()) {
        throw new Error('Invalid discount code');
    }

    if (discountCode.value > product.price) {
        throw new Error('Discount value exceeds product price');
    }

    if (discountCode.value > 0) {
        product.price -= discountCode.value;
    }

    return product;
}

module.exports = { applyDiscount };