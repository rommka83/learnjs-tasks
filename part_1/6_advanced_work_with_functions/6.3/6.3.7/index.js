function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let _i = i;
    let shooter = function () {
      console.log(_i);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

//у каждого стрелка была общая i, что бы сделать её "индивидуальной" её надо положить в "индивидуальную" переменную на каждой итерации (при каждом создании стрелка)
