const container = document.getElementById('container');

container.addEventListener('click', (event) => {
  if (event.target.dataset.closed === undefined) return;
  event.target.closest('.pane').remove();
});
