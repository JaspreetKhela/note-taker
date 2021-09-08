// Import the router object
const router = require('express').Router();

// Import the notesRoutes API routes
const notesRoutes = require('../apiRoutes/notesRoutes');

// Middleware
router.use(notesRoutes);

// Export the router object
module.exports = router;