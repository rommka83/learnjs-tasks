function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // ошибка, т.к. в момент вызова функции this определяется не для объекта, а для функции makeUser и равно undefined
