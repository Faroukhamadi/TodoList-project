import removeChildren from "./delChildren";

export default function generateGymPage() {
    const gymBtn = document.getElementById('gym-btn');
    const taskContainer = document.querySelector('.task-container');
    gymBtn.addEventListener('click', e => {
        removeChildren(taskContainer);
        const title = document.createElement('h1');
        const taskList = document.createElement('ul');
        title.textContent = 'Gym';
        taskContainer.appendChild(title);
        taskContainer.appendChild(taskList);
        taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
    })
}