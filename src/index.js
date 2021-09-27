import {loadDom} from './dom.js';
import css from './style.css';


class Project {
    constructor(title) {
        this.title = title;
    }
    arrayOfTodos = [];
}
let defaultProject = new Project('Default');
let projects = [];
projects.push(defaultProject);
if(!localStorage.getItem('projects')){
    window.localStorage.setItem('projects' , JSON.stringify(projects));
} else {
projects = JSON.parse(localStorage.getItem('projects'));
}
class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;

        this.info = `Title: ${title} Due Date: ${dueDate}`;
    }
    
}

function addProject(title) {
    const project = new Project(title);
    projects.push(project);
    window.localStorage.setItem('projects' , JSON.stringify(projects));
    projects = JSON.parse(localStorage.getItem('projects'));

}
function addTodo(project, title, dueDate) {
    const todo = new Todo(title, dueDate);
    project.arrayOfTodos.push(todo);
    window.localStorage.setItem('projects', JSON.stringify(projects));
    projects = JSON.parse(localStorage.getItem('projects'));
}
loadDom();

export {addProject, Project, projects, addTodo}
