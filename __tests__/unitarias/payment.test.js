// test/unitarias/payment.test.js

const { processPayment } = require('../../services/payment-service');

describe('Pruebas para el procesamiento de pagos', () => {
    test('Debe procesar un pago con tarjeta de crédito válida', () => {
        const paymentInfo = { cardNumber: '4111111111111111', amount: 100 };

        const result = processPayment(paymentInfo);
        expect(result).toBe('Payment successful');
    });

    test('Debe fallar si la tarjeta de crédito es inválida', () => {
        const paymentInfo = { cardNumber: '1234567890123456', amount: 100 };

        expect(() => processPayment(paymentInfo)).toThrow('Invalid credit card');
    });

    test('Debe lanzar un error si no se proporciona información de pago', () => {
        expect(() => processPayment()).toThrow('Payment information is required');
    });

    test('Debe lanzar un error si el monto del pago es negativo', () => {
        const paymentInfo = { cardNumber: '4111111111111111', amount: -50 };

        expect(() => processPayment(paymentInfo)).toThrow('Invalid payment amount');
    });

    test('Debe lanzar un error si el número de tarjeta no tiene 16 dígitos', () => {
        const paymentInfo = { cardNumber: '1234', amount: 100 };

        expect(() => processPayment(paymentInfo)).toThrow('Invalid credit card number');
    });
});