// Global Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let questions = [
  { title: "This is the first question?", choices: ["one", "two", "three", "four"], answer: "two" },
  { title: "This is the second question?", choices: ["uno", "dos", "tres", "quatro"], answer: "tres" },
  { title: "This is the third question?", choices: ["uno", "dos", "tres", "quatro"], answer: "tres" },
];

let questionsIndex = 1;
// Functions
function startQuiz() {
  alert("I started the game");
  startTimer();
  createButtons(0);
  // Bring up question 1
}
// timer function
function startTimer() {
  let timer = 5;

  window.setInterval(function () {
    if (timer > 0) timer--;
    else if (timer === 0) {
      alert("Sorry!");
    }
    document.getElementById("timer").innerHTML = "TIME REMAINING: " + timer + " seconds";
  }, 1000);
}

function createButtons(index) {
  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  questionDiv.appendChild(title);
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
// Function Calls

startQuizBtn.addEventListener("click", startQuiz);

questionDiv.addEventListener("click", function (event) {
  console.log(event);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;

  if (choice === answer) {
    alert("Correct!");
    createButtons(questionsIndex);
    // if (questionsIndex)
    questionsIndex++;
    // If answer is correct, do something
    // show next question
  }
});
