const Router = require("express").Router();
const fs = require('fs');
const util = require('util');
// Helper method for generating unique ids
const uuid = require("../../db.json");


Router.get("/api/notes", (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new UX/UI tip
  Router.post('../../db.json', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuid(),
      };
  
      readAndAppend(newTip, './db/db.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });