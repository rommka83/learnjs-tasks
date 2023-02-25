function getMaxSubSum(arr) {
  let sum = 0;
  let newArr = [];

  for (let num of arr) {
    if (num < 0) {
      sum = 0;
    } else {
      sum += num;
    }
    newArr.push(sum);
  }
  newArr.sort((a, b) => a - b);
  return newArr.at(-1);
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
