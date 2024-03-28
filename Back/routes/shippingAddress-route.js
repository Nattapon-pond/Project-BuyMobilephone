const express = require('express');
const router = express.Router();
const shippingAddressController = require('../controllers/ShippingAddress-controller');

// Create new shipping address
router.post('/shippingAddresses', shippingAddressController.createShippingAddress);

// Get all shipping addresses
router.get('/shippingAddresses', shippingAddressController.getAllShippingAddresses);

// Get shipping address by ID
router.get('/shippingAddresses/:id', shippingAddressController.getShippingAddressById);

// Update shipping address by ID
router.put('/shippingAddresses/:id', shippingAddressController.updateShippingAddressById);

// Delete shipping address by ID
router.delete('/shippingAddresses/:id', shippingAddressController.deleteShippingAddressById);

module.exports = router;
