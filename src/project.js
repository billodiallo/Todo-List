export default class Project {
  static mainList = [];

  constructor(title) {
    this.title = title;
    this.content = [];
    this.index = Project.mainList.length;
    Project.mainList.push(this);
  }

  changeTitle(string) {
    if (string === '') {
      throw new Error('MissingError: Title cannot be blank');
    } else {
      this.title = string;
    }
  }

  addTodo(todo) {
    this.content.push(todo);
  }
}