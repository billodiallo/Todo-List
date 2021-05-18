import Todo from '../src/todo';
import Project from '../src/project';

const myProject = new Project('myTitle');
describe('change attr', () => {
    const myTodo = new Todo('myTodoTitle', 'myDescription', '2021-04-21', 1, 0);
  
    test('it change the title when given "title" as an argument and a new title', () => {
      myTodo.changeAttr('title', 'myTodoNewTitle');
      expect(myTodo.title).toBe('myTodoNewTitle');
    });
});  