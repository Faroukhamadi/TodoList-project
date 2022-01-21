import removeChildren from "./delChildren";


export default function addProject() {
    const addProjectBtn = document.getElementById('addProject');
    const cancelBtn = document.createElement('button');
    const inputField = document.createElement('input');
    const sideBarList = document.getElementById('sb-list');
    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const addBtn = document.createElement('button');





    cancelBtn.addEventListener('click', e => {
        sideBarList.insertAdjacentHTML('beforeend', '<li id="addProject" class="togglable"><a href="#"><span class="plus-sgn">+</span> Add Project</a></li>');
        sideBarList.removeChild(listItem1);
        sideBarList.removeChild(listItem2);
        console.log(addProjectBtn);
    })

    addBtn.addEventListener('click', e => {
        if (inputField.value.length === 0) {
            alert('Enter A Project Name!');
        } else {
            sideBarList.insertAdjacentHTML('beforeend', '<li id="addProject" class="togglable"><a href="#"><span class="plus-sgn">+</span> Add Project</a></li>');
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
            text.href = '#';
            sideBarList.appendChild(listItemN);
            listItemN.appendChild(checkListImg);
            listItemN.appendChild(text);
            console.log(addProjectBtn);
        }
    })


    addProjectBtn.addEventListener('click', e => {
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

    })
}