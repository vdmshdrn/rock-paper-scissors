let computerScore = 0;
let playerScore = 0;
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.choise');
const playerOutpup = document.querySelector('.player_output');
const currentPlayerScore = document.querySelector('.current_player');
const currentCompScore = document.querySelector('.current_comp');
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
        currentCompScore.textContent =`${computerScore}`;
        winner(computerScore, playerScore);

        reload();

    });
});


function playRound(playerChoise, computerChoise) {


    if (playerChoise === computerChoise) {
        console.log('Tie!');
    } else if (playerChoise === 'rock' && computerChoise === 'paper') {
        computerScore++;
        console.log('You lose! Paper beats rock!');
    } else if (playerChoise === 'rock' && computerChoise === 'scissors') {
        playerScore++;
        console.log('You win! Rock beats scissors!');
    } else if (playerChoise === 'paper' && computerChoise == 'rock') {
        playerScore++;
        console.log('You win! Paper beats rock!');
    } else if (playerChoise === 'paper' && computerChoise == 'scissors') {
        computerScore++;
        console.log('You lose! Scissors beats paper!');
    } else if (playerChoise === 'scissors' && computerChoise == 'rock') {
        computerScore++;
        console.log('You lose! Rock beats scissors!');
    } else {
        playerScore++;
        console.log('You win!Scissors beats paper!');
    }
}




function winner(computerScore, playerScore) {
    if (computerScore === 5 || playerScore === 5) {
        const winner = playerScore === 5 ? 'You WIN! Flawless victory!' :
            'You lose!';
        console.log(winner);
        return true;
    }
    return false;
}

function reload() {
    if (winner(computerScore, playerScore)) {
        playerScore = 0;
        computerScore = 0;
    }
}