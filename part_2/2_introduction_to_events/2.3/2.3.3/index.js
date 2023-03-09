const grid = document.getElementById('grid');
let tbody = grid.querySelector('tbody');
let rows = Array.from(document.querySelectorAll('tr')).slice(1);

grid.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') return;
  let index = event.target.cellIndex;

  switch (event.target.dataset.type) {
    case 'number':
      rows.sort((rowA, rowB) => {
        return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
      });
    case 'string':
      rows.sort((rowA, rowB) => {
        return rowA.cells[index].innerHTML > rowB.cells[index].innerHTML
          ? 1
          : -1;
      });
  }

  tbody.append(...rows);
});
