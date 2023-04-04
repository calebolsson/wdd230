//key: d0a274edd71efe3de040eb6ec5d6ec57
const key = "d0a274edd71efe3de040eb6ec5d6ec57";
const cityname = "Carlsbad";
const units = "Imperial";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${key}&units=${units}`;
const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const today = new Date().getDay("en-US", { timeZone: "America/Los_Angeles" });
function day(n) {
  return weekday[(today + n) % 7];
}
// select HTML elements in the document
const temp = document.getElementById("temp");
const icon = document.getElementById("weather_status");
const descr = document.getElementById("weather_text");
const humid = document.getElementById("humidity");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");
const d5 = document.getElementById("d5");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
    //   console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherdata) {
  temp.textContent = `${weatherdata.list[0].main.temp.toFixed(0)}°F`;
  humid.textContent = ` ${weatherdata.list[0].main.humidity.toFixed(0)}%`;

  const api_icon = `https://openweathermap.org/img/w/${weatherdata.list[0].weather[0].icon}.png`;
  const description = weatherdata.list[0].weather[0].description;

  icon.setAttribute("src", api_icon);
  icon.setAttribute("alt", description);
  descr.textContent = description;
  d1.innerHTML = `${day(1)}<br>${weatherdata.list[1].main.temp.toFixed(0)}°F`;
  d2.innerHTML = `${day(2)}<br>${weatherdata.list[2].main.temp.toFixed(0)}°F`;
  d3.innerHTML = `${day(3)}<br>${weatherdata.list[3].main.temp.toFixed(0)}°F`;
  d4.innerHTML = `${day(4)}<br>${weatherdata.list[4].main.temp.toFixed(0)}°F`;
  d5.innerHTML = `${day(5)}<br>${weatherdata.list[5].main.temp.toFixed(0)}°F`;
}
apiFetch();
