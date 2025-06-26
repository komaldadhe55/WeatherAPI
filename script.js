// Selecting elements
const weatherIcon = document.querySelector(".weather-icon");
const cityElement = document.querySelector(".city");
const temperatureElement = document.querySelector(".temperature");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");
const descriptionElement = document.getElementById("description");

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function getWeatherData(city) {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=5ffaab9ece0f370de41044a7992ef74e`;

  const response = await fetch(weatherApi);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".Weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    cityElement.innerHTML = data.name;
    descriptionElement.innerHTML = data.weather[0].description ;
    temperatureElement.innerHTML = Math.round(data.main.temp) + " °C";
    humidityElement.innerHTML = data.main.humidity + "%";
    windSpeedElement.innerHTML = data.wind.speed + " km/h";
   

    // Handling weather icons
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "cloudy.png";
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } 
    else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "rainy.png";
    } 
    else if (data.weather[0].main == "Drizzle")  {
      weatherIcon.src = "drizzle.png";
    } 
    else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "storm.png";
    } 
    else if(data.weather[0].main == "Sunny"){
      weatherIcon.src = "suny.png";
    }
    else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "snow.png";
    } 
    else if (data.weather[0].main == "Haze" || data.weather[0].main == "Mist") {
      weatherIcon.src = "haze.png";
    }
    else {
      weatherIcon.src = "weather.png"; // fallback image if you want
    }

    document.querySelector(".Weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// When search button is clicked
searchbtn.addEventListener("click", () => {
  getWeatherData(searchbox.value);
});

// Optional: Trigger search on Enter key press
searchbox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchbtn.click();
  }
});
