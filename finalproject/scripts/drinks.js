const drinkbox = document.getElementById("mydrinks");
let myDrinks = loadStorage("myDrinks");
let nth = 0;
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

// console.log(myDrinks);
if (myDrinks == []) {
  console.log("No drinks");
} else {
  myDrinks.forEach((drink) => createDrinkCard(drink, nth));
}

/**
 * Creates and appends a collection of HTML elements to display the drink name and ingredients.
 * @param {Array} drinkInfo The item from the drink storage object that we are creating a nutrition card for.
 * @param {int} n An indication of how many nutrition cards have been made. Used to ensure variety among id values.
 */
function createDrinkCard(drinkInfo, n) {
  let newBox = newElement("div", "", "card", "");
  let newName = newElement("h3", "", "", drinkInfo[0]);
  let newList = newElement("ul", "", "scroll-visible", "");
  drinkInfo.slice(1, 5).forEach((ingr) => {
    let newItem = newElement("li", "", "", ingr);
    if (ingr != "") newList.appendChild(newItem);
  });
  newBox.append(newName, newList);
  drinkbox.appendChild(newBox);
  nth++;
}
let theAddCard = document.createElement("template");
theAddCard.innerHTML =
  '<a class="add" href="fresh.html#custom-drink"><i class="fa fa-plus-circle fa-3x"></i><p>New Drink</p></a>';
drinkbox.append(theAddCard.content);

// NOT DRINKS RELATED
// Handles the menu on the main page

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
function toggleMenu() {
  if (nav.getAttribute("class") == "menu-nav-mobile-off") {
    nav.setAttribute("class", "menu-nav-mobile-on");
  } else {
    nav.setAttribute("class", "menu-nav-mobile-off");
  }
}

menu.addEventListener("click", toggleMenu);
