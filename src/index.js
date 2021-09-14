import {loadDom} from './dom.js';

const projects = [];

class Project {
    constructor(title) {
        this.title = title;
    }
}

function addProject(title) {
    const project = new Project(title);
    projects.push(project);
}

addProject('Default');

console.table(projects);
loadDom();

export {addProject, projects}