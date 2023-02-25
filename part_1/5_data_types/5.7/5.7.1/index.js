function unique(arr) {
  let set = new Set();
  arr.map((el) => set.add(el));
  return Array.from(set);
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values)); // Hare,Krishna,:-O
