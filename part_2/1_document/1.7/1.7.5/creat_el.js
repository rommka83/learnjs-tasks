let container = document.getElementById('container');

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

const createTree = function (elem, obj) {
  elem.append(detourObj(obj));
};

const detourObj = function (obj) {
  const ul = creatUl();

  for (let i in obj) {
    const li = creatLi(i);
    ul.append(li);

    if (Object.keys(obj[i]).length !== 0 && obj[i].constructor === Object) {
      li.append(detourObj(obj[i]));
    }
  }

  return ul;
};

const creatUl = function () {
  return document.createElement('ul');
};

const creatLi = function (str) {
  const li = document.createElement('li');
  li.textContent = str;
  return li;
};

createTree(container, data); // создаёт дерево в контейнер
