let accountStorage = localStorage.getItem("account");

function register(this_event) {
  this_event.preventDefault();
  if (accountStorage == null) {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    console.log(fname, lname, email, phone);
    accountStorage = [fname, lname, email, phone];
    localStorage.setItem("account", [fname, lname, email, phone]);
    console.log(accountStorage);
    window.location.href = "index.html";
  } else {
    console.log("Already logged in");
  }
}

const loginmask = document.getElementById("alreadyloggedin");
function logout() {
  accountStorage = null;
  localStorage.removeItem("account");
}

if (localStorage.getItem("account") != null) loginmask.style.display = "flex";

document
  .getElementById("accountform")
  .addEventListener("submit", (e) => register(e));
document.getElementById("logout").addEventListener("click", logout);
