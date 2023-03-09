button.addEventListener('click', () => alert('1')); // сработает

button.removeEventListener('click', () => alert('1'));

button.onclick = () => alert(2); // сработает
