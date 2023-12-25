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

    // Function to start the 15-second timer (15000)
    function startTimer() {
        setTimeout(() => {
            location.reload(); // Refresh the page after 15 seconds
        }, 1215000);
    }

    startTimer(); // Start the timer when the page is loaded

    // Event listener for the Submit button
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", function () {
        // Create cookies for filled fields
        selectedFields.forEach((fieldName) => {
            const input = document.querySelector(`[name="${fieldName.toLowerCase().replace(/\s/g, "_")}"]`);
            if (input) {
                document.cookie = `${fieldName}=${input.value}`;
            }
        });

        // Display a success modal
        showModal("Success!", "Your registration was successful!");
    });

    // Event listener for the Cancel button
    const cancelButton = document.getElementById("cancel-btn");
    cancelButton.addEventListener("click", function () {
        // Clear all filled fields
        selectedFields.forEach((fieldName) => {
            const input = document.querySelector(`[name="${fieldName.toLowerCase().replace(/\s/g, "_")}"]`);
            if (input) {
                input.value = "";
            }
        });
    });

    // Function to display a modal
    function showModal(title, text) {
        const modal = document.createElement("div");
        modal.classList.add("modal");

        const modalContent = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        `;

        modal.innerHTML = modalContent;

        document.body.appendChild(modal);

        // Close the modal when the close button is clicked
        const closeButton = modal.querySelector(".close");
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Close the modal when clicking outside the modal content
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});


// timer code

 document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code
    var formTitle = document.querySelector(".form-title");
    var milliseconds = 0;
    var seconds = 15;

    // Function to update the timer
    function updateTimer() {
      formTitle.textContent = "Time left: " + seconds + "s " + milliseconds + "ms";

      if (seconds === 0 && milliseconds === 0) {
        // Perform actions when the timer reaches 0 (e.g., refresh the page)
        location.reload();
      } else {
        if (milliseconds === 0) {
          seconds--;
          milliseconds = 1000;
        }
        milliseconds -= 100;
        setTimeout(updateTimer, 100);
      }
    }

    // Start the timer
    updateTimer();
  });