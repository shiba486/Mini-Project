


    const cngBtn = document.querySelector('#cng-btn');
    const container = document.querySelector('.container');
    const inputValue = document.querySelector('#inputValue');

    cngBtn.addEventListener('click', function(){
        let letters = '0123456789ABCDEF'
        let color = "#"
        for (let index = 0; index < 6; index++) {
            color  = color + letters[Math.floor(Math.random() *16)]; 
        }
        container.style.backgroundColor = color;
        inputValue.value = color;
    }) 


