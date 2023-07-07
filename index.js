const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        
        if (!choices.includes(playerChoice)) {
            console.log("Invalid choice. Please try again.");
            i--;
            continue;
        }
        
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        if (result=='You win!'){
            playerWins++
        }else{
            computerWins++
        }

        console.log(`You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Computer wins: ${computerWins}`);
    }
    if (playerWins > computerWins) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Sorry, you lost the game. Best of luck next time!");
    }
    
}

game();