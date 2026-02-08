const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin");
const {
  getAllOrders
} = require("../controllers/adminOrders.controller");

// 🛡️ SOLO ADMIN
router.get(
  "/orders",
  authMiddleware,
  isAdmin,
  getAllOrders
);

module.exports = router;