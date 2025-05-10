

function getComputerChoice() {
     let x = Math.floor(Math.random() * 3);
    
     if (x < 1) {
     return "computer chose rock";
     } else if (x > 1) {
     return "computer chose scissors"
     } else {
     return "computer chose paper"
     }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("rock, paper, scissors...shoot!");
    return("you chose " + choice)
    }
console.log(getHumanChoice())































