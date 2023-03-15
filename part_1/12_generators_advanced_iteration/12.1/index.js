pseudoRandom = function* (seed) {
  let previous = seed;

  while (true) {
    previous = (previous * 16807) % 2147483647;
    yield previous;
  }
};

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
