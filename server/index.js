const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();


// Middleware :
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({
  createParentPath: true
}));


// Routes :
const types = require('./routes/api/types');
const departements = require('./routes/api/departements');
const sources = require('./routes/api/sources');
const themes = require('./routes/api/themes');
const retombees = require('./routes/api/retombees');
const communiques = require('./routes/api/communiques');
const files = require('./routes/api/files');
const conotations = require('./routes/api/conotations');
const dates = require('./routes/api/dates');
const bilanDR = require('./routes/api/bilanDR');
const bilanDep = require('./routes/api/bilanDep');
const bilanMonth = require('./routes/api/bilanMonth');
const utils = require('./routes/api/utils');

app.use('/api/types', types);
app.use('/api/departements', departements);
app.use('/api/sources', sources);
app.use('/api/themes', themes);
app.use('/api/retombees', retombees);
app.use('/api/communiques', communiques);
app.use('/api/files', files);
app.use('/api/conotations', conotations);
app.use('/api/dates', dates);
app.use('/api/bilandr', bilanDR);
app.use('/api/bilandep', bilanDep);
app.use('/api/bilanmonth', bilanMonth);
app.use('/api/utils', utils);


// Handle production :
if (process.env.NODE_ENV == 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public'));

  // Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
  });
}

// Start app :
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
});