// Import Node.js modules
const fs = require('fs');
const path = require('path');

// Find a note by its ID
function findNoteByID(ID, notesArray) {
    const note = notesArray.filter(note => note.id === ID);
    return note[0];
}

// Create an ID for a new note function
function createID (notesArray) {
    var largestID = 0;

    // Find the largest ID in the notes database
    for (var i = 0; i < notesArray.length; i++) {
        const currentElement = notesArray[i];

        if (currentElement.id > largestID) {
            largestID = currentElement.id;
        }
    }

    // Add 1 to the largest ID in the notes database
    return (parseInt(largestID) + 1).toString();
}

// Create a new note function
function createNewNote(body, notesArray) {
    // Create a new note
    const newNote = {"id": createID(notesArray), "title": body.title, "text": body.text};
    
    // Add the newNote to the notesArray
    notesArray.push(newNote);

    // Write the updated notesArray to the notes database
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    // Return the updated notesArray
    return notesArray;
}

// Delete a note function
function deleteNote(ID, notesArray) {
    // Finding the note with the provided ID in the notes database
    const notesObject = findNoteByID(ID, notesArray);

    // Find the index of the the notesObject in the notesArray
    const index = notesArray.indexOf(notesObject);
    
    // Remove the note from the notesArray
    if (index > -1) {
        notesArray.splice(index, 1);
    }

    // Write the updated notesArray to the notes database
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    // Return the updated notesArray
    return notesArray;
}

// Export handler functions
module.exports = {findNoteByID, createNewNote, deleteNote};