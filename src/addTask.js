export default function addTask() {
    console.log('Hello World');
    const togglable = document.querySelectorAll('.togglable');
    const cancelBtn = document.createElement('button');
    const addBtn = document.createElement('button');
    const inputField = document.createElement('input');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const taskContainer = document.querySelector('.task-container');
    const addTaskBtn = togglable[togglable.length - 1];
    let tasks = [];


    addTaskBtn.addEventListener('click', e => {
        if (tasks.length >= 6) {
            alert(`Limit Exceeded.   Edit or Delete an existing element`);
        } else {
            console.log(`I'm getting clicked.`);
            addBtn.id = 'add-btn';
            cancelBtn.id = 'cancel-btn';
            inputField.placeholder = 'Task Name';
            inputField.style.border = '1px solid black';
            addBtn.textContent = 'Add';
            cancelBtn.textContent = 'Cancel';
            taskContainer.appendChild(listItem1);
            listItem1.appendChild(inputField);
            taskContainer.appendChild(listItem2);
            listItem2.appendChild(addBtn);
            listItem2.appendChild(cancelBtn);
            togglable[togglable.length - 1].remove();
        }
    })


    cancelBtn.addEventListener('click', e => {
        taskContainer.appendChild(addTaskBtn);
        taskContainer.removeChild(listItem1);
        taskContainer.removeChild(listItem2);
    })


    addBtn.addEventListener('click', e => {
        if (inputField.value.length === 0) {
            alert('Enter A Project Name!');
        } else {
            taskContainer.removeChild(listItem1);
            taskContainer.removeChild(listItem2);
            const listItemN = document.createElement('li');
            const text = document.createElement('a');
            listItemN.className = 'togglable';
            text.textContent = inputField.value;
            tasks.push(inputField.value);
            console.log(tasks);
            text.href = '#';
            taskContainer.appendChild(listItemN);
            listItemN.appendChild(text);
            taskContainer.appendChild(addTaskBtn);
            let togglable = document.querySelectorAll('.togglable');
            for (const element of togglable) {
                console.log(element.textContent);
            }
            for (let i = 0; i < tasks.length; i++) {
                console.log('This is tasks[', i, ']', tasks[i]);
                togglable[i + 4].addEventListener('click', e => {
                    removeChildren(taskContainer);
                    const title = document.createElement('h1');
                    const taskList = document.createElement('ul');
                    title.innerHTML = tasks[i];
                    taskContainer.appendChild(title);
                    taskContainer.appendChild(taskList);
                    taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
                })
            }
        }
    })

}

import removeChildren from "./delChildren";


function addProject() {







}