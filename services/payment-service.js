// services/payment-service.js

function processPayment(paymentInfo) {
    if (!paymentInfo) {
        throw new Error('Payment information is required');
    }

    const { cardNumber, amount } = paymentInfo;

    if (!cardNumber || cardNumber.length !== 16) {
        throw new Error('Invalid credit card number');
    }

    if (amount <= 0) {
        throw new Error('Invalid payment amount');
    }

    if (!validateCreditCard(cardNumber)) {
        throw new Error('Invalid credit card');
    }

    // Simulación del procesamiento del pago
    return 'Payment successful';
}

function validateCreditCard(cardNumber) {
    // Lista de números de tarjetas ficticias válidas
    const validCards = ['4111111111111111'];

    return validCards.includes(cardNumber);
}

module.exports = { processPayment };