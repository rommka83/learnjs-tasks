const btn = document.querySelectorAll('.remove-button');

document.addEventListener('click', (event) => {
  event.target.className === 'remove-button' &&
    event.target.parentNode.remove();
});
