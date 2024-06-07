// Fonction pour basculer entre les thèmes
function toggleTheme() {
  document.documentElement.classList.toggle('light-theme');
  // Enregistrer le thème choisi dans le stockage local
  const isLightTheme = document.documentElement.classList.contains('light-theme');
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Appliquer le thème enregistré lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    toggleTheme();
  }
});
