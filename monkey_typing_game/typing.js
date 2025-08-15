const words = ["monkey", "banana", "apple", "keyboard", "javascript", "coding", "game", "fun", "challenge", "speed"];
let score = 0;
let time = 60;
let currentWord = "";
let timerInterval = null;

const wordDiv = document.getElementById("word");
const input = document.getElementById("input");
const scoreDiv = document.getElementById("score");
const timeDiv = document.getElementById("time");
const startBtn = document.getElementById("start");

function randomWord() {
    const index = Math.floor(Math.random() * words.length);
    currentWord = words[index];
    wordDiv.textContent = currentWord;
}

function startGame() {
    score = 0;
    time = 60;
    input.disabled = false;
    input.value = "";
    input.focus();
    randomWord();
    scoreDiv.textContent = "Score: " + score;
    timeDiv.textContent = "Time: " + time + "s";

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time--;
        timeDiv.textContent = "Time: " + time + "s";
        if (time <= 0) {
            clearInterval(timerInterval);
            input.disabled = true;
            wordDiv.textContent = "Game Over!";
        }
    }, 1000);
}

input.addEventListener("input", () => {
    if (input.value.trim() === currentWord) {
        score++;
        scoreDiv.textContent = "Score: " + score;
        input.value = "";
        randomWord();
    }
});

startBtn.addEventListener("click", startGame);
