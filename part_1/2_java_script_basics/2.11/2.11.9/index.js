function myFunction() {
  let userVariant = prompt('Кто там', '');

  if (userVariant === 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password === 'Я главный') {
      alert('Здравствуйте!');
    } else if (password !== 'Я главный' && password !== null) {
      alert('Неверный пароль');
    } else {
      alert('Отменено');
    }
  } else if (userVariant !== 'Админ' && userVariant !== null) {
    alert('Я вас не знаю');
  } else {
    alert('Отменено');
  }
}
myFunction();
