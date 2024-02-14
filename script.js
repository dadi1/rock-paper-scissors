function getComputerChoice() {
    var choices = [`rock`,`paper`,`scissor`];
     return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == computerSelection)
        return "It`s a tie!";
    if (playerSelection == "rock"){
        if (computerSelection == "paper")
            return "You Loose, Paper beats Rock!";
        else return " You win, Rock beats Scissor"
    }
    if (playerSelection == "paper"){
        if (computerSelection == "scissor")
            return "You Loose, Scissor beats Paper";
        else return "You Win, Paper beats ROck!";
    }
    if (playerSelection == "scissor"){
        if (computerSelection == "rock")
            return "You loose, Rock beats Scissor";
        else return "You Win, Scissor beats Rock";
    }
}

function playGame() {
    for (var i = 0; i < 5; i++){
        var computerSelection = getComputerChoice();
        var playerSelection = prompt("Choose: Rock, Paper or Scissor");
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame()