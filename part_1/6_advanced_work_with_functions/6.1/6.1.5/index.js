function printListCycle(list) {
  let arr = [];
  while (list) {
    arr.unshift(list.value);
    list = list.next;
  }
  arr.map((el) => console.log(el));
}

function printListRecursion(list) {
  list.next && printListRecursion(list.next);
  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListCycle(list);
printListRecursion(list);
