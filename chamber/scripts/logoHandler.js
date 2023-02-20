const logo = document.getElementById("logo");
var width = document.body.clientWidth;

if (width < 500) {
  logo.classList.value = "fa fa-university fa-fw fa-4x";
} else {
  if (logo.classList.contains("fa fa-university fa-fw fa-4x")) {
    logo.classList.value = "fa fa-university fa-5x";
  }
}
