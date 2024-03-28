const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new product
const createProduct = async (req, res) => {
  try {
    const { name, brand, price, color, description, stock, image } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        brand,
        price,
        color,
        description,
        stock,
        image,
      },
    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

// Update product by ID
const updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, brand, price, color, description, stock, image } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        name,
        brand,
        price,
        color,
        description,
        stock,
        image,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete product by ID
const deleteProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    await prisma.product.delete({
      where: { id: productId },
    });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
