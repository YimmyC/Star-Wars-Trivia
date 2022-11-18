// Global Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let scoreDiv = document.querySelector("#score");
let formDiv = $("#form");
let introP = document.querySelector("#introP");
let score = JSON.parse(localStorage.getItem("score")) || [];
let addScoreBtn = $("#addScore");

let questions = [
  { title: "This is the first question?", choices: ["one", "two", "three", "four"], answer: "two" },
  { title: "This is the second question?", choices: ["uno", "dos", "tres", "quatro"], answer: "tres" },
  { title: "This is the third question?", choices: ["uno", "dos", "tres", "quatro"], answer: "tres" },
  { title: "GAME OVER", choices: [], answer: "" },
];

let timeEl = document.querySelector(".time");
let secondsLeft = 60;

let questionsIndex = 1;
// Functions
function startQuiz() {
  alert("I started the game");
  setTime();
  createButtons(0);

  // Bring up question 1
}
// timer function
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "TIME REMAINING: " + secondsLeft + " SECONDS";

    if (secondsLeft < 1 || questionsIndex === questions.length) {
      clearInterval(timerInterval);
      endGame();
      //endgame function goes here
    }
  }, 1000);
}

function createButtons(index) {
  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  questionDiv.appendChild(title);
  introP.remove();
  startQuizBtn.remove();
  // cycle through questions
  // add four answer options
  let btnOne = document.createElement("button");
  btnOne.textContent = questions[index].choices[0];
  btnOne.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[index].choices[1];
  btnTwo.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[index].choices[2];
  btnThree.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[index].choices[3];
  btnFour.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnFour);
}
function endGame() {
  // let score = secondsLeft;
  // localStorage.setItem("score", JSON.stringify(secondsLeft));
  alert("Game Over");
  console.log(score);
  formDiv.removeClass("hidden");
}
function updateScoreList(event) {
  event.preventDefault();
  let score = {
    Initials: $("#initials").val(),
    score: secondsLeft.val(),
  };
  localStorage.setItem("score", JSON.stringify(score));
}
// Function Calls

startQuizBtn.addEventListener("click", startQuiz);

questionDiv.addEventListener("click", function (event) {
  console.log(event);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;

  if (questionsIndex === questions.length) {
    endGame();
  } else if (choice === answer) {
    alert("Correct!");
    createButtons(questionsIndex);
    questionsIndex++;
    // If answer is correct, do something
    // show next question
  } else if (choice !== answer) {
    secondsLeft -= 10;
  }
});

addScoreBtn.on("submit", updateScoreList);
