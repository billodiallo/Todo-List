import { createList, createTask, clearElement } from './logic';

test('Check name', () => {
  expect(createTask('billo').name).toBe('billo');
});

test('Check negative scenario', () => {
  expect(createTask('bb').complete).toBe(false);
});
