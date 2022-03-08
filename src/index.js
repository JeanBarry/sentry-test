const path = require('path');
const express = require('express');
const Sentry = require('@sentry/node');
require('dotenv').config();
const router = require('./router');

const PORT = 3000;
const { SENTRY_DNS } = process.env;
const app = express();

const App = () => {
  console.log(SENTRY_DNS);
  Sentry.init({
    dsn: SENTRY_DNS,
    tracesSampleRate: 1.0,
  });

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './views'));

  const data = { items: [] };

  app.get('/', (req, res) => {
    res.render('index', { data });
  });
  app.use(express.static('public'));

  app.use('/api', router);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = App;
