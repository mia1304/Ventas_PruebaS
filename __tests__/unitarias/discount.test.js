const { applyDiscount } = require('../../services/discount-service');

describe('Pruebas de aplicación de descuentos', () => {
    test('Debe aplicar el descuento cuando el código es válido', () => {
        const product = { price: 100 };
        const discountCode = { isValid: () => true, value: 10 };

        const result = applyDiscount(product, discountCode);
        expect(result.price).toBe(90);
    });

    test('Debe lanzar un error cuando el código de descuento es inválido', () => {
        const product = { price: 100 };
        const discountCode = { isValid: () => false, value: 10 };

        expect(() => applyDiscount(product, discountCode)).toThrow('Invalid discount code');
    });

    test('Debe lanzar un error cuando el código de descuento no está presente', () => {
        const product = { price: 100 };

        expect(() => applyDiscount(product)).toThrow('Discount code is required');
    });

    test('No debe aplicar descuento si el valor es 0', () => {
        const product = { price: 100 };
        const discountCode = { isValid: () => true, value: 0 };

        const result = applyDiscount(product, discountCode);
        expect(result.price).toBe(100);
    });

    test('Debe lanzar un error si el descuento es mayor que el precio', () => {
        const product = { price: 50 };
        const discountCode = { isValid: () => true, value: 60 };

        expect(() => applyDiscount(product, discountCode)).toThrow('Discount value exceeds product price');
    });
});
