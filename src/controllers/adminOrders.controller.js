const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  try {
    const { status } = req.query;

    const filter = {};
    if (status) {
      filter.status = status;
    }

    const orders = await Order.find(filter)
      .populate("user", "name telefono")
      .sort({ createdAt: -1 });

    res.json({
      total: orders.length,
      orders
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al obtener pedidos"
    });
  }
};