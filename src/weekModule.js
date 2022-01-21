import removeChildren from "./delChildren";

export default function generateWeekPage() {
    const weekBtn = document.getElementById('week-btn');
    const taskContainer = document.querySelector('.task-container');
    weekBtn.addEventListener('click', e => {
        removeChildren(taskContainer);
        const title = document.createElement('h1');
        const taskList = document.createElement('ul');
        title.textContent = 'This Week';
        taskContainer.appendChild(title);
        taskContainer.appendChild(taskList);
        taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
    })
}