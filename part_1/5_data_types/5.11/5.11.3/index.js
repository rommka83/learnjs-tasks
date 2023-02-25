function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}
let date = new Date(2012, 0, 4); // 4 января 2012 года
console.log(getLocalDay(date)); // вторник, нужно показать 3
