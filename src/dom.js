import { addProject, projects } from './index.js';
import { projectsByTitle } from './index.js';
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
        console.table(projectsByTitle);
        document.querySelectorAll('.project').forEach(item => {
            item.addEventListener('click', (e) => {
                selectedProject.textContent = e.target.textContent;
                // const test = projectsByTitle.indexOf(e.target.textContent);
                // console.log(test);
                const index = projects.findIndex(item => item.title === e.target.textContent);
                console.log(index);
                console.log(projects[index])
            })
        });
    });

    const todo = document.createElement('div');
    todo.textContent = 'TODO';
    const selectedProject = document.createElement('div');
    selectedProject.id = 'selected-project';
    selectedProject.textContent = 'Default';
    const todoForm = document.createElement('div');
    const todoTitleInput = document.createElement('input');
    const todoDueDateInput = document.createElement('input');
    const todoButton = document.createElement('button');
    todoButton.textContent = 'Add';
    todoForm.appendChild(todoTitleInput);
    todoForm.appendChild(todoDueDateInput);
    todoForm.appendChild(todoButton);
    todo.appendChild(todoForm);
    const tasks = document.createElement('div');
    tasks.textContent = 'Tasks:'
    todo.appendChild(selectedProject);
    todo.appendChild(tasks);
    content.appendChild(todo);
}

export{loadDom}