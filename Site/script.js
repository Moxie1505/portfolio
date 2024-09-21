function enterPortfolio() {
    // Masque la page d'accueil
    document.getElementById('landing-page').style.display = 'none';
    // Affiche le contenu du portfolio
    document.getElementById('portfolio-content').classList.remove('hidden');
}