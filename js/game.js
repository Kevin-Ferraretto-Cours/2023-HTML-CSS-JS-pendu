//Variable containing all possible words to find
let programming_languages = [
	"python",
	"javascript",
	"java"
]

//Variable containing the complete word to be found
let answer = '';
//Variable containing just the letters to be found
let middleAnswer = '';
//Variable that counts the number of times you've made a mistake
let mistakes = 0;
//Variable containing all letters try
let guessed = [];
//Variable displayed on the game screen
let wordStatus = null;
//Variable containing all keyboard keys
let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz';
//Variable for ending the game if the user has lost or won (to avoid clicking again when they've lost).
let playable = true; 


//Function to output a new word to find
function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
  document.getElementById("word").innerHTML = 'Mots à trouver : ' + answer;
}

//Function to generate the click keyboard
function generateButtons() {
  let div = document.getElementById("keyboard");
  div.innerHTML = "";
  for (let element of buttonsHTML) {
    let button = document.createElement('button');
    button.id = element;
    button.className = "letters";
    button.textContent = element;
    button.addEventListener('mousedown', handleGuess);
    div.appendChild(button);
  }
}

//Function launched by clicking or tapping a key on the keyboard
function handleGuess(event) {
  if (playable) {
    let chosenLetter
    if (event != undefined) {
      if (buttonsHTML.indexOf(event.key) != -1 || buttonsHTML.toUpperCase().indexOf(event.key) != -1) {
        chosenLetter = event.key.toLowerCase();
      } else if (buttonsHTML.indexOf(event.target.id.toLowerCase()) != -1) {
          chosenLetter = event.target.id;
      } else {
        return;
      }
    } else {
      return;
    }
      
    if (guessed.indexOf(chosenLetter) === -1) {
      guessed.push(chosenLetter);
    } else {
        return;
    }

    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (middleAnswer.indexOf(chosenLetter) >= 0) {
      let goodSound = new Audio("audio/correct.mp3");
      goodSound.play();
      guessedWord();
      checkIfGameWon();
    } else if (middleAnswer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture();
    }
  }
}

//Function to update the image of the hanged man
function updateHangmanPicture() {
  let chalkSound = new Audio("audio/chalk.mp3");
  chalkSound.play();
  document.getElementById('hangman').src = 'img/' + mistakes + '.png';
}

//Function to check whether the player has won
function checkIfGameWon() {
  if (wordStatus === answer) {
    let clapSound = new Audio("audio/clap.mp3");
    clapSound.play();
    document.getElementById('keyboard').innerHTML = 'Tu as gagné';
    playable = false;
  }
}

//Function to check whether the player has lost
function checkIfGameLost() {
  if (mistakes === 6) {
    document.getElementById('wordSpotlight').innerHTML = 'La réponse est: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Tu as perdu';
    playable = false;
  }
}

//Function to generate the word to find with the 1st and last letter
function guessedWord() {
  let firstLetter = answer.charAt(0);

  let lastLetter = answer.charAt(answer.length - 1);

  let middlePart = answer.slice(1, -1);
  middleAnswer = middlePart;
  let middleArray = middlePart.split('');

  let processedMiddlePart = middleArray.map(letter => {
    if (guessed.indexOf(letter) >= 0) {
      return letter;
    } else {
      return " _ ";
    }
  });

  wordStatus = firstLetter + processedMiddlePart.join('') + lastLetter;

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

//Function to display the number of errors
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

//Function to reset the game 
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangman').src = 'img/' + mistakes +'.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  playable = true;
}

//Registers an event when a key is pressed
document.addEventListener('keypress', handleGuess);
//Adds reset event when reset button is clicked
document.getElementById('restart').addEventListener('click', reset);


randomWord();
generateButtons();
guessedWord();