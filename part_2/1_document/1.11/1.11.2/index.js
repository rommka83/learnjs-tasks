/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
  let anchorCoords = anchor.getBoundingClientRect();
  console.log(anchorCoords);

  switch (position) {
    case 'top':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      break;

    case 'right':
      elem.style.left = anchorCoords.right + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.bottom + 'px';
      break;

    case 'center':
      elem.style.left =
        anchorCoords.x + anchor.offsetWidth / 2 - elem.offsetWidth / 2 + 'px';
      elem.style.top =
        anchorCoords.y + anchor.offsetHeight / 2 - elem.offsetHeight / 2 + 'px';
      break;
  }
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top', 'note above');
showNote(blockquote, 'right', 'note at the right');
showNote(blockquote, 'bottom', 'note below');
showNote(blockquote, 'center', 'center');
