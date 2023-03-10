const div = document.querySelector('.div');

div.addEventListener('click', () => {
  let textarea = document.createElement('textarea');
  textarea.classList.add('div');
  textarea.value = div.textContent;
  div.replaceWith(textarea);

  const areaReplace = function () {
    div.textContent = textarea.value;
    textarea.replaceWith(div);
  };

  textarea.addEventListener('blur', areaReplace);

  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') areaReplace();
  });
});
