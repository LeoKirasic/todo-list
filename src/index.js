import {loadDom} from './dom.js';
import css from './style.css';
let projects = [];
if(projects.length <= 0) {
projects = JSON.parse(localStorage.getItem('projects'));
} else {
    projects = [];
}
console.log(projects);
class Project {
    constructor(title) {
        this.title = title;
    }
    arrayOfTodos = [];
}
class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;

        this.info = function() {
            return `Title: ${title} Due Date: ${dueDate}`;
        }
    }
    
}

function addProject(title) {
    const project = new Project(title);
    projects.push(project);
    window.localStorage.setItem('projects' , JSON.stringify(projects));

}
function addTodo(project, title, dueDate) {
    const todo = new Todo(title, dueDate);
    project.arrayOfTodos.push(todo);
    window.localStorage.setItem('projects', JSON.stringify(projects));
}
loadDom();

export {addProject, Project, projects, addTodo}