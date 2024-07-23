const btnRollDice = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const historyList = [];
const rollHistoryEl = document.getElementById('roll-history');

function updateRollHistory() {
rollHistoryEl.innerHTML = '';
for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `Rzut ${i + 1}: <span>${getUnicodeForDice(historyList[i])}</span>`;
    rollHistoryEl.appendChild(listItem);
}
}

function getUnicodeForDice(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }
}
function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getUnicodeForDice(rollResult);
  diceEl.innerHTML = diceFace;
  //   diceEl.innerHTML = `&#98${55+rollResult}`; // albo tak
  historyList.push(rollResult);
  updateRollHistory();
}
btnRollDice.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
