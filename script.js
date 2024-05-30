function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    if (n == 0) {
      return "rock";
    } else if (n == 1) {
      return "paper";
    } else if (n == 2) {
      return "scissors";
    }
  }

  divButtons = document.createElement("div");
  document.body.appendChild(divButtons);
  const choices = ["Rock", "Paper", "Scissors"];
  for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button");
    button.textContent = choices[i];
    divButtons.appendChild(button);
    button.addEventListener("click", () => playRound(choices[i].toLowerCase()));
  }

  divResults = document.createElement("div");
  document.body.appendChild(divResults);

  currentScore = document.createElement("div");
  document.body.appendChild(currentScore);


  let humanScore = 0;
  let computerScore = 0;
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === "rock" && computerChoice === "paper") {
    divResults.textContent = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    divResults.textContent = "You win! Rock beats Paper";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    divResults.textContent = "You win! Paper beats rock";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    divResults.textContent = "You lose! scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    divResults.textContent = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    divResults.textContent = "You win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    divResults.textContent = "It's a draw!";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    divResults.textContent = "It's a draw!";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    divResults.textContent = "It's a draw!";
  }
  
  currentScore.textContent = `Human score: ${humanScore} 
  Computer score: ${computerScore}`;

    
  if (humanScore >= 5 && computerScore < 5) {
    divResults.textContent = "You've won the match!";
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore < 5 && computerScore >= 5 ) {
    divResults.textContent = "The computer has won the match!";
    computerScore = 0;
    humanScore = 0;
  } 
}
