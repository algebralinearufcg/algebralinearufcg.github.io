function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(themeName);
    const slider = document.getElementById('slider');
    if (slider) {
        slider.checked = themeName === 'theme-dark';
    }
}

function toggleTheme() {
    setTheme(document.documentElement.classList.contains('theme-dark') ? 'theme-light' : 'theme-dark');
}

(function () {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'theme-dark' ? 'theme-dark' : 'theme-light');
})();
