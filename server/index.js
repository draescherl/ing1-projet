const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware :
app.use(bodyParser.json());
app.use(cors());

// Routes :
const types = require('./routes/api/types');
const departements = require('./routes/api/departements');
const sources = require('./routes/api/sources');
const themes = require('./routes/api/themes');
app.use('/api/types', types);
app.use('/api/departements', departements);
app.use('/api/sources', sources);
app.use('/api/themes', themes);

// Handle production :
if (process.env.NODE_ENV == 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public'));

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});