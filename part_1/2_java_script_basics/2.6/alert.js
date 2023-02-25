function myName() {
  let name = prompt('Введите ваше имя', '');
  if (name === null || name === '') return;
  alert(name);
}
myName();
