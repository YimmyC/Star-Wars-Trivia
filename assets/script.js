// Global Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let questions = [
  { title: "This is the first question?", choices: ["one", "two", "three", "four"], answer: "two" },
  { title: "This is the second question?", choices: ["one", "two", "three", "four"], answer: "three" },
];

// Functions
function startQuiz() {
  alert("I started the game");
  // Bring up question 1
  let title = document.createElement("h2");
  title.textContent = questions[0].title;
  questionDiv.appendChild(title);

  // add four answer options
  let btnOne = document.createElement("button");
  btnOne.textContent = questions[0].choices[0];
  btnOne.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[0].choices[1];
  btnTwo.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[0].choices[2];
  btnThree.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[0].choices[3];
  btnFour.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnFour);
  // Make clickable
}

// Function Calls

startQuizBtn.addEventListener("click", startQuiz);

questions.addEventListener("click", function () {
  if (choices === answer) {
    alert("Correct!");
    // If answer is correct, do something
    // show next question
  }
});
