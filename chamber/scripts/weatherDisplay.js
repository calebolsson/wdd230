//updates the weather information
const weather = document.getElementById("weather");
const wstatus = document.getElementById("wstatus");
const wtext = document.getElementById("wtext");
const wtemp = document.getElementById("wtemp");

const wicons = [
  "fa fa-snowflake-o",
  "fa fa-bolt",
  "fa fa-tint",
  "fa fa-cloud",
  "fa fa-sun-o",
  "fa fa-thermometer-full",
];
const wwords = [
  "Snowing",
  "Stormy",
  "Raining",
  "Cloudy",
  "Sunny",
  "Heat Warning",
];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let temp_in_f = getRndInteger(0, 90);
let r = getRndInteger(0, 5);
wtemp.textContent = temp_in_f + "°F";

wstatus.className = wicons[r];
wtext.textContent = wwords[r];
