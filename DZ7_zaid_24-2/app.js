const timerValue = document.getElementById("timer-seconds-value");
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const stopBtn = document.getElementById("stop");
const hourglassIcon = document.querySelector(".hourglasses i");

let timerInterval;

startBtn.addEventListener("click", () => {
    let remainingSeconds = timerValue.innerText;
    if (remainingSeconds > 0) {
        startBtn.disabled = true;
        hourglassIcon.classList.add("rotating");
        timerInterval = setInterval(() => {
            remainingSeconds--;
            timerValue.innerText = remainingSeconds;
            if (remainingSeconds == 0) {
                stopTimer();
            }
        }, 1000);
    }
});   

restartBtn.addEventListener("click", () => {
    timerValue.innerText = 60
    stopTimer()
})

stopBtn.addEventListener("click", () => {
    stopTimer();
});

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    hourglassIcon.classList.remove("rotating");
}
