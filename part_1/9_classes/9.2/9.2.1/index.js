class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('Белый кролик'); // без вызова super() конструктор наследуемого класса не создаст объект
console.log(rabbit.name);
