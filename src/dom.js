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
    defaultProject.classList = 'project';
    projectList.appendChild(defaultProject);
    projectForm.appendChild(projectList);
    projectSubmitButton.addEventListener('click', () => {
        addProject(projectFormInput.value);
        const project = document.createElement('div');
        project.classList = 'project';
        project.textContent = projectFormInput.value;
        projectList.appendChild(project);
        console.table(projects);
        document.querySelectorAll('.project').forEach(item => {
            item.addEventListener('click', (e) => {
                selectedProject.textContent = e.target.textContent;
                
            })
        });
    });

    const todo = document.createElement('div');
    todo.textContent = 'TODO';
    const selectedProject = document.createElement('div');
    selectedProject.id = 'selected-project';
    selectedProject.textContent = 'Default';
    const tasks = document.createElement('div');
    tasks.textContent = 'Tasks:'
    todo.appendChild(selectedProject);
    todo.appendChild(tasks);
    content.appendChild(todo);
}

export{loadDom}