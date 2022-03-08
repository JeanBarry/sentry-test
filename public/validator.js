const validationRules = {
  name: {
    required: true,
    length: {
      min: 1,
      max: 28,
    },
  },
};

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "validator" }] */
const validator = (field, value) => {
  const rule = validationRules[field];
  if (!rule) {
    return {
      isValid: true,
      message: '',
    };
  }
  if (rule.required && !value) {
    return {
      isValid: false,
      message: 'This field is required',
    };
  }
  if (rule.length) {
    const { min, max } = rule.length;
    if (value.length < min || value.length > max) {
      return {
        isValid: false,
        message: `This field must be between ${min} and ${max} characters`,
      };
    }
  }
  return {
    isValid: true,
    message: '',
  };
};
