import removeChildren from './delChildren';
import { addDays, startOfDay } from 'date-fns';

export default function addTask() {
  const togglable = document.querySelectorAll('.togglable');
  const cancelBtn = document.createElement('button');
  const addBtn = document.createElement('button');
  const inputField = document.createElement('input');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const taskContainer = document.querySelector('.task-container');
  const addTaskBtn = togglable[togglable.length - 1];
  const taskList = document.getElementById('task-list');
  let tasks = [];

  addTaskBtn.addEventListener('click', (e) => {
    if (tasks.length >= 5) {
      alert(`Limit Exceeded.   Edit or Delete an existing element`);
    } else {
      addBtn.id = 'add-btn';
      cancelBtn.id = 'cancel-btn';
      inputField.placeholder = 'Task Name';
      inputField.style.border = '1px solid black';
      addBtn.textContent = 'Add';
      cancelBtn.textContent = 'Cancel';
      taskContainer.appendChild(taskList);
      taskList.appendChild(listItem1);
      listItem1.appendChild(inputField);
      taskList.appendChild(listItem2);
      listItem2.appendChild(addBtn);
      listItem2.appendChild(cancelBtn);
      addTaskBtn.remove();
    }
  });

  cancelBtn.addEventListener('click', (e) => {
    taskList.appendChild(addTaskBtn);
    taskList.removeChild(listItem1);
    taskList.removeChild(listItem2);
  });

  addBtn.addEventListener('click', (e) => {
    if (inputField.value.length === 0) {
      alert('Enter A Project Name!');
    } else {
      taskList.removeChild(listItem1);
      taskList.removeChild(listItem2);
      const listItemN = document.createElement('li');
      const text = document.createElement('a');
      const remove = document.createElement('input');
      remove.type = 'checkbox';
      remove.className = 'checkbox-round';
      listItemN.classList = 'togglable checkBox';
      text.textContent = inputField.value;
      tasks.push(inputField.value);
      text.href = '#';
      taskList.appendChild(listItemN);
      listItemN.appendChild(text);
      listItemN.appendChild(remove);
      taskList.appendChild(addTaskBtn);
      (function () {
        let checkButtons = document.querySelectorAll('.checkbox-round');
        for (let i = 0; i < checkButtons.length; i++) {
          if (
            checkButtons[i].parentNode &&
            checkButtons[i].parentNode !== undefined
          ) {
            checkButtons[i].addEventListener('click', () => {
              checkButtons[i].parentNode.remove();
              tasks.splice(i, 1);
            });
          }
        }
        for (let i = 0; i < checkButtons.length; i++) {
          let flag = false;
          for (let j = 0; j < tasks.length; j++) {
            if (checkButtons[i].parentNode.textContent === tasks[j]) {
              flag = true;
              break;
            }
          }

          if (flag === false) {
            tasks.push(checkButtons[i].parentNode.textContent);
          }
        }
      })();
    }
  });
}