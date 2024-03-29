const mongoose = require('mongoose');
const connectDB = require('../config/mongoose'); // This import runs the connect logic but doesn't need to be called again
const User = require('../models/User');
const Thought = require('../models/Thought');
const userData = require('../seeds/userData');
const thoughtData = require('../seeds/thoughtData');

const seedDB = async () => {
  // Since connectDB in mongoose.js doesn't export a function but establishes connection,
  // we don't call it here. We rely on it having been called due to the require.
  await Promise.all([User.deleteMany({}), Thought.deleteMany({})]); // Clear the existing data
  await User.insertMany(userData); // Insert seed user data
  await Thought.insertMany(thoughtData); // Insert seed thought data
  console.log('Database seeded successfully!');
  mongoose.disconnect(); // Properly disconnect after seeding
};

seedDB().catch(err => {
  console.error('Failed to seed database:', err);
  mongoose.disconnect(); // Ensure disconnection even on error
});

