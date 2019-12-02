function getElement(id) {
    return document.getElementById(id);
}


var inputCity = document.getElementById('city_input');
var find_button = document.getElementById('find_button');

find_button.disabled = true;

function setButtonStatus() {
    find_button.disabled = !this.value;
}

// var city = inputCity.value;

function receiveDataByCityName() {
    var city = inputCity.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response)
            return response;

        })
        .then(function(response) {
            displayWeatherByCity(response);
            // inputCity.value = '';
        })
}

inputCity.addEventListener('input', setButtonStatus);
find_button.addEventListener('click', receiveDataByCityName);

function displayWeatherByCity(response) {
    var celcius = Math.round(parseFloat(response.main.temp) - 273.15);
    getElement("current-name-city").innerHTML = response.name;
    getElement("current-temperature-city").innerHTML = 'Temperature: ' + celcius + '&deg;C';
    getElement("current-description-city").innerHTML = 'Description: ' + response.weather[0].description;
    getElement("current-wind-speed-city").innerHTML = 'Wind speed: ' + response.wind.speed + ' m/s';
    getElement("current-pressure-city").innerHTML = 'Pressure: ' + response.main.pressure + ' hPa';
    getElement("current-humidity-city").innerHTML = 'Humidity: ' + response.main.humidity + '%';
}


/*
в случае если ваш браузер не поддерживает это API (SpeechRecognition), то мы можем
принудительно записать свойство SpeechRecognition в объект window , где спросим если оно есть записывай его, если нет
то используй webkitSpeechRecognition
*/
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// создаем экземпляр класса и записываем в переменную, чтобы изучить дальше
var recognition = new SpeechRecognition();
// свойство interimResults позволяем видеть промежуточные результаты поиска
recognition.interimResults = true;
// настраиваем язык распознавания (обратите внимание на формат)
recognition.lang = 'en-US';

// // создаем элемент параграф, чтобы записывать в него результаты поиска
// var p = document.createElement('p');
// // добираемся к DOM элементу
// var words = document.querySelector('.words');
// // помещаем параграф в родительский элемент
// words.appendChild(p);

// var inp = document.createElement('input');
// var words = document.querySelector('.find-city');
// words.appendChild(inp);

// вместе с началом работы микрофона, у нас вызывается событие result
recognition.addEventListener('result', function(event) {
    // здесь мы добираемся до нужного текста, который распознан и записываем в параграф

    inputCity.value = Array
        .from(event.results)
        .map(function(results) {
            return results[0];
        })
        .map(function(results) {
            return results.transcript;
        })
        .join('');


    // специальное свойство isFinal станет true как только сделаем паузу на мгновение
    if (event.results[0].isFinal) {
        // в этом случае у нас каждое произнесенное слово будет начинаться с новой строки
        // для этого создаем новый параграф
        // p = document.createElement('p');
        // и записываем в родительский элемент
        // words.appendChild(p);
        // inputCity.value = "lol"
        receiveDataByCityName();
    }
    console.log(inputCity.value)
});

// событие end вызывается как только замолкаем, но чтобы микрофон продолжал работать и
// не выключился, мы каждый раз запускаем его заново (recognition.start)
recognition.addEventListener('end', recognition.start);
// как только загружается страница, мы запрашиваем доступ к микрофону и он слушает нашу речь
recognition.start();