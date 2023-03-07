const calendar = document.getElementById('calendar');

const createCalendar = function (cal, year, month) {
  let table = document.createElement('table');
  table.innerHTML =
    '<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  let arr = [];
  let arr1 = [];
  let arr2 = [];

  // восполнение первой недели
  const firstDay = new Date(year, month, 1).getDay();
  if (firstDay !== 1) {
    for (let i = firstDay - 1; i > 0; i--) {
      arr.push(0);
    }
  }

  for (let i = 1; i < 32; i++) {
    new Date(year, month, i).getMonth() === month && arr.push(i);
  }

  // восполнение крайней недели
  const lastDay = new Date(year, month, arr[arr.length - 1]).getDay();
  if (lastDay !== 0) {
    for (let i = 7 - lastDay; i > 0; i--) {
      arr.push(0);
    }
  }

  // поделил месяц на недели
  for (let i = 0, j = 1; i < arr.length; i++) {
    if (j < 7) {
      arr2.push(arr[i]);
      ++j;
    } else {
      arr2.push(arr[i]);
      arr1.push(arr2);
      arr2 = [];
      j = 1;
    }
  }

  calendar.append(table);

  const dateNum = function (num) {
    return num !== 0 ? num : null;
  };

  const creatTr = function () {
    const tr = document.createElement('tr');
    return tr;
  };

  const creatTd = function (num) {
    const td = document.createElement('td');
    td.textContent = dateNum(num);
    return td;
  };

  arr1.forEach((el) => {
    const tr = creatTr();
    el.forEach((d) => {
      tr.append(creatTd(d));
    });
    table.append(tr);
  });
};

createCalendar(calendar, 2023, 2);
