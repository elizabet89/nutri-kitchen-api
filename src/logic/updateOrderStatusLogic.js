const Order = require("../models/Order");

const VALID_STATUS = ["pendiente", "pagado", "asignado"];

module.exports = async (user, orderId, newStatus) => {
  if (!VALID_STATUS.includes(newStatus)) {
    throw new Error("Status inválido");
  }

  const order = await Order.findById(orderId);
  if (!order) {
    throw new Error("Pedido no encontrado");
  }

  // Solo el usuario dueño del pedido o admin puede cambiar el status
  if (order.user.toString() !== user.id && user.role !== "admin") {
    throw new Error("No tienes permiso para actualizar este pedido");
  }

  order.status = newStatus;
  await order.save();

  return order;
};