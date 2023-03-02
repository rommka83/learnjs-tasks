Function.prototype.defer = function (ms) {
  const context = this;
  return function () {
    setTimeout(() => {
      return context.apply(this, arguments);
    }, ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);
