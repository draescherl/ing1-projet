const express = require('express');

const router = express.Router();

// Create
router.post('/', (req, res) => {
  try {
    if (req.files) {
      let file = req.files.pdf;
      file.mv('./uploads/' + req.body.source + '/' + file.name);
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = router;