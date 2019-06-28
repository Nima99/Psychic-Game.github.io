// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables that hold references to the places in the HTML where we want to display things.
var userChoiceText = document.getElementById("userGuess");

var computerChoiceText = document.getElementById("computerchoice-text");
var myDisplays = document.getElementById("downNum");
var winner = document.getElementById("win-count");
var losser = document.getElementById("loss-count");
var myGuesses = 10;
var wins = 0;
var loss = 0;

myDisplays.textContent = myGuesses;
winner.textContent = wins;
losser.textContent = loss;

console.log()

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
// This function is run whenever the user presses a key.

function reset() {
    myDisplays.textContent = [];
    myGuesses = 10;
    options = [];
    myDisplays.textContent = options;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}

var options = [];

document.onkeyup = function (event) {

    var userGuess = event.key;
    
    if (userGuess === computerGuess) {
        wins++;
        winner.textContent = wins;
        reset();
    }
    if (myGuesses === 0) {
        loss++;
        losser.textContent = loss;
        reset();
    }
    
    // if (myGuesses === 0) {
    //     loss++;
    //     losser.textContent = loss;
    //     reset();
    // }
    // if (userGuess === computerGuess) {
    //     wins++;
    //     winner.textContent = wins;
    //     reset();
    // }

    // Determines which key was pressed.

    myGuesses--;
    myDisplays.textContent = myGuesses;


    options.push(userGuess)
    userChoiceText.textContent = options;

}
/* var cars = ["Saab", "Volvo", "BMW"]; */
/* document.getElementById("demo").innerHTML = cars; */



 //   if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
     // computerChoiceText.textContent = "The computer chose: " + computerGuess;
     // userChoiceText.textContent = "You chose: " + userGuess;
     // Display the user and computer guesses.
//  inside my function i can call a function
// create functions to start end the game, reset function

