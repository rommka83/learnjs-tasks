// Таблицу с id="age-table".
const table = document.getElementById('age-table');

// Все элементы label внутри этой таблицы (их три).
const lebels = document.querySelectorAll('lebel');

// Первый td в этой таблице (со словом «Age»).
const oneTd = table.querySelector('td');

// Форму form с именем name="search".
const form = document.querySelector('form[name="search"]');

// Первый input в этой форме.
const oneInp = form.querySelector('input');

// Последний input в этой форме.
const inputs = form.querySelectorAll('input');
const lastInp = inputs[inputs.length - 1];
