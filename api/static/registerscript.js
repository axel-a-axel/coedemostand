document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const submitBtn = document.getElementById('submit-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission, set cookies, etc.
        alert('Form submitted!');
    });

    cancelBtn.addEventListener('click', function () {
        // Clear all input fields
        form.reset();
    });
});


// ticker code

const titleText = 'Your Creeping Title Here';
const titleSpans = [];

for (const char of titleText) {
  const span = document.createElement('span');
  span.textContent = char;
  titleSpans.push(span);
}

const animationContainer = document.createElement('div');
animationContainer.classList.add('title-animation');

titleSpans.forEach(span => animationContainer.appendChild(span));

document.body.appendChild(animationContainer);

setInterval(() => {
  const newTitle = titleSpans.shift();
  titleSpans.push(newTitle);
  newTitle.style.transform = 'translateX(100%)';
}, 100); // adjust for desired speed
