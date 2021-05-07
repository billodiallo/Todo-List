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

    function save() {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
      }

      function renderTasks(selectedList) {
        selectedList.tasks.forEach((task) => {
          const taskElement = document.importNode(taskTemplate.content, true);
          const checkbox = taskElement.querySelector('input');
          checkbox.id = task.id;
          checkbox.checked = task.complete;
          const label = taskElement.querySelector('label');
          label.htmlFor = task.id;
          label.append(task.name);
          tasksContainer.appendChild(taskElement);
        });

        function renderLists() {
            lists.forEach((list) => {
              const listElement = document.createElement('li');
              listElement.dataset.listId = list.id;
              listElement.classList.add('list-name');
              listElement.innerText = list.name;
              if (list.id === selectedListId) {
                listElement.classList.add('active-list');
              }
              listsContainer.appendChild(listElement);
            });
          }

          function render() {
            clearElement(listsContainer);
            renderLists();
        
            const selectedList = lists.find((list) => list.id === selectedListId);
            if (selectedListId == null) {
              listDisplayContainer.style.display = 'none';
            } else {
              listDisplayContainer.style.display = '';
              listTitleElement.innerText = selectedList.name;
              renderTaskCount(selectedList);
              clearElement(tasksContainer);
              renderTasks(selectedList);
            }
          }
        
      

  }