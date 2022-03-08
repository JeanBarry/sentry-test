const express = require('express');
const formDataHandler = require('./formDataHandler');

const router = express.Router();

router.use(express.json());
router.post('/', (req, res) => {
  formDataHandler(req.body);
  res.json({
    message: 'response',
  });
});

module.exports = router;
