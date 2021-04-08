const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  db.query('INSERT INTO themes SET ?', [req.body], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(201).send();
    }
  });
});

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM themes', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// Update
router.put('/:id', (req, res) => {
  db.query('UPDATE themes SET ? WHERE id = ?', [req.body, req.params.id], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send();
    }
  });
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM themes WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;