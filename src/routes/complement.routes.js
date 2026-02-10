const express = require("express");
const router = express.Router();
const complementController = require("../controllers/complement.controller");

router.get("/", complementController.getComplements);
router.post("/", complementController.createComplement);

module.exports = router;