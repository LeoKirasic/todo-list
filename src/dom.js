import { addProject, projects, addTodo } from './index.js';
const content = document.querySelector('#content');

function loadDom() {
    const projectHeader = document.createElement('div');
    projectHeader.textContent = 'PROJECTS';
    projectHeader.id = 'project-header'
    const projectForm = document.createElement('div');
    projectForm.id = 'project-form'
    const projectFormInput = document.createElement('input');
    projectFormInput.id = 'project-input';
    projectFormInput.placeholder = 'Project';
    const projectSubmitButton = document.createElement('button');
    projectSubmitButton.id = 'project-button';
    projectSubmitButton.textContent = 'Add';
    projectSubmitButton.classList = 'add-button'
    projectForm.appendChild(projectFormInput);
    projectForm.appendChild(projectSubmitButton);
    projectHeader.appendChild(projectForm);
    content.appendChild(projectHeader);
    const taskList = document.createElement('div');
    const projectList = document.createElement('div');

    
      for(let i = 0; i < projects.length; i++){
     let project = document.createElement('div');
     project.textContent = projects[i].title;
     project.classList = 'project';
     projectList.appendChild(project);
      }
    projectList.id = 'project-list';
    projectForm.appendChild(projectList);
    projectSubmitButton.addEventListener('click', () => {
        if(projectFormInput.value === '') {
            alert(`Can't submit empty project!`);
        } else {
        addProject(projectFormInput.value);
        let project = document.createElement('div');
        project = document.createElement('div');
        project.classList = 'project';
        project.textContent = projectFormInput.value;
        projectList.appendChild(project);
        addEventsToProjects();
    }
});

        function addEventsToProjects(){
        document.querySelectorAll('.project').forEach(item => {
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                const index = projects.findIndex(item => item.title === e.target.textContent);
                projects.splice(index, 1);
                window.localStorage.setItem('projects' , JSON.stringify(projects));
                e.target.closest('.project').remove();
            });
            item.addEventListener('click', (e) => {
                selectedProject.textContent = e.target.textContent;
                const index = projects.findIndex(item => item.title === e.target.textContent);
                while (taskList.firstChild) {
                    taskList.removeChild(taskList.lastChild);
                  }
                for(let i = 0; i < projects[index].arrayOfTodos.length; i++) {
                    let task = document.createElement('div');
                    task.id = 'task'
                    task.textContent = projects[index].arrayOfTodos.at(i).info;
                    const deleteButton = document.createElement('button');
                    deleteButton.classList = 'delete-button'
                    deleteButton.textContent = 'X';
                    window.localStorage.setItem('projects' , JSON.stringify(projects));

                    deleteButton.addEventListener('click', (e) => {
                        const todoIndex = projects[index].arrayOfTodos.findIndex(item => item.info === e.target.closest('#task').textContent.replace('X', ''));
                        projects[index].arrayOfTodos.splice(todoIndex, 1);

                        window.localStorage.setItem('projects' , JSON.stringify(projects));
                        e.target.closest('#task').remove();
                    });

                    task.appendChild(deleteButton);
                    taskList.appendChild(task);
                }
                tasks.appendChild(taskList);
            })
        });
    }
    addEventsToProjects();
    const todo = document.createElement('div');
    todo.textContent = 'TODO';
    todo.id = 'todo-header';
    const selectedProject = document.createElement('div');
    selectedProject.id = 'selected-project';
    selectedProject.textContent = 'No project selected!';
    const todoForm = document.createElement('div');
    todoForm.id='todo-form'
    const todoTitleInput = document.createElement('input');
    todoTitleInput.placeholder = 'Title';
    const todoDueDateInput = document.createElement('input');
    todoDueDateInput.setAttribute('type', 'date');
    todoDueDateInput.placeholder = 'Due date';
    const todoButton = document.createElement('button');
    todoButton.textContent = 'Add';
    todoButton.classList = 'add-button'
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
        task.id = 'task';
        task.textContent = projects[index].arrayOfTodos.at(-1).info;
        const deleteButton = document.createElement('button');
        deleteButton.classList = 'delete-button';
        deleteButton.textContent = 'X';

         deleteButton.addEventListener('click', (e) => {
            const todoIndex = projects[index].arrayOfTodos.findIndex(item => item.info === e.target.closest('#task').textContent.replace('X', ''));

            
            projects[index].arrayOfTodos.splice(todoIndex, 1);
            e.target.closest('#task').remove();
            window.localStorage.setItem('projects' , JSON.stringify(projects));

         });

        task.appendChild(deleteButton);
        taskList.appendChild(task);
        }
        }
    });

}

export{loadDom}