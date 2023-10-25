document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its id

const button = document.getElementById("myButton");
const clickedText = document.getElementById("clicked-text");

button.addEventListener("click", () => {
    clickedText.innerHTML = "Great, this task is completed!";
    setTimeout(() => {
        clickedText.innerHTML = "";
    }, 3000);
});
});
