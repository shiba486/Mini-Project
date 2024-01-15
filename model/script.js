let openModelBtn = document.querySelector('#openModelBtn');
let closeModelBtn = document.querySelector('#closeModelBtn');
let myModel = document.querySelector('#myModel');

openModelBtn.addEventListener('click',function(event){
    myModel.style.display = 'block';
})
 closeModelBtn.addEventListener('click',function(event){
    console.log(event.target);
    myModel.style.display = 'none';
 })
 window.addEventListener('click', function(event){
    if(event.target === myModel){
        myModel.style.display = 'none';
    }
 })