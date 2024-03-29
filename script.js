const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Svetlý';
  } else {
    toggleButton.textContent = 'Tmavý';
  }
});
