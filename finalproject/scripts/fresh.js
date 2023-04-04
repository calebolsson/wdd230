const fruit_source =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";
/** Imported data on all available fruit ingredients. Also contains nutrition information. */
let fruit_data;
/** Use fruit_index.findIndex() to find the index of a given fruit in the fruit_data object. */
let fruit_index = [];
let accountStorage = loadStorage("account");
let myDrinks = loadStorage("myDrinks");
/** The labels/titles to be used on the Nutrition Facts card. */
const labels = [
  "Calories",
  "Total Fat",
  "Total Carbohydrates",
  "Sugar",
  "Protein",
];
/** The values of labelIds matches the values of labels. */
const labelIds = ["calories", "fat", "carbohydrates", "sugar", "protien"];
/** The parent element to all of the drink cards. */
const cardBox = document.getElementById("custom-drink");
/** The user input form where the drink data is extracted from. */
const drinkForm = document.getElementById("drink-designer");
/** Validation mask: will display over the fresh.html when not logged in. */
const mask = document.getElementById("freshchecklogin");
/** The dynamic icon above the "#selection" area that displays the selected drink base. */
const base = document.getElementById("selected");
/** The rainbow-colored area where the user may select the base to their drink. */
const fruitSelection = document.getElementById("selection");
/** fruitOptions is the collection of div objects that are children to fruitSelection. */
const fruitOptions = fruitSelection.children;
/**
 * Fetches the data from fruit_source.
 * Saves a copy of fruit names into fruit_index.
 * Appends the fruit names to the proper drinkForm elements.
 */
async function getData() {
  const result = await fetch(fruit_source);
  const data = await result.json();
  //   return data;
  fruit_data = data;
  const ingr1 = document.getElementsByName("ingredient1").item(0);
  const ingr2 = document.getElementsByName("ingredient2").item(0);
  fruit_data.forEach((fruit) => {
    [ingr1, ingr2].forEach((dropdown) => {
      let newFruit = document.createElement("option");
      newFruit.setAttribute("value", fruit["name"]);
      newFruit.textContent = fruit["name"];
      dropdown.appendChild(newFruit);
    });
    fruit_index.push(fruit["name"]);
  });
}
/**
 * Loads data from localStorage.
 * @param {string} key The key name of the item to retrieve from localStorage
 * @returns {JSON.parse} If there is no matching item, returns []. Otherwise parses the item and returns it
 */
function loadStorage(key) {
  if (localStorage.getItem(key) == null) {
    return [];
  } else {
    return JSON.parse(localStorage[key]);
  }
}
/**
 * A quick constructor tool that uses .createElement and .setAttribute to make an element
 * @param {string} tagName The type of HTML tag to be created.
 * @param {string} idName If any, the value of the "id" attribute.
 * @param {string} className If any, the value of the "class" attribute.
 * @param {string} textInsert If any, the value of the text content.
 * @returns the element object with all of the appropriate modifications.
 */
function newElement(tagName, idName = "", className = "", textInsert = "") {
  let newEl = document.createElement(tagName);
  if (idName != "") newEl.setAttribute("id", idName);
  if (className != "") newEl.setAttribute("class", className);
  if (textInsert != "") newEl.textContent = textInsert;
  return newEl;
}
/**
 * Creates and appends a collection of HTML elements to display the drink name, ingredients, nutrition facts, and order information.
 * @param {Array} drinkInfo The item from the drink storage object that we are creating a nutrition card for.
 * @param {int} n An indication of how many nutrition cards have been made. Used to ensure variety among id values.
 */
