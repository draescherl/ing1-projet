const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
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
        res.status(400).send(error.code);
      } else {
        res.status(201).send();
      }
    });
});

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM retombees ORDER BY id', (error, result) => {
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
  db.query('SELECT * FROM retombees WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {

      let date = (req.body.date) ? req.body.date : result[0].publi_date;
      let title = (req.body.title) ? req.body.title : result[0].title;
      let code = (req.body.code) ? req.body.code : result[0].cp_code;
      let type = (req.body.type) ? req.body.type : result[0].type;
      let departement = (req.body.departement) ? req.body.departement : result[0].departement;
      let source = (req.body.source) ? req.body.source : result[0].source;
      let theme = (req.body.theme) ? req.body.theme : result[0].theme;
      let conotation = (req.body.conotation) ? req.body.conotation : result[0].conotation;
      // let pdf = (req.body.path) ? req.body.path : result[0].pdf_path;
      let link = (req.body.hyperlink) ? req.body.hyperlink : result[0].hyperlink;
      
      let query = 'UPDATE retombees SET publi_date = ?, title = ?, cp_code = ?, type = ?, departement = ?, source = ?, theme = ?, conotation = ?, hyperlink = ? WHERE id = ?';
      db.query(query, [date, title, code, type, departement, source, theme, conotation, link, req.params.id], (error2, result2) => {
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
  db.query('DELETE FROM retombees WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;