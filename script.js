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
const playerSelection = "Rock";
const computerSelection = getComputerChoise();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log('Tie!')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors!');
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        console.log('You win! Paper beats rock!');
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        console.log('You lose! Scissors beats paper!');
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        console.log('You lose! Rock beats scissors!');
    } else {
        console.log('You win!Scissors beats paper!');
    }
}

playRound(playerSelection, computerSelection);