const { applyDiscount } = require('../src/descuentos');

describe('Pruebas de caja blanca para las condiciones lógicas en applyDiscount', () => {

  test('Debe aplicar el descuento cuando el código es válido', () => {
    const product = { price: 100 };
    const discountCode = { isValid: () => true, value: 10 };

    const result = applyDiscount(product, discountCode);

    // Verificar que la condición de descuento válido fue verdadera
    expect(discountCode.isValid()).toBe(true);
    // Verificar el nuevo precio después de aplicar el descuento
    expect(result.price).toBe(90);
  });

  test('Debe lanzar un error cuando el código de descuento es inválido', () => {
    const product = { price: 100 };
    const discountCode = { isValid: () => false, value: 10 };

    expect(discountCode.isValid()).toBe(false);  // Verificar que la condición sea falsa
    expect(() => applyDiscount(product, discountCode)).toThrow('Invalid discount code');
  });

  test('Debe lanzar un error cuando el código de descuento no está presente', () => {
    const product = { price: 100 };

    expect(() => applyDiscount(product)).toThrow('Discount code is required');
  });

  test('Debe verificar que no se aplica ningún descuento si el valor es 0', () => {
    const product = { price: 100 };
    const discountCode = { isValid: () => true, value: 0 };

    const result = applyDiscount(product, discountCode);

    // Verificar que la condición de descuento válido fue verdadera
    expect(discountCode.isValid()).toBe(true);
    // Verificar que el precio no cambió
    expect(result.price).toBe(100);
  });

  test('Debe manejar un producto con precio negativo y un descuento válido', () => {
    const product = { price: -100 };
    const discountCode = { isValid: () => true, value: 10 };

    const result = applyDiscount(product, discountCode);

    // Verificar que la condición de descuento válido fue verdadera
    expect(discountCode.isValid()).toBe(true);
    // Verificar el nuevo precio negativo después de aplicar el descuento
    expect(result.price).toBe(-110);
  });
});