import removeChildren from './delChildren';
import { format, add } from 'date-fns';

export default function addTask() {
  let valueCopy = [];
  const togglable = document.querySelectorAll('.togglable');
  const cancelBtn = document.createElement('button');
  const addBtn = document.createElement('button');
  const inputField = document.createElement('input');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const taskContainer = document.querySelector('.task-container');
  const addTaskBtn = togglable[togglable.length - 1];
  const taskList = document.getElementById('task-list');
  let list = document.getElementsByClassName('task-name-class');
  let tasks = [];
  let count = 0;
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
    count++;
    if (inputField.value.length === 0) {
      alert('Enter A Task Name!');
    } else {
      const date = document.createElement('input');
      const listItemN = document.createElement('li');
      const text = document.createElement('a');
      text.className = 'task-name-class';
      let nodeListCopy = Array.from(list);
      let names = nodeListCopy.map((el) => el.textContent);
      console.log(nodeListCopy.map((el) => el.textContent));
      console.log(`names after declaration${names}`);
      if (names.findIndex((name) => name === inputField.value) !== -1) {
        alert('Duplicate task names');
      } else {
        const remove = document.createElement('input');
        taskList.removeChild(listItem1);
        taskList.removeChild(listItem2);
        date.type = 'date';
        date.className = 'date';
        date.name = 'task-date';
        let today = format(new Date(), 'yyyy-MM-dd');
        let nextYear = format(add(new Date(), { years: 1 }), 'yyyy-MM-dd');
        date.value = today;
        date.min = today;
        date.max = nextYear;

        date.onchange = (e) => {
          valueCopy.push({
            taskName: date.previousElementSibling.previousElementSibling.text,
            date: e.target.value,
          });
          console.log(valueCopy);
        };
        remove.type = 'checkbox';
        remove.className = 'checkbox-round';
        listItemN.classList = 'togglable checkBox';
        text.textContent = inputField.value;
        tasks.push(inputField.value);
        localStorage.setItem(`task${count}`, inputField.value);
        text.href = '#';
        taskList.appendChild(listItemN);
        listItemN.appendChild(text);
        listItemN.appendChild(remove);
        listItemN.appendChild(date);
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
    }
  });
}
