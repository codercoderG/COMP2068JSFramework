// Import the prompt package
const prompt = require('prompt');


prompt.start();

const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Input must be ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

// Function to determine computer selection
function getComputerSelection() {
  const randomNum = Math.random();
  if (randomNum < 0.34) {
    return 'PAPER';
  } else if (randomNum < 0.68) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

// Function to determine the game outcome
function determineWinner(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "It's a tie";
  }

  if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    return 'User Wins';
  }

  return 'Computer Wins';
}

// Start the game
prompt.get(schema, (err, result) => {
  if (err) {
    console.error('Error during input:', err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();
  const computerSelection = getComputerSelection();

  console.log(`User selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);

  const outcome = determineWinner(userSelection, computerSelection);
  console.log(`Outcome: ${outcome}`);
});
