const startBtn = document.querySelector("#start-button");
const timerDisplay = document.querySelector("#clock");
let countdown;
let remainingTime = 70;
let currentQuestionIdx = 0;

const quizContent = [
  {
    questionText: "Commonly used data type Do Not include?",
    choices: {
      a: "strings",
      b: "Boolean",
      c: "alerts",
      d: "numbers",
    },
    correct: "alerts",
  },
  {
    questionText: "Which of the following is not a JavaScript loop?",
    choices: {
      a: "for",
      b: "while",
      c: "forEach",
      d: "do-while",
    },
    correct: "forEach",
  },
  {
    questionText:
      "Which HTML tag is used to include JavaScript in an HTML document?",
    choices: {
      a: "<script>",
      b: "<js>",
      c: "<javascript>",
      d: "<code>",
    },
    correct: "<script>",
  },
  {
    questionText:
      "Which of the following is not a valid JavaScript variable name?",
    choices: {
      a: "myVar",
      b: "2ndVar",
      c: "_hiddenVar",
      d: "$dollarVar",
    },
    correct: "2ndVar",
  },
  // ...
];

function beginQuiz() {
  startBtn.remove();
  showQuestion(quizContent[currentQuestionIdx]);
  startTimer();
}

function startTimer() {
  countdown = setInterval(function () {
    remainingTime--;
    timerDisplay.textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(countdown);
      gameOver();
    }
  }, 1000);
}

startBtn.addEventListener("click", beginQuiz);

function showQuestion(question) {
  const questionEl = document.createElement("h3");
  questionEl.textContent = question.questionText;
  document.getElementById("question").innerHTML = "";
  document.getElementById("question").append(questionEl);

  const answerEls = ["a", "b", "c", "d"].map((letter) => {
    const btn = document.createElement("button");
    btn.textContent = question.choices[letter];
    document.getElementById(`answer-${letter}`).innerHTML = "";
    document.getElementById(`answer-${letter}`).appendChild(btn);
    btn.setAttribute("style", "padding:10px", "height:auto");
    btn.onclick = verifyAnswer;
    return btn;
  });
}

function verifyAnswer(event) {
  if (quizContent[currentQuestionIdx].correct !== event.target.textContent) {
    remainingTime -= 10;
  }

  currentQuestionIdx++;

  if (currentQuestionIdx >= quizContent.length) {
    gameOver();
  } else {
    showQuestion(quizContent[currentQuestionIdx]);
  }
}

function gameOver() {
  const finalScore = remainingTime;
  localStorage.setItem("score", JSON.stringify(finalScore));

  window.location.href = "results.html";
}
