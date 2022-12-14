const router = require("express").Router();
const { json } = require("express");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')
// Helper method for generating unique ids
const db = require("../db/db.json");



//API request
router.get("/notes", function (req, res) {
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data))
    res.json(JSON.parse(data));
    });
});

// API POST request
router.post("/notes", (req, res) => {
    let allNotes = [];
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    }
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
        if (err) throw err;
        allNotes = JSON.parse(data);
        allNotes.push(newNote);
        fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(allNotes), "utf-8", (err) => {
            if (err) throw err;
            console.log("The note has been saved.")
            res.end();
        })
    })
    console.log(newNote)
  });
  module.exports = router;
  