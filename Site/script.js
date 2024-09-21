
function enterPortfolio() {
    const landingPage = document.getElementById('landing-page');
    const portfolioContent = document.getElementById('portfolio-content');
    
    landingPage.style.opacity = 0;
    landingPage.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        landingPage.style.display = 'none';
        portfolioContent.style.display = 'block';
        
        setTimeout(() => {
            portfolioContent.classList.add('show');
        }, 100); 
    }, 1000);
}

function openPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'block';
    document.body.classList.add('no-scroll');
  }

  function closePopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }

  window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
      event.target.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }
  }

