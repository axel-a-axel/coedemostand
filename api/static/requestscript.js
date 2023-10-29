document.addEventListener("DOMContentLoaded", function(event) {

const urls = [
  "/donotrequestthispagepls",
  "qwerty/asdfg/zxcvb",
  "thispagedefinitelyexists",
  "anotheronerequeststhedust",
  "cats/cats/cats/dogs/cats",
];

function getRandomUrl() {
  return urls[Math.floor(Math.random() * urls.length)];
}

// Создаём функцию для выполнения GET запроса
function getRequest(url) {
  // Выполняем запрос
  const response = fetch(url);

  // Обрабатываем ответ

}

// Создаём переменную для отслеживания количества запросов
let count = 0;

// Создаём таймер для выполнения GET запроса каждые N секунд
const interval = setInterval(() => {
  // Получаем случайный URL
  const url = getRandomUrl();

  // Выполняем GET запрос на случайный URL
  getRequest(url);

  // Увеличиваем счётчик запросов
  count++;

  // Если счётчик достиг 100,
  if (count === 250) {
    // Выполняем ajax запрос на URL "/success"
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/requestsuccess");
    xhr.send();
  }
}, 50);



});