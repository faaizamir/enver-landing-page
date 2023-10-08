let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('-translate-y-full');
})