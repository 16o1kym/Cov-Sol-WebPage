console.clear();
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // tryThis 
    // const navBarItem = document.querySelector('.nav-link');
    // navBarItem.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    // }), 

    // tryThis 


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation=''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
        // console.log(index / 5 + 0.3);
    });
    burger.classList.toggle('toggle');
});
}
navSlide();


// var scrolledHeight = document.getElementsByClassName("nav-links").scrollHeight;

// console.log(scrolledHeight)

