window.onload = ()=>{
    main();
}

function main(){
    const cngBtn = document.querySelector('#cng-btn');
    const container = document.querySelector('.container');
    const inputValue = document.querySelector('#inputValue');

    cngBtn.addEventListener('click', function(){
        bgColor = randomHexColor();
        console.log(bgColor);
        container.style.backgroundColor = bgColor;
        inputValue.value = bgColor;
    }) 

}

function randomHexColor (){
    //#0,0,0,/ 255,255,255
    red = Math.floor(Math.random() *255)
    green = Math.floor(Math.random() *255)
    blue = Math.floor(Math.random() *255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}