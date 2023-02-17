const header = document.querySelector('.header');
const navToggle = document.querySelector('.navigation__toggle');

header.classList.remove('no-js');
navToggle.addEventListener('click', () => header.classList.toggle('is-open'));
