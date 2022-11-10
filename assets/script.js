// Global Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");

// Functions
function startQuiz() {
  alert("I started the game");
  // Bring up question 1
  let title = document.createElement("h2");
  title.textContent = "Who is the best magician?";
  questionDiv.appendChild(title);
  // add four answer options
  let btnOne = document.createElement("button");
  // Make clickable
}

// Function Calls

startQuizBtn.addEventListener("click", startQuiz);
