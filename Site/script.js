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
    popup.classList.add('show');
    popup.style.display = 'block';
    document.body.classList.add('no-scroll');
}

function closePopup(id) {
    var popup = document.getElementById(id);
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 300); // Correspond à la durée de la transition
}

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.classList.remove('show');
        setTimeout(() => {
            event.target.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 300);
    }
};
