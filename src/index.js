const path = require('path');
const express = require('express');
require('dotenv').config();
const router = require('./router');

const PORT = 3000;
const app = express();

const App = () => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './views'));

  app.use(express.static('public'));
  app.use('/', router);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = App;
