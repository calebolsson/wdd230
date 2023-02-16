const input = document.getElementById("favchap");
const button = document.getElementById("submit");
const list = document.getElementById("list");

button.addEventListener("click", addchapter);

function addchapter() {
  if (input.value.length > 0) {
    // create entry and delete button
    let newItem = document.createElement("li");
    let newDelete = document.createElement("button");
    newDelete.appendChild(document.createElement("i"));
    newDelete.firstChild.className = "fa fa-close fa-2x";
    newDelete.addEventListener("click", function () {
      newItem.remove();
      input.focus();
    });
    newItem.textContent = input.value;
    newItem.appendChild(newDelete);
    list.appendChild(newItem);
    input.value = "";
  } else {
    // window.alert("Error: no input");
  }
}

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") addchapter();
});
