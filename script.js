const input = document.querySelector('input');
const searchBtn = document.querySelector('.btn');
const display = document.querySelector('.display');

async function getWeather() {
    const response = await fetch('', {mode: 'cors'})     
    const weatherData = await response.json(); 
    display.textContent = weatherData.data.images.original.url;
}
getWeather();