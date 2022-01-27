import addTask from './addTask';
import removeChildren from './delChildren';

export default function generateMonthPage() {
  const monthBtn = document.getElementById('month-btn');
  const taskContainer = document.querySelector('.task-container');
  monthBtn.addEventListener('click', (e) => {
    removeChildren(taskContainer);
    const title = document.createElement('h1');
    const taskList = document.createElement('ul');
    taskList.id = 'task-list';

    title.textContent = 'This Month';
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
