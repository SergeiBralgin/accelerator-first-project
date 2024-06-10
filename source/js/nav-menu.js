const body = document.querySelector('.page-body')
const menuBtn = document.querySelector('.site-nav__toggle');

const openingMenu = () => {
  menuBtn.classList.toggle('is-open');
};

menuBtn.addEventListener('click', () => {
  openingMenu();
})
