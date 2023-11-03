const express = require("express");
const productsController = require("../controllers/products");
const path = require("path");

const router = express.Router();

router.post("/form", productsController.getAddProduct);

router.get("/form", productsController.postAddProduct);


module.exports = router;