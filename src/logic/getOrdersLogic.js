const Order = require("../models/Order");

const getOrdersLogic = async (user) => {
  // Busca todos los pedidos del usuario
  const orders = await Order.find({ user: user.id }).sort({ createdAt: -1 });
  return orders;
};

module.exports = getOrdersLogic;