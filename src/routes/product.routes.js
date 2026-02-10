console.log("✅ product.routes.js cargado");

const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin");

// 🧪 Test
router.get("/test", (req, res) => {
  res.json({ message: "Ruta products funcionando 🥗" });
});

// ➕ Crear producto (admin)
router.post(
  "/",
  authMiddleware,
  isAdmin,
  productController.createProduct
);

// 📋 Obtener menú público
router.get(
  "/",
  productController.getProducts
);

module.exports = router;