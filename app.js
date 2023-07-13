const answerRef = document.getElementById("answer-input");
const guessButton = document.getElementById("guess-btn");
const numberOfGuessRef = document.querySelector(".number-of-guess");
const guessesNumber = document.querySelector(".guesses-number");
const erorrRef = document.querySelector(".error");
const resultRef = document.querySelector(".result");
const resultNumberRef = document.querySelector(".result-number");
const numberTries = document.querySelector(".number-tries");
const gameWrapper = document.querySelector(".game-wrapper");
const restartButton = document.getElementById("restart");

let randomNumber = 10;
let tries = [];

function checkNumber() {
  //
  if (answerRef.value == "" || answerRef.value < 0 || answerRef.value > 100) {
    alert("Invalid input");
    return;
  }

  tries.push(answerRef.value);
  animate(erorrRef);

  //
  if (answerRef.value < randomNumber) {
    erorrRef.textContent = "Too low. Try again!";
  } else if (answerRef.value > randomNumber) {
    erorrRef.textContent = "Too high. Try again!";
  } else {
    win();
  }

  //
  guessesNumber.textContent = tries.join(", ");
  numberOfGuessRef.textContent = tries.length;
}

function win() {
  gameWrapper.classList.add("hide");
  resultRef.classList.remove("hide");
  animate(resultRef);

  //
  numberTries.textContent = tries.length;
  resultNumberRef.textContent = randomNumber;
}

function animate(elem) {
  elem.classList.add("animate");
  elem.classList.remove("hide");
  setTimeout(() => {
    elem.classList.remove("animate");
  }, 300);
}

function restart() {
  randomNumber = generateRandomNum();
  tries = [];
  gameWrapper.classList.remove("hide");
  resultRef.classList.add("hide");
  erorrRef.classList.add("hide");
  answerRef.value = "";
  guessesNumber.textContent = "";
  numberOfGuessRef.textContent = "";
}

function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

restartButton.addEventListener("click", restart);
guessButton.addEventListener("click", checkNumber);
