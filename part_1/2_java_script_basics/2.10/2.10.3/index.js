function myFunction() {
  let userVariant = +prompt('Введите число', '');

  if (userVariant > 0) {
    alert(1);
  } else if (userVariant < 0) {
    alert(-1);
  } else if (userVariant === 0) {
    alert(0);
  } else {
    alert('это не число!');
  }
}
myFunction();
