const apiKey = '591d936e3358840eabc14b9ce8b0c2de'; 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            weatherDisplay.innerHTML = '<p>City not found. Please try again.</p>';
        }
    } catch (error) {
        weatherDisplay.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
}

function displayWeather(data) {
    weatherDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
