const express = require('express');
const db = require('../../connection');

const router = express.Router();

db.query('SELECT * FROM `types`', (err, res) => {
  if (err)
    console.log(err);
  else
    console.log(res);
});

// Get
router.get('/', (req, res) => {
  res.send('types works!');
});

// Add


module.exports = router;