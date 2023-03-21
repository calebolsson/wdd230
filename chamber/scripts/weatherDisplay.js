//updates the weather information

// const weather = document.getElementById("weather");
// const wstatus = document.getElementById("weather_status");
// const wtext = document.getElementById("weather_text");
// const temp = document.getElementById("air_temp");
// const speed = document.getElementById("wind_speed");
// const chill = document.getElementById("wind_chill");

// const icons = [
//   "fa fa-snowflake-o fa-3x",
//   "fa fa-bolt fa-3x",
//   "fa fa-tint fa-3x",
//   "fa fa-cloud fa-3x",
//   "fa fa-sun-o fa-3x",
//   "fa fa-thermometer-full fa-3x",
// ];
// const words = [
//   "Snowing",
//   "Stormy",
//   "Raining",
//   "Cloudy",
//   "Sunny",
//   "Heat Warning",
// ];
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let temp_in_f = getRndInteger(0, 100);
// let wind_mph = getRndInteger(0, 100);
// let r = getRndInteger(1, 4);

// if (temp_in_f > 85) {
//   wstatus.className = icons[5];
//   wtext.textContent = words[5];
// } else if (windchill() <= -20) {
//   wstatus.className = icons[0];
//   wtext.textContent = words[0];
// } else {
//   wstatus.className = icons[r];
//   wtext.textContent = words[r];
// }

// temp.textContent = temp_in_f + "°F";
// speed.textContent = wind_mph + "mph";

// function windchill() {
//   let calc_chill = 0;
//   if (temp_in_f <= 50 && wind_mph > 3) {
//     calc_chill = Math.round(
//       35.74 +
//         0.6215 * temp_in_f -
//         35.75 * Math.pow(wind_mph, 0.16) +
//         0.4275 * temp_in_f * Math.pow(wind_mph, 0.16)
//     );
//     return calc_chill + "°F";
//   } else {
//     return "N/A";
//   }
// }
// chill.textContent = windchill();
