let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskNameInput = document.getElementById("taskName");
const taskCategoryInput = document.getElementById("taskCategory");
const taskDeadlineInput = document.getElementById("taskDeadline");
const taskStatusInput = document.getElementById("taskStatus");
const taskList = document.getElementById("taskList");
const filterStatus = document.getElementById("filterStatus");
const filterCategory = document.getElementById("filterCategory");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

document.getElementById("addTaskBtn").addEventListener("click", addTask);
filterStatus.addEventListener("change", renderTasks);
filterCategory.addEventListener("input", renderTasks);
clearFiltersBtn.addEventListener("click", clearFilters);

function addTask() {
  const task = {
    id: Date.now(),
    name: taskNameInput.value,
    category: taskCategoryInput.value,
    deadline: taskDeadlineInput.value,
    status: taskStatusInput.value,
  };
  tasks.push(task);
  saveTasks();
  renderTasks();
  clearInputs();
}

function clearInputs() {
  taskNameInput.value = "";
  taskCategoryInput.value = "";
  taskDeadlineInput.value = "";
  taskStatusInput.value = "In Progress";
}

function updateStatus(id, newStatus) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.status = newStatus;
    saveTasks();
    renderTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearFilters() {
  filterStatus.value = "";
  filterCategory.value = "";
  renderTasks();
}

function renderTasks() {
  checkOverdue();
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      !filterStatus.value || task.status === filterStatus.value;
    const categoryMatch =
      !filterCategory.value ||
      task.category.toLowerCase().includes(filterCategory.value.toLowerCase());
    return statusMatch && categoryMatch;
  });

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `<p class="text-gray-500">No tasks to display.</p>`;
    return;
  }

  filteredTasks.forEach((task) => {
    const taskEl = document.createElement("div");
    taskEl.className = "border rounded p-4 flex justify-between items-center";

    taskEl.innerHTML = `
      <div>
        <h2 class="text-lg font-semibold">${task.name}</h2>
        <p class="text-sm text-gray-600">Category: ${task.category}</p>
        <p class="text-sm text-gray-600">Deadline: ${task.deadline}</p>
        <p class="text-sm font-bold ${
          task.status === "Overdue" ? "text-red-500" : "text-green-600"
        }">${task.status}</p>
      </div>
      <select class="border p-2 rounded" onchange="updateStatus(${
        task.id
      }, this.value)">
        <option ${
          task.status === "In Progress" ? "selected" : ""
        }>In Progress</option>
        <option ${
          task.status === "Completed" ? "selected" : ""
        }>Completed</option>
      </select>
    `;

    taskList.appendChild(taskEl);
  });
}

function checkOverdue() {
  const today = new Date().toISOString().split("T")[0];
  tasks.forEach((task) => {
    if (task.status !== "Completed" && task.deadline < today) {
      task.status = "Overdue";
    }
  });
  saveTasks();
}

// Initial render
renderTasks();