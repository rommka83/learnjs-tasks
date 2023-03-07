const hour = document.querySelector('.h');
const min = document.querySelector('.min');
const sec = document.querySelector('.s');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

const startTime = function () {
  hour.textContent =
    new Date().getHours() > 9
      ? new Date().getHours()
      : `0${new Date().getHours()}`;
  min.textContent =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : `0${new Date().getMinutes()}`;
  sec.textContent =
    new Date().getSeconds() > 9
      ? new Date().getSeconds()
      : `0${new Date().getSeconds()}`;
};

start.addEventListener('click', () => {
  startTime();
  const st = setInterval(startTime, 1000);

  stop.addEventListener('click', () => {
    clearInterval(st);
  });
});
