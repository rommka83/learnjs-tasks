function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

let f = debounce(console.log, 1000);

f(1); // выполняется
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован
