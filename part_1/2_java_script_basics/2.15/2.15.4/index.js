function pow(x, n) {
  alert(x ** n);
}

function showPow() {
  let a = +prompt('Введите число, которое хотите возвести в степень', '');
  let b = +prompt('Введите степень', '');
  b < 1 ? alert('нет такой степени!') : pow(a, b);
}

showPow();
