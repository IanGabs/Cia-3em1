document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.setProperty('--scale', '1');
        });

        item.addEventListener('mouseout', () => {
            item.style.setProperty('--scale', '0');
        });
    });

    const navLinks = document.querySelectorAll('.navbar-item[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarMenu = document.querySelector('#nav-links');
                if (navbarMenu.classList.contains('is-active')) {
                    navbarMenu.classList.remove('is-active');
                }
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const profileImages = document.querySelectorAll('.is-rounded');
    profileImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});