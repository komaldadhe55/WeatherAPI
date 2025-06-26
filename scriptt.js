//let input = document.getElementById('cityName');
//let searchbtn=document.getElementById('searchbtn');
//let search = document.querySelector(".search");
//let citySearch = document.querySelector(".Weather");
//const weatherApi = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=5ffaab9ece0f370de41044a7992ef74e`;

let weatherIcon=document.querySelector('.weather-icon');
let cityElement = document.querySelector(".city");
let descriptionElement=document.querySelector('.description');
let temperatureElement=document.querySelector('.temperature');
let humidityElement=document.getElementById('humidity');
let windSpeedElement=document.getElementById('wind-speed');

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function getWeatherData(city) {

    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=5ffaab9ece0f370de41044a7992ef74e`;

    const response = await fetch(weatherApi);

    if(response.status == 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".Weather").style.display="none";
    } 
    else{
    const data = await response.json();
    console.log(data);

    cityElement.innerHTML = data.name ;
    temperatureElement.innerHTML = Math.round(data.main.temp) +" °C " ;
    descriptionElement.innerHTML = data.weather[0].description  ;
    humidityElement.innerHTML = data.main.humidity +"%" ;
    windSpeedElement.innerHTML = data.wind.speed +"km/h";
     
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "Images/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "Images/clear.png";
    }
    else if(data.weather[0].main == "Rainy"){
      weatherIcon.src = "Images/rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "Images/drizzle.png";
    }
    else if(data.weather[0].main == "ThunderStorm"){
      weatherIcon.src = "Images/storm.png";
    }
    else if(data.weather[0].main == "Sunny"){
      weatherIcon.src = "Images/suny.png";
    }
    else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "Images/snow.png";
    }
    else if(data.weather[0].main == "Haze"){
      weatherIcon.src = "Images/haze.png";
    }
    else {
      weatherIcon.src = "Images/weather.png"; 
    }

      document.querySelector(".Weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
      
    }   

};

//getWeatherData();

searchbtn.addEventListener("click",()=>{
getWeatherData(searchbox.value);
 });