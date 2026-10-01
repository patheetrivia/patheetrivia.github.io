// Mobile menu: the ☰ button shows/hides the nav on narrow screens.
(function () {
  const header = document.querySelector('header');
  const toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', () => setOpen(!header.classList.contains('nav-open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
})();
