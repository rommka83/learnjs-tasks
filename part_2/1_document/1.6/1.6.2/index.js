let links = document.querySelectorAll('a');

links.forEach((item) => {
  if (item.getAttribute('href') !== null) {
    item.getAttribute('href').includes('://') &&
      !item.getAttribute('href').startsWith('http://internal.com') &&
      (item.style.color = 'orange');
  }
});
