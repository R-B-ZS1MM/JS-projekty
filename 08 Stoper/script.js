const timerEl = document.getElementById("timer");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const btnReset = document.querySelector("#reset");

let startTime = 0,
  elapsedTime = 0,
  timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  myInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function formatTime(elapsedTime) {
  let ms = Math.floor((elapsedTime % 1000) / 10);
  ms > 9 ? ms : (ms = "0" + ms);
  let s = Math.floor((elapsedTime / 1000) % 60);
  s > 9 ? s : (s = "0" + s);
  let m = Math.floor((elapsedTime / (1000 * 60)) % 60);
  m > 9 ? m : (m = "0" + m);
  let h = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  h > 9 ? h : (h = "0" + h);
  return `${h}:${m}:${s}:${ms}`;
}

function stopTimer() {
  clearInterval(myInterval);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
function resetTimer() {
  clearInterval(myInterval);
  btnStart.disabled = false;
  btnStop.disabled = true;
  elapsedTime = 0;
  timerEl.textContent = "00:00:00:00";
}

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
