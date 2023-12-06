document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('check');
    const navUL = document.querySelector('nav ul');

    checkbox.addEventListener('change', function() {
        navUL.classList.toggle('show', checkbox.checked);
    });
});
