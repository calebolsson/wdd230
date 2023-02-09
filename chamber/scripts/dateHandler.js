document.getElementById("currentyear").textContent = new Date().getFullYear();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("todaydate").textContent =
  new Date().toLocaleDateString("en-uk", options);
