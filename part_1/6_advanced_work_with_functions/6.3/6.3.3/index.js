let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// результат - ошибка, т.к. вызываемая функция - внутренняя функция блока if
