const express = require('express');
const db = require('../../connection');

const router = express.Router();



router.get('/:table/:year/:trimestre/:dep/:query?/:id?', (req, res) => {
  let year = req.params.year;
  let trimestre = "";
  let date = (req.params.table == 2) ? "retombees.publi_date" : "publi_date";
  switch (req.params.trimestre) {
    case '1':
      trimestre = `((DATEDIFF('${year}-03-31', ${date}) >= 0) AND (DATEDIFF(${date}, '${year}-01-01') >= 0))`;
      break;
    case '2':
      trimestre = `((DATEDIFF('${year}-06-30', ${date}) >= 0) AND (DATEDIFF(${date}, '${year}-04-01') >= 0))`;
      break;
    case '3':
      trimestre = `((DATEDIFF('${year}-09-30', ${date}) >= 0) AND (DATEDIFF(${date}, '${year}-07-01') >= 0))`;
      break;
    case '4':
      trimestre = `((DATEDIFF('${year}-12-31', ${date}) >= 0) AND (DATEDIFF(${date}, '${year}-10-01') >= 0))`;
      break;
  }

  let conditions = trimestre;
  let dep = (req.params.table == 2) ? "retombees.departement" : "departement";
  conditions += ` AND ${dep} = ${req.params.dep}`;

  let id = req.params.id;
  switch (req.params.query) {
    // retombées liées à des CP
    case '1':
      conditions += ' AND communiques.cp_code = retombees.cp_code';
      break;
    // conotation
    case '2':
      conditions += ` AND conotation = ${id}`;
      break;
    // type
    case '3':
      conditions += ` AND type = ${id}`;
      break;
  }

  let table = (req.params.table == 2) ? "communiques, retombees" : req.params.table;
  let query = `SELECT COUNT(*) AS cnt FROM ${table} WHERE ${conditions}`;
  // console.log(query);

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