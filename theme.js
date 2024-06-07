function toggleTheme() {
  document.documentElement.classList.toggle('light-theme');
  const isLightTheme = document.documentElement.classList.contains('light-theme');
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
  }
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
