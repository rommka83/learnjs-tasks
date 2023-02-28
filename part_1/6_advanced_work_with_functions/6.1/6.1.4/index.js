function printListCycle(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printListRecursion(list) {
  console.log(list.value);
  list.next && printListRecursion(list.next);
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
