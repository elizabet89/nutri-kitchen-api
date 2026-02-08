const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const createOrderLogic = require("../logic/createOrderLogic");
const getOrdersLogic = require("../logic/getOrdersLogic");
const updateOrderStatusLogic = require("../logic/updateOrderStatusLogic");


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
router.get("/", authMiddleware, async (req, res) => {
  try {
    const status = req.query.status; // Recibimos query param ?status=pendiente
    const orders = await getOrdersLogic(req.user, status);
    res.json(orders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// =======================
// Ruta: Actualizar status de un pedido
// =======================
router.patch("/:id/status", authMiddleware, async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Debe enviar un status" });
    }

    const updatedOrder = await updateOrderStatusLogic(req.user, orderId, status);
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;