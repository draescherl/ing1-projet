const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  db.query('INSERT INTO retombees SET ?', [req.body], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(201).send();
    }
  });
});

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM retombees', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
});

// Update
router.put('/:id', (req, res) => {
  db.query('UPDATE retombees SET ? WHERE id = ?', [req.body, req.params.id], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send();
    }
  });
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM retombees WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;