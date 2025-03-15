function enterPortfolio() {
  console.log("La fonction enterPortfolio a été appelée."); 
  const landingPage = document.getElementById('landing-page');
  const portfolioContent = document.getElementById('portfolio-content');

  landingPage.classList.add('fade-to-gray');
  
  setTimeout(() => {
      landingPage.style.display = 'none'; 
      console.log("La page d'atterrissage est masquée.");


      setTimeout(() => {
          portfolioContent.classList.add('show');
          console.log("La classe 'show' a été ajoutée au contenu du portfolio.");
      }, 10); 
  }, 1000);  
}

const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  // Ferme toutes les cartes
  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  // Ouvre la carte cliquée
  target.classList.add("active");
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

function showProjectModal(title, description) {

  alert(`Project: ${title}\n\nDescription: ${description}`);
}

const menuBtn = document.querySelector(".menu-btn");
const wrapper = document.querySelector(".wrapper");

menuBtn.addEventListener("click", function () {
  menuBtn.querySelector("i").classList.toggle("fa-xmark");

  wrapper.classList.toggle("open");
});
