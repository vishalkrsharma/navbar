const btn = document.getElementById('nav__btn');
const navLinks = document.getElementById('nav__links');

btn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
