const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;   
let ties = 0;

while (true) {
const playerChoice = prompt("Enter rock, paper or scissors (or q to quit): ");
if(playerChoice.toLowerCase() === "q") {
    break;
}
if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    console.log("Please enter a valid Choice.");
    continue;
} 

const playerChoices = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2); 
const computerChoice = playerChoices[randomIndex];
console.log("the computer chose:", computerChoice);

if (computerChoice === playerChoice){
    console.log("its a draw!")
    ties++;
} else if((playerChoice === "paper" && computerChoice === "rock") ||
 (playerChoice === "rock" && computerChoice === "scissors") || 
 (playerChoice === "scissors" && computerChoice === "paper")){
    console.log("you won!")
    wins++;
}else{
    console.log("you lose...")
    losses++;
}
}

console.log("wins", wins, "losses", losses, "ties", ties);
