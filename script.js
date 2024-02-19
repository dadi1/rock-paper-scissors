function getComputerChoice() {
    var choices = [`rock`,`paper`,`scissor`];
     return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return "It`s a tie!";
    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            return "You Loose, Paper beats Rock!";
        } else { 
            return " You win, Rock beats Scissor";
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "scissor"){
            return "You Loose, Scissor beats Paper";
        } else {
            return "You Win, Paper beats Rock!";
        }
    }
    if (playerSelection == "scissor"){
        if (computerSelection == "rock"){
            return "You loose, Rock beats Scissor";
        } else {
            return "You Win, Scissor beats Rock";
        }
    }
}

function playGame(choice) {
        var computerSelection = getComputerChoice();
        var playerSelection = choice;
        console.log(playRound(playerSelection, computerSelection));
        result.textContent = playRound(playerSelection, computerSelection);
    }

const choice = document.getElementsByClassName("choice");

function playerChoice(){
    choice[0].addEventListener('click', () => {
    playGame("rock");
    });

 choice[1].addEventListener('click', () => {
    playGame("paper") 
 });

 choice[2].addEventListener('click', () => {
    playGame("scissor")
 });
}

getScore(variavel){
    if (variavel == 0){
        playerScore = 0;
        computerScore = 0;
    }
}

 const div = document.querySelector("div");
 const result = document.createElement("p");
 div.append(result);
 const score = document.createElement("p");
 div.append(score);
const announce = document.createElement("p");
div.append(announce);

let playerScore;
let computerScore;

announce.textContent = ` Player Score: ${playerScore} X Compuputer Score ${computerScore}`

playerChoice();