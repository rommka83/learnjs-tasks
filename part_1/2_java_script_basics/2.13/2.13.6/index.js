function myFunction() {
  // let number = prompt('Введите число больше 100', 0);
  // number <= 100 && number && myFunction();
  let number;
  do {
    number = prompt('Введите число больше 100', 0);
  } while (number <= 100 && number);
}
myFunction();
