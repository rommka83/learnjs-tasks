const contents = document.getElementById('contents');

contents.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
    let str = confirm('действительно ли Вы хотите покинуть страницу?');
    if (!str) {
      return e.preventDefault();
    }
  }
});
