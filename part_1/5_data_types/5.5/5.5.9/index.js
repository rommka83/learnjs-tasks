function sortByAge(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];
let newArr = sortByAge(arr);

console.log(newArr);
