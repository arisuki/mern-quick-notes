const Note = require('../../models/note');

module.exports= {
    createNote,
    indexNotes
}

async function indexNotes(req, res){
const notes = await Note.find({}) // req.user._id as params
res.json(notes)
}

async function createNote(req, res){
    const note = await Note.create(req.body)
    res.json(note)
}