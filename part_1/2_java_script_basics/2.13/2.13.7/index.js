function myFunction(x) {
  next: for (let i = 2; i <= x; i++) {
    for (let j = 2; j <= Math.round(i ** 1 / 2); j++) {
      if (i % j == 0) continue next;
    }

    alert(i);
  }
}
myFunction(10);
