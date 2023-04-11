const initialsEntry = document.getElementById("initials");
const infoParagraph = document.querySelector("p");
const saveButton = document.getElementById("submit");
const displayedScore = document.getElementById("results");
const playerName = document.getElementById("initials");
let leaderboard;
const playerScore = localStorage.getItem("score");
console.log(playerName, playerScore);
displayedScore.textContent = playerScore;

function showLeaderboard() {
  for (let i = 0; i < leaderboard.length; i++) {
    const scoreEntry = leaderboard[i];
    const scoreElement = document.createElement("h2");
    scoreElement.textContent = scoreEntry.name + ":" + scoreEntry.points;
    displayedScore.appendChild(scoreElement);
  }
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (initialsEntry.value === "") {
    infoParagraph.textContent = "Please enter your initials";
    return;
  }

  const enteredInitials = initialsEntry.value;

  console.log(displayedScore, playerScore);

  leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  if (leaderboard === null) {
    leaderboard = [];
  }

  leaderboard.push({ name: enteredInitials, points: playerScore });
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  showLeaderboard();
});
