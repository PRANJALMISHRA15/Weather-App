"use strict";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const appKey = `&appid=1dc02c2cda3d32eda98eede7405d0e42`;

const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");
const weatherIcon = document.querySelector(".Weather-Icon");


function city() {
	const inputName = document.querySelector("#impTXT");
	const city = `&q=${inputName.value}`;
	checkWeather(city);
}

// document.querySelector(".WeatherDisplay").style.display = "block";


async function checkWeather(city) {
    const response = await fetch(apiURL + appKey + city);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    // Set weather icon and background color based on weather condition
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png";
        document.body.style.background = "#b0bec5"; // Light Blue for Clouds
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/Mist.png";
        document.body.style.background = "#78909c"; // Gray for Mist
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
        document.body.style.background = "#607d8b"; // Dark Blue for Rain
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
        document.body.style.background = "#546e7a"; // Teal for Drizzle
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
        document.body.style.background = "#ffcc80"; // Orange for Clear
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "img/snow.png";
        document.body.style.background = "#eceff1"; // Light Gray for Snow
    } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "img/haze.png";
        document.body.style.background = "#a1887f"; // Brown for Haze
    }

    document.querySelector(".WeatherDisplay").style.display = "block";
};

searchBtn.addEventListener("click", city); // addEventlistener e funcion call korle () lage na


// const input = document.getElementById("impTXT");
searchField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		city();
	}
});