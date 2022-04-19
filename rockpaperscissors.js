const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

//testing
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('brownies'));
// console.log(getUserChoice('rock'));

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//testing
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You win!'
  }
  if (userChoice === computerChoice) {
    console.log('Game is tied!');
  } else if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

//testing
// console.log(determineWinner('paper', 'paper'));

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




