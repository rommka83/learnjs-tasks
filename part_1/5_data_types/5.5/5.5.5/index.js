function copySorted(arr) {
  let _arr = arr.slice().sort();
  return _arr;
}

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);
