const field = document.getElementById('field');
const coord = document.getElementById('coords');

let coords = field.getBoundingClientRect();

let topCorner = [coords.left, coords.top];
let bottomCorner = [coords.right, coords.bottom];
let topInnerCorner = [
  coords.left + field.clientLeft,
  coords.top + field.clientTop,
];
let bottomInnerCorner = [
  coords.left + field.clientLeft + field.clientWidth,
  coords.top + field.clientTop + field.clientHeight,
];

console.log(topCorner, topInnerCorner, bottomCorner, bottomInnerCorner);

document.onclick = function (e) {
  coord.innerHTML = e.clientX + ':' + e.clientY;
};
