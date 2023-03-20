const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.prophets);
}

function displayData(arraydata) {
  const cards = document.querySelector("div.cards");

  arraydata.forEach((item) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let image = document.createElement("img");
    h2.textContent = `${item.name} ${item.lastname}`;
    p1.textContent = `${item.birthdate} - ${item.death}`;
    p2.textContent = `Birthplace: ${item.birthplace}`;
    image.setAttribute("src", item.imageurl);
    image.setAttribute("alt", `Portrait of ${item.name} ${item.lastname}`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "255");
    image.setAttribute("height", "330");
    card.append(h2,p1,p2,image);
    cards.appendChild(card);
  });
}

getData();
