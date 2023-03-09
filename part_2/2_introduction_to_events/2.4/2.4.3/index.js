const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();
  let currentLargeImg = largeImg.getAttribute('src');
  let selectedImg = e.target.getAttribute('src');

  e.target.setAttribute('src', currentLargeImg);
  largeImg.setAttribute('src', selectedImg);

  console.log(e.target.getAttribute('src'));
  console.log(largeImg.getAttribute('src'));
});
