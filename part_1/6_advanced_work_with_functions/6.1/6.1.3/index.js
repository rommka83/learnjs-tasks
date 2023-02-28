function fib(n) {
  let num1 = 1;
  let num2 = 1;
  let num3;
  for (let i = n - 2; i > 0; --i) {
    num3 = num2 + num1;
    num1 = num2;
    num2 = num3;
  }
  return num3;
}

console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757
