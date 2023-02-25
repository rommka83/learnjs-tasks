function filterRangeInPlace(arr, a, b) {
  let _arr = arr.filter((el) => el > a && el < b);
  arr = _arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
filterRangeInPlace(arr, 2, 8);
