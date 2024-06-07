/*
COMPUTER CHOICE
1. Create function 'getComputerChoice'
2. Make 'getComputerChoice' to randomly return "Rock", "Paper", or "Scissors"
HUMAN CHOICE
1. create func 'getHumanChoice'
2. make 'getHumanChoice' return one of the valid choices depending on what the user inputs

DECLARE THE PLAYERS SCORE VARIABLES
1. create vars 'humanScore' and 'computerScore'
2. init them to 0

WRITE THE LOGIC TO PLAY A SINGLE ROUND
1. create func 'playRound'
2. define two parameters for 'playRound': 'humanChoice' and 'computerChoice'
3. humanChoice must be case-insensitive to accept all possible user inputs
4. 'playRound' function should display a string stating the round winner
5. increment scores for human and computer

WRITE LOGIC TO PLAY ENTIRE GAME
1. create func 'playGame'
2. move 'playRound' function and score varaibles inside of 'playGame' function
3. play 5 rounds by declaring 'playRound' 5 times
*/
document.addEventListener("DOMContentLoaded", function(){

const title = document.createElement('h1');
title.textContent = "Rock Paper Scissors Game";
title.style.textAlign = "center";
document.body.appendChild(title)

    const btnContainer = document.createElement('div');
    btnContainer.style.display = "flex";
    btnContainer.style.alignItems = "center";
    btnContainer.style.justifyContent = "center";
    btnContainer.style.gap = "10px";
    
    
    
    const rockButton = document.createElement('button');
    rockButton.style.width = "100px";
    rockButton.style.color = "white";
    rockButton.style.backgroundColor = "grey";
    rockButton.textContent = "Rock";
    rockButton.addEventListener('click', function(){
        playRound("rock", getComputerChoice());
    });

    const paperButton = document.createElement('button');
    paperButton.style.width = "100px";
    paperButton.style.backgroundColor = "light gray";
    paperButton.textContent = "Paper";
    paperButton.addEventListener('click', function(){
        playRound("paper", getComputerChoice());
    });

    const scissorsButton = document.createElement('button');
    scissorsButton.style.width = "100px";
    scissorsButton.style.color = "white";
    scissorsButton.style.backgroundColor = "red";
    scissorsButton.textContent = "Scissors";
    scissorsButton.addEventListener('click', function(){
        playRound("scissors", getComputerChoice())
    });

    btnContainer.appendChild(rockButton);
    btnContainer.appendChild(paperButton);
    btnContainer.appendChild(scissorsButton);

    document.body.appendChild(btnContainer);

    const resultsDiv = document.createElement('div');
    resultsDiv.style.textAlign = "center";
    resultsDiv.style.marginTop = "30px";
    resultsDiv.setAttribute('id', 'results');
    document.body.appendChild(resultsDiv);


});

let humanScore = 0;
let computerScore = 0;

function updateResults(result) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = ` | You: ${humanScore} | Computer: ${computerScore} | \n${result}\n`;

    if(humanScore === 5) {
        resultsDiv.textContent += "\nCongratulation! You win!\n";
        resetGame();
    }
    else if (computerScore === 5) {
        resultsDiv.textContent += "\nSorry, the computer wins!\n";
        resetGame();
    }

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function getComputerChoice(){
    let comChoice = (Math.floor(Math.random() * 3));
    if (comChoice === 0){
        return "rock";
    }
    else if(comChoice === 1){
        return "paper";
    }
    else if(comChoice === 2){
        return "scissors";
    }
}

function getHumanChoice(){
    let humChoice = prompt("Rock, paper, or scissors: ");
    humChoice = humChoice.toLowerCase();
    return humChoice;
}

function playRound(humanChoice, computerChoice){
    if(computerChoice === "rock" && humanChoice === "scissors"){
        updateResults("Rock beats scissors. The computer has won this round.") 
        computerScore += 1;
    }
    else if(computerChoice === "scissors" && humanChoice === "rock"){
        updateResults("Rock beats scissors. You won this round!")
        humanScore += 1;
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        updateResults("Paper beats rock. The computer has won this round.")
        computerScore += 1;
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        updateResults("Paper beats rock. You won this round!")
        humanScore += 1;
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        updateResults("Scissors beats paper. The computer has won this round.")
        computerScore += 1;
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        updateResults("Scissors beats paper. You won this round!")
        humanScore += 1;
    }
    else{
        updateResults("This round was a draw...")
    }
}
/* //  Removing playGame() function for now!!!
function playGame(){
    for(let x = 1; x <= 5; x++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Round " + x);
        console.log("The computer picked " + computerSelection)
        playRound(humanSelection, computerSelection);
    }
    if(computerScore > humanScore){
        console.log("The computer has won by a score of " + computerScore + "-" + humanScore + ".");
    }
    else if(humanScore > computerScore){
        console.log("You have won by a score of " + humanScore + "-" + computerScore + "!");
    }
    else{
        console.log("The score was tied. No winner.")
    }
}

playGame();
*/