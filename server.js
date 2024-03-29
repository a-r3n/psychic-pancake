// Import necessary modules
const express = require('express');

// Since the connection is established upon requiring the module, 
// you don't explicitly call connectDB. Require it to ensure the connection is made.
require('./config/mongoose');

// Import the centralized routes
const routes = require('./routes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000; // Ensure you have a way to set PORT in your environment or use the default.

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the centralized route definitions
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
