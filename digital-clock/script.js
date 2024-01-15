function updateClock (){
    let dateNow = new Date();
    let hour = dateNow.getHours();
    let minute = dateNow.getMinutes();
    let second = dateNow.getSeconds();

    document.querySelector('#hour').textContent = hour
    document.querySelector('#minute').innerHTML = minute
    document.querySelector('#second').innerHTML = second
}
setInterval(updateClock, 1000);
updateClock();
