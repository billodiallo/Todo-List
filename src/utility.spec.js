import { jest } from '@jest/globals';
import * as utility from './utility';
// import Todo from './todo';
// import * as setInititalData  from './events';
import findTaskInputs from './utility';

const myTodo = new Todo('myTodoTitle', 'myDescription', '2021-05-06', 1, 0);
describe('toggleShowElement', () => {
  const mockElement = {
    classList: {
      toggle: jest.fn(),
    },
  };

  it('should call toggle with "hide"', () => {
    utility.toggleShowElement(mockElement);
    expect(mockElement.classList.toggle).toBeCalledWith('hide');
  });
});

describe('find input', () => {
  it('should show main list "', () => {
    const find1 = document.querySelectorAll('[data-type="in"]');
    // utility.findTaskInputs(mockElement1);
    expect(findTaskInputs()).toEqual(find1);
  });
});
const myTodo1 = new Todo('myTodoTitle', 'myDescription', '2021-05-06', 1, 0);

describe('show Task', () => {
  it('should show main list "', () => {
    myTodo.showTask('tasks');
    expect(myTodo1.showTask().id).toEqual([('myTodoTitle', 'myDescription', '2021-05-06', 1, 0)]);
  });
});

describe('show Form', () => {
  const editTaskForm = document.getElementById('editTaskForm');
  it('should show main list "', () => {
    myTodo.editTaskForm('tasks');
    utility.addHiddenInput(editTaskForm);
    utility.toggleShowElement(editTaskForm);
    expect(myTodo1.editTaskForm().id).toEqual([('myTodoTitle', 'myDescription', '2021-05-06', 1, 0)]);
  });
});

describe('show Project', () => {
  const table = document.querySelector('.projectsTable');
  it('should show project "', () => {
    table.appendChild(myTodo);
    expect(myTodo1.editTaskForm().id).toEqual([('myTodoTitle', 'myDescription', '2021-05-06', 1, 0)]);
  });
});

describe('present Project ', () => {
  const table = document.querySelector('.projectsTable');
  expect(myTodo1.presentProject().id).toEqual([('myTodoTitle', 'myDescription', '2021-05-06', 1, 0)]);
});
