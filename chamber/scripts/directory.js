const source =
  "https://calebolsson.github.io/wdd230/chamber/json/directory.json";

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
    console.log(item.name, item.phone, item.address);
    image.setAttribute("src", item.imageUrl);
    image.setAttribute("alt", `Logo for ${item.name}`);
    image.setAttribute("loading", "lazy");
    // image.setAttribute("width", "255");
    // image.setAttribute("height", "330");
    if (item.member == "Gold Member") {
      card.style.order = 0;
    } else if (item.member == "Non-Profit Member") {
      card.style.order = 1;
    } else if (item.member == "Silver Member") {
      card.style.order = 2;
    } else {
      card.style.order = 3;
    }
    card.append(h2, p1, image, p2);
    cards.appendChild(card);
  }); //★
}

getData();
