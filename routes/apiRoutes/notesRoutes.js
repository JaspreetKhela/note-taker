// Import the router object
const router = require('express').Router();

// Import handler functions module, which contain findNoteByID, createNewNote, and deleteNote functions
const notesHandlerFunctions =  require("../../lib/handlerFunctions.js");

// Import notes database data into an array
const notesArray = require('../../data/db.json');

// GET API route for fetching all of the notes in the notes database
router.get('/notes', (req, res) => {
    // Return the notes in the database
    res.json(notesArray);
});
  
// GET API route for fetching a specific note from the notes database
router.get('/notes/:id', (req, res) => {
    // Find the note in the note database
    const result = notesHandlerFunctions.findNoteByID(req.params.id, notesArray);

    // Return the result or an error messages if the note was not found in the notes database
    if (result) {
        res.json(result);
    } 
    else {
        res.send(404);
    }
});

// POST API route for creating a note in the notes database
router.post('/notes', (req, res) => {
    // Create a new note object
    const note = notesHandlerFunctions.createNewNote(req.body, notesArray);
    res.json(note);
});

// DELETE API route for deleting a note in the notes database
router.delete('/notes/:id', (req, res) => {
    // Delete a note
    const notes = notesHandlerFunctions.deleteNote(req.params.id, notesArray);
    res.json(notes);
});

// Export the router object
module.exports = router;