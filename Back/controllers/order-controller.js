const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new order
const createOrder = async (req, res) => {
  try {
    const { orderDate, status, deliveryFee, userId, shippingAddressId } = req.body;
    const newOrder = await prisma.order.create({
      data: {
        orderDate,
        status,
        deliveryFee,
        userId,
        shippingAddressId,
      },
    });
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        payment: true,
      },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  const orderId = parseInt(req.params.id);
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        payment: true,
      },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

// Update order by ID
const updateOrderById = async (req, res) => {
  const orderId = parseInt(req.params.id);
  const { orderDate, status, deliveryFee, userId, shippingAddressId } = req.body;
  try {
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        orderDate,
        status,
        deliveryFee,
        userId,
        shippingAddressId,
      },
    });
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
};

// Delete order by ID
const deleteOrderById = async (req, res) => {
  const orderId = parseInt(req.params.id);
  try {
    await prisma.order.delete({
      where: { id: orderId },
    });
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order' });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
