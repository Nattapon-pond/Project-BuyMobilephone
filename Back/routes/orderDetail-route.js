const express = require('express');
const router = express.Router();
const orderDetailController = require('../controllers/orderDetail-controller');

// Create new order detail
router.post('/orderDetails', orderDetailController.createOrderDetail);

// Get all order details
router.get('/orderDetails', orderDetailController.getAllOrderDetails);

// Get order detail by ID
router.get('/orderDetails/:id', orderDetailController.getOrderDetailById);

// Update order detail by ID
router.put('/orderDetails/:id', orderDetailController.updateOrderDetailById);

// Delete order detail by ID
router.delete('/orderDetails/:id', orderDetailController.deleteOrderDetailById);

module.exports = router;
