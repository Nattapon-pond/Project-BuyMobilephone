const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new payment
const createPayment = async (req, res) => {
  try {
    const { paymentDate, payment_method, amount, status, orderId, shippingId } = req.body;
    const newPayment = await prisma.payment.create({
      data: {
        paymentDate,
        payment_method,
        amount,
        status,
        orderId,
        shippingId,
      },
    });
    res.json(newPayment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await prisma.payment.findMany();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
};

// Get payment by ID
const getPaymentById = async (req, res) => {
  const paymentId = parseInt(req.params.id);
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payment' });
  }
};

// Update payment by ID
const updatePaymentById = async (req, res) => {
  const paymentId = parseInt(req.params.id);
  const { paymentDate, payment_method, amount, status, orderId, shippingId } = req.body;
  try {
    const updatedPayment = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        paymentDate,
        payment_method,
        amount,
        status,
        orderId,
        shippingId,
      },
    });
    res.json(updatedPayment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update payment' });
  }
};

// Delete payment by ID
const deletePaymentById = async (req, res) => {
  const paymentId = parseInt(req.params.id);
  try {
    await prisma.payment.delete({
      where: { id: paymentId },
    });
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete payment' });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentById, // Make sure it matches the function name
  deletePaymentById,
};
