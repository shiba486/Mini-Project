
let data = [
    'Shiva',
    'hey',
    'how are you?',
    'are you okay!',
    'what about your dream?',
    'hey, how are you?',
    'how are you? ARe you okay',
    'are you okay! what about your dream',
    'what about your dream? is it true or not?'
]

// let quoteDisplay = document.querySelector('.quoteDisplay');
// let generatorQuote = document.getElementById('generatorQuote');
// function generatorQuoteFunc () {
    
//         var randomIndex = Math.floor(Math.random() * data.length);
//         console.log(randomIndex)
//          quoteDisplay.textContent = data[randomIndex]
// }


let quoteDisplay = document.querySelector('.quoteDisplay');
let generatorQuote = document.querySelector('#generatorQuote');

generatorQuote.addEventListener('click',()=>{
    let randomIndex = Math.floor(Math.random()* data.length);
    quoteDisplay.textContent = data[randomIndex];
})