const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const createOrderLogic = require("../logic/createOrderLogic");

// Crear pedido
router.post("/", authMiddleware, async (req, res) => {
  try {
    const order = await createOrderLogic(req.user, req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;