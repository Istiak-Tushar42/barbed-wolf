/** OWL-CAROUSEL FOR FULL SCREEN SLIDER */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

/** MOBILE MENU SHOW AND HIDE */
const menuIcon = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');
const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');
const searchClose = document.querySelector('.search-close');

// SHOW MOBILE MENU
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// HIDE MOBILE MENU
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});

document.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    return false; 
});

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    return false; 
});

// SHOW SEARCH-BAR
searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('show');
});

// HIDE SEARCH-BAR
searchClose.addEventListener('click', () => {
    searchBar.classList.remove('show');
});
