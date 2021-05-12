const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM conotations ORDER BY id', (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;