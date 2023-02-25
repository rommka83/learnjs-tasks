function formatDate(date) {
  let diff = (new Date() - date) / 1000;
  if (diff < 1) {
    return 'прямо сейчас';
  } else if (diff < 59) {
    return `${diff} сек. назад`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} мин. назад`;
  } else {
    let _date = date.toLocaleDateString();
    let _time = date.toLocaleTimeString().slice(0, 5);
    return `${_date} ${_time}`;
  }
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
