// Import Exprees.js module
const express = require('express');

// Choose a port
const PORT = process.env.PORT || 3001;

// Create an instance of the Express.js app
const app = express();

// Import routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});