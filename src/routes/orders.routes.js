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

// Ruta: Obtener pedidos del usuario (con filtro opcional de status)
router.get("/orders", authMiddleware, async (req, res) => {
  try {
    const status = req.query.status; // Recibimos query param ?status=pendiente
    const orders = await getOrdersLogic(req.user, status);
    res.json(orders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;