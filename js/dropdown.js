document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.icon');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuIcon.onclick = function() {
        const menu = document.getElementById('myLinks');
        const isOpen = menu.style.display === 'block';
        menu.style.display = isOpen ? 'none' : 'block';
        menuIcon.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    };

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const menu = dropdown.querySelector('.dropdown-content');

        btn.onclick = function() {
            const isOpen = menu.style.display === 'block';
            menu.style.display = isOpen ? 'none' : 'block';
            btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        };

        btn.onkeydown = function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                btn.click();
                event.preventDefault();
            }
        };

        menu.onkeydown = function(event) {
            if (event.key === 'Escape') {
                btn.click();
                btn.focus();
            }
        };
    });
});
