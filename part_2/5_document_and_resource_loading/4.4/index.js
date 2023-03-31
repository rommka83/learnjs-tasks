function f1(x) {
  return x * 2;
}

const f = function (func) {
  return function () {
    let a = func(arguments);
    console.log(this);
    console.log(arguments);
  };
};

f1 = f(f1);

f1(2);
// console.log('q');
