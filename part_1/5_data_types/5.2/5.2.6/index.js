function randomInteger() {
  let min = +prompt('введите минимальное число', 0);
  let max = +prompt('введите максимальное число', 0);
  let x = ++max - min;
  let y = x * Math.random();
  alert(Math.floor(min + y));
}

randomInteger();
