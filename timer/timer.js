let timerInterval = null;
let totalSeconds = 0;

const timerDisplay = document.getElementById("timer");
const minutesInput = document.getElementById("minutes");

function updateDisplay() {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    timerDisplay.textContent = `${mins}:${secs}`;
}

function startTimer() {
    if (timerInterval) return; // Already running
    totalSeconds = parseInt(minutesInput.value) * 60;
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert("enter correct time!");
        return;
    }

    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("time up!");
        } else {
            totalSeconds--;
            updateDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateDisplay();
}

// Button events
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Initial display
updateDisplay();
