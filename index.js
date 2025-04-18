src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"

  AOS.init();

  function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeButton = document.getElementById('modeBtn');
    modeButton.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
  }