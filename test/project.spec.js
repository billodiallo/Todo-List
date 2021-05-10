import Project from '../src/project';

const myProject = new Project('myTitle');

describe('change title', () => {
  test('it changes the title of the project', () => {
    myProject.changeTitle('newTitle');
    expect(myProject.title).toBe('newTitle');
  });

  test('change title should not accept empty string', () => {
    expect(() => { myProject.changeTitle(''); }).toThrow('MissingError: Title cannot be blank');
  });
});

describe('add todo', () => {
  test('it adds the element to the project content', () => {
    myProject.addTodo('todoObject');
    expect(myProject.content).toContain('todoObject');
  });
});
