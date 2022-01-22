import removeChildren from "./delChildren";

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
    taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
}

function generateTodayPage() {
    const todayBtn = document.getElementById('today-btn');
    const taskContainer = document.querySelector('.task-container');
    todayBtn.addEventListener('click', e => {
        removeChildren(taskContainer);
        const title = document.createElement('h1');
        const taskList = document.createElement('ul');
        taskList.id = 'task-list';
        title.textContent = 'Today';
        taskContainer.appendChild(title);
        taskContainer.appendChild(taskList);
        taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
    })
}

export { autoGenerateTodayPage, generateTodayPage };