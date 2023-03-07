const table = document.querySelector('table');
const trs = document.querySelectorAll('tr');

const sortedRows = Array.from(trs)
  .slice(1)
  .sort((rowA, rowB) =>
    rowA.cells[0].textContent > rowB.cells[0].textContent ? 1 : -1
  );

table.tBodies[0].append(...sortedRows);
