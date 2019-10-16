/* eslint-disable no-undef */

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible);
}

function togglePageInner(wide) {
  document.querySelector('.page-inner').classList.toggle('wide', wide);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  togglePageInner();
});