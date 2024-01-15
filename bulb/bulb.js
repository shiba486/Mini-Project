

const bulbSwitch = document.querySelector('#bulb-switch')
const bulb = document.querySelector('#bulb')

bulbSwitch.addEventListener('click',()=>{
            console.log(bulb.src);
            if(bulb.src.match('off')){
                bulbSwitch.innerHTML ='Turn OFF'
                bulb.src ='../images/bulb-on.jpeg';
            }else{
                bulb.src ='../images/bulb-off.jpeg';
                bulbSwitch.innerHTML ='Turn ON'
            }
            
})