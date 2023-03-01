let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
// при выполнении this===rabbit, соответственно full появится в rabbit
const vis = (obj) => {
  for (let key in obj) {
    console.log(key);
  }
};
vis(animal);
console.log('=========');
vis(rabbit);
