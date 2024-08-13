const { addProductToInventory, calculateInventoryValue } = require('../src/inventario');

describe('Pruebas de flujos de datos', () => {
  test('Debe agregar un producto al inventario y calcular el valor total', () => {
    let inventory = [];
    inventory = addProductToInventory(inventory, { name: 'Shirt', price: 20 });
    inventory = addProductToInventory(inventory, { name: 'Pants', price: 30 });

    const totalValue = calculateInventoryValue(inventory);
    expect(totalValue).toBe(50);
  });
});