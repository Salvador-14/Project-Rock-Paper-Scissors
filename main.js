game();

function getComputerChoice() {
    let words = ['rock', 'paper', 'scissors'];
    return words[Math.floor(Math.random() * words.length)];

}

function playRound() {
    
    let playerSelection = prompt("Choose: rock, paper or scissors?").toLowerCase();
    playerSelection = playerSelection.trim();
    let computerSelection = getComputerChoice();

    console.log(`User: ${playerSelection}, Machine: ${computerSelection}`)

    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You Win! Rock beats scissors');
        return 'user';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        console.log('You Lose! Rock beats scissors');
        return 'machine';
    }

    if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You Win! Paper beats rock');
        return 'user';
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        console.log('You Lose! Paper beats rock');
        return 'machine';
    }

    if (computerSelection === 'paper' && playerSelection === 'scissors'){
        console.log('You Win! Scissors beats paper');
        return 'user';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You Lose! Scissors beats paper');
        return 'machine';
    } 
 
    if (playerSelection === computerSelection){
        console.log('It\'s a tie!');
        return 'tie';
    }

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid option");
    }

}

function game() {
    //funcion no esta sumando el resultado al usuario o la computadora, siempre quedan en 1 - 1


    let userWins;
    let computerWins;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        
        if (result === 'machine') computerWins =+ 1;
        if (result === 'user') userWins =+ 1;
        if (result === 'tie') continue;
        if (!result){
            i = -1;
            alert('Invalid option try again')
        }

     }

    if (userWins > computerWins) alert('You win! Congratulations') 
    else if (computerWins > userWins) alert('You Lose! Good luck next time') 
    else if (userWins === computerWins) alert('It\'s a tie!');
    console.log(userWins);
    console.log(computerWins);
}

