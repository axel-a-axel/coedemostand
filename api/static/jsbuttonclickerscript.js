document.addEventListener("DOMContentLoaded", function(event) {


const elusiveButton = document.getElementById('elusiveButton');
const modal = document.getElementById('modal');

// Move the button to a random position on the page
function moveButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randomX = Math.floor(Math.random() * (windowWidth - elusiveButton.offsetWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - elusiveButton.offsetHeight));

  elusiveButton.style.top = `${randomY}px`;
  elusiveButton.style.left = `${randomX}px`;
}

// Move the button away from the cursor when hovered over
elusiveButton.addEventListener('mousemove', () => {
  moveButton();
});

// Show the modal when the button is clicked
elusiveButton.addEventListener('click', () => {
  modal.style.display = 'block';
//  setTimeout(() => {
//    modal.style.display = 'none';
//  }, 2000);
});

// Initialize the button position
moveButton();


const usernameCookie = document.cookie.match(/username=([^;]+)/);
const username = usernameCookie ? usernameCookie[1] : 'Anonymous';
const timestamp = new Date().toLocaleString();

document.getElementById('passedTask').textContent = `${username} has passed Cookies task at ${timestamp}`;


// solution
// might be removed later
//
// const elusiveButton = document.getElementById('elusiveButton');
// elusiveButton.click();


});