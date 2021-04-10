const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  console.log(req.body);
  let query = 'INSERT INTO retombees (publi_date, title, cp_code, type, departement, source, theme, conotation, pdf_path, hyperlink) VALUES (?, ?, ?, (SELECT id FROM types WHERE name = ?), (SELECT id FROM departements WHERE num = ?), (SELECT id FROM sources WHERE name = ? AND type = (SELECT id FROM types WHERE name = ?)), (SELECT id FROM themes WHERE name = ?), (SELECT id FROM conotations WHERE name = ?), ?, ?)';
  db.query(
    query,
    [
      req.body.publi_date,
      req.body.title,
      req.body.cp_code,
      req.body.type,
      req.body.departement,
      req.body.source,
      req.body.type,
      req.body.theme,
      req.body.conotation,
      req.body.pdf_path,
      req.body.hyperlink
    ],
    (error, result) => {
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