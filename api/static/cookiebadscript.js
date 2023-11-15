document.addEventListener("DOMContentLoaded", function(event) {


const usernameCookie = document.cookie.match(/username=([^;]+)/);
const username = usernameCookie ? usernameCookie[1] : 'Anonymous';
const timestamp = new Date().toLocaleString();

document.getElementById('mainText').textContent = `${username} has passed Cookies task at ${timestamp}`;



});