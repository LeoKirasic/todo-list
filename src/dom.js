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
    const taskList = document.createElement('div');
    const projectList = document.createElement('div');

    // let project = document.createElement('div');
    // project.textContent = projects[3].title;
    // projectList.appendChild(project);
    
    projectList.id = 'project-list';
    projectForm.appendChild(projectList);
    projectSubmitButton.addEventListener('click', () => {
        if(projectFormInput.value === '') {
            alert(`Can't submit empty project!`);
        } else {
        addProject(projectFormInput.value);
        
        project = document.createElement('div');
        project.classList = 'project';
        project.textContent = projectFormInput.value;
        projectList.appendChild(project);
        document.querySelectorAll('.project').forEach(item => {
            item.addEventListener('click', (e) => {
                selectedProject.textContent = e.target.textContent;
                const index = projects.findIndex(item => item.title === e.target.textContent);
                console.log(index);
                console.log(projects[index].arrayOfTodos);
                while (taskList.firstChild) {
                    taskList.removeChild(taskList.lastChild);
                  }
                for(let i = 0; i < projects[index].arrayOfTodos.length; i++) {
                    let task = document.createElement('div');
                    task.id = 'task'
                    task.textContent = projects[index].arrayOfTodos.at(i).info();
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'X';

                    deleteButton.addEventListener('click', (e) => {
                        const todoIndex = projects[index].arrayOfTodos.findIndex(item => item.info() === e.target.closest('#task').textContent.replace('X', ''));

                        projects[index].arrayOfTodos.splice(todoIndex, 1);
                        e.target.closest('#task').remove();
                        console.log(projects[index].arrayOfTodos);
                    });

                    task.appendChild(deleteButton);
                    taskList.appendChild(task);
                }
                tasks.appendChild(taskList);
            })
        });
        }
    });

    const todo = document.createElement('div');
    todo.textContent = 'TODO';
    const selectedProject = document.createElement('div');
    selectedProject.id = 'selected-project';
    selectedProject.textContent = 'No project selected!';
    const todoForm = document.createElement('div');
    const todoTitleInput = document.createElement('input');
    todoTitleInput.placeholder = 'Title';
    const todoDueDateInput = document.createElement('input');
    todoDueDateInput.setAttribute('type', 'date');
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
        if(todoTitleInput.value === '' || todoDueDateInput.value === '') {
            alert(`Can't input an empty TODO!`);
        } else {
            if(selectedProject.textContent === 'No project selected!') {
                alert('Please select a project!');
            } else {
        const index = projects.findIndex(item => item.title === selectedProject.textContent);
        addTodo(projects[index], todoTitleInput.value, todoDueDateInput.value);
        let task = document.createElement('div');
        console.log('dataset: ', task.dataset.index);
        task.id = 'task';
        task.textContent = projects[index].arrayOfTodos.at(-1).info();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

         deleteButton.addEventListener('click', (e) => {
            const todoIndex = projects[index].arrayOfTodos.findIndex(item => item.info() === e.target.closest('#task').textContent.replace('X', ''));

            projects[index].arrayOfTodos.splice(todoIndex, 1);
            e.target.closest('#task').remove();
            console.log(projects[index].arrayOfTodos);

         });

        task.appendChild(deleteButton);
        console.log(task);
        console.log(projects[index].arrayOfTodos);
        taskList.appendChild(task);
        }
        }
    });
}

export{loadDom}