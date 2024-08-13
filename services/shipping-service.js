function calculateShippingCost(weight) {
    if (weight < 0) {
        throw new Error('Weight cannot be negative');
    }

    const costPerKg = 5;
    return weight * costPerKg;
}

module.exports = { calculateShippingCost };
