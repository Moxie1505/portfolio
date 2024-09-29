function enterPortfolio() {
  const landingPage = document.getElementById('landing-page');
  const portfolioContent = document.getElementById('portfolio-content');

  landingPage.classList.add('fade-to-gray');
  
  setTimeout(() => {
    landingPage.style.display = 'none'; 
    portfolioContent.style.display = 'block';  

    setTimeout(() => {
      portfolioContent.classList.add('show');
    }, 100);  
  }, 1000);  
}

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

function showProjectModal(title, description) {

  alert(`Project: ${title}\n\nDescription: ${description}`);
}

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

  landingPage.classList.add('fade-to-gray');
  
  setTimeout(() => {
    landingPage.style.display = 'none'; 
    portfolioContent.style.display = 'block';  
    document.body.classList.remove('no-scroll');  
  }, 1000);  
}