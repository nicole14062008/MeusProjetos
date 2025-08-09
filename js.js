    const marie = document.getElementById('marie');
    const caixa = document.getElementById('caixa');
    const scoreEl = document.getElementById('score');
    const gameOverEl = document.getElementById('game-over');

    let score = 0;
    let isAlive = true;

    function jump() {
        if (!marie.classList.contains('jump')) {
            marie.classList.add('jump');
            setTimeout(() => {
                marie.classList.remove('jump');
            }, 500);
        }
    }

    document.addEventListener('keydown', jump);

    // Pontuação
    const scoreInterval = setInterval(() => {
        if (isAlive) {
            score++;
            scoreEl.textContent = "Pontuação: " + score;
        }
    }, 500);

    // Checar colisão
    const checkCollision = setInterval(() => {
        const marieBottom = parseInt(window.getComputedStyle(marie).bottom);
        const caixaRight = parseInt(window.getComputedStyle(caixa).right);

        if (caixaRight > 320 && caixaRight < 370 && marieBottom < 40) {
            isAlive = false;
            caixa.style.animationPlayState = 'paused';
            gameOverEl.style.display = 'block';
        }
    }, 10);
