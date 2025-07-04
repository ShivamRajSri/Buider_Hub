const express = require("express");
const router = express.Router();
const Product = require("../Models/SellerProduct");
router.post("/add", async (req, res) => {
  try {
    const { title, price, image } = req.body;
    const newProduct = new Product({ title, price, image });
    await newProduct.save();
    res.status(201).json({ message: "Product added", product: newProduct});
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});
router.get("/materials", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  const skip = (page - 1) * limit;
  try {
    const products = await Product.find().skip(skip).limit(limit);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});
module.exports = router;