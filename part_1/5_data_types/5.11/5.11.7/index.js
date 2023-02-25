// в консоли проблемы с чачовыми поясами, поэтому варианты из учебника если рассматривать поэтапно - выдают не совсем коректный результат (new Date(now.getFullYear(), now.getMonth(), now.getDate()+1) - завтрашний день не выдаёт). Считает может и верно, но со смещением на 3 часа для мск.
function getSecondsToTomorrow() {
  const HOURS = 23;
  const MIN = 59;
  const SEC = 59;
  const [hours, min, sec] = new Date().toLocaleTimeString().split(':');

  const remainderHours = HOURS - hours;
  const remainderMin = MIN - min;
  const remainderSec = SEC - sec;

  return remainderHours * 3600 + remainderMin * 60 + remainderSec + 1;
}

console.log(getSecondsToTomorrow());
