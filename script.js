let menuBtn = document.getElementById('menu-btn');
let menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})