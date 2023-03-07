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
    case 'top-out':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      break;

    case 'right-out':
      elem.style.left = anchorCoords.right + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom-out':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.bottom + 'px';
      break;

    case 'top-in':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'right-in':
      elem.style.left = anchorCoords.right - elem.offsetWidth + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom-in':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.bottom - elem.offsetHeight + 'px';
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

showNote(blockquote, 'top-out', 'note above');
showNote(blockquote, 'right-out', 'note at the right');
showNote(blockquote, 'bottom-out', 'note below');
showNote(blockquote, 'top-in', 'note-in');
showNote(blockquote, 'right-in', 'note-in right');
showNote(blockquote, 'bottom-in', 'note-in below');
showNote(blockquote, 'center', 'center');
