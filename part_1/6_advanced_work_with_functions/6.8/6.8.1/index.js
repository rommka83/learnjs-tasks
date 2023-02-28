function printNumbersInt(from, to) {
  let num = from;
  const interval = setInterval(() => {
    num === to ? clearInterval(interval) : console.log(++num);
  }, 1000);
}

function printNumbersTim(from, to) {
  let num = from;
  setTimeout(() => {
    console.log(++num);
    num !== to && printNumbersTim(num, to);
  }, 1000);
}

printNumbersInt(0, 10);
printNumbersTim(15, 20);
