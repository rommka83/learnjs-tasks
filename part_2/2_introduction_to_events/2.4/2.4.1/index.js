// Почему в коде ниже return false не работает?

function handler() {
  alert('...');
  return false;
}

<a href='https://w3.org' onclick='handler()'>
  браузер откроет w3.org
</a>;

// потаму что onClick - ни чего не возвращает, возвращает handler.
