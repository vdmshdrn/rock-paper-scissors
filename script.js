let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.choise');
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const playerChoise = button.id;
        console.log(playerChoise);

        const computerChoiseArray = ['rock', 'paper', 'scissors'];
        const computerChoise = computerChoiseArray[Math.floor(Math.random() * (3 - 0)) + 0];
        console.log(computerChoise);

        playRound(playerChoise, computerChoise);
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


function game() {

    const computerSelection = getComputerChoise();
    const playerSelection = getPlayerChoise();
    playRound(playerSelection, computerSelection);

    if (playerScore > computerScore) {
        console.log('You win! Flawless victory!');
    } else if (computerScore > playerScore) {
        console.log('You lose! Game over!');
    } else {
        console.log('TIE!!!');
    }

}

//game();