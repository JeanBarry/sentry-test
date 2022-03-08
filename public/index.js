const form = document.getElementById('apiForm');
const submitButton = document.getElementById('submitForm');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });

    fetch('/api', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
});

