function getComputerChoice() {
    let words = ['rock', 'paper', 'scissors'];
    return words[Math.floor(Math.random() * words.length)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log(`User: ${playerSelection}, Machine: ${computerSelection}`)

    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        divRoundResult.textContent = 'You Win! Rock beats scissors';
        game('user');
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        divRoundResult.textContent = 'You Lose! Rock beats scissors';
        game('machine');
    }

    if (playerSelection === 'paper' && computerSelection === 'rock'){
        divRoundResult.textContent = 'You Win! Paper beats rock';
        game('user');
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        divRoundResult.textContent = 'You Lose! Paper beats rock';
        game('machine');
    }

    if (computerSelection === 'paper' && playerSelection === 'scissors'){
        divRoundResult.textContent = 'You Win! Scissors beats paper';
        game('user');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        divRoundResult.textContent = 'You Lose! Scissors beats paper';
        game('machine');
    } 
 
    if (playerSelection === computerSelection){
        divRoundResult.textContent = 'It\'s a tie!';
        game('tie');
    }

}

let userWins = '';
let computerWins = '';
function game(result) {
    if (result === 'machine') computerWins++;
    if (result === 'user') userWins++;

    currentScore.textContent = `User Wins: ${userWins}, Computer Wins: ${computerWins}`;

    if (userWins === 5 || computerWins === 5) {
        if (userWins > computerWins) divRoundResult.textContent = 'You won the game! Congratulations';
        else if (computerWins > userWins) divRoundResult.textContent = 'You lost the game! Good luck next time';
        userWins = 0;
        computerWins = 0;
    }

}