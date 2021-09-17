import {loadDom} from './dom.js';
import css from './style.css';
const projects = [];
class Project {
    constructor(title) {
        this.title = title;
    }
    arrayOfTodos = ['Test'];
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
    console.log('object ', project);
    console.log('array ', projects)
}
function addTodo(project, title, dueDate) {
    const todo = new Todo(title, dueDate);
    project.arrayOfTodos.push(todo);
}

addProject('Default');
addTodo
loadDom();

export {addProject, Project, projects, addTodo}