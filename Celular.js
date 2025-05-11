const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
    
    const isExpanded = navbarMenu.classList.contains('is-active');
    burgerIcon.setAttribute('aria-expanded', isExpanded);
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbarMenu.contains(event.target);
    const isClickOnBurger = burgerIcon.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnBurger && navbarMenu.classList.contains('is-active')) {
        navbarMenu.classList.remove('is-active');
        burgerIcon.classList.remove('is-active');
        burgerIcon.setAttribute('aria-expanded', 'false');
    }
});

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

if (tabs.length > 0 && tabContentBoxes.length > 0) {
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('is-active'));
            
            tab.classList.add('is-active');

            const target = tab.dataset.target;
            tabContentBoxes.forEach(box => {
                if(box.getAttribute('id') === target) {
                    box.classList.remove('is-hidden');
                    box.style.opacity = '0';
                    setTimeout(() => {
                        box.style.opacity = '1';
                    }, 50);
                } else {
                    box.classList.add("is-hidden");
                }
            });
        });
    });
}