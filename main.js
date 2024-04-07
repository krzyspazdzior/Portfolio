window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        nav.classList.add('nav-scroll-shadow');
    } else {
        nav.classList.remove('nav-scroll-shadow');
    }
});