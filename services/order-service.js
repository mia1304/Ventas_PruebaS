function createOrder(order) {
    if (order.quantity <= 0) {
        throw new Error('Invalid quantity');
    }

    const newOrder = {
        orderId: Math.random().toString(36).substring(2),
        userId: order.userId,
        productId: order.productId,
        quantity: order.quantity,
        status: 'pending'
    };

    return newOrder;
}

module.exports = { createOrder };
