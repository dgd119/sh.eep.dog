  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'true' : 'false');
  });

  // Load the saved mode on page load
  if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
  }

