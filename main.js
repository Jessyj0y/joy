/*============================================ toggle icon navbar ===============================================*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*============================================ scroll section active link ===============================================*/

let sections = document.querySelector('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.sec.getAttribute('id');

        if(top >= offset && top  < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*============================================ sticky navbar ===============================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    /*============================================ remove toggle icon and navbar ===============================================*/
    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active');
};

/*============================================ scroll reveal ===============================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*============================================ typed js ===============================================*/
 const typed = new typed('.multiple-text',{
    strings: ['Data scientist', 'Full stack Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    baclDelay: 1000,
    loop: true,

 });