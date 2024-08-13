function getShippingCost(destination) {
    if (destination === 'domestic') {
      return 5;
    } else if (destination === 'international') {
      return 15;
    } else {
      throw new Error('Unknown destination');
    }
  }
  
  module.exports = { getShippingCost };
  
