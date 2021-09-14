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
    }
}

function addProject(title) {
    const project = new Project(title);
    projects.push(project);
}
function addTodo(title, dueDate) {
    const todo = new Todo(title, dueDate);
    project.arrayOfTodos.push(todo);
}

addProject('Default');

console.table(projects);
loadDom();

export {addProject, projects}