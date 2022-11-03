//const that makes the files route to the correct folder
const apiRoutes = require('./routes/apiRoutes/api');
const htmlRoutes = require('./routes/htmlRoutes/html');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);