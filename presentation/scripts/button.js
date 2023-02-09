const menuicon = document.getElementById("menuicon");
const menuopen = document.getElementById("menuopen");
const menuclose = document.getElementById("menuclose");

function surprise_exe() {
  if (menuicon.classList.contains("show_menu")) {
    menuicon.classList.remove("show_menu");
    menuclose.style.display = "none";
    menuopen.style.display = "block";
  } else {
    menuicon.classList.add("show_menu");
    menuclose.style.display = "block";
    menuopen.style.display = "none";
  }
}

menuicon.addEventListener("click", surprise_exe);
