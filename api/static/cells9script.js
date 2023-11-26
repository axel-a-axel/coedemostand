document.addEventListener("DOMContentLoaded", function() {
    // Top Left Cell with Image
    const image = document.getElementById("image");

    // Change image on hover
    image.addEventListener("mouseenter", function() {
        image.src = "https://www.a1qa.com/wp-content/uploads/2020/09/img-sheme-continuous-testing.svg";
    });

    image.addEventListener("mouseleave", function() {
        image.src = "https://www.a1qa.com/wp-content/uploads/2020/11/img-cooperating.svg";
    });

    // Top Center Cell with Joke Button
    const jokeButton = document.getElementById("jokeButton");

    // Change button text to "???" for 2 seconds on click
    jokeButton.addEventListener("click", function() {
        jokeButton.innerHTML = "???";
        setTimeout(function() {
            jokeButton.innerHTML = "Get Joke";
        }, 2000);
    });

    // Execute GET request to get joke data on drag and drop
    jokeButton.addEventListener("dragover", function(event) {
        event.preventDefault();
        jokeButton.classList.add("drag-over");
    });

    jokeButton.addEventListener("dragleave", function() {
        jokeButton.classList.remove("drag-over");
    });

    jokeButton.addEventListener("drop", function(event) {
        event.preventDefault();
        jokeButton.classList.remove("drag-over");

        // Hide the button and show the received content
        jokeButton.style.display = "none";
        const jokeContent = document.createElement("div");
        jokeContent.className = "cell-content show";
        jokeContent.innerHTML = "Loading...";

        // Execute GET request to get joke data
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                // Replace content with joke data
                jokeContent.innerHTML = `<p id="setup">${data.setup}</p><p id="punchline">${data.punchline}</p>`;
            })
            .catch(error => {
                console.error("Error fetching joke:", error);
                jokeContent.innerHTML = "Error fetching joke.";
            })
            .finally(() => {
                // Set a timer to revert the button after 5 seconds
                setTimeout(function() {
                    jokeButton.style.display = "block";
                    jokeContent.innerHTML = "";
                }, 5000);
            });

        document.getElementById("top-center").appendChild(jokeContent);
    });
});

// First function ends.

document.addEventListener("DOMContentLoaded", function() {
    // Middle Center Cell with Thinking Text
    const thinkingText = document.querySelector(".thinkingText");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    let keysList = []; // List to store keys
    let timeoutId; // To store timeout ID for resetting the text

    // Default text in the central cell
    const defaultText = "Press it, user, one more time";

    // Function to update thinking text
    function updateThinkingText() {
        line1.textContent = defaultText;
        line2.textContent = keysList.join(' ');
    }

    // Function to reset thinking text to default after a delay
    function resetThinkingText() {
        timeoutId = setTimeout(function() {
            keysList.shift(); // Remove the first element (oldest key)
            updateThinkingText();
            resetThinkingText(); // Call recursively for the next key
        }, 500);
    }

    // Initial setup
    updateThinkingText();
    resetThinkingText();

    // Listen for key press events
    document.addEventListener("keydown", function(event) {
        // Clear the timeout to prevent resetting the text
        clearTimeout(timeoutId);

        // Add the pressed key to the list
        keysList.push(event.key);

        // Update the thinking text
        updateThinkingText();

        // Reset the thinking text after a delay
        resetThinkingText();
    });
});




