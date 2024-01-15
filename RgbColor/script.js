window.onload = ()=>{
    main();
}

function main(){
    const cngBtn = document.querySelector('#cng-btn');
    const container = document.querySelector('.container');
    const inputValue = document.querySelector('#inputValue');

    cngBtn.addEventListener('click', function(){
        bgColor = randomRGBColor();
        console.log(bgColor);
        container.style.backgroundColor = bgColor;
        inputValue.value = bgColor;
    }) 

}

function randomRGBColor (){
    //#0,0,0,/ 255,255,255
    red = Math.floor(Math.random() *255)
    green = Math.floor(Math.random() *255)
    blue = Math.floor(Math.random() *255)

    return `rgb(${red},${green},${blue})`;
}