document.getElementById("currentyear").textContent = new Date().getFullYear();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("todaydate").textContent =
  new Date().toLocaleDateString("en-uk", options);

const marquee = document.getElementById("scrollbanner");
const todayday = new Date().getDay().toString();
if (todayday != "1" && todayday != "2") {
  marquee.style.display = "none";
}