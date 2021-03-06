const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  db.query('INSERT INTO departements SET ?', [req.body], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(201).send();
    }
  });
});

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM departements ORDER BY id', (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send(result);
    }
  });
});

// Update
router.put('/:id', (req, res) => {
  db.query('UPDATE departements SET ? WHERE id = ?', [req.body, req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send();
    }
  });
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM departements WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;