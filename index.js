AOS.init();

    
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const modeButton = document.getElementById('modeBtn');
  modeButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
}