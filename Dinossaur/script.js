let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');

window.addEventListener('keydown',jump)

function jump() {
    dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 1500)
}

setInterval(()=> {  
    let cactusPosition = cactus.offsetLeft;
    let dinoPosition = dino.getComputedStyle().bottom
    
    if(cactusPosition <= 70 && dinoPosition > 320){
        cactus.style.animation = 'none'
}

},8)
