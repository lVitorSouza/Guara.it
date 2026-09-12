const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const subject = (formData.get('subject') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !subject || !message) {
      formStatus.textContent = 'Preencha todos os campos antes de enviar.';
      formStatus.style.color = '#b24a12';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      formStatus.textContent = 'Informe um e-mail válido.';
      formStatus.style.color = '#b24a12';
      return;
    }

    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    );
    const mailtoLink = `mailto:falcom.guara@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    formStatus.textContent = 'Abrindo seu cliente de e-mail para concluir o envio...';
    formStatus.style.color = '#1b7a41';
    window.location.href = mailtoLink;
    contactForm.reset();
  });
}
