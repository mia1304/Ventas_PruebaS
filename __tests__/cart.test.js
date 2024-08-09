const { addToCart, removeFromCart, proceedToCheckout, getCartItems, getCartQuantity } = require('../src/cart');

describe('Shopping Cart', () => {
  // Reinicia el carrito antes de cada prueba para garantizar un estado limpio
  beforeEach(() => {
    global.cart = [];
  });

  // Caso válido
  test('should add product to cart (valid case)', () => {
    // Agrega un producto válido al carrito
    const result = addToCart('Casaca Hombre Jacob Negro', 'XL');
    expect(result).toBe('Product added to cart'); 

    // Verifica que el producto se haya agregado al carrito
    const cartItems = getCartItems();
    expect(cartItems).toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });

  // Caso inválido
  test('should not add product to cart (invalid case)', () => {
    let result = addToCart('', 'XL');
    expect(result).toBe('Invalid product or size');

    result = addToCart('Casaca Hombre Jacob Negro', '');
    expect(result).toBe('Invalid product or size');

    // Verifica que el carrito no contenga los productos inválidos
    const cartItems = getCartItems();
    expect(cartItems).not.toContainEqual({ product: '', size: 'XL' });
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: '' });
  });

  // Caso válido
  test('should proceed to checkout (valid case)', () => {
    // Añade un producto al carrito antes de proceder al checkout
    addToCart('Casaca Hombre Jacob Negro', 'XL');

    // Procede al checkout con un carrito válido
    const result = proceedToCheckout();
    expect(result).toBe('Checkout successful');

    // Verifica que el carrito esté vacío después del checkout
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(0); // Verifica que el carrito esté vacío
  });

  // **Prueba de Transición de Estado: Caso inválido**
  test('should not proceed to checkout (invalid case)', () => {
    // Intenta proceder al checkout con un carrito vacío (valor límite)
    const result = proceedToCheckout();
    expect(result).toBe('Cart is empty'); // Verifica el mensaje de error

    // Verifica que el carrito siga vacío después del intento fallido de checkout
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(0); // Verifica que el carrito sigue vacío
  });

  // **Prueba de Transición de Estado: Caso válido**
  test('should remove product from cart (valid case)', () => {
    // Añade un producto al carrito para poder eliminarlo
    addToCart('Casaca Hombre Jacob Negro', 'XL');

    // Elimina el producto del carrito
    const result = removeFromCart('Casaca Hombre Jacob Negro', 'XL');
    expect(result).toBe('Product removed from cart'); // Verifica el mensaje de éxito

    // Verifica que el producto se haya eliminado del carrito
    const cartItems = getCartItems();
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });

  // **Prueba de Transición de Estado: Caso inválido**
  test('should not remove product from cart (invalid case)', () => {
    // Intenta eliminar un producto que no está en el carrito (valor límite)
    const result = removeFromCart('Producto No Existente', 'L');
    expect(result).toBe('Product not found in cart'); // Verifica el mensaje de error

    // Verifica que el carrito siga sin contener el producto no existente
    const cartItems = getCartItems();
    expect(cartItems).not.toContainEqual({ product: 'Producto No Existente', size: 'L' });
  });

  // **Prueba de Equivalencia de Clases y Transición de Estado: Caso válido**
  test('should verify product quantity in cart (valid case)', () => {
    // Añade varios productos al carrito
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    addToCart('Otro Producto', 'L');

    // Elimina uno de los productos
    removeFromCart('Casaca Hombre Jacob Negro', 'XL');

    // Verifica la cantidad restante de productos en el carrito
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(1); // Verifica la cantidad de productos en el carrito

    // Verifica el contenido del carrito
    const cartItems = getCartItems();
    expect(cartItems).toContainEqual({ product: 'Otro Producto', size: 'L' }); // Verifica que el producto restante esté en el carrito
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' }); // Verifica que el producto eliminado ya no esté en el carrito
  });
});
