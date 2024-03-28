const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new shopping cart item
const createShoppingCartItem = async (req, res) => {
  try {
    const { productId, quantity, shoppingCartId } = req.body;
    const newShoppingCartItem = await prisma.shoppingCartItem.create({
      data: {
        productId,
        quantity,
        shoppingCartId,
      },
    });
    res.json(newShoppingCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shopping cart item' });
  }
};

// Get all shopping cart items
const getAllShoppingCartItems = async (req, res) => {
  try {
    const shoppingCartItems = await prisma.shoppingCartItem.findMany();
    res.json(shoppingCartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shopping cart items' });
  }
};

// Get shopping cart item by ID
const getShoppingCartItemById = async (req, res) => {
  const shoppingCartItemId = parseInt(req.params.id);
  try {
    const shoppingCartItem = await prisma.shoppingCartItem.findUnique({
      where: { id: shoppingCartItemId },
    });
    res.json(shoppingCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shopping cart item' });
  }
};

// Update shopping cart item by ID
const updateShoppingCartItemById = async (req, res) => {
  const shoppingCartItemId = parseInt(req.params.id);
  const { productId, quantity, shoppingCartId } = req.body;
  try {
    const updatedShoppingCartItem = await prisma.shoppingCartItem.update({
      where: { id: shoppingCartItemId },
      data: {
        productId,
        quantity,
        shoppingCartId,
      },
    });
    res.json(updatedShoppingCartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update shopping cart item' });
  }
};

// Delete shopping cart item by ID
const deleteShoppingCartItemById = async (req, res) => {
  const shoppingCartItemId = parseInt(req.params.id);
  try {
    await prisma.shoppingCartItem.delete({
      where: { id: shoppingCartItemId },
    });
    res.json({ message: 'Shopping cart item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete shopping cart item' });
  }
};

module.exports = {
  createShoppingCartItem,
  getAllShoppingCartItems,
  getShoppingCartItemById,
  updateShoppingCartItemById,
  deleteShoppingCartItemById,
};
