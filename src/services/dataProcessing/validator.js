const validator = require('validator');
const { COUNTRIES: { countries } } = require('./constants');

const isPrimeNumber = (inputData) => {
  if (validator.isInt(inputData)) {
    const number = parseInt(inputData, 10);
    if (number > 1) {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
};

const isCountry = (inputData) => {
  const country = inputData.toLowerCase();
  return countries.includes(country);
};

const validateInput = (inputData) => {
  let sanitizedInput = validator.escape(inputData);
  if (!validator.isEmpty(sanitizedInput)) {
    const validInput = validator.isEmail(sanitizedInput) || isPrimeNumber(sanitizedInput) || isCountry(sanitizedInput); // eslint-disable-line max-len
    if (validInput) {
      if (typeof sanitizedInput === 'string') {
        sanitizedInput = sanitizedInput.trim().toLowerCase();
      }
      return {
        valid: true,
        input: sanitizedInput,
      };
    }
  }
  return {
    valid: false,
    input: sanitizedInput,
  };
};

module.exports = {
  validateInput,
};
