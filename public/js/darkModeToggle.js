const svgElement = document.querySelector('#dark-mode-toggle');
const htmlElement = document.documentElement; // Reference to the HTML element

svgElement.addEventListener('click', () => {
  console.log("clicked");
  htmlElement.classList.toggle('dark-mode'); // Toggles the class on the HTML element
  localStorage.setItem('dark-mode', htmlElement.classList.contains('dark-mode') ? 'true' : 'false');
});

// Load the saved mode on page load
if (localStorage.getItem('dark-mode') === 'true') {
  htmlElement.classList.add('dark-mode'); // Adds the class to the HTML element
}

