//Global Variables

let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

//The function randomly assigns 0, 1 or 2 to the 'result' variable
//If 'result' = 0, the function returns 'rock'
//If 'result' = 1, the function returns 'paper'
//If 'result' = 2, the function returns 'scissors'

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

  if (result === "rock" || result === "paper" || result === "scissors") {
    return result;
  } else {
    while (result !== "rock" || result !== "paper" || result !== "scissors") {
      result = prompt(
        "Invalid input, please enter: 'rock', 'paper', or scissors"
      ).toLocaleLowerCase();
      break;
    }
  }
  return result;
}

//The function receives the computer and the player choices
//It compares both choices:
// - If they are the same: it prints 'Draw!'
// - If they are different: it checks both answers and prints 'win' or 'loose' according to the game rules
// paper > rock
// rock > scissors
// scissors > paper

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("Draw!");
  } else {
    if ((computerChoice === "rock") & (humanChoice !== "paper")) {
      computerScore += 1;
      console.log("You loose");
    } else if ((computerChoice === "scissors") & (humanChoice !== "rock")) {
      console.log("You loose");
      computerScore += 1;
    } else if ((computerChoice === "paper") & (humanChoice !== "scissors")) {
      console.log("You loose");
      computerScore += 1;
    } else {
      console.log("You win");
      humanScore += 1;
    }
  }
  console.log("Your score: " + humanScore);
  console.log("Rival's score: " + computerScore);
}

//Round 1
computerChoice = getComputerChoice(3);
humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);

//Round 2
computerChoice = getComputerChoice(3);
humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);

//Round 3
computerChoice = getComputerChoice(3);
humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);

//Round 4
computerChoice = getComputerChoice(3);
humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);

//Round 4
computerChoice = getComputerChoice(3);
humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);
