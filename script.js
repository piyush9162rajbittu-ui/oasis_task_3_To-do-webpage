const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const text = input.value.trim();

  if (text !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${text} <span class="delete">x</span>`;
    ul.appendChild(li);
    input.value = '';
  }
});
ul.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
      const li = event.target.parentNode;
      ul.removeChild(li);
    }
  });