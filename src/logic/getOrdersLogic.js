const Order = require("../models/Order");

module.exports = async (user, status) => {
  if (!user || !user.id) {
    throw new Error("Usuario no válido");
  }

  const query = { user: user.id };
  if (status) {
    query.status = status; // Filtramos por status si se pasa
  }

  // Traemos los pedidos del usuario, más recientes primero
  const orders = await Order.find(query).sort({ createdAt: -1 });

  return orders;
};