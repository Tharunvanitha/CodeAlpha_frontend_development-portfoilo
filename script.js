// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// Nav shadow on scroll
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

// Reveal sections + highlight active link
const links = [...menu.querySelectorAll('a')];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { threshold: .35 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form: opens the visitor's email app (no backend needed)
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`);
  location.href = `mailto:you@example.com?subject=Portfolio%20message&body=${body}`;
  document.getElementById('status').textContent = 'Opening your email app...';
});

document.getElementById('year').textContent = new Date().getFullYear();
