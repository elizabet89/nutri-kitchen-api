
console.log("✅ user.routes.js cargado");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const userController = require("../controllers/user.controller");

// 🔐 Ruta protegida
router.get("/profile", authMiddleware, userController.profile);

module.exports = router;
