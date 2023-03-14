new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(alert);

// setTimeout будет зарегестрирован без ошибок и только через секунду ощибка будет сгенерирована, уже после завершения работы Promise
// поэтому catch - не сработает
