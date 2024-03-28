const express = require('express');
const router = express.Router();
const shoppingCartItemController = require('../controllers/ShoppingCartItem-controller');

// Create new shopping cart item
router.post('/shoppingCartItem', shoppingCartItemController.createShoppingCartItem);

// Get all shopping cart items
router.get('/shoppingCartItem', shoppingCartItemController.getAllShoppingCartItems);

// Get shopping cart item by ID
router.get('/shoppingCartItem/:id', shoppingCartItemController.getShoppingCartItemById);

// Update shopping cart item by ID
router.put('/shoppingCartItem/:id', shoppingCartItemController.updateShoppingCartItemById);

// Delete shopping cart item by ID
router.delete('/shoppingCartItem/:id', shoppingCartItemController.deleteShoppingCartItemById);

module.exports = router;
