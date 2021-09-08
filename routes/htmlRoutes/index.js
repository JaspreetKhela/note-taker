// Import path Node.js module
const path = require('path');

// Import Express.js router module
const router = require('express').Router();

// GET API route for the index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

// GET API route for the notes.html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Export router object
module.exports = router;