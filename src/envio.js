// Calcula el costo de envío basado en el destino
function getShippingCost(destination) {
  if (destination === 'domestic') {
      return 5;
  } else if (destination === 'international') {
      return 15;
  } else {
      throw new Error('Destino desconocido');
  }
}

module.exports = { getShippingCost };