function createNutritionCard(drinkInfo, n) {
  let newBox = newElement("div", "drink-display", "base-box flex-v", "");
  let newName = newElement("h3", "", "", drinkInfo[0]);
  let newList = newElement("ul", "", "scroll-visible", "");
  drinkInfo.slice(1, 5).forEach((ingr) => {
    let newItem = newElement("li", "", "", ingr);
    if (ingr != "") newList.appendChild(newItem);
  });
  let newFacts = newElement("div", "", "nutrition flex-h wrap", "");
  let newTitle = newElement("h4", "", "", "Nutrition Facts");
  newFacts.append(newTitle, document.createElement("hr"));
  for (i = 0; i < 5; i++) {
    let newDiv = newElement("div", "", "", labels[i]);
    let newNum = newElement(
      "div",
      labelIds[i] + n.toString(),
      "",
      drinkInfo[6][labelIds[i]]
    );
    newFacts.append(newDiv, newNum, document.createElement("hr"));
  }
  let newInfo = document.createElement("p");
  newInfo.innerHTML = `<p>Account: ${accountStorage[0]}<br>
  Email: ${accountStorage[2]}<br>
  Phone: ${accountStorage[3]}<br>
  Order date: ${drinkInfo[5]}</p>`;
  newBox.append(newName, newList, newFacts, newInfo);
  cardBox.appendChild(newBox);
}
/**
 * Finds and retrieves the value that has been input by the user in part of the form.
 * @param {string} inputName The "name" attribute of the form input element.
 * @returns the value of the selected form input element.
 */
function getFormValue(inputName) {
  return document.getElementsByName(inputName).item(0).value;
}
/**
 * Prevents the default form sumbit event and instead collects the form values manually. Also calculates the nutrition facts.
 * @param {Event} this_event The default event that has been triggered
 */
function saveDrink(this_event) {
  this_event.preventDefault();
  let drinkname = getFormValue("drinkname");
  let drinkbase = getFormValue("drinkbase");
  let ingredient1 = getFormValue("ingredient1");
  let ingredient2 = getFormValue("ingredient2");
  let special = getFormValue("specialinstructions");
  let submitdate = getFormValue("submitdate");
  let nutrition = {
    calories: 0,
    fat: 0,
    carbohydrates: 0,
    sugar: 0,
    protein: 0,
  };
  labelIds.forEach((stat) => {
    [drinkbase, ingredient1, ingredient2].forEach((ingr) => {
      let indx = fruit_index.findIndex((i) => i == ingr);
      nutrition[stat] += fruit_data[indx]["nutritions"][stat];
      console.log(fruit_data[indx]["nutritions"][stat]);
      console.log(
        `${stat} = ${nutrition[stat]} (+ ${fruit_data[indx]["nutritions"][stat]})`
      );
    });
  });
  myDrinks.push([
    drinkname,
    drinkbase,
    ingredient1,
    ingredient2,
    special,
    submitdate,
    nutrition,
  ]);
  localStorage.setItem("myDrinks", JSON.stringify(myDrinks));
  alert("Drink saved");
  location.reload();
}
/**
 * The event handler for the drink base selection menu. Reacts to a click on one of the selection divs.
 * @param {Event} e The event is needed to detect the currentTarget of the click.
 */
function selectBase(e) {
  let thisColor = e.currentTarget.id;
  base.textContent = thisColor;
  if (base.classList.length == 0) base.classList.add(thisColor);
  else base.classList.replace(base.classList.item(0), thisColor);
  base.style.border = "2px solid black";
  document.getElementById("insert-base").value = thisColor;
}

// Execution begins here
getData();
// If the user is logged in = If accountStorage isn't empty
if (localStorage.getItem("account") != null) mask.style.display = "none";
// Creates nutrition cards for all existing saved drinks
myDrinks.forEach((drink) =>
  createNutritionCard(drink, myDrinks.indexOf(drink))
);
// Connects individual listeners to the "#selection" child divs
for (i = 1; i < fruitOptions.length; i++) {
  fruitOptions[i].addEventListener("click", selectBase);
}
// Connects a listener to the drink-designer form to intercept the submission
drinkForm.addEventListener("submit", (e) => saveDrink(e));
