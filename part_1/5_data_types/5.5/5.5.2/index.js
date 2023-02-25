function filterRange(arr, a, b) {
  return (_arr = arr
    .map((e) => {
      if (e >= a && e <= b) return e;
    })
    .filter((e) => e !== undefined));
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const newArr = filterRange(arr, 3, 11);
console.log(newArr);
console.log(arr);
