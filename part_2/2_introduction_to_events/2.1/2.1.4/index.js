const field = document.getElementById('field');
const ball = document.getElementById('ball');

const fieldCoords = field.getBoundingClientRect();

field.addEventListener('click', (e) => {
  let ballCoords = {
    top: e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,
  };

  // запрещаем пересекать верхнюю границу поля
  if (ballCoords.top < 0) ballCoords.top = 0;

  // запрещаем пересекать левую границу поля
  if (ballCoords.left < 0) ballCoords.left = 0;

  // // запрещаем пересекать правую границу поля
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // запрещаем пересекать нижнюю границу поля
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
});
