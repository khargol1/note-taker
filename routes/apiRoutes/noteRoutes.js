const router = require("express").Router();
const  notes  = require('../../db/db.json');
const {createNote,
    deleteNote,
 } = require('../../lib/notes');

router.get("/notes", (req,res) => {
    let results = notes;

    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const newList = deleteNote(id, notes);
    res.json(newList);
    
});

module.exports = router;