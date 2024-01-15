
// const user =  function (user) {
    //     console.log(user, Date.now());
    //   }
    //   let start;
    // startBtn.addEventListener('click',function(){
        //      start = setInterval(user,1000,'shiba');
        
        // })
        // stopBtn.addEventListener("click", function () {
            //   clearInterval(start);
            //   start = null;
            // });
            
            
            
   const stopBtn = document.querySelector("#stopBtn");
   const startBtn = document.querySelector("#startBtn");
   let showColorCode = document.querySelector("#showColorCode");

let intervalId;
function startChangingColor(){

    intervalId =setInterval(changeColor,1000);
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
        showColorCode.textContent = randomColor();
    }
}

function stopChangingColor(){
    clearInterval(intervalId)
    intervalId = null;
}

startBtn.addEventListener('click',startChangingColor)
stopBtn.addEventListener('click',stopChangingColor)

// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *16)] 
    }
    return color;
}
