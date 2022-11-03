//const that grab the files we created in routes folder
const apiRoutes = require('./routes/apiRoutes/api');
const htmlRoutes = require('./routes/htmlRoutes/html');
const express = require('express')
//the port we will be using
const PORT = 3001;

const app = express();
//making static public so css and html can access eachother
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use is opening files that redirect apis as well as html which is defined in index.js
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
const apiRoutes = require('./routes/apiRoutes/api');
const htmlRoutes = require('./routes/htmlRoutes/html');
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);