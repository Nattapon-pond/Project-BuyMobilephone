const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
const createUser = async (req, res) => {
  try {
    const { role,username, password, email, address, phone } = req.body;
    const user = await prisma.user.create({
      data: {
        role,
        username,
        password,
        email,
        address,
        phone
      }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { username, password, email, address, phone } = req.body;
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        password,
        email,
        address,
        phone
      }
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    await prisma.user.delete({
      where: { id: userId }
    });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
