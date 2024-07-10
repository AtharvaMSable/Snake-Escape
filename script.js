const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check dark mode preference from localStorage
const currentTheme = localStorage.getItem('darkMode');
if (currentTheme === 'enabled') {
    body.classList.add('dark-mode');
}
