function myFunction() {
  let userVariant = prompt('Какое "официальное" название JavaScript?', '');

  if (userVariant === 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете?\nECMAScript!');
  }
}
myFunction();
