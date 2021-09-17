import { addProject, projects, addTodo } from './index.js';
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
    const task = document.createElement('div');

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
        document.querySelectorAll('.project').forEach(item => {
            item.addEventListener('click', (e) => {
                selectedProject.textContent = e.target.textContent;
                const index = projects.findIndex(item => item.title === e.target.textContent);
                console.log(index);
                console.log(projects[index].arrayOfTodos);
                task.textContent = JSON.stringify(projects[index].arrayOfTodos);
                tasks.appendChild(task);
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
    todoTitleInput.placeholder = 'Title';
    const todoDueDateInput = document.createElement('input');
    todoDueDateInput.placeholder = 'Due date';
    const todoButton = document.createElement('button');
    todoButton.textContent = 'Add';
    todoForm.appendChild(todoTitleInput);
    todoForm.appendChild(todoDueDateInput);
    todoForm.appendChild(todoButton);
    todo.appendChild(todoForm);
    const tasks = document.createElement('div');
    const tasksContent = document.createElement('div');
    tasks.textContent = 'Tasks:'
    todo.appendChild(selectedProject);
    tasks.appendChild(tasksContent);
    todo.appendChild(tasks);
    content.appendChild(todo);

    todoButton.addEventListener('click', () => {
        const index = projects.findIndex(item => item.title === selectedProject.textContent);
        addTodo(projects[index], todoTitleInput.value, todoDueDateInput.value);
        console.log(projects[index].arrayOfTodos);
        task.textContent = JSON.stringify(projects[index].arrayOfTodos);

    });
}

export{loadDom}