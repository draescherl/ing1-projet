const express = require('express');
const db = require('../../connection');

const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM `types`', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;