// Import path Node.js module
const path = require('path');

// Import Express.js router module
const router = require('express').Router();

// Route for the index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

// Route for the notes.html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Export router object
module.exports = router;