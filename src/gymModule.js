import addTask from './addTask';
import removeChildren from './delChildren';
import { localStorageLookup } from './storage';
import { format, add } from 'date-fns';

export default function generateGymPage() {
  const gymBtn = document.getElementById('gym-btn');
  const taskContainer = document.querySelector('.task-container');
  gymBtn.addEventListener('click', (e) => {
    removeChildren(taskContainer);
    const title = document.createElement('h1');
    const taskList = document.createElement('ul');
    taskList.id = 'task-list';
    title.textContent = 'Gym';
    taskContainer.appendChild(title);
    taskContainer.appendChild(taskList);

    let tasks = localStorageLookup('gym');
    for (const task of tasks) {
      const date = document.createElement('input');
      const listItemN = document.createElement('li');
      const text = document.createElement('a');
      text.className = 'task-name-class';
      const remove = document.createElement('input');
      date.type = 'date';
      date.className = 'date';
      date.name = 'task-date';

      let today = format(new Date(), 'yyyy-MM-dd');
      let nextYear = format(add(new Date(), { years: 1 }), 'yyyy-MM-dd');
      date.value = task.date;
      date.min = today;
      date.max = nextYear;

      remove.type = 'checkbox';
      remove.className = 'checkbox-round';
      listItemN.classList = 'togglable checkBox';
      text.textContent = task.taskName;
      text.href = '#';

      taskList.appendChild(listItemN);
      listItemN.appendChild(text);
      listItemN.appendChild(remove);
      listItemN.appendChild(date);
    }
    let checkButtons = document.querySelectorAll('.checkbox-round');
    for (let i = 0; i < checkButtons.length; i++) {
      if (
        checkButtons[i].parentNode &&
        checkButtons[i].parentNode !== undefined
      ) {
        checkButtons[i].addEventListener('click', () => {
          checkButtons[i].parentNode.remove();
          let taskName = checkButtons[i].previousElementSibling.textContent;
          localStorage.removeItem(taskName);
        });
      }
    }
    const togglable = document.createElement('li');
    const span = document.createElement('span');
    togglable.className = 'togglable';
    span.className = 'plus-sgn';
    span.textContent = '+';
    togglable.appendChild(span);
    togglable.innerHTML += 'Add Task';
    taskList.appendChild(togglable);
    addTask('gym');
  });
}
