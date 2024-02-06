document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            const section = document.getElementById(tabName);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});