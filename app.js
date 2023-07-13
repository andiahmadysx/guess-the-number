const answerRef = document.getElementById("answer-input");
const guessButton = document.getElementById("guess-btn");
const erorrRef = document.querySelector(".error");
const resultRef = document.querySelector(".result");
const gameWrapper = document.querySelector(".game-wrapper");
const resultWrapper = document.querySelector(".result-wrapper");
const restartButton = document.getElementById("restart");
const detail = document.querySelector('.detail');

// define random number and user input history variable
let randomNumber = 10;
let history = [];

function init() {
  // check input user valid or not
  if (answerRef.value == "" || answerRef.value < 0 || answerRef.value > 100) {
    alert("Invalid input");
    return;
  }

  // add user input history
  history.push(answerRef.value);
  animate(erorrRef);

  // check user num and random num
  checkNumber(answerRef.value, randomNumber)

  // render history elem
  detail.innerHTML = `
  <p>No. Of Guesses: ${history.length}</p>
  <p>Guessed Numbers are: ${history.join(', ')}</p>
  `
}

// check number
function checkNumber(num, rNum){
  if (num < rNum) {
    erorrRef.textContent = "Too low. Try again!";
  } else if (num > rNum) {
    erorrRef.textContent = "Too high. Try again!";
  } else {
    win();
  }
}

// handle win
function win() {
  // 
  gameWrapper.classList.add("hide");
  resultWrapper.classList.remove("hide");
  
  // 
  animate(resultWrapper);

  //
  resultRef.innerHTML = `
  <p>Congratulations!</p>
  <p>The number was ${randomNumber}</p>
  <p>You guessed the number in ${history.length} tries</p>
  `
}

// animate 
function animate(elem) {
  elem.classList.add("animate");
  elem.classList.remove("hide");
  setTimeout(() => {
    elem.classList.remove("animate");
  }, 300);
}

// restart game
function restart() {
  randomNumber = generateRandomNum();
  history = [];
  gameWrapper.classList.remove("hide");
  resultWrapper.classList.add("hide");
  erorrRef.classList.add("hide");
  answerRef.value = "";
  resultRef.innerHTML = '';
  detail.innerHTML = '';
 
}
// generate random number
function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

restartButton.addEventListener("click", restart);
guessButton.addEventListener("click", init);
