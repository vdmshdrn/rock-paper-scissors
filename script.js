function getComputerChoise() {
    let getRandomNumber = Math.floor(1 + Math.random() * (3 + 1 -1));
    //return getRandomNumber;
    
    if (getRandomNumber === 1) {
        console.log('Rock');
    } else if (getRandomNumber === 2) {
        console.log ('Paper');
    } else {
        console.log ('Scissors');
    }
}
getComputerChoise();