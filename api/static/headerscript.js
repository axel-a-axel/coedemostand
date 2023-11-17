document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its id

document.getElementById("headerbutton1").addEventListener("click", function() {
  window.location.href = "/#";
});

document.getElementById("headerbutton2").addEventListener("click", function() {
  window.location.href = "/#";
});

document.getElementById("headerbutton3").addEventListener("click", function() {
  window.location.href = "/#";
});




// Get the current tab title
const originalTitle = document.title;

// Get the list of tab titles
const tabTitles = ['🐭 🐭 🐭', 'Digital rats', 'are eating', 'my source code'];

// Get the current tab title index
let currentTitleIndex = 0;

// Change the tab title every 3 seconds when the tab is inactive
setInterval(() => {
  if (!document.hasFocus()) {
    // Get the next tab title
    const nextTitleIndex = (currentTitleIndex + 1) % tabTitles.length;

    // Change the tab title
    document.title = tabTitles[nextTitleIndex];

    // Update the current tab title index
    currentTitleIndex = nextTitleIndex;
  }
}, 375);

// Restore the original tab title when the tab is active again
window.addEventListener('focus', () => {
  document.title = originalTitle;
});


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.innerHTML = "<h1>No mobile devices allowed</h1>";
}
window.onresize = function() {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) {
        document.body.innerHTML = "<h1>No mobile devices allowed</h1>";
    }
}




// this is final });, ensure it is not broken by new code
});