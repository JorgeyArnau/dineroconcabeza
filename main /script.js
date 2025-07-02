// Script básico para animaciones futuras y funcionalidades
document.addEventListener('DOMContentLoaded', () => {
  console.log('DineroConCabeza cargado correctamente.');

  // Scroll suave al hacer clic en el menú
  const enlaces = document.querySelectorAll('nav a[href^=\"#\"]');
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
// Resaltar enlace activo en scroll
const secciones = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navegacion a');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 150;

  secciones.forEach(seccion => {
    if (
      scrollPos >= seccion.offsetTop &&
      scrollPos < seccion.offsetTop + seccion.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('activo');
        if (link.getAttribute('href').substring(1) === seccion.id) {
          link.classList.add('activo');
        }
      });
    }
  });
});
