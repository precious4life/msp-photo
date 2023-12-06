document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const navUL = document.querySelector('nav ul');

    burgerIcon.addEventListener('click', function() {
        navUL.classList.toggle('show');
    });
});
