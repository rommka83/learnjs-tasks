let obj = {};

function A() {
  this.name = 'Ваня';
  return obj;
}
function B() {
  this.name = 'Петя';
  return obj;
}

let a = new A();
let b = new B();

console.log(a === b); //true если обе функции конструктора вместо this возвращают один и тот же внещний объект.
