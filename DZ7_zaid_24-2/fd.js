let timerIntervalId = 60;

startBtn.addEventListener("click", () => {
  let remainingSeconds = parseInt(timerValue.innerText);
  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    return; 
  }
  startBtn.disabled = true;
  stopBtn.disabled = false;
  hourglassIcon.classList.add("rotating");
  timerIntervalId = setInterval(() => {
    remainingSeconds--;
    timerValue.innerText = remainingSeconds;
    if (remainingSeconds <= 0) {
      stopTimer();
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  stopTimer();
});

function stopTimer() {
  clearInterval(timerIntervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  hourglassIcon.classList.remove("rotating");
}
