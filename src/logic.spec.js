import { createList, createTask, clearElement } from './logic';

test('Check name', () => {
    expect(createTask('billo').name).toBe('billo');
  });