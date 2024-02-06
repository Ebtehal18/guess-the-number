const btnCheck = document.querySelector(".check");
const messagee = document.querySelector(".message");
let guess = document.querySelector(".guess");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const btnAgain = document.querySelector(".again");

const randomNumbe = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let score = 20;
let highScore = 0;
let random = randomNumbe();
const displayMessage = message => {
  messagee.textContent = message;
};
const bodyBackground = color => {
  body.style.backgroundColor = color;
};
const numberWidth = width => {
  number.style.width = width;
};
const numberContent = content => {
  number.textContent = content;
};
const displayScore = score => {
  document.querySelector(".score").textContent = score;
};
const checkFunction = () => {
  // there is no number
  guessValue = Number(guess.value);
  if (!guessValue) {
    displayMessage("Not a number ⛔");
  }
  // win
  else if (guessValue && guessValue === random) {
    displayMessage("Nice try you win 🎉✨");
    bodyBackground("#60b347");
    numberContent(guessValue);
    numberWidth("30rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  // guess is different
  else if (guessValue !== random) {
    displayMessage(guessValue > random ? "it's too high ↘" : "it's too low ↗");
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage("You lost💥");
    }
  }
};
// reset function
const againFunction = () => {
  score = 20;
  displayMessage("Start guessing...");
  numberContent("?");
  numberWidth("15rem");
  bodyBackground("#222");
  displayScore(score);
  random = randomNumbe();
  guess.value = "";
};
// check number
btnCheck.addEventListener("click", checkFunction);
guess.addEventListener("keydown", e => {
  e.key === "Enter" && checkFunction();
});

// reset number
btnAgain.addEventListener("click", againFunction);
