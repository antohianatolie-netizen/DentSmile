let lastScrollY = window.scrollY;
const topbar = document.querySelector('.topbar');
const navToggle = document.querySelector('.nav-toggle');
const mainnav = document.querySelector('.mainnav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (!topbar) return;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    topbar.classList.add('topbar-hidden');
  } else {
    topbar.classList.remove('topbar-hidden');
  }

  lastScrollY = currentScrollY;
});

if (navToggle && mainnav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainnav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (event) => {
    if (!mainnav.classList.contains('open')) return;
    if (event.target === navToggle || navToggle.contains(event.target)) return;
    if (mainnav.contains(event.target)) return;
    mainnav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
}
