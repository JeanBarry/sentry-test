const express = require('express');

const app = express();
const router = require('./router');

const PORT = 3000;

app.set('view engine', 'ejs');

const data = { items: [] };

app.get('/', (req, res) => {
  res.render('index', { data });
});
app.use(express.static('public'));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
