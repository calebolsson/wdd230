let myDrinks;
const drinkForm = document.getElementById("drink-designer");
const mask = document.getElementById("freshchecklogin");
function getFormValue(inputName) {
  return document.getElementsByName(inputName).item(0).value;
}

if (localStorage.getItem("account") != null) mask.style.display = "none";

function saveDrink(this_event) {
  this_event.preventDefault();
  if (localStorage.getItem("myDrinks") == null) {
    myDrinks = [];
  } else {
    myDrinks = JSON.parse(localStorage["myDrinks"]);
  }
  let drinkname = getFormValue("drinkname");
  let drinkbase = getFormValue("drinkbase");
  let ingredient1 = getFormValue("ingredient1");
  let ingredient2 = getFormValue("ingredient2");
  let special = getFormValue("specialinstructions");
  myDrinks.push([drinkname, drinkbase, ingredient1, ingredient2, special]);
  console.log(myDrinks);
  localStorage.setItem("myDrinks", JSON.stringify(myDrinks));
  alert("Drink saved");
}

drinkForm.addEventListener("submit", (e) => saveDrink(e));

const base = document.getElementById("selected");
function selectBase(e) {
  let thisColor = e.currentTarget.id;
  base.textContent = thisColor;
  if (base.classList.length == 0) base.classList.add(thisColor);
  else base.classList.replace(base.classList.item(0), thisColor);
  base.style.border = "2px solid black";
  document.getElementById("insert-base").value = thisColor;
}

const fruitSelection = document.getElementById("selection");
const fruitOptions = fruitSelection.children;
for (i = 1; i < fruitOptions.length; i++) {
  fruitOptions[i].addEventListener("click", selectBase);
}
