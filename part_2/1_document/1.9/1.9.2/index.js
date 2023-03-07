let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '150px';
div.style.height = '150px';
div.style.background = 'red';

document.body.append(div);

let scrollWidth = div.offsetWidth - div.clientWidth;

// div.remove();

alert(scrollWidth);
