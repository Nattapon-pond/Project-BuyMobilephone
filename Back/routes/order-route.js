const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order-controller');

router.post('/order', orderController.createOrder);
router.get('/order', orderController.getAllOrders);
router.get('/order/:id', orderController.getOrderById);
router.put('/order/:id', orderController.updateOrderById);
router.delete('/order/:id', orderController.deleteOrderById);

module.exports = router;
