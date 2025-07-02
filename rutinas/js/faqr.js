document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Oculta otras respuestas abiertas
    document.querySelectorAll('.faq-answer').forEach(ans => {
      if (ans !== answer) ans.style.display = 'none';
    });

    // Alterna la visibilidad de la respuesta actual
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
