const logo = document.getElementById("logo");
var width = document.body.clientWidth;

if (width < 400) {
  logo.classList.remove("fa fa-university fa-5x");
  logo.classList.add("fa fa-university fa-4x");
} else {
  if (logo.classList.contains("fa fa-university fa-4x")) {
    logo.classList.remove("fa fa-university fa-4x");
    logo.classList.add("fa fa-university fa-5x");
  }
}
