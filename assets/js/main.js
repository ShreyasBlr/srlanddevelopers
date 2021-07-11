const header = document.querySelector('header');
const heroWrapper = document.querySelector('.hero-wrapper');
const aboutWrapper = document.querySelector('.about-wrapper');
const contactWrapper = document.querySelector('.contact-wrapper');
const navbar = document.querySelector('.main-navbar');
let activeNav = '';
window.onscroll = () => {
    if (heroWrapper.getBoundingClientRect().top < -100) {
        header.classList.add('fixed-nav');
    } else {
        header.classList.remove('fixed-nav');
    }

    heroWrapper.getBoundingClientRect().top < 170 ? activeNav = 'home' : false;
    aboutWrapper.getBoundingClientRect().top < 170 ? activeNav = 'about' : false;
    contactWrapper.getBoundingClientRect().top < 170 ? activeNav = 'contact' : false;

    navbar.querySelector('.active').classList.remove('active');
    navbar.querySelector(`.nav-${activeNav}`).classList.add('active');
}