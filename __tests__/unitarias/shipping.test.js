const { calculateShippingCost } = require('../../services/shipping-service');

describe('Shipping Service', () => {
    it('should calculate shipping cost based on weight', () => {
        const weight = 5; // kg
        const result = calculateShippingCost(weight);

        expect(result).toBe(25.00); // Ejemplo: $5 por kg
    });

    it('should throw an error if weight is negative', () => {
        const weight = -5; // kg

        expect(() => calculateShippingCost(weight)).toThrow('Weight cannot be negative');
    });
});
