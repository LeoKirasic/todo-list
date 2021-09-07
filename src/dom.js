import {addProject} from "./index.js";
const renderDom = () => {
    const content = document.querySelector('#content');
    const createProjectButton = document.createElement('button');
    createProjectButton.id = 'add-project';
    content.appendChild(createProjectButton);
    createProjectButton.textContent = 'Add project'
        const modal = document.createElement('div');
        modal.id = 'modal';
        const modalContent = document.createElement('div');
        modalContent.id = 'modal-content';
        const header = document.createElement('div');
        header.id = 'header';
        const title = document.createElement('div');
        title.textContent = 'Add project';
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times';
        closeButton.id = 'close-button';
        const input = document.createElement('input');
        const addButton = document.createElement('button');
        addButton.id = 'add-button';
        addButton.textContent = "Add"
        header.appendChild(title);
        header.appendChild(closeButton);
        modalContent.appendChild(header);
        modalContent.appendChild(input);
        modalContent.appendChild(addButton);
        modal.appendChild(modalContent);
        content.appendChild(modal);
        addButton.addEventListener('click', () => {
            const project = document.createElement('div');
            project.textContent = input.value;
            addProject(input.value);
            content.appendChild(project);
        });
        createProjectButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        closeButton.addEventListener('click', () =>{
            modal.style.display = 'none';
        });
        window.addEventListener('click', () => {
            if(event.target === modal) {
            modal.style.display = 'none';
                
            }
        });
        }

export{renderDom};