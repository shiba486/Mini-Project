const button = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weather");
const apiKey = "YOUR_API_KEY_HERE"; // OpenWeatherMap API key

button.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const temp = data.main.temp;
                    const city = data.name;
                    const description = data.weather[0].description;
                    weatherDiv.innerHTML = `Location: ${city} <br>Temperature: ${temp}°C <br>Description: ${description}`;
                })
                .catch(err => {
                    weatherDiv.textContent = "Something went wrong to fetch weather data";
                    console.error(err);
                });
        }, () => {
            weatherDiv.textContent = "Location access denied।";
        });
    } else {
        weatherDiv.textContent = " Your browser doesn’t support location ";
    }
});
