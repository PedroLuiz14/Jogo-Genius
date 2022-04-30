let order = [];
let clickedorder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleorder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedorder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        LightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let LightColor = (element, number) => {
    number = number * 500;
        setTimeout(() => {
            element.classList.add('selected');
        }, number - 250);
        setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões ligados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedorder) {
        if (clickedorder[i] != order[i]) {
            gameOver();
            break;
        } 
    }
    if (clickedorder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedorder[clickedorder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder()
    })

}

//função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função para o próximo nível do jogo
let nextLevel = () => {
    score ++;
    shuffleorder();
}

//função para Game Over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedorder = [];

    playGame();
}

//função de iniciar o jogo
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo jogo!`);
    score = 0;

    nextLevel();
}

//envetos de clique das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//início do jogo
playGame();
