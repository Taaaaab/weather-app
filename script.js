const form = document.getElementsByTagName('form')[0];
const input = document.querySelector('input');
const searchBtn = document.querySelector('.btn');
const display = document.querySelector('.display');

// display.textContent = weatherData.data.images.original.url;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    async function getWeather() {
    let search = document.getElementById('search').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=076885a9fd9b3c3417323cdbba5f8cbf`, {mode: 'cors'})     
    const weatherData = await response.json(); 
    console.log(weatherData);
    }
    getWeather();
})
