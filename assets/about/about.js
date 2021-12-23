const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.header-ul');
const navBtns = document.querySelectorAll('.li-btn');

navBtns.forEach((item) => {
  item.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', false);
    nav.setAttribute('data-visible', false);
  });
});

btn.addEventListener('click', () => {
  const visible = btn.getAttribute('aria-expanded');
  if (visible === 'false') {
    btn.setAttribute('aria-expanded', true);
    nav.setAttribute('data-visible', true);
  } else {
    btn.setAttribute('aria-expanded', false);
    nav.setAttribute('data-visible', false);
  }
});
