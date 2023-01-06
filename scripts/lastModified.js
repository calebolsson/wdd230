let text = document.lastModified;
const date = new Date(document.lastModified);
const options = {day: 'numeric', month: 'short', year: 'numeric'}
// options not used here intentionally, may be applied later
document.getElementById('lastmod').textContent = date