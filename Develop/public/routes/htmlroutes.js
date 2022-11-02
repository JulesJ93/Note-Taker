const Router = require("express").Router();
const path = require('path');

// GET Route for homepage
module.exports = (router) => {
Router.get("notes", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for index.html page
Router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

};