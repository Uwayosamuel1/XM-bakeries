const Product = require('../models/productModel');

exports.addProduct = (req, res) => {
  const { name, price, category, quantity } = req.body;
  if (!name || !price || !category || !quantity) {
    return res.status(400).json({ error: 'All product fields are required' });
  }
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Product added', id: result.insertId });
  });
};

exports.getAllProducts = (req, res) => {
  Product.findAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.searchProducts = (req, res) => {
  Product.findByCriteria(req.query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
