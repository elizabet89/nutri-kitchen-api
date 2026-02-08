// src/logic/priceCalculator.js

const BASE_PRICES = {
  individual: 120,
  grande: 159
};

const EXTRA_PRICE = 25;

function calculateOrderPrice(orderData) {
  let total = BASE_PRICES[orderData.saladType] || 0;
  let extraCost = 0;

  // Ingredientes extra
  orderData.ingredients.forEach(ing => {
    if (ing.extra) extraCost += EXTRA_PRICE;
  });

  // Proteína
  if (orderData.protein?.extra) extraCost += EXTRA_PRICE;

  // Complemento
  if (orderData.complement?.extra) extraCost += EXTRA_PRICE;

  // Aderezo
  if (orderData.dressing?.extra) extraCost += EXTRA_PRICE;

  total += extraCost;

  return {
    totalPrice: total,
    extraCost
  };
}

module.exports = calculateOrderPrice;