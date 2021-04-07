const express = require('express');
const db = require('../../connection');

const router = express.Router();

// temp :
const themes = [
  "Partenariat",
  "Sécurité",
  "Transition Ecologique",
  "RH",
  "Crise Climatique", // The company wants these as one, check subject again later
  "Crise RH",
  "Coupure",
  "Linky",
  "RSE",
];

// Get
router.get('/', (req, res) => {
  res.send(themes);
});

// Add


module.exports = router;