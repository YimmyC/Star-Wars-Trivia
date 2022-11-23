// Global Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let scoreDiv = document.querySelector("#score");
let formDiv = $("#form");
let introP = document.querySelector("#introP");
let score = JSON.parse(localStorage.getItem("score")) || [];
let scoreList = JSON.parse(localStorage.getItem("scoreList")) || [];
let addScoreBtn = document.querySelector("#addScore");
let highscoreDiv = document.querySelector("#highscoreTable");
var initialsEl = document.getElementById("initials");

let questions = [
  { title: "Which planet was the first to meet the death star's demise?", choices: ["Tatooine", "Alderaan", "Mustafar", "Kashyyyk"], answer: "Alderaan" },
  { title: "Which was the name given to Count Dooku when he bacame a sith lord?", choices: ["Darth Maul", "Darth Bane", "Darth Tyranus", "Darth Malgus"], answer: "Darth Tyranus" },
  { title: "Which planet DID NOT have a Jedi temple?", choices: ["Ilum", "Coruscant", "Hoth", "Dantooine"], answer: "Hoth" },
  { title: "'I got a bad feeling about this.' Which character never said this line?", choices: ["Jar Jar Binks", "Lando Calrissian", "Han solo", "Princess Leia"], answer: "Jar Jar Binks" },
  { title: "Which Jedi master secretly commissioned the creation of the clone army?", choices: ["Count Dooku", "Plo Koon", "Kit Fisto", "Sifo-Dyas"], answer: "Sifo-Dyas" },
  { title: "GAME OVER", choices: [], answer: "" },
];

let timeEl = document.querySelector(".time");
let secondsLeft = 60;

let questionsIndex = 1;
// Functions
function init() {
  console.log(scoreList);
  scoreList.sort(function (a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < scoreList.length; i += 1) {
    let liTag = document.createElement("li");
    liTag.textContent = scoreList[i].initials + " - " + scoreList[i].score;

    highscoreTable.appendChild(liTag);
    // highscoreTable.removeAttribute("class");
  }
}

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
  btnOne.className = "btn btn-info m-1";
  btnOne.textContent = questions[index].choices[0];
  btnOne.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.className = "btn btn-info m-1";
  btnTwo.textContent = questions[index].choices[1];
  btnTwo.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.className = "btn btn-info m-1";
  btnThree.textContent = questions[index].choices[2];
  btnThree.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.className = "btn btn-info m-1";
  btnFour.textContent = questions[index].choices[3];
  btnFour.dataset.answer = questions[index].answer;
  questionDiv.appendChild(btnFour);
}
function endGame() {
  let score = secondsLeft;
  localStorage.setItem("score", JSON.stringify(secondsLeft));
  alert("Game Over");
  console.log(score);
  formDiv.removeClass("hidden");
  scoreDiv.textContent = "Score:" + score;
}
function updateScoreList() {
  // e.preventdefault();
  var initials = initialsEl.value.trim();
  console.log("something happened");
  let playerScore = {
    initials: initials,
    score: secondsLeft,
  };
  // var playerScore = updateScoreList();
  scoreList.push(playerScore);
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
  // var olEl = document.querySelector(".hidden");
  console.log("about to init");

  console.log("init complete");
}

// Function Calls

init();

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

addScoreBtn.addEventListener("click", updateScoreList);
