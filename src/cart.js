let cart = [];

function addToCart(product, size) {
  // Verifica si el nombre del producto o la talla están vacíos o son inválidos
  if (!product || !size) {
    return 'Invalid product or size'; // Mensaje de error si la entrada es inválida
  }
  
  // Agrega el producto y su tamaño al arreglo del carrito
  cart.push({ product, size });
  return 'Product added to cart'; // Mensaje de éxito
}

function removeFromCart(product, size) {
  // Encuentra el índice del producto en el carrito que coincide con el nombre y la talla
  const index = cart.findIndex(item => item.product === product && item.size === size);
  if (index !== -1) {
    // Si se encuentra el producto, elimínalo del carrito
    cart.splice(index, 1);
    return 'Product removed from cart'; // Mensaje de éxito
  }
  return 'Product not found in cart'; // Mensaje de error si el producto no se encuentra
}

function proceedToCheckout() {
  // Verifica si el carrito está vacío antes de proceder al checkout
  if (cart.length === 0) {
    return 'Cart is empty'; // Mensaje de error si el carrito está vacío
  }

  // Vacía el carrito
  cart = [];
  return 'Checkout successful'; // Mensaje de éxito
}

function getCartItems() {
  // Devuelve el arreglo del carrito
  return cart;
}

function getCartQuantity() {
  // Devuelve la longitud del arreglo del carrito
  return cart.length;
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = { addToCart, removeFromCart, proceedToCheckout, getCartItems, getCartQuantity };
