Function.prototype.defer = function (ms) {
  const context = this;
  return function (...arg) {
    setTimeout(() => {
      return context.apply(this, arg);
    }, ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);
