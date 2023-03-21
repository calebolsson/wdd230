//key: d0a274edd71efe3de040eb6ec5d6ec57
const key = "d0a274edd71efe3de040eb6ec5d6ec57";
const cityname = "Boerne";
const units = "Imperial";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}&units=${units}`;

// select HTML elements in the document
const currentTemp = document.querySelector("#air_temp");
const currentWind = document.querySelector("#wind_speed");
const currentChill = document.querySelector("#wind_chill");
const weatherIcon = document.querySelector("#weather_status");
const captionDesc = document.querySelector("#weather_text");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function windchill(temp_in_f, wind_mph) {
  let calc_chill = 0;
  if (temp_in_f <= 50 && wind_mph > 3) {
    calc_chill = Math.round(
      35.74 +
        0.6215 * temp_in_f -
        35.75 * Math.pow(wind_mph, 0.16) +
        0.4275 * temp_in_f * Math.pow(wind_mph, 0.16)
    );
    return calc_chill + "°F";
  } else {
    return "N/A";
  }
}

function displayResults(weatherdata) {
  currentTemp.textContent = `${weatherdata.main.temp.toFixed(0)}°F`;
  currentWind.textContent = `${weatherdata.wind.speed.toFixed(0)}mph`;
  currentChill.textContent = windchill(
    weatherdata.main.temp,
    weatherdata.wind.speed
  );

  const icon = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  const description = weatherdata.weather[0].description;

  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("alt", description);
  captionDesc.textContent = description;
}
apiFetch();
