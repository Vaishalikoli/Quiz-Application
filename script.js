const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const quizContainer = document.getElementById("quiz-container");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-button");
    button.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(button);
  });
}

function selectOption(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextButton.classList.add("hidden");
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultElement.classList.remove("hidden");
  scoreElement.innerText = score;
}

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultElement.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
  nextButton.classList.add("hidden");
});

// Start the quiz
loadQuestion();
