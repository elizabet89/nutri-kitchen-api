const express = require("express");
const router = express.Router();
const {
  createProtein,
  getProteins,
} = require("../controllers/protein.controller");

router.post("/", createProtein);
router.get("/", getProteins);

module.exports = router;