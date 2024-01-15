const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#task');

addBtn.addEventListener('click',addTask);

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn" onclick = deleteTask(this)>Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
function deleteTask(){
    const li = button.parentElement;
    taskList.removeChild(li);
}