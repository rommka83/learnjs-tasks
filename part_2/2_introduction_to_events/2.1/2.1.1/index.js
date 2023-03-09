const btn = document.getElementById('hider');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.setAttribute('hidden', true);
});
