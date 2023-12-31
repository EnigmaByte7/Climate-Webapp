
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const city = document.getElementById('city').value;
            const apiKey = 'd2f83ba938e9f6cb787ac12e31709d38';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            let rain =0;
            let snow=0;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.rain){
                        rain=data.rain['1h'];
                    }
                    else if (data.snow){
                        snow=data.snow['1h'];
                    }
                    const weatherInfo = {
                        city: data.name,
                        temperature: data.main.temp,
                        humidity:data.main.humidity,
                        description: data.weather[0].description,
                        wind:data.wind.speed,
                        icon:data.weather[0].icon,
                        main:data.weather[0].main,
                        lat:data.coord.lat,
                        lon:data.coord.lon
                    };
            const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${encodeURIComponent(weatherInfo.lat)}&lon=${encodeURIComponent(weatherInfo.lon)}&appid=${apiKey}`;
            fetch(aqiUrl)
                    .then(response => response.json())
                    .then(data =>{
                        const aqidata = {
                            aqi:data.list[0].main.aqi
                        };
                    window.location.href = `weather.html?city=${encodeURIComponent(weatherInfo.city)}&temperature=${encodeURIComponent(weatherInfo.temperature)}&description=${encodeURIComponent(weatherInfo.description)}&aqi=${encodeURIComponent(aqidata.aqi)}&speed=${encodeURIComponent(weatherInfo.wind)}&rain=${encodeURIComponent(rain)}&snow=${encodeURIComponent(snow)}&ikey=${encodeURIComponent(weatherInfo.icon)}&humidity=${encodeURIComponent(weatherInfo.humidity)}&main=${encodeURIComponent(weatherInfo.main)}`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        })
    });
})
