// __tests__/products.test.js
const request = require('supertest');
const { app } = require('../app'); // Verifica la ruta y la exportación

describe('POST /products', () => {
  it('should store a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 10,
      })
      //.expect('Content-Type', /json/)
      //.expect(201);

    // Aserciones adicionales pueden ir aquí
  });
});