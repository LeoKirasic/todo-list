import {loadDom} from './dom.js';
import css from './style.css';
const projects = [];
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
}
function addTodo(project, title, dueDate) {
    const todo = new Todo(title, dueDate);
    project.arrayOfTodos.push(todo);
}
addTodo
loadDom();

export {addProject, Project, projects, addTodo}