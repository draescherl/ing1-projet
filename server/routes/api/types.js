const express = require('express');
const db = require('../../connection');

const router = express.Router();


// Get
router.get('/', (req, res) => {
  res.send('types works!');
});

// Add


module.exports = router;