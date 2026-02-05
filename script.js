var mobileMenu = document.querySelector('#mobile-nav');
var menuBtn = document.querySelector('#menuBtn');
var closeBtn = document.querySelector('#closeBtn');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    closeBtn.classList .add('hidden');
})