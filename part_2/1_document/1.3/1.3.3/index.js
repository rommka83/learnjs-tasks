const table = document.querySelector('table');

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}
