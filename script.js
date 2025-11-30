// getting computer's choice.
function getComputerChoice(){
    const randomNumber = Math.random();

    if (randomNumber < 1/3){
        return "rock";
    }
    else if(randomNumber < 2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}
// console.log(getComputerChoice());

// getting the user's choice.
function getHumanChoice(){
    let userChoice = prompt("What do you pick between rock, paper or scissors?");
    return userChoice.toLowerCase();
}

// player score variable. 
let humanScore = 0;
let computerScore = 0;

//a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

function playGame() {
    const roundNumber = 5;

    for (let i = 1; i <= roundNumber; i++){
        console.log(`Round ${i}`);
        const humanSelection  = getHumanChoice();
        const computerSelection = getComputerChoice();  
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("You won this round!")
    }
    else if(computerScore > humanScore){
        console.log("You lose this round! ")
    }
    else{
        console.log("It was a tie!")
    }
}

playGame();