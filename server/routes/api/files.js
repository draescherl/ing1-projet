const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  let file = req.files.file;
  file.mv('./uploads/' + file.name);
});

module.exports = router;