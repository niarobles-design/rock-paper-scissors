//The function randomly assigns 0, 1 or 2 to the 'result' variable
//If 'result' = 0, the function returns 'rock'
//If 'result' = 1, the function returns 'paper'
//If 'result' = 2, the function returns 'scissors'

let computerChoice = "";

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
