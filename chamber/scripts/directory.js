const source = "https://calebolsson.github.io/wdd230/chamber/json/directory.json";

async function getData() {
  const response = await fetch(source);
  const data = await response.json();
  displayData(data.results);
}

function displayData(arraydata) {
  const cards = document.querySelector("div.cards");

  arraydata.forEach((item) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let image = document.createElement("img");
    h2.textContent = `${item.name}`;
    p1.textContent = `${item.phone}`;
    p2.textContent = `${item.address}`;
    image.setAttribute("src", item.imageUrl);
    image.setAttribute("alt", `Logo for ${item.name}`);
    image.setAttribute("loading", "lazy");
    // image.setAttribute("width", "255");
    // image.setAttribute("height", "330");
    card.append(h2, p1, p2, image);
    cards.appendChild(card);
  }); //★
}

getData();
