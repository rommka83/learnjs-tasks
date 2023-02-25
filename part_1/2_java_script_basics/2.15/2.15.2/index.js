function checkAge(age) {
  // if (age > 18) {return true} else {return confirm('Родители разрешили?')}

  // вариант № 1
  return age > 18 ? true : confirm('Родители разрешили?');
  // вариант № 2
  return age > 18 || confirm('Родители разрешили?');
}
