const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment-controller');

router.get('/payment', paymentController.getAllPayments);
router.get('/payment/:id', paymentController.getPaymentById);
router.post('/payment', paymentController.createPayment);
router.put('/payment/:id', paymentController.updatePaymentById); // Corrected function name
router.delete('/payment/:id', paymentController.deletePaymentById);

module.exports = router;
