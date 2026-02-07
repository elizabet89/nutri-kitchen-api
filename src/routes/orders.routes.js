const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const createOrderLogic = require("../logic/createOrderLogic");
const getOrdersLogic = require("../logic/getOrdersLogic");


// Crear pedido
router.post("/", authMiddleware, async (req, res) => {
  try {
    const order = await createOrderLogic(req.user, req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// =======================
// Ruta: Obtener pedidos del usuario
// =======================
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await getOrdersLogic(req.user);
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener pedidos" });
  }
});

module.exports = router;