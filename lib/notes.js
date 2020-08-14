const fs = require('fs');
const path = require('path');


function createNote(body, notes){
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes, null, 2)
    );
    return newNote;
}

function deleteNote(body, notes){
    for(let i = 0; i < notes.length; i++){
        if(body === notes[i].id){
            console.log("found the deletion", notes[i]);

            notes.splice(body, 1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify(notes, null, 2)
            );
            return(notes);
        }
    }
    return;
}

module.exports = {
    createNote,
    deleteNote,
};