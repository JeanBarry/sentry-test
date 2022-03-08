/* global validator */
const form = document.getElementById('apiForm');
const submitButton = document.getElementById('submitForm');

const sendData = (data) => {
  fetch('/api', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json());
};

const handleErrorMessages = ({ isValid, message }) => {
  const errorMessage = document.getElementById('apiForm__error-name');
  if (!isValid) {
    errorMessage.innerHTML = message;
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};
  let validInput = {
    isValid: false,
    message: '',
  };
  formData.forEach((value, key) => {
    data[key] = value;
    validInput = validator(key, value);
  });

  handleErrorMessages(validInput);

  if (validInput.isValid) {
    sendData(data);
  }
});
