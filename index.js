const express = require('express');
const PORT =  3000;

const router = require('./router');

const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.static('public'));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});