document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerIcon && mainNav) {
        hamburgerIcon.addEventListener('click', () => {
            mainNav.classList.toggle('nav-active');
            
            hamburgerIcon.classList.toggle('icon-active');

            const isExpanded = mainNav.classList.contains('nav-active');
            hamburgerIcon.setAttribute('aria-expanded', isExpanded);

        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('nav-active')) {
                    mainNav.classList.remove('nav-active');
                    hamburgerIcon.classList.remove('icon-active');
                    hamburgerIcon.setAttribute('aria-expanded', 'false');
                }
            });
        });

    } else {
        console.error("Les éléments du menu hamburger ou de navigation n'ont pas été trouvés.");
    }
});