// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');

// Import the connectDB function
const connectDB = require('./config/mongoose');

// Import the centralized routes
const routes = require('./routes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure dotenv to load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the centralized route definitions
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
