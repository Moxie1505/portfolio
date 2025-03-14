// Ajoutez ceci au début du fichier

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-container');
    const openBtn = document.getElementById('openBtn');
    const navList = document.getElementById('nav-list');

    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuContainer.classList.toggle('active');
    });

    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuContainer.classList.remove('active');
        });
    });
});

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'block';
  document.body.classList.add('no-scroll');  
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'none';
  document.body.classList.remove('no-scroll');  
}

window.onclick = function(event) {
  const popups = document.getElementsByClassName('popup');
  for (let popup of popups) {
      if (event.target == popup) {
          popup.style.display = 'none';
          document.body.classList.remove('no-scroll'); 
      }
  }
};


document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function() {
      const projectTitle = this.querySelector('h3').innerText;
      const projectDescription = this.querySelector('p').innerText;
      
      
      showProjectModal(projectTitle, projectDescription);
  });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function enterPortfolio() {
    const landingPage = document.getElementById('landing-page');
    const portfolioContent = document.getElementById('portfolio-content');
    const mainHeader = document.getElementById('main-header');

    // Fade out landing page
    landingPage.style.opacity = '0';
    landingPage.style.transition = 'opacity 0.5s ease-out';

    // After fade out, hide landing page and show portfolio content with animation
    setTimeout(() => {
        landingPage.style.display = 'none';
        portfolioContent.style.display = 'block';
        mainHeader.style.display = 'block';

        // Fade in portfolio content and header
        setTimeout(() => {
            portfolioContent.style.opacity = '1';
            mainHeader.style.opacity = '1';
        }, 50);
    }, 500);

    // Prepare portfolio content and header for fade in
    portfolioContent.style.opacity = '0';
    portfolioContent.style.transition = 'opacity 0.5s ease-in';
    mainHeader.style.opacity = '0';
    mainHeader.style.transition = 'opacity 0.5s ease-in';

    mainHeader.style.removeProperty('display');
}
