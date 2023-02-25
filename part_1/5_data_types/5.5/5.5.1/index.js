function camelize(str) {
  let newStr = str
    .split('-')
    .map((el) => {
      if (el[0] !== undefined) {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join('');
  return newStr[0].toLowerCase() + newStr.slice(1);
}
camelize('-webkit-transition');
