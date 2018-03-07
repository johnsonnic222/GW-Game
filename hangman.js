var words = ["america", "europe", "africa", "southamerica", "asia"];
var word = words[Math.floor(Math.random() * words.length)];
var otherLetters = word.length;
var lettersGuessed = [];
var hangman = [" "];
var wins = 0;
var guesses = 15;
var finalWord = word.split("");

function resetGame() {
    //location.reload();
    word = words[Math.floor(Math.random() * words.length)];
    finalWord = word.split("");
    guesses = 15;
    //lettersGuessed = [];
    //guessedEl.innerHTML = lettersGuessed.join(" ");
    hangman = [];
    for (var i = 0; i < word.length; i++) {
        hangman[i] = "_";
    }
    gameEl.innerHTML = hangman.join(" ");
};

var guessedEl = document.getElementById("guessed"); //data will go here under this div called from html
var gameEl = document.getElementById("game"); // grab from html
var winsEl = document.getElementById("wins");
var guessesLeftEl = document.getElementById("guessesLeft");



// var guess = prompt("Guess a letter");

for (var i = 0; i < word.length; i++) {
    hangman[i] = "_";
}


gameEl.innerHTML = hangman.join(" "); // display dashes 

document.onkeyup = function (event) {
    var key = event.key;
    lettersGuessed.push(key);
    //console.log(lettersGuessed);

    guessedEl.innerHTML = lettersGuessed.join(" ");
    guesses--;
    guessesLeftEl.innerHTML = guesses;

    for (var j = 0; j < word.length; j++) {

        if (word[j] === key) {
            hangman[j] = key;
        }
        console.log(finalWord, hangman);

        if (finalWord.join("") === hangman.join(""))  {
            resetGame();
            wins++;
        }else if (guesses === 0){
            resetGame();
            
        }

    }

    gameEl.innerHTML = hangman.join(" "); // display dashes with letters 
    winsEl.innerHTML = wins; //display on screen 



}