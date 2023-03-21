//key: d0a274edd71efe3de040eb6ec5d6ec57
const key = "d0a274edd71efe3de040eb6ec5d6ec57";
const cityname = "Fairbanks";
const units = "Imperial";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}&units=${units}`;

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
function displayResults(weatherdata) {
  currentTemp.innerHTML = `<strong>
  ${weatherdata.main.temp.toFixed(0)}
  </strong>`;

  const icon = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  const description = weatherdata.weather[0].description;

  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("alt", description);
  captionDesc.textContent = description;
}
apiFetch();
