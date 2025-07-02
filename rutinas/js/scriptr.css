AOS.init({
  once: true,         // Solo anima una vez
  duration: 800,      // Duración de la animación en milisegundos
  offset: 100         // Distancia desde el viewport para activar
});

// Scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Activa/desactiva el menú desplegable en móvil
function toggleDropdown(e) {
  e.preventDefault();
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
