function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var li = document.createElement("li");
        li.className = "taskItem";
        li.innerHTML = `
            <span class="taskText">${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function deleteTask(button) {
    var taskItem = button.parentElement;
    taskItem.remove();
}
