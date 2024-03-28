const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

// Create a new product
router.post('/product', productController.createProduct);

// Retrieve all products
router.get('/product', productController.getAllProducts);

// Retrieve a single product by id
router.get('/product/:id', productController.getProductById);

// Update a product by id
router.put('/product/:id', productController.updateProductById);

// Delete a product by id
router.delete('/product/:id', productController.deleteProductById);

module.exports = router;
