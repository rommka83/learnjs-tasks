function readNumber() {
  let num = prompt('Введите число', 0);

  if (!isFinite(num)) {
    readNumber();
  } else if (num === null || num === '') {
    return null;
  }

  return +num;
}

const number = readNumber();

alert(number ? `Вы ввели: ${number}` : 'Вы ни чего не ввели');
