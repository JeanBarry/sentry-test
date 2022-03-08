const express = require('express');

const router = express.Router();

router.use(express.json());
router.post('/', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'response',
  });
});

module.exports = router;
