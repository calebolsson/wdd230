const images = document.querySelectorAll("[data-src]");

function preloadImg(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
  img.removeAttribute("data-src");
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImg(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

// NOT LAZY LOAD: TIME SINCE LAST VISIT (W07 Assignment)
const displayVisit = document.getElementById("displayVisit");
let thisVisit = new Date();
let lastVisit = window.localStorage.getItem("lastVisit");
if (lastVisit == null) {
  displayVisit.textContent = "Welcome! This is your first visit!";
} else {
  displayVisit.textContent = `Welcome! It has been ${0} days since your last visit`;
}

window.localStorage.setItem("lastVisit", thisVisit);
