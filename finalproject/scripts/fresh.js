let myDrinks = localStorage.getItem("myDrinks");
const drinkForm = document.getElementById("drink-designer");
const mask = document.getElementById("freshchecklogin");

if (localStorage.getItem("account") != null) mask.style.display = "none";

function savedrink() {
  if (myDrinks == null) {
    myDrinks = [];
  }
  let drinkname = document.getElementsByName("drinkname").value;
  let drinkbase = document.getElementsByName("drinkbase").value;
  let ingredient1 = document.getElementsByName("ingredient1").value;
  let ingredient2 = document.getElementsByName("ingredient2").value;
  myDrinks.push([drinkname, drinkbase, ingredient1, ingredient2]);
}

drinkForm.addEventListener("submit", savedrink());
