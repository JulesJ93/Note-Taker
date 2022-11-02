const Router = require("express").Router();
const path = require('path');

// GET Route for homepage
Router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
Router.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

module.exports = Router;