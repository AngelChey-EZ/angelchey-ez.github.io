document.getElementById('alertBtn').addEventListener('click', function () {
  const alertElement = document.getElementById('successAlert');
  
  // Remove the hidden utility class and trigger the fade-in animation
  alertElement.classList.remove('d-none');
  alertElement.classList.add('show');
});