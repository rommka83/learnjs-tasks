function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася',
});

console.log(bound.test); // undefined, потвмучто в объекте {name: 'Вася'}, объявленным контекстом нет свойства test
