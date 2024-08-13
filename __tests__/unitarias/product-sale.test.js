// test/unitarias/product-sale.test.js

const { sellProduct } = require('../../services/product-sale-service');

describe('Pruebas para la venta de productos', () => {
    test('Debe reducir el stock al vender un producto', () => {
        const product = { id: 1, stock: 10 };
        const sell = jest.fn().mockImplementation((product) => {
            return { ...product, stock: product.stock - 1 };
        });

        const result = sellProduct(product, sell);
        expect(result.stock).toBe(9);
    });

    test('Debe lanzar un error si el producto no tiene suficiente stock', () => {
        const product = { id: 1, stock: 0 };
        
        expect(() => sellProduct(product)).toThrow('Insufficient stock');
    });

    test('Debe lanzar un error si no se proporciona el producto', () => {
        expect(() => sellProduct(null)).toThrow('Product is required');
    });
});