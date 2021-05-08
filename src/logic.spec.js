import { createList, createTask, clearElement } from './logic';

test('Check name', () => {
  expect(createTask('billo').name).toBe('billo');
});

test('Check negative scenario', () => {
  expect(createTask('bb').complete).toBe(false);
});

test('Check createlist name', () => {
    expect(createList('billo').name).toBe('billo');
  });

  test('Check createlist task', () => {
    expect(createList('billo').tasks).toStrictEqual([]);
  });

  test('Check createlist id', () => {
    expect(createList('billo').id).not.toBe(null);
  });