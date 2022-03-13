/* global validator */
const form = document.getElementById('apiForm');
const submitButton = document.getElementById('submitForm');

const handleErrorMessages = ({ isValid, message }) => {
  const errorMessage = document.getElementById('apiForm__error-name');
  if (!isValid) {
    errorMessage.innerHTML = message;
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
};

const sendData = async (data) => {
  try {
    let response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const { status } = response;
    response = await response.json();
    if (status !== 201) {
      handleErrorMessages({ isValid: false, message: response.message });
    } else {
      location.reload(); // eslint-disable-line
    }
  } catch (error) {
    console.log(error); // eslint-disable-line
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
