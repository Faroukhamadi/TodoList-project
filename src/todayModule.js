import addTask from './addTask';
import removeChildren from './delChildren';

function autoGenerateTodayPage() {
  const todayBtn = document.getElementById('today-btn');
  const taskContainer = document.querySelector('.task-container');

  removeChildren(taskContainer);
  const title = document.createElement('h1');
  const taskList = document.createElement('ul');
  taskList.id = 'task-list';
  title.textContent = 'Today';
  taskContainer.appendChild(title);
  taskContainer.appendChild(taskList);

  const togglable = document.createElement('li');
  const span = document.createElement('span');
  togglable.className = 'togglable';
  span.className = 'plus-sgn';
  span.textContent = '+';
  togglable.appendChild(span);
  togglable.innerHTML += 'Add Task';
  taskList.appendChild(togglable);
  addTask();
}

function generateTodayPage() {
  const todayBtn = document.getElementById('today-btn');
  const taskContainer = document.querySelector('.task-container');
  todayBtn.addEventListener('click', (e) => {
    removeChildren(taskContainer);
    const title = document.createElement('h1');
    const taskList = document.createElement('ul');
    taskList.id = 'task-list';
    title.textContent = 'Today';
    taskContainer.appendChild(title);
    taskContainer.appendChild(taskList);

    const togglable = document.createElement('li');
    const span = document.createElement('span');
    togglable.className = 'togglable';
    span.className = 'plus-sgn';
    span.textContent = '+';
    togglable.appendChild(span);
    togglable.innerHTML += 'Add Task';
    taskList.appendChild(togglable);
    addTask();
  });
}

export { autoGenerateTodayPage, generateTodayPage };
