console.log("✅ auth.routes.js cargado");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

	router.get("/test", (req, res) => {
   console.log("📥 Entró a /api/auth/test");
  res.json({
    status: "OK",
    message: "Ruta /api/auth/test funcionando 🔐"
  });
	});
	// 🔐 Login con teléfono
router.post("/login", authController.login);
	module.exports = router;



