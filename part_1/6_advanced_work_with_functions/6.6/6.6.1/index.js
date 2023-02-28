function makeCounter() {
  function counter() {
    return counter.count;
  }

  counter.count = 0;

  counter.increase = () => {
    return counter.count++;
  };

  counter.set = (value) => {
    return (counter.count = value);
  };

  counter.decrease = () => {
    return counter.count--;
  };

  return counter;
}

let counter = makeCounter();

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.set(9));

console.log(counter.decrease());
console.log(counter.decrease());
