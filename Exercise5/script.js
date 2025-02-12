// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  let newTask ={};

  //  2- Set the description from the text field
  let description = document.getElementById("description").value.trim();
  if(description=== ''){
    alert("Task description cannot be empty");
    return;
  }
  newTask.description = description;

  // 3- Set the priority from select field
  let priority = document.getElementById("priority").value;
  newTask.priority = (priority === "High")? 1:0;
  
  // 4- Add the new object to the array
  tasks.push(newTask);
  displayTasks(tasks);
  console.log(tasks);

  
}
function displayTasks(taskList) {
  let taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = ""; // Remove old task elements

  taskList.forEach(task => {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("item");

    // Apply priority-based color (Red for High, Grey for Low)
    taskDiv.style.backgroundColor = task.priority === 1 ? "red" : "grey";
    taskDiv.textContent = task.description;

    taskContainer.appendChild(taskDiv);
  });
}
let tasks = [];
document.getElementById("addButton").addEventListener("click",addItem);
// ------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------




