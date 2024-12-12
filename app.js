const pumpkin = document.querySelector('.site-header__img');
const boo = document.querySelector('.site-header__main-header');
pumpkin.addEventListener('click', playScarySound);

function playScarySound() {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = "./audio/boo.mp3";
    audio.play();
    boo.classList.remove('hidden');
}