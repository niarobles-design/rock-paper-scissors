//Global Variables

let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

//The function randomly assigns 0, 1 or 2 to the 'result' variable
//If 'result' = 0, the function returns 'rock'
//If 'result' = 1, the function returns 'paper'
//If 'result' = 2, the function returns 'scissors'

let computerChoice = "";
let humanChoice = "";
function getComputerChoice(max) {
  let result = Math.floor(Math.random() * max);
  if (result === 0) {
    return "rock";
  } else if (result === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//The function ask the user to enter input and it assigns it to the 'result' variable
//Then it converts it to lowercase and checks if it matches:
//In case the input doesn't match: 'rock', 'paper' or 'scissors'
//It keeps asking for a correct input until it gets a correct one
//Finally it returns 'result'

function getHumanChoice() {
  let result = prompt(
    "What's your choice? 'Rock', 'paper', or scissors?"
  ).toLocaleLowerCase();

  while (result !== "rock" || result !== "paper" || result !== "scissors") {
    result = prompt(
      "Invalid input, please enter: 'rock', 'paper', or scissors"
    ).toLocaleLowerCase();
    if (result === "rock" || result === "paper" || result === "scissors") {
      break;
    }
  }
  return result;
}

computerChoice = getComputerChoice(3);
console.log(computerChoice);

humanChoice = getHumanChoice();
console.log(humanChoice);
