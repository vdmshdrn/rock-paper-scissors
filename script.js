let computerScore = 0;
let playerScore = 0;



function getComputerChoise() {
    let getRandomNumber = Math.floor(1 + Math.random() * (3 + 1 - 1));
    let computerChoise = '';

    if (getRandomNumber === 1) {
        computerChoise = 'rock';
    } else if (getRandomNumber === 2) {
        computerChoise = 'paper';
    } else {
        computerChoise = 'scissors';
    }
    return computerChoise;
}
getComputerChoise();

function getPlayerChoise() {
    let playerChoise = prompt('Choise rock paper or scissors: ');
    return playerChoise.toLowerCase();
}


function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        console.log('Tie!')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log('You lose! Paper beats rock!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log('You win! Rock beats scissors!');
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore++;
        console.log('You win! Paper beats rock!');
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerScore++;
        console.log('You lose! Scissors beats paper!');
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerScore++
        console.log('You lose! Rock beats scissors!');
    } else {
        playerScore++;
        console.log('You win!Scissors beats paper!');
    }
}

//playRound(playerSelection, computerSelection);
function game() {
    for (x = 0; x < 5; x++) {
        const computerSelection = getComputerChoise();
        const playerSelection = getPlayerChoise();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('You win! Flawless victory!');
    } else if (computerScore > playerScore) {
        console.log('You lose! Game over!');
    } else {
        console.log('TIE!!!');
    }

}

game();