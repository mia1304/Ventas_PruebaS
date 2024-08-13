const { checkStock, updateStock } = require('../../services/inventory-service');

describe('Pruebas de gestión de inventario', () => {

    // Prueba de verificación de stock exitoso
    test('Debe verificar que hay suficiente stock para la cantidad solicitada', () => {
        const product = { id: '12345', stock: 10 };
        const quantity = 5;

        const result = checkStock(product, quantity);
        expect(result).toBe(true);
    });

    // Prueba de error cuando el producto no se proporciona
    test('Debe lanzar un error si el producto no está definido', () => {
        const quantity = 5;

        expect(() => checkStock(null, quantity)).toThrow('Product is required');
    });

    // Prueba de error cuando la cantidad solicitada es menor o igual a cero
    test('Debe lanzar un error si la cantidad es menor o igual a cero', () => {
        const product = { id: '12345', stock: 10 };
        const quantity = 0;

        expect(() => checkStock(product, quantity)).toThrow('Quantity must be greater than zero');
    });

    // Prueba de error cuando no hay suficiente stock
    test('Debe lanzar un error si no hay suficiente stock', () => {
        const product = { id: '12345', stock: 3 };
        const quantity = 5;

        expect(() => checkStock(product, quantity)).toThrow('Insufficient stock');
    });

    // Prueba de actualización exitosa del stock
    test('Debe actualizar el stock correctamente después de una venta', () => {
        const product = { id: '12345', stock: 10 };
        const quantity = 4;

        const updatedProduct = updateStock(product, quantity);
        expect(updatedProduct.stock).toBe(6);
    });

    // Prueba de error al actualizar stock cuando no hay suficiente
    test('Debe lanzar un error si se intenta actualizar más stock del disponible', () => {
        const product = { id: '12345', stock: 2 };
        const quantity = 5;

        expect(() => updateStock(product, quantity)).toThrow('Insufficient stock to complete the transaction');
    });
});
