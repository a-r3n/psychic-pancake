const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/', userController.createUser);

// Route to retrieve all users
router.get('/', userController.getAllUsers);

// Route to retrieve a single user by id
router.get('/:id', userController.getUserById);

// Route to update a user by id
router.put('/:id', userController.updateUser);

// Route to delete a user by id
router.delete('/:id', userController.deleteUser);

module.exports = router;
