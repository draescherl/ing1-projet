const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM sources WHERE type = ? AND departement = ?', [req.query.type_id, req.query.departement_id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;