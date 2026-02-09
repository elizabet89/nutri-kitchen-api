const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/isAdmin");

/*
  Crear producto (solo admin)
*/
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const { name, description, price, image } = req.body;

      if (!name || !price) {
        return res.status(400).json({ error: "Nombre y precio son obligatorios" });
      }

      const product = new Product({
        name,
        description,
        price,
        image
      });

      await product.save();

      res.status(201).json({
        message: "Producto creado correctamente",
        product
      });
    } catch (error) {
      console.error("❌ Error creando producto:", error);
      res.status(500).json({ error: "Error del servidor" });
    }
  }
);

module.exports = router;