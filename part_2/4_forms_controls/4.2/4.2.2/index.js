let table = document.getElementById('bagua-table');

let area = document.createElement('textarea');
area.classList.add('area');

let blockBtn = document.createElement('div');
let ok = document.createElement('button');
let cancel = document.createElement('button');
blockBtn.classList.add('blockBtn');
ok.textContent = 'OK';
cancel.textContent = 'CANCEL';
blockBtn.append(ok, cancel);

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TD' || document.querySelector('textarea') !== null)
    return;

  let td = e.target;

  let coord = td.getBoundingClientRect();
  area.style.top = coord.y + 'px';
  area.style.left = coord.x + 'px';
  area.style.width = coord.width + 'px';
  area.style.height = coord.height + 'px';
  area.value = td.textContent;
  blockBtn.style.top = coord.y + coord.height + 10 + 'px';
  blockBtn.style.left = coord.x + coord.width / 5 + 'px';
  // td.replaceWith(area);
  document.body.append(area);
  document.body.append(blockBtn);

  ok.addEventListener('click', () => {
    td.textContent = area.value;
    // area.replaceWith(td);
    area.remove();
    blockBtn.remove();
  });

  cancel.addEventListener('click', () => {
    // td.textContent = text;
    // area.replaceWith(td);
    area.remove();
    blockBtn.remove();
  });
});

cancel.addEventListener('click', () => {});
