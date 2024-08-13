function applyDiscount(product, discountCode) {
    if (discountCode && discountCode.isValid()) {
      product.price -= discountCode.value;
    } else if (!discountCode) {
      throw new Error('Discount code is required');
    } else {
      throw new Error('Invalid discount code');
    }
    return product;
  }
  
  module.exports = { applyDiscount };