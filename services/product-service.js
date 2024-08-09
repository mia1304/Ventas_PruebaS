// services/product-service.js
const Product = require('../src/models/product');

async function store(productData) {
  const product = new Product(productData);
  return await product.save();
}

module.exports = { store };
