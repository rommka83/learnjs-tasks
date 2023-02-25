function getSecondsToday() {
  const [hours, min, sec] = new Date().toLocaleTimeString().split(':');
  return hours * 3600 + min * 60 + +sec;
}
console.log(getSecondsToday());
