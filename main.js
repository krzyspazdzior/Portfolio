//shadow po scrollu na navie

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        nav.classList.add('nav-scroll-shadow');
    } else {
        nav.classList.remove('nav-scroll-shadow');
    }
});

//hamburger open/close

const mobileLinks = document.querySelectorAll('.mobile-link');
const hamburger = document.querySelector('.hamburger');


function toggleMenu() {
    hamburger.classList.toggle("change");
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('nav').classList.toggle('active-nav');
    document.querySelector('nav').style.transition = 'all 0.1s ease';
}

hamburger.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});