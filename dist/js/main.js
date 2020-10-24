const toggleCover = document.querySelector('.header .toggle');
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');

openMenu = false;

toggleCover.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!openMenu) {
        toggleBtn.classList.add('open');
        nav.classList.add('open');

        openMenu = true;
    } else {
        toggleBtn.classList.remove('open');
        nav.classList.remove('open');

        openMenu = false;
    }
}