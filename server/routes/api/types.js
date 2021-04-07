const express = require('express');
const mysql = require('mysql');

const router = express.Router();


// Get
router.get('/', (req, res) => {
  res.send('types works!');
});

// Add


module.exports = router;