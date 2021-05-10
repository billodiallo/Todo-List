import Todo from '../src/todo';
import Project from '../src/project';

/* eslint-disable no-unused-vars */
const myProject = new Project('myTitle');
/* eslint-enable no-unused-vars */

describe('change attr', () => {
  const myTodo = new Todo('reading', 'myDescription', '2021-05-11', 1, 0);
  test('it change the title when given "title" as an argument and a new title', () => {
    myTodo.changeAttr('title', 'reading');
    expect(myTodo.title).toBe('reading');
  });

  test('it change the description when given "description" as an argument and a new description', () => {
    myTodo.changeAttr('description', 'myNewDescription');
    expect(myTodo.description).toBe('myNewDescription');
  });

  test('it change the date when given "date" as an argument and a new date', () => {
    myTodo.changeAttr('date', '2021-05-11');
    expect(myTodo.date).toBe('2021-05-11');
  });
});

const myTodo = new Todo('myTodoTitle', 'myDescription', '2021-05-11', 1, 0);

describe('find Props', () => {
  test('it returns an array with the instance values', () => {
    expect(myTodo.findProps()).toEqual(['myTodoTitle', 'myDescription', '2021-05-11', 1, 0, 1, false]);
  });
});

describe('format Props', () => {
  test('it returns an array with the instance values formatted', () => {
    expect(myTodo.formatProps()).toEqual(['myTodoTitle', 'myDescription', '2021-05-11', 'Medium', 'myTitle']);
  });
});