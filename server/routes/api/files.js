const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  console.log(req);
  // let test = req.files.test;
  // test.mv('./uploads/' + test.name);
});

module.exports = router;