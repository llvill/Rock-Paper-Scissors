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

let humanScore = 0;
let computerScore = 0;


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
        console.log("Rock beats scissors. The computer has won.") 
        computerScore += 1;
    }
    else if(computerChoice === "scissors" && humanChoice === "rock"){
        console.log("Rock beats scissors. You won!!!")
        humanScore += 1;
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        console.log("Paper beats rock. The computer has won.")
        computerScore += 1;
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        console.log("Paper beats rock. You won!!!")
        humanScore += 1;
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        console.log("Scissors beats paper. The computer has won.")
        computerScore += 1;
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        console.log("Scissors beats paper. You won!!!")
        humanScore += 1;
    }
    else{
        console.log("It was a draw...")
    }
}
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