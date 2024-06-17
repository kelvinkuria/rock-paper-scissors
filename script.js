document.addEventListener('DOMContentLoaded', () => {
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 0;
        } else if (
            (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
            (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
            (playerChoice === 'Paper' && computerChoice === 'Rock')
        ) {
            return 1;
        } else {
            return -1;
        }
    }

    function showResult(score, playerChoice, computerChoice) {
        const resultDiv = document.querySelector('.result');
        if (score === 1) {
            resultDiv.innerText = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
        } else if (score === -1) {
            resultDiv.innerText = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
        } else {
            resultDiv.innerText = `It's a draw! You both chose ${playerChoice}`;
        }
    }

    function onClickRPS(playerChoice) {
        const computerChoice = getComputerChoice();
        const score = getResult(playerChoice, computerChoice);
        showResult(score, playerChoice, computerChoice);
    }

    function playGame() {
        const rpsButtons = document.querySelectorAll('.rpsButton');
        rpsButtons.forEach(button => {
            button.addEventListener('click', () => onClickRPS(button.value));
        });
        const endGameButton = document.querySelector('.endGameButton');
        endGameButton.addEventListener('click', endGame);
    }

    function endGame() {
        const resultDiv = document.querySelector('.result');
        const playerScoreDiv = document.querySelectorAll('.player-score');
        const handsDiv = document.querySelector('.hands');
        resultDiv.innerText = '';
        playerScoreDiv.forEach(div => div.innerText = "");
        handsDiv.innerText = '';
    }

    playGame();
});