const showNotification = function (options) {
  const div = document.createElement('div');

  div.innerHTML = options.html;

  if (options.className) {
    div.classList.add(options.className);
  }

  div.style.position = 'absolute';
  div.style.top = options.top + 'px';
  div.style.right = options.right + '%';

  document.body.append(div);
};

showNotification({
  top: 50,
  right: 50,
  html: 'Hello!',
  className: 'welcome',
});
