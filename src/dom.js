import { addProject } from './index.js';
import { projects } from './index.js';
const content = document.querySelector('#content');

function loadDom() {
    const projectHeader = document.createElement('div');
    projectHeader.textContent = 'PROJECTS';
    
    const projectForm = document.createElement('div');
    projectForm.id = 'project-form'
    const projectFormInput = document.createElement('input');
    projectFormInput.id = 'project-input';
    const projectSubmitButton = document.createElement('button');
    projectSubmitButton.id = 'project-button';
    projectSubmitButton.textContent = 'Add'
    projectForm.appendChild(projectFormInput);
    projectForm.appendChild(projectSubmitButton);
    projectHeader.appendChild(projectForm);
    content.appendChild(projectHeader);

    const projectList = document.createElement('div');
    projectList.id = 'project-list';
    const defaultProject = document.createElement('div');
    defaultProject.textContent = 'Default';
    projectList.appendChild(defaultProject);
    projectForm.appendChild(projectList);
    projectSubmitButton.addEventListener('click', () => {
        addProject(projectFormInput.value);
        const project = document.createElement('div');
        project.textContent = projectFormInput.value;
        projectForm.appendChild(project);
        console.table(projects);
    });
}

export{loadDom}