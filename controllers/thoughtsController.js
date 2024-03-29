const Thought = require('../models/Thought');

const thoughtsController = {
    // Create a new Thought
    createThought: async (req, res) => {
        try {
            const newThought = await Thought.create(req.body);
            res.status(201).json(newThought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Get all Thoughts
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find({});
            res.status(200).json(thoughts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get a single Thought by id
    getThoughtById: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Update a Thought by id
    updateThought: async (req, res) => {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(updatedThought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // React to a thought
    addReaction: async (req, res) => {
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } },
                { new: true, runValidators: true }
            );
            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json(updatedThought);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Delete a Thought
    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) {
                return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(200).json({ message: 'Thought deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};

module.exports = thoughtsController;
