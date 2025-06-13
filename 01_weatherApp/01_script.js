


const api_url = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid={a983467b49f114aba65c55fa427ba26a}";
// console.log("hello");

const searchBox = document.querySelector(".search_box");

const searchBtn = document.querySelector(".search_btn");

const weatherIcon = document.querySelector(".weather_icon");

async function getWeatherData(city) {
    const response = await fetch(api_url + city + API_KEY);
    console.log(response);
    if (response.status == 401) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    getWeatherData(city);
});


