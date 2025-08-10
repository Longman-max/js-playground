// Get references to HTML elements
const button = document.getElementById('interactiveButton');
const outputText = document.getElementById('outputText');

// Add event listener to the button
button.addEventListener('click', () => {
  // Change the text content and background color
  outputText.textContent = 'Button Clicked!';
  document.body.style.backgroundColor = '#b3e0ff'; // Light blue background
});
