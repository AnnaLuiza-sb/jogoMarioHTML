const reiniciar = document.getElementById('reiniciar');
const gameOver = document.querySelector('.game-over');
const score = document.getElementById('score');
const animacaoScore = document.querySelector('#score');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';


        animacaoScore.style.animation = 'score 1s infinite';
        reiniciar.style.display = 'inline';
        clearInterval(loop);
        clearInterval(loopPontos);

    }

}, 10);


const originalMario = {
    animation: 'animation: jump-mario 500ms ease-out',
    bottom: '84px',
    src: 'imagens/mario.gif',
    width: '150px',
    marginLeft: '0px'
}

const originalPipe = {
    left: '166vh',
    animation: 'pipe-animation 1.5s infinite linear'
}

const originalChao = {
    animation: 'floor 1.23s infinite linear',
    backgroundPosition: 'background-position: 43px;'
}

const originalBotao = {
    innerHTML: ''
}
const restart = () => {

    mario.style.animation = originalMario.animation;
    gameOver.style.visibility = 'hidden';

    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    pipe.style.animation = originalPipe.animation;
    pipe.style.left = originalPipe.left;


    mario.style.bottom = originalMario.bottom;
    mario.src = originalMario.src;
    mario.style.width = originalMario.width;
    mario.style.marginLeft = originalMario.marginLeft;

    mario.src = 'imagens/mario.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    pontos = 0;
    score.innerText = 'Score: 0';
    animacaoScore.style.animation = '';


    loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'imagens/game-over.png';
            mario.style.width = '70px';
            mario.style.marginLeft = '35px';

            gameOver.style.visibility = 'visible';

            
        }
    }, 10);
    
    loopPontos = setInterval(() => {
        pontos++;
        score.innerText = `Score: ${pontos}`
    }, 100);
}

let pontos = 0;
let loopPontos = setInterval(() => {
    pontos++;
    score.innerText = `Score: ${pontos}`
}, 100);



document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
document.getElementById('reiniciar').addEventListener('click', restart);


