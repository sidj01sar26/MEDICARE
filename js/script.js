const button = document.querySelector('[data-collapse-toggle]');
const dropdown = document.getElementById('navbar-default');

button.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('block');
});


