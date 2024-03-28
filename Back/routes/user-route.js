const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");

// Create a new user
router.post("/user", UserController.createUser);

// Get all users
router.get("/user", UserController.getAllUsers);

// Get user by ID
router.get("/user/:id", UserController.getUserById);

// Update user by ID
router.put("/user/:id", UserController.updateUserById);

// Delete user by ID
router.delete("/user/:id", UserController.deleteUserById);

module.exports = router;
