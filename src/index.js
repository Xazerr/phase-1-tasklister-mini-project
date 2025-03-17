document.addEventListener("DOMContentLoaded", () => {
});

const form = document.getElementById("create-task-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const taskInput = document.getElementById("new-task-description");
  const taskDescription = taskInput.value;

  
  const taskItem = document.createElement("li");
  taskItem.textContent = taskDescription;

  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  taskItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    taskItem.remove(); 
  });

  const taskList = document.getElementById("tasks");
  taskList.appendChild(taskItem);

  taskInput.value = "";
});

const taskInput = document.getElementById("new-task-description");
const taskDescription = taskInput.value;

const taskItem = document.createElement("li");
taskItem.textContent = taskDescription;

const taskList = document.getElementById("tasks");
taskList.appendChild(taskItem);

taskInput.value = "";