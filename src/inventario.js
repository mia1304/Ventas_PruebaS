function addProductToInventory(inventory, product) {
    inventory.push(product);
    return inventory;
  }
  
  function calculateInventoryValue(inventory) {
    return inventory.reduce((total, product) => total + product.price, 0);
  }
  
  module.exports = { addProductToInventory, calculateInventoryValue };