const express = require('express');
const db = require('../../connection');

const router = express.Router();
// db.query()


// Get
router.get('/', (req, res) => {
  res.send('departements works!');
});

// Add


module.exports = router;