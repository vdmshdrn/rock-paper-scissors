let computerScore = 0;
let playerScore = 0;
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.choise');
const playerOutpup = document.querySelector('.player_output');
const currentPlayerScore = document.querySelector('.current_player');
const winner = document.querySelector('.winner');
const currentCompScore = document.querySelector('.current_comp');

function game() {
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const playerChoise = button.id;
        const playerOut = document.createElement('p');
        playerOut.classList.add('playerOut');
        playerOut.textContent = `You choise ${playerChoise}`;
        //playerOutpup.appendChild(playerOut);

        const computerChoiseArray = ['rock', 'paper', 'scissors'];
        const computerChoise = computerChoiseArray[Math.floor(Math.random() * (3 - 0)) + 0];
        console.log(computerChoise);

        playRound(playerChoise, computerChoise);
        currentPlayerScore.textContent = `${playerScore}`;
        currentCompScore.textContent = `${computerScore}`;
        isWinner(computerScore, playerScore);

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




function isWinner(computerScore, playerScore) {
    if (computerScore === 5 || playerScore === 5) {
      
        return true;
    }
    return false;
}

function reload() {
    if (isWinner(computerScore, playerScore)) {
        setTimeout(function () {
            playerScore = 0;
            currentPlayerScore.textContent = `${playerScore}`;
            computerScore = 0;
            currentCompScore.textContent = `${computerScore}`;
            result.style.display = 'none';
            winner.textContent = '';
            game();
        }, 3000);
    }
}
game();