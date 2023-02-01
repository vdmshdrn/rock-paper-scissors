let computerScore = 0;
let playerScore = 0;
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.choise');
const playerOutpup = document.querySelector('.player_output');
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        const playerChoise = button.id;
        const playerOut = document.createElement('p');
        playerOut.classList.add('playerOut');
        playerOut.textContent = `You choise ${playerChoise}`;
        playerOutpup.appendChild(playerOut);

        const computerChoiseArray = ['rock', 'paper', 'scissors'];
        const computerChoise = computerChoiseArray[Math.floor(Math.random() * (3 - 0)) + 0];
        console.log(computerChoise);

        playRound(playerChoise, computerChoise);
        console.log(`${computerScore} and ${playerScore}`);
        
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

    if (playerScore > computerScore) {
        console.log('You win! Flawless victory!');
    } else if (computerScore > playerScore) {
        console.log('You lose! Game over!');
    } else {
        console.log('TIE!!!');
    }

}

//game();