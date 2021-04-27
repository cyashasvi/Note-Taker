const express = require('express');
const router = require('express').Router();
const note = require('../db/note')

router.get("/", (req, res) => {
    note.read().then((notes) => res.json(notes));
});

router.get('/notes', (req, res) => {
    note
    .allNotes()
    .then((notes) => res.json(notes));
});

router.post('/notes', (req, res) => {
    note.postNotes(req.body).then((note) => res.json(note));
})




module.exports = router;