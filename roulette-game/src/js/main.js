// src/js/main.js

// Inicializa o jogo
const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');
const roulette = new Roulette(ctx);
const ball = new Ball(ctx);
let animationId;

// Função para iniciar a animação
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    roulette.draw();
    ball.update();
    ball.draw();
    
    // Verifica se a animação deve continuar
    if (ball.isSpinning) {
        animationId = requestAnimationFrame(animate);
    }
}

// Inicia o jogo
function startGame() {
    roulette.reset();
    ball.reset();
    ball.startSpinning();
    animate();
}

// Adiciona evento de clique para iniciar o jogo
document.getElementById('startButton').addEventListener('click', startGame);

// Configurações iniciais
canvas.width = 800;
canvas.height = 600;
roulette.initialize();

document.addEventListener('DOMContentLoaded', () => {
    const roulette = new Roulette();
    const ball = new Ball(roulette);

    function animate() {
        roulette.draw();
        ball.draw();
        requestAnimationFrame(animate);
    }

    animate();

    document.getElementById('rouletteCanvas').addEventListener('click', () => {
        roulette.spin();
        ball.spin();
    });
});