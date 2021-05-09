const projectsList = document.getElementById('project');
const editProjectsList = document.getElementById('editProject');

const toggleShowElement = (element) => {
  element.classList.toggle('hide');
};

const findTaskInputs = (type = 'in') => document.querySelectorAll(`[data-type="${type}"]`);

const resetValue = (node) => {
  if (node.tagName === 'INPUT') {
    node.value = '';
  }
};

const clearAddTaskForm = () => {
  const taskInputs = findTaskInputs();
  taskInputs.forEach(node => resetValue(node));
};

const findProjectForm = () => document.getElementById('projectTitle');

const clearAddProjectForm = () => {
  const projectInput = findProjectForm();
  projectInput.value = '';
};

const taskInputs = (type = 'in') => {
  const taskInputs = findTaskInputs(type);
  const arr = [];
  taskInputs.forEach(node => {
    arr.push(node.value);
  });
  return arr;
};

const showMainList = (projectClass) => {
  projectClass.mainList.forEach((project, index) => {
    const option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    const optionClone = option.cloneNode(true);
    projectsList.appendChild(option);
    editProjectsList.appendChild(optionClone);
  });
};

const addProjectToForm = (project) => {
  const option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  const optionClone = option.cloneNode(true);
  projectsList.appendChild(option);
  editProjectsList.appendChild(optionClone);
};

const projectInput = () => {
  const projectInput = document.getElementById('projectTitle');
  return projectInput.value;
};

const addHiddenInput = (form, task) => {
  const input = document.querySelector('[name="id"]') ?? document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'id');
  input.setAttribute('value', task.index);
  form.insertBefore(input, form.firstChild);
};

const toggleDone = (task) => {
  const input = document.querySelector(`[data-task-id="${task.index}"]`);
  if (input.checked === true) {
    task.done = true;
  } else {
    task.done = false;
  }
};

const createCheckBox = (task) => {
  const td = document.createElement('td');
  const input = document.createElement('input');
  input.className = 'form-check-input';
  input.setAttribute('type', 'checkbox');
  input.dataset.taskId = task.index;
  input.addEventListener('change', () => {
    toggleDone(task);
  });
  td.appendChild(input);
  return td;
};

const findTask = (id) => {
  const task = document.querySelector(`tr[data-id="${id}"]`);
  return task;
};

const updateData = (classname, type) => {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
};

const populateTaskForm = (task) => {
  const taskInputs = document.querySelectorAll('[data-type="out"]');
  for (let i = 0; i < taskInputs.length; i += 1) {
    const element = taskInputs[i];
    element.value = task.findProps()[i];
  }
  return taskInputs;
};

const addEditEvent = (task, button) => {
  button.addEventListener('click', () => {
    populateTaskForm(task);
    const editTaskForm = document.getElementById('editTaskForm');
    addHiddenInput(editTaskForm, task);
    toggleShowElement(editTaskForm);
  });
};

const addDeleteEvent = (className, task, button) => {
  button.addEventListener('click', () => {
    findTask(task.index).remove();
    delete className.mainList[task.index];
    updateData(className, 'Tasks');
  });
};

const createButton = (className, task, type, style) => {
  const button = document.createElement('button');
  button.className = `btn btn-outline-${style} edit__button mx-2`;
  button.dataset.type = `${type}-task`;
  button.dataset.id = task.index;
  button.textContent = type.toUpperCase();
  if (type === 'edit') {
    addEditEvent(task, button);
  } else {
    addDeleteEvent(className, task, button);
  }
  return button;
};

const showTask = (className, task) => {
  const arr = task.formatProps();

  const tr = document.createElement('tr');
  for (let i = 0; i < arr.length; i += 1) {
    const td = document.createElement('td');
    td.textContent = arr[i];
    tr.appendChild(td);
  }
  const editButton = createButton(className, task, 'edit', 'info');
  const deleteButton = createButton(className, task, 'delete', 'danger');
  const td = document.createElement('td');
  tr.appendChild(createCheckBox(task));
  td.appendChild(editButton);
  td.appendChild(deleteButton);
  tr.appendChild(td);
  tr.dataset.id = task.index;
  return tr;
};

const showInitialTasks = (todoClass) => {
  const taskTable = document.querySelector('.taskTable');
  todoClass.mainList.forEach(task => {
    taskTable.appendChild(showTask(todoClass, task));
  });
};

const presentTask = (className, task) => {
  const taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(showTask(className, task));
};

const showEditedTask = (task) => {
  const taskNode = document.querySelector(`tr[data-id="${task.index}"]`);
  const arr = taskNode.childNodes;
  const taskValues = task.formatProps();
  for (let i = 0; i < 5; i += 1) {
    const element = arr[i];
    element.textContent = taskValues[i];
  }
};

const showProjectTasks = (project) => {
  const tr = document.querySelector(`tr[data-project-id="${project.index}"]`);
  const ulOther = document.querySelector(`ul[data-project-id="${project.index}"]`);
  if (ulOther !== null) {
    ulOther.remove();
  }
  const ul = document.createElement('ul');
  ul.dataset.projectId = project.index;
  project.content.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - due: ${task.dueDate}`;
    ul.appendChild(li);
  });
  tr.lastChild.appendChild(ul);
};

const showTasksbutton = (project) => {
  const td = document.createElement('td');
  const button = document.createElement('button');
  button.dataset.projectId = project.index;
  button.className = 'btn btn-sm btn-outline-primary';
  button.textContent = 'Show Tasks';
  button.addEventListener('click', () => {
    showProjectTasks(project);
  });
  td.appendChild(button);
  return td;
};

const showProject = (project) => {
  const tr = document.createElement('tr');
  tr.dataset.projectId = project.index;
  const td = document.createElement('td');
  const tdExtra = document.createElement('td');
  td.textContent = project.title;
  const button = showTasksbutton(project);
  tr.appendChild(td);
  tr.appendChild(button);
  tr.appendChild(tdExtra);
  return tr;
};

const showProjects = (projectClass) => {
  const table = document.querySelector('.projectsTable');
  projectClass.mainList.forEach((project) => {
    table.appendChild(showProject(project));
  });
};

const presentProject = (project) => {
  const table = document.querySelector('.projectsTable');
  table.appendChild(showProject(project));
};

export {
  toggleShowElement, showMainList, taskInputs, showTask, projectInput, showProject,
  addProjectToForm, findTask, clearAddTaskForm, clearAddProjectForm, addHiddenInput, createCheckBox,
  toggleDone, updateData, showProjects, showInitialTasks, populateTaskForm, addEditEvent,
  addDeleteEvent, createButton, presentTask, showEditedTask, showTasksbutton, presentProject,
  showProjectTasks,
};