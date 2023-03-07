const ul = document.createElement('ul');
document.body.append(ul);

const creatNewLi = function () {
  const newLi = prompt('Введите название пункта списка!');
  if (newLi !== null && newLi !== '') {
    const li = document.createElement('li');
    li.textContent = newLi;
    ul.append(li);
    setTimeout(creatNewLi, 300);
  }
};

creatNewLi();
