let computerScore = 0;
let playerScore = 0;
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.choise');
const currentPlayerScore = document.querySelector('.current_player');
const winner = document.querySelector('.winner');
const currentCompScore = document.querySelector('.current_comp');

function game() {
    buttons.forEach((button) => {

        button.addEventListener('click', () => {

            const playerChoise = button.id;
            const computerChoiseArray = ['rock', 'paper', 'scissors'];
            const computerChoise = computerChoiseArray[Math.floor(Math.random() * (3 - 0)) + 0];
            console.log(computerChoise);

            playRound(playerChoise, computerChoise);
            currentPlayerScore.textContent = `${playerScore}`;
            currentCompScore.textContent = `${computerScore}`;
            endGame(computerScore, playerScore);
            isWinner();

            reload();

        });
    });
}

function playRound(playerChoise, computerChoise) {


    if (playerChoise === computerChoise) {
        result.textContent = 'Tie!';
    } else if (playerChoise === 'rock' && computerChoise === 'paper') {
        computerScore++;
        result.textContent = 'You lose! Paper beats rock!';
    } else if (playerChoise === 'rock' && computerChoise === 'scissors') {
        playerScore++;
        result.textContent = 'You win! Rock beats scissors!';
    } else if (playerChoise === 'paper' && computerChoise == 'rock') {
        playerScore++;
        result.textContent = 'You win! Paper beats rock!';
    } else if (playerChoise === 'paper' && computerChoise == 'scissors') {
        computerScore++;
        result.textContent = 'You lose! Scissors beats paper!';
    } else if (playerChoise === 'scissors' && computerChoise == 'rock') {
        computerScore++;
        result.textContent = 'You lose! Rock beats scissors!';
    } else {
        playerScore++;
        result.textContent = 'You win!Scissors beats paper!';
    }
}




function endGame(computerScore, playerScore) {
    return computerScore === 5 || playerScore === 5;

}

function isWinner() {
    if (endGame()) {
        if (playerScore === 5) {
            result.style.display = 'none';
            console.log('hey');
        } else {
            result.style.display = 'none';
            console.log('ehey');
        }
    }
}

function reload() {
    
    if (endGame(computerScore, playerScore)) {
        setTimeout(function () {
            playerScore = 0;
            currentPlayerScore.textContent = `${playerScore}`;
            computerScore = 0;
            currentCompScore.textContent = `${computerScore}`;


        }, 3000);
    }
}
game();