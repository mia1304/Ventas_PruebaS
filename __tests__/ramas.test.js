const { getShippingCost } = require('../src/envio');

describe('Pruebas de ramas condicionales', () => {
  test('Debe retornar el costo de envío doméstico', () => {
    const result = getShippingCost('domestic');
    expect(result).toBe(5);
  });

  test('Debe retornar el costo de envío internacional', () => {
    const result = getShippingCost('international');
    expect(result).toBe(15);
  });

  test('Debe lanzar un error para un destino desconocido', () => {
    expect(() => getShippingCost('unknown')).toThrow('Unknown destination');
  });
});
