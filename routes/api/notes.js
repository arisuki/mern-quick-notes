const express = require('express');
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes")
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/notes/
router.get('/',  notesCtrl.indexNotes)
// POST api/notes/new
router.post('/new', notesCtrl.createNote)

module.exports = router

//removed ensureLoggedIn from both functions