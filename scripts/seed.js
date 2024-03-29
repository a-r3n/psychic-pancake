const mongoose = require('mongoose');
const connectDB = require('../config/mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const userData = require('../seeds/userData');
const thoughtData = require('../seeds/thoughtData');

const seedDB = async () => {
  await connectDB(); // Connect to the database
  await Promise.all([User.deleteMany({}), Thought.deleteMany({})]); // Clear the existing data
  await User.insertMany(userData); // Insert seed user data
  await Thought.insertMany(thoughtData); // Insert seed thought data
  console.log('Database seeded successfully!');
  process.exit(0); // Exit the script
};

seedDB().catch(err => {
  console.error('Failed to seed database:', err);
  process.exit(1);
});
