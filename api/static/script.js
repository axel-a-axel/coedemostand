document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its id
  const button = document.getElementById("click-me");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Show an alert when the button is clicked
    document.getElementById("message").innerHTML = "Clicked";
    setTimeout(() => {
        document.getElementById("message").innerHTML = "I forgot that button was clicked...";
    }, 2000);
  });
});