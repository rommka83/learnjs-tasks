function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// console.log(rabbit.eats);

console.log('1============');
Rabbit.prototype = {};
console.log(rabbit.eats);

console.log('2============');
Rabbit.prototype.eats = false;
console.log(rabbit.eats);

console.log('3============');
delete rabbit.eats;
console.log(rabbit.eats);

console.log('4============');
delete Rabbit.prototype.eats;
console.log(rabbit.eats);
