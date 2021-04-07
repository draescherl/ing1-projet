const express = require('express');
const db = require('../../connection');

const router = express.Router();

// temp :
const departements = [64, 65, 40].sort();


// Get
router.get('/', (req, res) => {
  res.send(departements);
});

// Add


module.exports = router;