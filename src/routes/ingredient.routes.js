console.log("✅ ingredient.routes.js cargado");

const express = require("express");
const router = express.Router();

const ingredientController = require("../controllers/ingredient.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin");

// 🧪 TEST rápido
router.get("/test", (req, res) => {
  res.json({ message: "Ruta ingredients funcionando 🥗" });
});

// ➕ Crear ingrediente (solo admin)
router.post(
  "/",
  authMiddleware,
  isAdmin,
  ingredientController.createIngredient
);

// 📋 Obtener ingredientes por tipo
router.get(
  "/:type",
  ingredientController.getByType
);

module.exports = router;