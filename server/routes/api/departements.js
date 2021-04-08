const express = require('express');
const db = require('../../connection');

const router = express.Router();

// temp :
const departements = [64, 65, 40].sort();

router.get('/', (req, res) => {
  db.query('SELECT * FROM `departements`', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});


module.exports = router;