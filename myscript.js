// function declaration
// return rock, paper, or scissors
function getComputerChoice() {

    // generate a random integer between 0 and 2
    let randomNum = Math.floor(Math.random()*3);

    // if 0, return rock
    if (randomNum == 0) {
        return "Rock"
    }
    // if 1, return paper
    else if (randomNum == 1) {
        return "Paper"
    }
    // if 2, return scissors
    else {
        return "Scissors"
    }

}