const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.addProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/search', productController.searchProducts);

module.exports = router;
