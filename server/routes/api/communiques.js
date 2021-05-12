const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  let query = 'INSERT INTO communiques (publi_date, title, cp_code, type, departement, theme, pdf_path, hyperlink) VALUES (?, ?, ?, (SELECT id FROM types WHERE name = ?), (SELECT id FROM departements WHERE num = ?), (SELECT id FROM themes WHERE name = ?), ?, ?)';
  db.query(
    query,
    [
      req.body.publi_date,
      req.body.title,
      req.body.cp_code,
      req.body.type,
      req.body.departement,
      req.body.theme,
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
  db.query('SELECT * FROM communiques ORDER BY id', (error, result) => {
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
  db.query('SELECT * FROM communiques WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {

      let date = (req.body.date) ? req.body.date : result[0].publi_date;
      let title = (req.body.title) ? req.body.title : result[0].title;
      let code = (req.body.code) ? req.body.code : result[0].cp_code;
      let type = (req.body.type) ? req.body.type : result[0].type;
      let departement = (req.body.departement) ? req.body.departement : result[0].departement;
      let theme = (req.body.theme) ? req.body.theme : result[0].theme;
      let pdf = (req.body.path) ? req.body.path : result[0].pdf_path;
      let link = (req.body.hyperlink) ? req.body.hyperlink : result[0].hyperlink;
      
      let query = 'UPDATE communiques SET publi_date = ?, title = ?, cp_code = ?, type = ?, departement = ?, theme = ?, pdf_path = ?, hyperlink = ? WHERE id = ?';
      db.query(query, [date, title, code, type, departement, theme, pdf, link, req.params.id], (error2, result2) => {
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
  db.query('DELETE FROM communiques WHERE id = ?', [req.params.id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;