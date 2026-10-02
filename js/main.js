// Menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

function setMenu(open) {
    navMenu.classList.toggle('open', open);
    iconMenu.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

menuToggle.addEventListener('click', () => setMenu(!navMenu.classList.contains('open')));
navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

// Tema claro/oscuro (equivale a next-themes con enableSystem)
const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function isDark() {
    return document.documentElement.classList.contains('dark');
}

function syncThemeIcon() {
    iconSun.classList.toggle('hidden', !isDark());
    iconMoon.classList.toggle('hidden', isDark());
}

themeToggle.addEventListener('click', () => {
    const dark = !isDark();
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    syncThemeIcon();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
        syncThemeIcon();
    }
});

syncThemeIcon();

// Animación slide-up al hacer scroll (equivale al componente SlideUp)
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { rootMargin: '-300px 0px -300px 0px' }
);

document.querySelectorAll('.slide-up').forEach((el) => observer.observe(el));
