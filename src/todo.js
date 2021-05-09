import Project from './project';
import * as utils from './utility';

export default class Todo {
  static mainList = [];

  static priorityText = ['Low', 'Medium', 'High'];

  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.index = Todo.mainList.length;
    this.done = false;
    this.addToProject(project);
    Todo.mainList.push(this);
  }

  addToProject(id) {
    Project.mainList[id].addTodo(this);
  }

  changeAttr(attr, string) {
    this[attr] = string;
  }

  findProps() {
    return Object.values(this);
  }

  formatProps() {
    const props = this.findProps();
    const arr = [];
    for (let i = 0; i < 3; i += 1) {
      arr.push(props[i]);
    }
    arr.push(Todo.priorityText[props[3]]);
    arr.push(Project.mainList[props[4]].title);
    return arr;
  }

  editTask() {
    const arr = utils.taskInputs('out');
    const keys = Object.keys(this);
    for (let i = 0; i < arr.length; i += 1) {
      this.changeAttr(keys[i], arr[i]);
    }
    utils.showEditedTask(this);
  }
}
