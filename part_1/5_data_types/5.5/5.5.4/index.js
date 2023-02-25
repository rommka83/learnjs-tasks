function descendingSort(arr) {
  arr.sort((a, b) => b - a);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
descendingSort(arr);
console.log(arr);
