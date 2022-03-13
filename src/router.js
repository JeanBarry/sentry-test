const express = require('express');
const apiServiceHandler = require('./services/apiService');

const router = express.Router();

const data = { items: [] };

router.use(express.json());

router.get('/', (req, res) => {
  res.render('index', { data });
});

router.post('/api', (req, res) => {
  apiServiceHandler(req.body);
  res.json({
    message: 'response',
  });
});

module.exports = router;
