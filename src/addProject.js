import removeChildren from "./delChildren";


export default function addProject() {
    let projects = [];
    const togglable = document.querySelectorAll('.togglable');
    const addProjectBtn = document.getElementById('addProject');
    const cancelBtn = document.createElement('button');
    const inputField = document.createElement('input');
    const sideBarList = document.getElementById('sb-list');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const addBtn = document.createElement('button');
    const taskContainer = document.querySelector('.task-container');

    cancelBtn.addEventListener('click', e => {
        sideBarList.appendChild(addProjectBtn);
        sideBarList.removeChild(listItem1);
        sideBarList.removeChild(listItem2);
        console.log(addProjectBtn);
    })

    addBtn.addEventListener('click', e => {
        if (inputField.value.length === 0) {
            alert('Enter A Project Name!');
        } else {

            sideBarList.removeChild(listItem1);
            sideBarList.removeChild(listItem2);
            const listItemN = document.createElement('li');
            const checkListImg = document.createElement('img');
            const text = document.createElement('a');
            listItemN.className = 'togglable';
            checkListImg.src = '../dist/checklist.png';
            checkListImg.alt = 'checklist';
            checkListImg.id = 'list';
            text.textContent = inputField.value;
            projects.push(inputField.value);
            console.log(projects);
            text.href = '#';
            sideBarList.appendChild(listItemN);
            listItemN.appendChild(checkListImg);
            listItemN.appendChild(text);
            sideBarList.appendChild(addProjectBtn);
            let togglable = document.querySelectorAll('.togglable');
            for (const element of togglable) {
                console.log(element.textContent);
            }
            for (let i = 0; i < projects.length; i++) {
                console.log('This is projects[', i, ']', projects[i]);
                togglable[i + 4].addEventListener('click', e => {
                    removeChildren(taskContainer);
                    const title = document.createElement('h1');
                    const taskList = document.createElement('ul');
                    title.innerHTML = projects[i];
                    taskContainer.appendChild(title);
                    taskContainer.appendChild(taskList);
                    taskList.insertAdjacentHTML('afterbegin', `<li class="togglable"><span class="plus-sgn">+</span> Add Task</li>`);
                })
            }


        }
    })


    addProjectBtn.addEventListener('click', e => {
        if (projects.length >= 5) {
            alert(`Limit Exceeded.   Edit or Delete an existing element`);
        } else {
            console.log(`I'm getting clicked.`);
            addBtn.id = 'add-btn';
            cancelBtn.id = 'cancel-btn';
            inputField.placeholder = 'Project Name';
            addBtn.textContent = 'Add';
            cancelBtn.textContent = 'Cancel';
            sideBarList.appendChild(listItem1);
            listItem1.appendChild(inputField);
            sideBarList.appendChild(listItem2);
            listItem2.appendChild(addBtn);
            listItem2.appendChild(cancelBtn);
            addProjectBtn.remove();
        }
    })
}