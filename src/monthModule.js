import removeChildren from "./delChildren";

export default function generateMonthPage() {
    const monthBtn = document.getElementById('month-btn');
    const taskContainer = document.querySelector('.task-container');
    monthBtn.addEventListener('click', e => {
        removeChildren(taskContainer);
        const title = document.createElement('h1');
        const taskList = document.createElement('ul');
        title.textContent = 'This Month';
        taskContainer.appendChild(title);
        taskContainer.appendChild(taskList);
        taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
    })
}