let items = document.querySelectorAll('li');

items.forEach((item) => console.log(item.firstChild.textContent.trim()));

console.log(`всего елементов 'li' - ${items.length}`);
