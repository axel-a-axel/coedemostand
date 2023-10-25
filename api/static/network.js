document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its id

// Get the image and error elements by their ids
var image = document.getElementById("image");
var error = document.getElementById("error");

function fetchImage() {
  // I am so lazy developer, so I will leave the correct part of the URL in the comment
  // and the correct URL part is "/getimage"
  // hope someone will fix it later
  var url = "http://127.0.0.1:5000/some_random_url";

  // Use the fetch API to get the response
  fetch(url)
    .then(response => {
      // Check if the response is ok (status code 200)
      if (response.ok) {
        // Return the response as Blob object
        return response.blob();
      } else {
        // Throw an error with the status text
        //throw new Error(response.statusText);
        error.textContent = "Seems that something gone wrong and someone (not me) has to deal with it";
      }
    })
    .then(blob => {
      // Create a local URL for the blob object
      var imageUrl = URL.createObjectURL(blob);
      // Set the src attribute of the image element to the imageUrl
      image.src = imageUrl;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
      // Set the text content of the error element to a message
      error.textContent = "Seems that something gone wrong and someone (not me) has to deal with it";
    });
}

// Call the fetchImage function when the page loads completely
window.addEventListener("load", fetchImage);

// Get the form, input and button elements by their ids
var form = document.getElementById("form");
var dataInput = document.getElementById("data-input");
var submitButton = document.getElementById("submit-button");

// Define a function to send data to the Flask backend
function sendData(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Get the value of the input element
  var data = dataInput.value;

  // Use your Flask backend URL here
  var url = "http://127.0.0.1:5000/submit";

  // Use the fetch API to send a POST request to the Flask backend
  // Set the method, headers and body options
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  // Use the fetch API to get the response
  fetch(url, options)
    .then(response => {
      // Check if the response is ok (status code 200)
      if (response.ok) {
        // Return the response as JSON object
        return response.json();
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    })
    .then(data => {
      // Handle the data
      console.log(data);

      // Display a modal window with the data as text

      // Create a div element for the modal background
      var modalBg = document.createElement("div");
      // Set some attributes and styles for the modal background
      modalBg.id = "modal-bg";
      modalBg.style.position = "fixed";
      modalBg.style.top = "0";
      modalBg.style.left = "0";
      modalBg.style.width = "100%";
      modalBg.style.height = "100%";
      modalBg.style.backgroundColor = "rgba(0,0,0,0.5)";

      // Create a div element for the modal content
      var modalContent = document.createElement("div");
      // Set some attributes and styles for the modal content
      modalContent.id = "modal-content";
      modalContent.style.position = "absolute";
      modalContent.style.top = "50%";
      modalContent.style.left = "50%";
      modalContent.style.transform = "translate(-50%, -50%)";
      modalContent.style.backgroundColor = "#fff";
      modalContent.style.padding = "20px";

      // Create a p element for the text
      var text = document.createElement("p");
      // Set some attributes and styles for the text
      text.id = "text";
      text.textContent = data;

      // Append the text to the modal content
      modalContent.appendChild(text);

      // Append the modal content to the modal background
      modalBg.appendChild(modalContent);

      // Append the modal background to the body element
      document.body.appendChild(modalBg);

    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });

  // Clear the input value
  dataInput.value = "";
}

// Add a submit event listener to the form element
form.addEventListener("submit", sendData);

// Add a click event listener to anywhere on the page to close the modal window if it exists

window.addEventListener("click", function(event) {
  // Get the modal background element by its id if it exists
  var modalBg = document.getElementById("modal-bg");
  // Check if the modal background element exists
  if (modalBg) {
    // Check if the user clicks on the modal background element
    if (event.target == modalBg) {
      // Remove the modal background element from the body element
      document.body.removeChild(modalBg);
    }
  }
});
});
