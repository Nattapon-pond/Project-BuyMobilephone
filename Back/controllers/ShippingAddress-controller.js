const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create new shipping address
const createShippingAddress = async (req, res) => {
  try {
    const { userId, address, subdistrict, district, province, postalCode } = req.body;
    const newShippingAddress = await prisma.shippingAddress.create({
      data: {
        userId,
        address,
        subdistrict,
        district,
        province,
        postalCode,
      },
    });
    res.json(newShippingAddress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shipping address' });
  }
};

// Get all shipping addresses
const getAllShippingAddresses = async (req, res) => {
  try {
    const shippingAddresses = await prisma.shippingAddress.findMany();
    res.json(shippingAddresses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipping addresses' });
  }
};

// Get shipping address by ID
const getShippingAddressById = async (req, res) => {
  const shippingAddressId = parseInt(req.params.id);
  try {
    const shippingAddress = await prisma.shippingAddress.findUnique({
      where: { id: shippingAddressId },
    });
    res.json(shippingAddress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipping address' });
  }
};

// Update shipping address by ID
const updateShippingAddressById = async (req, res) => {
  const shippingAddressId = parseInt(req.params.id);
  const { userId, address, subdistrict, district, province, postalCode } = req.body;
  try {
    const updatedShippingAddress = await prisma.shippingAddress.update({
      where: { id: shippingAddressId },
      data: {
        userId,
        address,
        subdistrict,
        district,
        province,
        postalCode,
      },
    });
    res.json(updatedShippingAddress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update shipping address' });
  }
};

// Delete shipping address by ID
const deleteShippingAddressById = async (req, res) => {
  const shippingAddressId = parseInt(req.params.id);
  try {
    await prisma.shippingAddress.delete({
      where: { id: shippingAddressId },
    });
    res.json({ message: 'Shipping address deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete shipping address' });
  }
};

module.exports = {
  createShippingAddress,
  getAllShippingAddresses,
  getShippingAddressById,
  updateShippingAddressById,
  deleteShippingAddressById,
};
