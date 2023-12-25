function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var inputFields = document.querySelectorAll("input");
  var formData = {};

  inputFields.forEach(function (field) {
    formData[field.name] = field.value;

    // Simulate setting cookies with form data
    document.cookie = `${field.name}=${field.value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  });
   stopTimer = true;
  // Display success modal (commented out, you can add the code later)
  // displaySuccessModal();

  // Stop the timer (you can insert your timer stopping code here)
  //clearInterval(timerInterval);
}

// Add an event listener to the form


function handleCancel() {
  // Clear all filled fields
  var formFields = document.querySelectorAll("input");
  formFields.forEach(function (field) {
    if (field.type === "checkbox" || field.type === "radio") {
      field.checked = false;
    } else {
      field.value = "";
    }
  });
}

var stopTimer = false;

document.addEventListener("DOMContentLoaded", function () {
//document.getElementById("submit-btn").addEventListener("click", handleSubmit);
document.getElementById("cancel-btn").addEventListener("click", handleCancel);
document.getElementById("signup-form").addEventListener("submit", handleSubmit);
  });
document.addEventListener("DOMContentLoaded", function () {
    // List of field names
    const fieldNames = [
        "Your 14th Name",
        "Your favorite tabletop game",
        "Your favorite meal",
        "Your favorite soup",
        "Your favorite soap",
        "Is it okay to add random questions to the registration form?",
        "What will we do with a drunken sailor early in the morning?",
        "What are you thinking about rn?",
        "Would you sign up if this site was a worm?",
        "Your favorite question",
        "If you were a kitten, which one would you be?",
        "Country you are NOT currently in",
        "Your favorite Santa's deer",
        "Are you on Facebook? Why?",
        "Which part of cat video do you like most?",
        "Are you going to pass this task?",
        "Just a placeholder",
        "More than a placeholder",
        "Who was in Paris?",
        "To be or not to be?",
        "Beep boop boop beep bzzzt",
        "Preferred superhero sidekick",
        "Signature dance move",
        "Do pineapples belong on pizza?",
        "Your secret pirate name",
        "Song you choose for karaoke?",
        "Despasito or Gangnam style?",
        "JSON or XML",
        "Current time in Alaska"
    ];

    // Function to shuffle array elements randomly
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Select 5-15 random fields from the list
    shuffleArray(fieldNames);
    const selectedFields = fieldNames.slice(0, Math.floor(Math.random() * 11) + 7);

    // Add selected fields to the form
    const form = document.getElementById("inputs-container");
    selectedFields.forEach((fieldName) => {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("form-field");
        input.name = fieldName.toLowerCase().replace(/\s/g, "_"); // Convert field name to lowercase and replace spaces with underscores
        input.placeholder = fieldName;
        input.required = true;



        const div = document.createElement("div");
        div.classList.add("form-group");

        div.appendChild(input);

        form.appendChild(div);
    });





});


// timer code

 document.addEventListener("DOMContentLoaded", function () {

    var formTitle = document.querySelector(".form-title");
    var milliseconds = 0;
    var seconds = 15;

    // Function to update the timer
    function updateTimer() {
      formTitle.textContent = "Time left: " + seconds + "s " + milliseconds + "ms";

      if (seconds === 0 && milliseconds === 0) {
        // Perform actions when the timer reaches 0 (e.g., refresh the page)
        if (!stopTimer) {
        // If the timer wasn't stopped due to form submission, refresh the page

        location.reload();
      }
       }
       else {
        if (milliseconds === 0) {
          seconds--;
          milliseconds = 1000;
        }
        milliseconds -= 100;
        setTimeout(updateTimer, 100);
      }
    }


    updateTimer();
  });