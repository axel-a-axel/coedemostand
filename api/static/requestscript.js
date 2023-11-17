document.addEventListener("DOMContentLoaded", function(event) {

const urls = [
"https://catfact.ninja/fact",
"https://api.coindesk.com/v1/bpi/currentprice.json",
"https://www.boredapi.com/api/activity",
"https://api.agify.io?name=meelad",
"https://api.genderize.io?name=luc",
"https://api.nationalize.io?name=nathaniel",
"https://datausa.io/api/data?drilldowns=Nation&measures=Population",
"https://dog.ceo/api/breeds/image/random",
"https://api.ipify.org?format=json",
"https://official-joke-api.appspot.com/random_joke",
"http://universities.hipolabs.com/search?country=United+States",
"https://api.zippopotam.us/us/33162",
"https://jsonplaceholder.typicode.com/todos/1",
"https://random-data-api.com/api/v2/users?size=2&is_xml=true"
];

let intervalId = null;

function sendRequest() {
  const randomIndex = Math.floor(Math.random() * urls.length);
  const url = urls[randomIndex];

  const randomMethod = Math.floor(Math.random() * 5);
  let method = '';
  switch (randomMethod) {
    case 0:
      method = 'GET';
      break;
    case 1:
      method = 'POST';
      break;
    case 2:
      method = 'PUT';
      break;
    case 3:
      method = 'PATCH';
      break;
    case 4:
      method = 'OPTIONS';
      break;
    default:
      method = 'GET';
  }

  const request = new XMLHttpRequest();
  request.open(method, url);
  request.send();


}

intervalId = setInterval(sendRequest, 75);

setTimeout(() => {
    const request = new XMLHttpRequest();
    request.open('POST', '/requestsuccess');

    // Check if the "username" cookie exists and is not empty
    const usernameCookie = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith('username='));

    let username;
    if (usernameCookie) {
      username = usernameCookie.split('=')[1];
    } else {
      username = 'Anonymous user';
    }

    // Create the JSON payload
    const payload = { username };

    // Send the payload
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));


}, 10000);



});