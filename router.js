const express = require('express');
const router = express.Router();

router.use(express.json());
router.post('/', (req, res) => {
    console.log(req.body);
  res.send('POST request to the homepage');
});

module.exports = router;