function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    let a = +prompt('Введите число', 0);
    if (String(a) === 'NaN') {
      alert('Это не число!');
      this.read();
    } else {
      this.value += a;
      return this;
    }
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read().read();
alert(accumulator.value);
