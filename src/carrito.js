// Calcula el total de la compra en el carrito de ropa
function calculateTotal(clothingItems) {
    let total = 0;
    for (let i = 0; i < clothingItems.length; i++) {
      // Calcula el precio total por cada tipo de prenda y acumula al total general
      total += clothingItems[i].price * clothingItems[i].quantity;
    }
    return total;
  }
  
  module.exports = { calculateTotal };