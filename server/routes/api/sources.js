const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM sources WHERE type = ? AND departement = ?', [req.query.type_id, req.query.departement_id], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;