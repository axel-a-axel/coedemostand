function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    var textField = document.getElementById('text-input');
    var inputValue = textField.value.trim();

    // Check if the input value is not empty
    if (inputValue !== '') {
        // Perform actual POST request with the data
        sendPostRequest(inputValue);
    } else {
        // Highlight the text input if it's empty
        highlightRedGlow(textField);
    }
}





function highlightRedGlow(element) {
    // Add red glow effect to the element for a short duration
    element.classList.add('red-glow');
    setTimeout(function () {
        element.classList.remove('red-glow');
    }, 1000); // Adjust the duration as needed
}

function sendPostRequest(data) {
    // URL for the server endpoint (replace with your actual server endpoint)
    var url = '/submit';
// Retrieve the "username" cookie value
    var usernameCookie = getCookie('username');

    // Include the "username" cookie in the request headers
    var headers = {
        'Content-Type': 'application/json',
    };

    if (usernameCookie) {
        headers['Cookie'] = 'username=' + encodeURIComponent(usernameCookie);
    }
    // Actual POST request using Fetch API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // correct:
        // body: JSON.stringify(data),
        body: JSON.stringify(document.getElementById('text-input').getAttribute('placeholder')),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response by showing a modal
        showModal(data);
    })
    .catch(error => {
        console.error('Error sending POST request:', error);
        // Handle the error as needed
    });
}

function showModal(responseText) {
    // Create a modal element
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<p>' + responseText.message + '</p>';

    // Close the modal on click anywhere outside the modal
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Append the modal to the body
    document.body.appendChild(modal);
}

function handleImageError() {
    var imageContainer = document.querySelector('.form-header');
    imageContainer.innerHTML = '<img src="/static/pic.png"><p style="color: red;">Seems that something gone wrong while  trying to load an image</p>';
    // Correct function below
    //imageContainer.innerHTML = '<img src="/static/my_awesome_cat.jpg" height="300" width="300">'
}

// Function to retrieve the value of a specific cookie
function getCookie(name) {
    var cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? decodeURIComponent(cookieValue[2]) : null;
}