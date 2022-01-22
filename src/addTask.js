import removeChildren from "./delChildren";

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



    addTaskBtn.addEventListener('click', e => {
        if (tasks.length >= 6) {
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
    })


    cancelBtn.addEventListener('click', e => {
        taskList.appendChild(addTaskBtn);
        taskList.removeChild(listItem1);
        taskList.removeChild(listItem2);
    })


    addBtn.addEventListener('click', e => {
        if (inputField.value.length === 0) {
            alert('Enter A Project Name!');
        } else {
            taskList.removeChild(listItem1);
            taskList.removeChild(listItem2);
            const listItemN = document.createElement('li');
            const text = document.createElement('a');
            listItemN.className = 'togglable';
            text.textContent = inputField.value;
            tasks.push(inputField.value);
            text.href = '#';
            taskList.appendChild(listItemN);
            listItemN.appendChild(text);
            taskList.appendChild(addTaskBtn);
            let togglable = document.querySelectorAll('.togglable');
            for (let i = 0; i < tasks.length; i++) {
                togglable[i + 4].addEventListener('click', e => {
                    removeChildren(taskList);
                    const title = document.createElement('h1');
                    const taskList = document.createElement('ul');
                    title.innerHTML = tasks[i];
                    taskList.appendChild(title);
                    taskList.appendChild(taskList);
                    taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
                })
            }
        }
    })

}
