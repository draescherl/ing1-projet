const express = require('express');
const db = require('../../connection');

const router = express.Router();



router.get('/:table/:year/:month/:dep/:query?/:id?/:id2?', (req, res) => {
  let dep = (req.params.table == 2) ? "retombees.departement" : "departement";
  let year = req.params.year;
  let date = (req.params.table == 2) ? "retombees.publi_date" : "publi_date";
  let month = req.params.month;
  let table = (req.params.table == 2) ? "communiques, retombees" : req.params.table;
  let timeframe = `((DATEDIFF('${year}-${month}-31', ${date}) >= 0) AND (DATEDIFF(${date}, '${year}-${month}-01') >= 0))`;

  let conditions = timeframe;
  conditions += ` AND ${dep} = ${req.params.dep}`;

  let id = req.params.id;
  let id2 = req.params.id2;
  switch (req.params.query) {
    // tonalité des médias
    case '1':
      conditions += ` AND conotation = ${id}`;
      break;

    // supports
    case '2':
      conditions += ` AND type = ${id}`;
      break;

    // retombées liées aux CP
    case '3':
      conditions += ` AND communiques.cp_code = retombees.cp_code`;
      break;

    // nbre de retombées par thème
    case '4':
      conditions += ` AND theme = ${id}`;
      break;

    // tonalité par thématique
    case '5':
      conditions += ` AND conotation = ${id} AND theme = ${id2}`;
      break;
  }

  let query = `SELECT COUNT(*) AS cnt FROM ${table} WHERE ${conditions}`;
  // if (req.params.query == 5) {
  //   console.log(query + '\n');
  // }

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