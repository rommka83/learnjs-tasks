const btn = document.getElementById('hider');

const hidden = function () {
  this.setAttribute('hidden', true);
};

btn.addEventListener('click', hidden);
