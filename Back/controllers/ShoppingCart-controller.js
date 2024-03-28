const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new shopping cart
const createShoppingCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const newShoppingCart = await prisma.shoppingCart.create({
      data: {
        userId,
      },
    });
    res.json(newShoppingCart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shopping cart' });
  }
};

// Get all shopping carts
const getAllShoppingCarts = async (req, res) => {
  try {
    const shoppingCarts = await prisma.shoppingCart.findMany();
    res.json(shoppingCarts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shopping carts' });
  }
};

// Get shopping cart by ID
const getShoppingCartById = async (req, res) => {
  const shoppingCartId = parseInt(req.params.id);
  try {
    const shoppingCart = await prisma.shoppingCart.findUnique({
      where: { id: shoppingCartId },
      include: { user: true, cartItems: true },
    });
    res.json(shoppingCart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shopping cart' });
  }
};

// Update shopping cart by ID
const updateShoppingCartById = async (req, res) => {
  const shoppingCartId = parseInt(req.params.id);
  const { userId } = req.body;
  try {
    const updatedShoppingCart = await prisma.shoppingCart.update({
      where: { id: shoppingCartId },
      data: {
        userId,
      },
    });
    res.json(updatedShoppingCart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update shopping cart' });
  }
};

// Delete shopping cart by ID
const deleteShoppingCartById = async (req, res) => {
  const shoppingCartId = parseInt(req.params.id);
  try {
    await prisma.shoppingCart.delete({
      where: { id: shoppingCartId },
    });
    res.json({ message: 'Shopping cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete shopping cart' });
  }
};

module.exports = {
  createShoppingCart,
  getAllShoppingCarts,
  getShoppingCartById,
  updateShoppingCartById,
  deleteShoppingCartById,
};
