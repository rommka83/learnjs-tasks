const tree = document.getElementById('tree');

tree.addEventListener('click', (event) => {
  if (event.target.children.length === 0) return;
  const elem = event.target.querySelector('ul');
  elem.classList.toggle('none');
});
