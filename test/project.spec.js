import Project from '../src/project';

const myProject = new Project('myTitle');

describe('change title', () => {
  test('it changes the title of the project', () => {
    myProject.changeTitle('newTitle');
    expect(myProject.title).toBe('newTitle');
  });

});