function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
} // если убрать else - ни чего не изменится, т.к. если условие == true функция завершиться выводом true, в противном случае - выводом запроса
