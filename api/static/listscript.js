document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its id

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
    window.open("/1", "_blank")
});

button2.addEventListener("click", () => {
    window.open("/2", "_blank")
});

button3.addEventListener("click", () => {
    window.open("/cookie", "_blank")
});


button4.addEventListener("click", () => {
    window.open("/requestoverload", "_blank")
});

button5.addEventListener("click", () => {
    window.open("/landing", "_blank")
});

});
