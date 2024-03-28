const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/ShoppingCart-controller');

// Create new shopping cart
router.post('/shoppingCarts', shoppingCartController.createShoppingCart);

// Get all shopping carts
router.get('/shoppingCarts', shoppingCartController.getAllShoppingCarts);

// Get shopping cart by ID
router.get('/shoppingCarts/:id', shoppingCartController.getShoppingCartById);

// Update shopping cart by ID
router.put('/shoppingCarts/:id', shoppingCartController.updateShoppingCartById);

// Delete shopping cart by ID
router.delete('/shoppingCarts/:id', shoppingCartController.deleteShoppingCartById);

module.exports = router;
