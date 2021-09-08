// Import the router object
const router = require('express').Router();

// Import handler functions module
const notesHandlerFunctions =  require("../../lib/handlerFunctions.js");

// Import notes data into an object
const { notes } = require('../../data/db.json');

// GET API route for notes
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });
  
// GET API route for a specific note
router.get('/notes/:id', (req, res) => {
const result = findById(req.params.id, notes);
if (result) {
    res.json(result);
} else {
    res.send(404);
}
});

// POST route for a note
router.post('/notes', (req, res) => {
// set id based on what the next index of the array will be
req.body.id = notes.length.toString();

if (!validateAnimal(req.body)) {
    res.status(400).send('The note is not properly formatted.');
} else {
    const note = createNewNote(req.body, animals);
    res.json(note);
}
});

// Export the router object
module.exports = router;