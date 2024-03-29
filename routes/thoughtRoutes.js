const express = require('express');
const router = express.Router();
const thoughtsController = require('../controllers/thoughtsController');

// Route to create a new thought
router.post('/', thoughtsController.createThought);

// Route to retrieve all thoughts
router.get('/', thoughtsController.getAllThoughts);

// Route to retrieve a single thought by id
router.get('/:id', thoughtsController.getThoughtById);

// Route to update a thought by id
router.put('/:id', thoughtsController.updateThought);

// Route to delete a thought by id
router.delete('/:id', thoughtsController.deleteThought);

module.exports = router;
