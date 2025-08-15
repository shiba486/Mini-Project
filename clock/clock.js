function updateClock() {
    const now = new Date(); 
    let hours = now.getHours(); 
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // ২ digit format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // DOM update
    document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;
}

// update after every one second
setInterval(updateClock, 1000);

// after page load 
updateClock();
