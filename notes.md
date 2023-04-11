// var startBtn = document.getElementById("start-btn");
// var quizSection = document.getElementById("quiz-section");
// var timerEl = document.getElementById("countdown");
// var timerScore = document.getElementById("timer-score");
// var questionIndex = 0;
// var timeLeft = 60;
// var timeInterval;

// var questions = [
// {
// text: "question1",
// choices: ["a", "b", "c", "d"],
// answer: "a",
// },
// {
// text: "question2",
// choices: ["a", "b", "c", "d"],
// answer: "a",
// },
// {
// text: "question3",
// choices: ["a", "b", "c", "d"],
// answer: "a",
// },
// {
// text: "question4",
// choices: ["a", "b", "c", "d"],
// answer: "a",
// },
// {
// text: "question5",
// choices: ["a", "b", "c", "d"],
// answer: "a",
// },
// {
// text: "question6",
// choices: ["a", "b", "c", "d"],
// answer: "a",
// },
// ];

// function startTimer() {
// timeInterval = setInterval(function () {
// if (timeLeft > 0) {
// // Set the `textContent` of `timerEl` to show the remaining seconds
// timerEl.textContent = timeLeft;
// timeLeft--;
// } else {
// endGame();
// }
// }, 1000);
// }

// function buildQuesetion() {
// document.getElementById("question-text").textContent =
// questions[questionIndex].text;
// document.getElementById("button-box").innerHTML = "";
// questions[questionIndex].choices.forEach(function (choice) {
// var button = document.createElement("button");
// button.textContent = choice;
// button.setAttribute("value", choice);
// button.onclick = function () {
// console.log(this.value);
// if (this.value === questions[questionIndex].answer) {
// console.log("CORRECT!");
// } else {
// console.log("WRONG!");
// // timeLeft = timeLeft - 10;
// timeLeft -= 10;
// }

// questionIndex++;

// if (questionIndex >= questions.length) {
// endGame();
// } else {
// buildQuesetion();
// }
// };
// document.getElementById("button-box").appendChild(button);
// });
// }

// function endGame() {
// quizSection.classList.add("hide");
// document.getElementById("end-section").classList.remove("hide");
// clearInterval(timeInterval);
// if (timeLeft < 0) {
// timeLeft = 0;
// }
// timerScore.textContent = "Your final score is " + timeLeft;
// }

// startBtn.addEventListener("click", function () {
// document.getElementById("start-section").classList.add("hide");
// quizSection.classList.remove("hide");
// buildQuesetion();
// startTimer();
// });
