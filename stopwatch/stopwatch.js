let hours = 0, minutes = 0, seconds = 0;
let timer = null;
const display = document.getElementById("stopwatch");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${h}:${m}:${s}`;
}

function start() {
    if (timer) return; // Already running
    timer = setInterval(() => {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    hours = 0; minutes = 0; seconds = 0;
    updateDisplay();
}

// Button event listeners
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

// Initial display
updateDisplay();
