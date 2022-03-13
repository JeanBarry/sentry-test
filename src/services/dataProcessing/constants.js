const countries = require('./countries.json');

const SET_NAMES = Object.freeze({
  home: 'home',
});

const COUNTRIES = Object.freeze({
  countries: countries.map((country) => country.name),
});

module.exports = {
  SET_NAMES,
  COUNTRIES,
};
