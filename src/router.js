const express = require('express');
const apiServiceHandler = require('./services/apiService');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
  const data = { items: await apiServiceHandler.getHomeData() };
  res.render('index', { data });
});

router.post('/api', async (req, res) => {
  const response = await apiServiceHandler.post(req.body);
  res.status(response.statusCode).json({
    message: response.message,
    statusMessage: response.status,
  });
});

module.exports = router;
