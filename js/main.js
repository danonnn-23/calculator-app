const homeButton = document.getElementById('nav-btn-home');
const contactButton = document.getElementById('nav-btn-contact');
const aboutButton = document.getElementById('nav-btn-about');

setTimeout(() => {
    homeButton.classList.add('active-nav-btn');
}, 2000);

homeButton.addEventListener('click', () => {
    homeButton.classList.add('active-nav-btn');
    contactButton.classList.remove('active-nav-btn');
    aboutButton.classList.remove('active-nav-btn');
});
contactButton.addEventListener('click', () => {
    contactButton.classList.add('active-nav-btn');
    homeButton.classList.remove('active-nav-btn');
    aboutButton.classList.remove('active-nav-btn');
});
aboutButton.addEventListener('click', () => {
    aboutButton.classList.add('active-nav-btn');
    homeButton.classList.remove('active-nav-btn');
    contactButton.classList.remove('active-nav-btn');
});