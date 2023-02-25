let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // вывод массива (this) с тремя элементами
