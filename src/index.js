import { renderDom } from "./dom";
import css from "./style.css";
class Todo {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }
}
let test = new Todo('title', 'date');
console.log(test)

class Project {
    constructor(title) {
        this.title = title;
    }
}
const addProject = (title) => {
    const project = new Project(title);
    console.log('new project added');
}
renderDom();

export {addProject}