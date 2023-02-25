function sumInput() {
  let arr = [];

  while (true) {
    let num = prompt('Введите число', 0);
    if (num === '' || num === null || !isFinite(num)) break;
    arr.push(+num);
    alert(
      arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    );
  }
}
sumInput();
