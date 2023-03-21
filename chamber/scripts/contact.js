const source =
  "https://calebolsson.github.io/wdd230/chamber/json/contact.json";

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
    let image = document.createElement("img");
    h2.textContent = `${item.name}`;
    p1.textContent = `${item.phone}`;
    console.log(item.name, item.phone);
    image.setAttribute("src", item.imageUrl);
    image.setAttribute("alt", `Logo for ${item.name}`);
    image.setAttribute("loading", "lazy");
    card.append(image, h2, p1);
    cards.appendChild(card);
  }); //★
}

getData();
