function f(...arg) {
  console.log(...arg);
}

function delay(f, time) {
  return function () {
    setTimeout(() => f.apply(this, arguments), time);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test'); // показывает "test" после 1000 мс
f1500('test', 'test1', 'test2'); // показывает 'test', 'test1', 'test2' после 1500 мс
