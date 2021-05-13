const express = require('express');
const db = require('../../connection');

const router = express.Router();


// Read
router.get('/:type', (req, res) => {
  let type = (req.params.type == 'min') ? 'MIN' : 'MAX';
  let query = `SELECT ${type}(publi_date) AS date FROM retombees`;

  db.query(query, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error.code);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;