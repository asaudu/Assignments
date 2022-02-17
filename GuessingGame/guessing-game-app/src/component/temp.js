let secretNumber;
let secretNumber2;
let secretNumber3;

const theGuess = document.getElementById("theGuess")
const theGuess2 = document.getElementById("theGuess2")
const theGuess3 = document.getElementById("theGuess3")

const startButton = document.getElementById("startButton")
const startButton2 = document.getElementById("startButton2")
const startButton3 = document.getElementById("startButton3")

const submitButton = document.getElementById("submitButton")
const submitButton2 = document.getElementById("submitButton2")
const submitButton3 = document.getElementById("submitButton3")

let totalGuesses = "";
let totalGuesses2 = "";
let totalGuesses3 = "";

startButton.addEventListener("click", (event) => {
  startTheGame(10);
  event.preventDefault()
  })

  startButton2.addEventListener("click", (event) => {
  startTheGame2(20);
  event.preventDefault()
  })

  startButton3.addEventListener("click", (event) => {
  startTheGame3(40);
  event.preventDefault()
  })

  // const matrixBackground = document.querySelector("body");
  // matrixBackground.addEventListener("click", (event) => {
  //   startButton.style.backgroundColor = 'orange'
  // })
  //Try to create a function that changes the backgorund to the matrix numbers


submitButton.addEventListener("click", (event) => {
  guessEvaluator();
  event.preventDefault()
  }
)

submitButton2.addEventListener("click", (event) => {
  guessEvaluator2();
  event.preventDefault()
  }
)

submitButton3.addEventListener("click", (event) => {
  guessEvaluator3();
  event.preventDefault()
  }
)



function startTheGame(max) {
  secretNumber = Math.floor(Math.random() * max + 1);
}

function startTheGame2(max) {
  secretNumber2 = Math.floor(Math.random() * max + 1);
}

function startTheGame3(max) {
  secretNumber3 = Math.floor(Math.random() * max + 1);
}

//create a function that takes in the randomNumberGenerator
//if else statement that covers greater than "Your number is too high"
//else if less than "Your number is too low"
//else would be equals to aka "You wiiin

// let backgroundSwitch =
//     document.querySelector('body');
// backgroundSwitch.addEventListener('click', () =>
//       backgroundSwitch.style.backgroundColor = 'lavender');


function guessEvaluator() {

  const submission = theGuess.value;

  if(secretNumber < submission) {
    document.getElementById("totalGuesses").textContent = "Your number is too high"
    totalGuesses++
  } else if (secretNumber > submission) {
    document.getElementById("totalGuesses").textContent = "Your number is too low"
    totalGuesses++
  } else {
    document.getElementById("totalGuesses").textContent = "You wooon!! And you got it done in " + totalGuesses + " guesses!";
    //put body info here for background change
    // backgroundSwitch();
    // document.body.style.backgroundColor = "red"
    //'url("https://tenor.com/view/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-codes-numbers-matrix-gif-16957019")'
  }
  
}


function guessEvaluator2() {

  const submission2 = theGuess2.value;

  if(secretNumber2 < submission2) {
    document.getElementById("totalGuesses2").textContent = "Your number is too high"
    totalGuesses2++
  } else if (secretNumber2 > submission2) {
    document.getElementById("totalGuesses2").textContent = "Your number is too low"
    totalGuesses2++
  } else {
    document.getElementById("totalGuesses2").textContent = "You wooon!! And you got it done in " + totalGuesses2 + " guesses!";
    //put body info here for background change
    // backgroundSwitch();
    // document.body.style.backgroundColor = "red"
    //'url("https://tenor.com/view/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-codes-numbers-matrix-gif-16957019")'
  }
  
}



function guessEvaluator3() {

  const submission3 = theGuess3.value;

  if(secretNumber3 < submission3) {
    document.getElementById("totalGuesses3").textContent = "Your number is too high"
    totalGuesses3++
  } else if (secretNumber3 > submission3) {
    document.getElementById("totalGuesses3").textContent = "Your number is too low"
    totalGuesses3++
  } else {
    document.getElementById("totalGuesses3").textContent = "You wooon!! And you got it done in " + totalGuesses3 + " guesses!";
    //put body info here for background change
    // backgroundSwitch();
    // document.body.style.backgroundColor = "red"
    //'url("https://tenor.com/view/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-codes-numbers-matrix-gif-16957019")'
  }
  
}