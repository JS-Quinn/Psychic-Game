 //Establish variables
 var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var lettersGuessed = [];
 var userGuess = null;

 //Computer picks a letter
 var letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + lettersGuessed + " Computer picked: " + letterToGuess);

 //store pressed keys to userGuess
 document.onkeyup = function(event) {
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

     //If the user guess is part of the alphabet array and has not already been guessed, store it in "lettersGuessed". Also subtract 1 from guessesLeft
     if (lettersGuessed.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
         lettersGuessed[lettersGuessed.length]=userGuess;
         guessesLeft--;
     }

     //If the User guesses correctly: add 1 to wins, reset guesses left to 9, clear out the letters guessed array, generate a new letter to be guessed.
     if (letterToGuess == userGuess) {
         wins++;
         console.log("You won!");
         guessesLeft = 9;
         lettersGuessed = [];
         letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
         console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + lettersGuessed + " Computer picked: " + letterToGuess);
     }

     //If guessesLeft reaches 0: add 1 to losses, reset guessesLeft to 9, clear out letters Guesses array, generate a new letter to be guessed. 
     if (guessesLeft == 0) {
         losses++;
         console.log("You lost");
         guessesLeft = 9;
         lettersGuessed = [];
         letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
         console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Guesses so far: " + lettersGuessed + " Computer picked: " + letterToGuess);
     }

     // Display in HTML
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses: " + lettersGuessed + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

 }

