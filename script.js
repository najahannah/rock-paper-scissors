let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
     let x = Math.floor(Math.random() * 3);
    
     if (x < 1) {
     return "rock";
     } else if (x > 1) {
     return "scissors";
     } else {
     return "paper";
     }
}
// console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors...shoot!");
    return choice.toLowerCase();
    }
// console.log(getHumanChoice())
    
function playRound() {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    
    if (humanChoice == computerChoice) {
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. This round is a tie!`);
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win this round! Human: ${humanScore}, Computer: ${computerScore}`);
        } else {
        computerScore++;
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. Computer wins this round! Human: ${humanScore}, Computer: ${computerScore}`);
    }
    }
playRound()

    

































