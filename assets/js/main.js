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
let menuIcon = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu');
let closeIcon = document.querySelector('.close-icon');

// SHOW MENU
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

// HIDE MENU
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});
