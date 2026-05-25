const specialBtn = document.getElementById('specialBtn');
const specialNote = document.getElementById('specialNote');

function showSpecial() {
  specialNote.textContent = 'Today\'s special is a classic caramel latte with house-made cream.';
}

specialBtn.addEventListener('click', showSpecial);
