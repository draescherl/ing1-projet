const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Read
router.get('/departement-to-id/:num', (req, res) => {
  db.query('SELECT id FROM departements WHERE num = ?', [req.params.num], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;