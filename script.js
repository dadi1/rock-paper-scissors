let computerScore = 0;
let playerScore = 0;
let winner = 0;

const div = document.querySelector("div");
const result = document.createElement("p");
div.append(result);
const score = document.createElement("p");
div.append(score);
const announce = document.createElement("p");
div.append(announce);

score.textContent = ` Player Score: ${playerScore} X Compuputer Score ${computerScore}`
announce.textContent = ` `
function getComputerChoice() {
    var choices = [`rock`,`paper`,`scissor`];
     return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return "It`s a tie!";
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            changeScore("computer");
            return "You Loose, Paper beats Rock!";
        } else { 
            changeScore("player");
            return " You win, Rock beats Scissor";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissor"){
            changeScore("computer");
            return "You Loose, Scissor beats Paper";
        } else {
            changeScore("player");
            return "You Win, Paper beats Rock!";
        }
    }
    else if (playerSelection == "scissor"){
        if (computerSelection == "rock"){
            changeScore("computer");
            return "You loose, Rock beats Scissor";
        } else {
            changeScore("player");
            return "You Win, Scissor beats Rock";
        }
    }
}

function playGame(choice) {
        if (winner == 1)
            resetGame();
        var playerSelection = choice;
        var computerSelection = getComputerChoice();
        result.textContent = playRound(playerSelection, computerSelection);
        checkWinner();
    }



function changeScore(choice) {
    if (choice == "computer")
        computerScore ++;
    if (choice == "player")
        playerScore ++;
    score.textContent = ` Player Score: ${playerScore} X Compuputer Score ${computerScore}`;
}

function checkWinner() {
    if (computerScore == 5){
        announce.textContent = "Ohh! You Loose :(";
        winner = 1;
    }
    if (playerScore == 5){
        announce.textContent = "Congrats!! You Win :)";
        winner = 1;
    }
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    winner = 0;
    announce.textContent = ' '
}
