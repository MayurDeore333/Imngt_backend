const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const { createSale, getSales } = require("../controllers/saleController");
 

router.post("/createSale", protect, createSale);
router.get("/getSales", protect, getSales);

module.exports = router;
