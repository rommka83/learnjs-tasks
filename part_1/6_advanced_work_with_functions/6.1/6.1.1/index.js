function sumToCycle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n == 1) return 1;
  return n + sumToRecursion(n - 1);
}

function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

// измерение скорости

// function benchCycle() {
//   let start = Date.now();
//   sumToCycle(10000);
//   console.log(Date.now() - start);
// }
// function benchRecursion() {
//   let start = Date.now();
//   sumToRecursion(10000);
//   console.log(Date.now() - start);
// }
// function benchFormula() {
//   let start = Date.now();
//   sumToFormula(10000);
//   console.log(Date.now() - start);
// }

// benchCycle(); //0~1
// benchRecursion(); //1~2 самая медленная + >10000 - ошибка
// benchFormula(); //0 самая быстрая

console.log(sumToCycle(3));
console.log(sumToRecursion(3));
console.log(benchFormula(3));
