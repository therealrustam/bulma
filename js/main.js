let radioOne = document.getElementById('buyer');
let radioTwo = document.getElementById('provider');
let button = document.getElementById('submit-btn');
radioOne.addEventListener('click', () => document.getElementById('site-block').style.display = 'none');
radioTwo.addEventListener('click', () => document.getElementById('site-block').style.display = 'flex');
button.addEventListener('click', () => window.alert('Заявка отправлена!'));