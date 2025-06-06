// Mobile menu toggle
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));

// Smooth scroll and close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!menu.classList.contains('hidden')) menu.classList.add('hidden');
  });
});

// Animate fade-in on scroll
const animateOnScroll = () => {
  document.querySelectorAll('.animate-fade-in').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
      el.style.opacity = '1'; el.style.transform = 'translateY(0)';
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      // Ferme toute autre carte
      document.querySelectorAll('.project-card.expanded').forEach(other => {
        if (other !== card) {
          other.classList.remove('expanded', 'row-span-2');
        }
      });
      // Bascule l'état de la carte cliquée
      card.classList.toggle('expanded');
      card.classList.toggle('row-span-2');
    });
  });

  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();     // empêche l’envoi vers le serveur
    form.reset();           // vide tous les champs
    successMsg.classList.remove('hidden');     // affiche le message
    setTimeout(() => successMsg.classList.add('hidden'), 3000); // le masque après 3 s
  });