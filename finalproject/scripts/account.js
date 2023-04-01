let accountStorage = localStorage.getItem("account");
function getFormValue(inputName) {
  return document.getElementsByName(inputName).item(0).value;
}

function register(this_event) {
  this_event.preventDefault();
  if (accountStorage == null) {
    let fname = getFormValue("fname");
    let lname = getFormValue("lname");
    let email = getFormValue("email");
    let phone = getFormValue("phone");
    console.log(fname, lname, email, phone);
    accountStorage = [fname, lname, email, phone];
    localStorage.setItem("account", [fname, lname, email, phone]);
    console.log(accountStorage);
    window.location.href = "index.html";
    alert("Account creation sucessful");
  } else {
    console.log("Already logged in");
  }
}

const loginmask = document.getElementById("alreadyloggedin");
function logout() {
  accountStorage = null;
  localStorage.removeItem("account");
//   localStorage.clear();
}

if (localStorage.getItem("account") != null) loginmask.style.display = "flex";

document
  .getElementById("accountform")
  .addEventListener("submit", (e) => register(e));
document.getElementById("logout").addEventListener("click", logout);
