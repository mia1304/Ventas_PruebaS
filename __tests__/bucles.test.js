const { calculateTotal } = require('../src/carrito');

describe('Pruebas de caja blanca para el bucle en la función calculateTotal', () => {
  
  test('Debe recorrer el array completo y calcular el total correctamente', () => {
    const clothingItems = [
      { price: 50, quantity: 2 },  // Dos camisetas a $50 cada una
      { price: 30, quantity: 1 },  // Un pantalón a $30
    ];

    let total = 0;
    for (let i = 0; i < clothingItems.length; i++) {
      total += clothingItems[i].price * clothingItems[i].quantity;
    }

    const result = calculateTotal(clothingItems);

    // Verificar que el bucle se ejecuta la cantidad correcta de veces
    expect(clothingItems.length).toBe(2);
    // Verificar el valor acumulado en total después del bucle
    expect(total).toBe(130);
    // Verificar que el resultado de la función es correcto
    expect(result).toBe(130);
  });

  test('Debe manejar correctamente un array vacío sin recorrer el bucle', () => {
    const clothingItems = [];

    const result = calculateTotal(clothingItems);

    // Verificar que el bucle no se ejecuta
    expect(clothingItems.length).toBe(0);
    // Verificar que el total es 0 cuando el array está vacío
    expect(result).toBe(0);
  });

  test('Debe manejar un array con un solo elemento', () => {
    const clothingItems = [{ price: 100, quantity: 1 }];  // Una chaqueta a $100

    let total = 0;
    for (let i = 0; i < clothingItems.length; i++) {
      total += clothingItems[i].price * clothingItems[i].quantity;
    }

    const result = calculateTotal(clothingItems);

    // Verificar que el bucle se ejecuta una vez
    expect(clothingItems.length).toBe(1);
    // Verificar el valor acumulado en total después de la única iteración
    expect(total).toBe(100);
    // Verificar que el resultado de la función es correcto
    expect(result).toBe(100);
  });

  test('Debe manejar casos donde la cantidad de un artículo es cero', () => {
    const clothingItems = [
      { price: 50, quantity: 0 },  // Camiseta con cantidad 0
      { price: 30, quantity: 2 },  // Pantalones con cantidad 2
    ];

    let total = 0;
    for (let i = 0; i < clothingItems.length; i++) {
      total += clothingItems[i].price * clothingItems[i].quantity;
    }

    const result = calculateTotal(clothingItems);

    // Verificar el cálculo en cada iteración
    expect(total).toBe(60);
    // Verificar que el resultado de la función es correcto
    expect(result).toBe(60);
  });

});
