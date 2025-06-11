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

