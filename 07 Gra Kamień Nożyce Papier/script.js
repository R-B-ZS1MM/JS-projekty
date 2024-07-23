const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
let userScore = 0;
let computerScore = 0;
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('Kliknąłeś mnie', button.id);
//     })
// })
function computerPlay() {
  const choices = ["rock", "scissors", "paper"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "Remis!";
  } else if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    userScore++;
    userScoreEl.textContent = userScore.toString();
    return "Wygrałeś! " + userSelection + " wygrywa z " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `Przegrałeś! ${computerSelection} wygrywa z ${userSelection}.`;
  }
}

for (let button of buttons) {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
}
