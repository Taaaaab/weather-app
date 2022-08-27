const form = document.getElementsByTagName('form')[0];
const input = document.querySelector('input');
const searchBtn = document.querySelector('.btn');
const display = document.querySelector('.display-body');
const city = document.querySelector('.display-header');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    async function getWeather() {
    let search = document.getElementById('search').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=076885a9fd9b3c3417323cdbba5f8cbf&units=imperial`, {mode: 'cors'})     
    const weatherData = await response.json(); 
    console.log(weatherData);

    const weatherObject = getWeatherObject(weatherData);
    city.textContent = weatherObject.name;
    display.innerHTML = ("Current Temp: " + weatherObject.temp + '<br/>' +
    weatherObject.description + '<br/>' +
    "High: " + weatherObject.high + '<br/>' +
    "Low: " + weatherObject.low);
    }
    getWeather();

    function getWeatherObject(weather) {
        const name = weather.name;
        const temp = weather.main.temp;
        const description = weather.weather[0].description;
        const high = weather.main.temp_max;
        const low = weather.main.temp_min;
        return {name, temp, description, high, low};
    }
});