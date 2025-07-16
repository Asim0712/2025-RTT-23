let tasks = [];

const taskName = document.getElementById("taskName");
const taskCategory = document.getElementById("taskCategory");
const taskDeadline = document.getElementById("taskDeadline");
const taskStatus = document.getElementById("taskStatus");
const addBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");
const filterStatus = document.getElementById("filterStatus");
const filterCategory = document.getElementById("filterCategory");
const taskSection = document.getElementById("taskSection"); // Hidden template section

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  displayTasks();
}); // Load saved tasks when the page is ready

addBtn.addEventListener("click", () => {
  if (!taskName.value || !taskDeadline.value) {
    return alert("Please enter both task name and deadline.");
  }

  
  const newTask = {
    id: Date.now(),
    name: taskName.value,
    category: taskCategory.value || "Uncategorized",
    deadline: taskDeadline.value,
    status: taskStatus.value,
  };  // Create task object

  tasks.push(newTask);
  saveTasks();
  displayTasks();

  
  taskName.value = "";
  taskCategory.value = "";
  taskDeadline.value = "";
  taskStatus.value = "In Progress";
});  // For Clearing form 


filterStatus.addEventListener("change", displayTasks);
filterCategory.addEventListener("input", displayTasks);  // Filter tasks on change

// Show all tasks (filtered)
function displayTasks() {
  updateOverdueStatus(); // Check for overdue tasks
  taskList.innerHTML = ""; // Clear current task list

  const selectedStatus = filterStatus.value;
  const categorySearch = filterCategory.value.toLowerCase();


  const filteredTasks = tasks.filter(task =>
    (selectedStatus === "all" || task.status === selectedStatus || 
     (selectedStatus === "Overdue" && task.status === "Overdue")) &&
    task.category.toLowerCase().includes(categorySearch)
  );    // Filter tasks

  if (filteredTasks.length === 0) {
    taskList.innerHTML = "<p>No tasks found.</p>";
    return;
  }


  filteredTasks.forEach(task => {
    const clone = taskSection.cloneNode(true);
    clone.classList.remove("d-none");   // Create task elements

    clone.querySelector(".task-name").textContent = task.name;
    clone.querySelector(".task-category").textContent = task.category;
    clone.querySelector(".task-deadline").textContent = formatDate(task.deadline);
    clone.querySelector(".task-status").textContent = task.status;

    // Highlight overdue or completed tasks
    if (task.status === "Overdue") clone.classList.add("overdue");
    if (task.status === "Completed") clone.classList.add("completed");

    // Set up select and delete button
    const select = clone.querySelector(".status-select");
    const deleteBtn = clone.querySelector(".delete-btn");

    select.value = task.status;
    select.dataset.id = task.id;
    deleteBtn.dataset.id = task.id;

    select.addEventListener("change", updateStatus);
    deleteBtn.addEventListener("click", deleteTask);

    taskList.appendChild(clone);
  });
}

// Update task status when changed
function updateStatus(e) {
  const taskId = Number(e.target.dataset.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.status = e.target.value;
    saveTasks();
    displayTasks();
  }
}

// Remove task from list
function deleteTask(e) {
  const taskId = Number(e.target.dataset.id);
  tasks = tasks.filter(task => task.id !== taskId);
  saveTasks();
  displayTasks();
}
// Mark tasks as overdue if deadline has passed
function updateOverdueStatus() {
  const today = new Date().toISOString().split("T")[0];
  tasks.forEach(task => {
    if (task.status !== "Completed" && task.deadline < today) {
      task.status = "Overdue";
    }
  });
  saveTasks();
}
// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Load tasks from localStorage
function loadTasks() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    tasks = JSON.parse(stored);
  }
}
// Format date nicely
function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric", month: "short", day: "numeric"
  });
}