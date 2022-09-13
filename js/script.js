const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const replay = document.querySelector('.replay');
const jumpAudio = document.getElementById('jump-audio');
const gameOverAudio = document.getElementById('game-over-audio');
const marioSong = document.getElementById('mario-song');
const startButton = document.querySelector('.start');

pipe.style.display = 'none';

const start = () => {
    pipe.classList.add('animation-pipe')
    startButton.style.display = 'none';
    pipe.style.display = 'initial';
}


const jump = () => {
    mario.classList.add('jump')
    jumpAudio.play();

    setTimeout(() => {
        mario.classList.remove('jump');
    },    500);
}

const loop = setInterval(() =>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`
        mario.style.width = '75px';
        mario.style.margin = '50px';
        mario.src = './images/game-over.png';
        
        gameOver.src= './images/game-over-font.png';
        replay.src= './images/replay.png';
        
        gameOverAudio.play()
        marioSong.pause()

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);
startButton.addEventListener('click', start);