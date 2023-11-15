document.addEventListener("DOMContentLoaded", function() {

const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const modal = document.querySelector('.modal');

const createCookie = () => {
  const name = nameInput.value;
  document.cookie = `username=${name}; expires=2; path=/`;
  modal.style.display = 'none';
};

submitButton.addEventListener('click', createCookie);

});