var words = ["america", "europe", "africa", "southamerica", "asia"];
var word = words[Math.floor(Math.random() * words.length)];
var otherLetters = word.length;
var lettersGuessed = [];
var hangman = [];
var wins = 0;
var guesses = 9;


var resetGame = ("");
var diplay = ("");



// var guess = prompt("Guess a letter");

for (var i = 0; i < word.length; i++) {
    hangman[i] = "_";
}

var gameEl = document.getElementById("game"); // grab from html
gameEl.innerHTML = hangman.join(" "); // display dashes 

document.onkeyup = function (event) {
    var key = event.key;
    lettersGuessed.push(key);

    for (var j = 0; j < word.length; j++) {

        if (word[j] === key) {
            hangman[j] = key;
        }else{
           guesses = guesses -1;
        }

    }


    gameEl.innerHTML = hangman.join(" "); // display dashes with letters 
    

}


