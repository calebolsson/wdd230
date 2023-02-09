const menu = document.getElementById("menu");
const menuicon = document.getElementById("menuicon");
const menuopen = document.getElementById("menuopen");
const menuclose = document.getElementById("menuclose");
const footer = document.getElementById("footer");

function surprise_exe() {
  if (menuicon.classList.contains("show_menu")) {
    menuicon.classList.remove("show_menu");
    menuclose.style.display = "none";
    menu.style.display = "none";
    menuopen.style.display = "block";
    footer.style.display = "block";
  } else {
    menuicon.classList.add("show_menu");
    menuclose.style.display = "block";
    menu.style.display = "grid";
    menuopen.style.display = "none";
    footer.style.display = "none";
  }
}

menuicon.addEventListener("click", surprise_exe);
