let map = new Map();

map.set('name', 'John');

let keys = map.keys(); // на ывходе {'name'}

keys.push('more'); // Error: keys.push is not a function

Array.from(keys).push('more'); // рабочий вариант
