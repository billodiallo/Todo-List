import {
    renderTaskCount, createList, createTask, clearElement,
  } from './logic';

  const createProject = () => {
    const listsContainer = document.querySelector('[data-lists]');
    const newListForm = document.querySelector('[data-new-list-form]');
    const newListinput = document.querySelector('[data-new-list-input]');
    const deleteListButton = document.querySelector('[data-delete-list-button]');
    const listDisplayContainer = document.querySelector('[data-list-display-container]');
    const listTitleElement = document.querySelector('[data-list-title]');
    const tasksContainer = document.querySelector('[data-tasks]');
    const taskTemplate = document.getElementById('task-template');
    const newTaskForm = document.querySelector('[data-new-task-form]');
    const newTaskInput = document.querySelector('[data-new-task-input]');
    const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');
    
  }