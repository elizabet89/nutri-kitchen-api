const Order = require("../models/Order");

const SALAD_PRICES = {
  individual: 120,
  grande: 159
};

const EXTRA_PRICE = 25;

module.exports = async (user, orderData) => {
  const {
    saladType,
    ingredients,
    protein,
    complement,
    dressing,
    utensils
  } = orderData;

  // Validaciones básicas
  if (!saladType || !ingredients || !protein || !complement || !dressing || !utensils) {
    throw new Error("Datos del pedido incompletos");
  }

  // Validar cantidad de ingredientes según tamaño
  const maxIngredients = saladType === "individual" ? 4 : 5;
  if (ingredients.length > maxIngredients) {
    throw new Error(`Para ${saladType} solo se permiten ${maxIngredients} ingredientes`);
  }

  // Calcular costo extra
  let extraCost = 0;

ingredients.forEach(i => {
  if (i.extra) extraCost += EXTRA_PRICE;
});
  if (protein?.extra) extraCost += EXTRA_PRICE;
  if (complement?.extra) extraCost += EXTRA_PRICE;
  if (dressing?.extra) extraCost += EXTRA_PRICE;

  const totalPrice = SALAD_PRICES[saladType] + extraCost;

  // Crear pedido
  const order = new Order({
    user: user.id,
    saladType,
    ingredients,
    protein,
    complement,
    dressing,
    utensils,
    extraCost,
    totalPrice
  });

  await order.save();
  return order;
};