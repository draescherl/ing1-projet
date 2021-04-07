const express = require('express');
const mysql = require('mysql');

const router = express.Router();


// Get
router.get('/', (req, res) => {
  res.send('departements works!');
});

// Add


module.exports = router;