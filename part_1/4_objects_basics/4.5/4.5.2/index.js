function Calculator() {
  this.num1 = () => {
    let a = +prompt('Первое число?', 0);
    if (String(a) === 'NaN') {
      alert('Это не число!');
      this.num1();
    } else {
      this.number1 = a;
    }
  };

  this.num2 = () => {
    let a = +prompt('Второе число?', 0);
    if (String(a) === 'NaN') {
      alert('Это не число!');
      this.num2();
    } else {
      this.number2 = a;
    }
  };

  this.read = () => {
    this.num1();
    this.num2();
  };

  this.sum = () => {
    return this.number1 + this.number2;
  };

  this.mul = () => {
    return this.number1 * this.number2;
  };
}

let calculator = new Calculator();

calculator.read();
alert(`сумма введённых чисел = ${calculator.sum()}`);
alert(`произведение введённых чисел = ${calculator.mul()}`);
