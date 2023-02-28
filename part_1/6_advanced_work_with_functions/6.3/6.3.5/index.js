// между a и b (включительно).
function inBetween(a, b) {
  return function (el) {
    return el >= a && el <= b;
  };
}

// находится в данном массиве.
function inArray(arr) {
  let _arr = [];

  return function (el) {
    return arr.includes(el);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
