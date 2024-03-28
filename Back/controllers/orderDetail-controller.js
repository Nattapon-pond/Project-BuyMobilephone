const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new order detail
const createOrderDetail = async (req, res) => {
  try {
    const { quantity, price, orderId, productId } = req.body;
    const newOrderDetail = await prisma.orderDetail.create({
      data: {
        quantity,
        price,
        orderId,
        productId,
      },
    });
    res.json(newOrderDetail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order detail' });
  }
};

// Get all order details
const getAllOrderDetails = async (req, res) => {
  try {
    const orderDetails = await prisma.orderDetail.findMany();
    res.json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order details' });
  }
};

// Get order detail by ID
const getOrderDetailById = async (req, res) => {
  const orderDetailId = parseInt(req.params.id);
  try {
    const orderDetail = await prisma.orderDetail.findUnique({
      where: { id: orderDetailId },
      include: {
        order: true,
        product: true,
      },
    });
    res.json(orderDetail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order detail' });
  }
};

// Update order detail by ID
const updateOrderDetailById = async (req, res) => {
  const orderDetailId = parseInt(req.params.id);
  const { quantity, price } = req.body;
  try {
    const updatedOrderDetail = await prisma.orderDetail.update({
      where: { id: orderDetailId },
      data: {
        quantity,
        price,
      },
    });
    res.json(updatedOrderDetail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order detail' });
  }
};

// Delete order detail by ID
const deleteOrderDetailById = async (req, res) => {
  const orderDetailId = parseInt(req.params.id);
  try {
    await prisma.orderDetail.delete({
      where: { id: orderDetailId },
    });
    res.json({ message: 'Order detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order detail' });
  }
};

module.exports = {
  createOrderDetail,
  getAllOrderDetails,
  getOrderDetailById,
  updateOrderDetailById,
  deleteOrderDetailById,
};
