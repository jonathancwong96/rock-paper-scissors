// function declaration
// return rock, paper, or scissors
function getComputerChoice() {

    // generate a random integer between 0 and 2
    let randomNum = Math.floor(Math.random()*3);

    // if 0, return rock
    if (randomNum == 0) {
        return 'Rock'
    }
    // if 1, return paper
    else if (randomNum == 1) {
        return 'Paper'
    }
    // if 2, return scissors
    else {
        return 'Scissors'
    }
}


function playRound(playerSelection, computerSelection) {

        playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock'){
        if (computerSelection == 'Rock') {
            computerScore++;
            playerScore++;
            return 'Tie!'

        }
        else if (computerSelection == 'Paper') {
            computerScore++;
            return 'You Lose! Paper beats Rock'
        }
        else {
            playerScore++;
            return 'You Win! Rock beats Scissors'
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'Paper') {
            computerScore++;
            playerScore++;
            return 'Tie!'
        }
        else if (computerSelection == 'Scissors') {
            computerScore++;
            return 'You Lose! Scissors beats Paper'
        }
        else {
            playerScore++;
            return 'You Win! Paper beats Rock'
        }
    }
    else {
        if (computerSelection == 'scissors') {
            computerScore++;
            playerScore++;
            return 'Tie!'
        }
        else if (computerSelection == 'Rock') {
            computerScore++;
            return 'You Lose! Rock beats Scissors'
        }
        else {
            playerScore++;
            return 'You Win! Scissors beats Paper'
        }
    }
}

function game() {

    // for each round up to 5 rounds
    for (let round = 0; round < 5; round++) {

        // prompt user to enter playerSelection
        playerSelection = prompt('Enter input, choose carefully!')

        // get computer selection
        computerSelection = getComputerChoice();

        // call playRound to see results
        console.log(playRound(playerSelection,computerSelection));

        // display current score
        console.log(`Player: ${playerScore}, Computer: ${computerScore} `)
    }

    // find if player or computer won
    // display final score
    if (playerScore == computerScore) {
        console.log(`Tie Game! Final Score is Player: ${playerScore}, Computer: ${computerScore}`)
    }
    else if (playerScore < computerScore){
        console.log(`You Lose! Final Score is Player: ${playerScore}, Computer: ${computerScore}`)
    }
    else {
        console.log(`You Win! Final Score is Player: ${playerScore}, Computer: ${computerScore}`)
    }

}
let playerScore = 0;
let computerScore = 0;
game()