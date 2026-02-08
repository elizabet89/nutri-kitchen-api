const Order = require("../models/Order");

const getAllOrdersLogic = async (status) => {
  const filter = {};

  if (status) {
    filter.status = status;
  }

  const orders = await Order.find(filter)
    .populate("user", "name telefono")
    .sort({ createdAt: -1 });

  return orders;
};

module.exports = getAllOrdersLogic;