const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Local Storage থেকে টাস্ক লোড করা
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Display function
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed) li.classList.add("completed");

        // Complete on click
        li.addEventListener("click", () => {
            todos[index].completed = !todos[index].completed;
            saveAndRender();
        });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete");
        delBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent li click
            todos.splice(index, 1);
            saveAndRender();
        });

        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}

// Save to Local Storage and render
function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Add new todo
addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({ text: text, completed: false });
        todoInput.value = "";
        saveAndRender();
    } else {
        alert("write something!");
    }
});

// Initial render
renderTodos();
