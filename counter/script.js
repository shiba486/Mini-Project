const counterElement = document.querySelector("#counter");
const incrementElement = document.querySelector("#increment");
const decrementElement = document.querySelector("#decrement");

let counterValue = 0;

incrementElement.addEventListener('click',()=>{
    counterValue += 1;
    counterElement.textContent = counterValue; 
})


decrementElement.addEventListener('click',()=>{
    if(counterValue > 0){
        counterValue -= 1;
    counterElement.textContent = counterValue; 
    }
})