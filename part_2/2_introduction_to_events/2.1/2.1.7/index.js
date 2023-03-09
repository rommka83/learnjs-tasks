const list = document.querySelector('.list');
const item = document.querySelector('.item');
const right = document.querySelector('.arrow-right');
const left = document.querySelector('.arrow-left');

list.style.width = item.getBoundingClientRect().width * 3 + 'px';

right.addEventListener('click', () => {
  list.scrollLeft += item.getBoundingClientRect().width * 3;
});

left.addEventListener('click', () => {
  list.scrollLeft -= item.getBoundingClientRect().width * 3;
});
