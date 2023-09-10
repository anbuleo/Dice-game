
const d = document;
const p1Dice = d.getElementById('p1Dice');
const p2Dice = d.getElementById('p2Dice');
const p1Score = d.getElementById('p1Score');
const p2Score = d.getElementById('p2Score');
const rollButton1 = d.getElementById('rollButton1');
const rollButton2 = d.getElementById('rollButton2');
const resetButton = d.getElementById('resetButton');
const resultDisplay = d.getElementById('result');
let currentPlayer, p1Points = 0, p2Points = 0, gameFinished = false;

currentPlayer = Math.random() < 0.5 ? 'Player 1' : 'Player 2'

function Start(currentPlayer){
if(currentPlayer==='Player 1'){
    rollButton1.disabled=false
}else if(currentPlayer==='Player 2'){
    rollButton2.disabled=false
}
}
function r() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice(player) {
    if (gameFinished) return;
    const roll = r();
    resultDisplay.textContent= `${player} start roll`
    if (player === 'Player 1') {
        resultDisplay.textContent='player 2 roll'
        p1Points += roll;
        p1Score.textContent = p1Points;

        p1Dice.src = `img_png/${roll}.png`;
    } else {
        resultDisplay.textContent='player 1 roll'
        p2Points += roll;
        p2Score.textContent = p2Points;
        p1Dice.src = `img_png/${roll}.png`;
    }

    if (p1Points >= 30 || p2Points >= 30) {
        resultDisplay.textContent = p1Points > p2Points ? 'Player 1 wins!' : 'Player 2 wins!';
        gameFinished = true;
    }
    rollButton1.disabled = player === 'Player 1';
    rollButton2.disabled = player === 'Player 2';
    currentPlayer = player === 'Player 1' ? 'Player 2' : 'Player 1';
}

function resetGame() {
    p1Points = p2Points = 0;
    p1Score.textContent = p2Score.textContent = '0';
    resultDisplay.textContent = '';
    gameFinished = false;
    currentPlayer = Math.random() < 0.5 ? 'Player 1' : 'Player 2';
    rollButton1.disabled = false;
    rollButton2.disabled = false;
    p1Dice.src = 'img_png/2.PNG';
    p2Dice.src = 'dice1.png';
}


rollButton1.addEventListener('click', () => rollDice('Player 1'));
rollButton2.addEventListener('click', () => rollDice('Player 2'));
resetButton.addEventListener('click', resetGame);
resetGame();


