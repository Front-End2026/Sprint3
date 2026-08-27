// JOVI Camera — Landing Page
// Interações: menu mobile, fechamento ao navegar, feedback do formulário de contato.

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu mobile ao clicar em um link
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Formulário de contato (demonstrativo — sem backend nesta entrega)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = 'Preencha todos os campos antes de enviar.';
        status.style.color = '#ff6b6b';
        return;
      }

      const nome = document.getElementById('nome').value.trim();
      status.style.color = '';
      status.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada e a equipe JOVI vai te responder em breve.`;
      form.reset();
    });
  }
});
