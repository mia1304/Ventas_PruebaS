const { createOrder } = require('../../services/order-service');

describe('Order Service', () => {
    it('should create an order with valid inputs', () => {
        const newOrder = {
            userId: 'user123',
            productId: 'product123',
            quantity: 2
        };
        const result = createOrder(newOrder);

        expect(result).toHaveProperty('orderId');
        expect(result.userId).toBe('user123');
        expect(result.quantity).toBe(2);
    });

    it('should throw an error if quantity is not valid', () => {
        const newOrder = {
            userId: 'user123',
            productId: 'product123',
            quantity: -1
        };

        expect(() => createOrder(newOrder)).toThrow('Invalid quantity');
    });
});
