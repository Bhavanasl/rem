// JavaScript
const tasks = [];

document.getElementById('addtask').addEventListener('click', () => {
  const newTask = document.getElementById('newtask').value;
  if (newTask) {
    tasks.push({
      id: tasks.length,
      taskText: newTask,
      isDone: false,
    });
    document.getElementById('newtask').value = '';
    renderTasks();
  }
});

function renderTasks() {
  const taskList = document.getElementById('tasks');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.taskText;
    taskItem.id = task.id;

    taskItem.addEventListener('click', () => {
      task.isDone = !task.isDone;
      renderTasks();
    });

    if (task.isDone) {
      taskItem.classList.add('completed');
    }

    taskList.appendChild(taskItem);
  });
}

// Add a notification when a task is completed
tasks.forEach((task) => {
  task.addEventListener('change', () => {
    if (task.isDone) {
      // Send a notification
      alert('Task completed!');
    }
  });
});
