let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles);

let i = styles.shift();
console.log(styles);
console.log(i);

styles.unshift('Рэп', 'Регги');
console.log(styles);
