const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  let query = 'INSERT INTO sources (name, type, departement) VALUES (?, ?, ?)';
  db.query(query, [req.body.name, req.body.type, req.body.departement], (error, result) => {
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
  let query = (req.query.type_id && req.query.departement_id) ? 'SELECT * FROM sources WHERE type = ? AND departement = ?' : 'SELECT * FROM sources';
  query += ' ORDER BY id';
  db.query(query, [req.query.type_id, req.query.departement_id], (error, result) => {
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
  db.query('SELECT * FROM sources WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {

      let name = (req.body.name) ? req.body.name : result[0].name;
      let type = (req.body.type) ? req.body.type : result[0].type;
      let departement = (req.body.departement) ? req.body.departement : result[0].departement;
      
      db.query('UPDATE sources SET name = ?, type = ?, departement = ? WHERE id = ?', [name, type, departement, req.params.id], (error2, result2) => {
        if (error2) {
          console.log(error2);
          res.status(400).send(error2.code);
        } else {
          res.status(200).send();
        }
      });
    }
  });
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM sources WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;