const item = document.querySelector('#item');
const addBtn = document.querySelector('#addBtn');
const todoBox = document.querySelector('#todoBox');

addBtn.addEventListener('click',addTodo)

function addTodo (){
    const taskText = item.value.trim();
    if(taskText !== ""){
   const listItem = document.createElement('li');
   listItem.innerHTML = `
   ${taskText}
     <span>&times;</span>
   `
   item.value = "";
    listItem.addEventListener('click',function(){
        this.classList.toggle("done")
    })
    let xcross = listItem.querySelector('span');
    xcross.addEventListener('click',function (){
        listItem.remove();
    })
   todoBox.appendChild(listItem)
}else if(taskText == ""){
    alert('YOU DID NOT ENTER ANY TASK!')
}}
