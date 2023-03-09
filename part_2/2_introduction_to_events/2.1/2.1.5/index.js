const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const isOpen = function () {
  btn.classList.toggle('btn-open');
  list.classList.toggle('list-open');
};

btn.addEventListener('click', isOpen);
