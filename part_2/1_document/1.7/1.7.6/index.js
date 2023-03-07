let items = document.querySelectorAll('li');

items.forEach((el) => {
  const liCount = el.querySelectorAll('li').length;
  if (liCount > 0) el.firstChild.data += `[${liCount}]`;
});
