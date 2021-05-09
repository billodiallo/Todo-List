/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAddTask": () => (/* binding */ loadAddTask),
/* harmony export */   "submitTask": () => (/* binding */ submitTask),
/* harmony export */   "loadAddProject": () => (/* binding */ loadAddProject),
/* harmony export */   "submitProject": () => (/* binding */ submitProject),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "setInititalData": () => (/* binding */ setInititalData)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var addTaskForm = document.getElementById('addTaskForm');
var addProjectForm = document.getElementById('addProjectForm');
var editTaskForm = document.getElementById('editTaskForm');

var loadAddTask = function loadAddTask() {
  var addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
  });
};

var loadAddProject = function loadAddProject() {
  var addProjectButton = document.getElementById('addProjectButton');
  addProjectButton.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
  });
};

var submitTask = function submitTask() {
  var submitTaskButton = document.getElementById('formSubmit');
  submitTaskButton.addEventListener('click', function () {
    var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_1__.default, _toConsumableArray(_utility__WEBPACK_IMPORTED_MODULE_0__.taskInputs()));

    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_todo__WEBPACK_IMPORTED_MODULE_1__.default, 'Tasks');
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.presentTask(_todo__WEBPACK_IMPORTED_MODULE_1__.default, newTask);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
};

var saveTask = function saveTask() {
  var editTaskButton = document.getElementById('formSave');
  editTaskButton.addEventListener('click', function () {
    var editedTask = document.querySelector('[name="id"]').value;
    _todo__WEBPACK_IMPORTED_MODULE_1__.default.mainList[editedTask].editTask();
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_todo__WEBPACK_IMPORTED_MODULE_1__.default, 'Tasks');
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(editTaskForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddTaskForm();
  });
};

var submitProject = function submitProject() {
  var submitProjectButton = document.getElementById('projectSubmit');
  submitProjectButton.addEventListener('click', function () {
    var project = new _project__WEBPACK_IMPORTED_MODULE_2__.default(_utility__WEBPACK_IMPORTED_MODULE_0__.projectInput());
    _utility__WEBPACK_IMPORTED_MODULE_0__.updateData(_project__WEBPACK_IMPORTED_MODULE_2__.default, 'Projects');
    _utility__WEBPACK_IMPORTED_MODULE_0__.addProjectToForm(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.presentProject(project);
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(addProjectForm);
    _utility__WEBPACK_IMPORTED_MODULE_0__.clearAddProjectForm();
  });
};

var showProjects = function showProjects() {
  var button = document.getElementById('showProjects');
  var table = document.querySelector('.projectsSection');
  button.addEventListener('click', function () {
    _utility__WEBPACK_IMPORTED_MODULE_0__.toggleShowElement(table);
  });
};

var setInititalData = function setInititalData() {
  var _JSON$parse, _JSON$parse2;

  var projects = (_JSON$parse = JSON.parse(localStorage.getItem('Projects'))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
  projects.forEach(function (project) {
    /* eslint-disable no-unused-vars */
    var newproject = _construct(_project__WEBPACK_IMPORTED_MODULE_2__.default, _toConsumableArray(Object.values(project)));
  });
  var tasks = (_JSON$parse2 = JSON.parse(localStorage.getItem('Tasks'))) !== null && _JSON$parse2 !== void 0 ? _JSON$parse2 : [];
  tasks.forEach(function (task) {
    if (task) {
      var newTask = _construct(_todo__WEBPACK_IMPORTED_MODULE_1__.default, _toConsumableArray(Object.values(task)));
      /* eslint-enable no-unused-vars */

    }
  });
};



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Project = /*#__PURE__*/function () {
  function Project(title) {
    _classCallCheck(this, Project);

    this.title = title;
    this.content = [];
    this.index = Project.mainList.length;
    Project.mainList.push(this);
  }

  _createClass(Project, [{
    key: "changeTitle",
    value: function changeTitle(string) {
      if (string === '') {
        throw new Error('MissingError: Title cannot be blank');
      } else {
        this.title = string;
      }
    }
  }, {
    key: "addTodo",
    value: function addTodo(todo) {
      this.content.push(todo);
    }
  }]);

  return Project;
}();

_defineProperty(Project, "mainList", []);



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority, project) {
    _classCallCheck(this, Todo);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.index = Todo.mainList.length;
    this.done = false;
    this.addToProject(project);
    Todo.mainList.push(this);
  }

  _createClass(Todo, [{
    key: "addToProject",
    value: function addToProject(id) {
      _project__WEBPACK_IMPORTED_MODULE_0__.default.mainList[id].addTodo(this);
    }
  }, {
    key: "changeAttr",
    value: function changeAttr(attr, string) {
      this[attr] = string;
    }
  }, {
    key: "findProps",
    value: function findProps() {
      return Object.values(this);
    }
  }, {
    key: "formatProps",
    value: function formatProps() {
      var props = this.findProps();
      var arr = [];

      for (var i = 0; i < 3; i += 1) {
        arr.push(props[i]);
      }

      arr.push(Todo.priorityText[props[3]]);
      arr.push(_project__WEBPACK_IMPORTED_MODULE_0__.default.mainList[props[4]].title);
      return arr;
    }
  }, {
    key: "editTask",
    value: function editTask() {
      var arr = _utility__WEBPACK_IMPORTED_MODULE_1__.taskInputs('out');
      var keys = Object.keys(this);

      for (var i = 0; i < arr.length; i += 1) {
        this.changeAttr(keys[i], arr[i]);
      }

      _utility__WEBPACK_IMPORTED_MODULE_1__.showEditedTask(this);
    }
  }]);

  return Todo;
}();

_defineProperty(Todo, "mainList", []);

_defineProperty(Todo, "priorityText", ['Low', 'Medium', 'High']);



/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleShowElement": () => (/* binding */ toggleShowElement),
/* harmony export */   "showMainList": () => (/* binding */ showMainList),
/* harmony export */   "taskInputs": () => (/* binding */ taskInputs),
/* harmony export */   "showTask": () => (/* binding */ showTask),
/* harmony export */   "projectInput": () => (/* binding */ projectInput),
/* harmony export */   "showProject": () => (/* binding */ showProject),
/* harmony export */   "addProjectToForm": () => (/* binding */ addProjectToForm),
/* harmony export */   "findTask": () => (/* binding */ findTask),
/* harmony export */   "clearAddTaskForm": () => (/* binding */ clearAddTaskForm),
/* harmony export */   "clearAddProjectForm": () => (/* binding */ clearAddProjectForm),
/* harmony export */   "addHiddenInput": () => (/* binding */ addHiddenInput),
/* harmony export */   "createCheckBox": () => (/* binding */ createCheckBox),
/* harmony export */   "toggleDone": () => (/* binding */ toggleDone),
/* harmony export */   "updateData": () => (/* binding */ updateData),
/* harmony export */   "showProjects": () => (/* binding */ showProjects),
/* harmony export */   "showInitialTasks": () => (/* binding */ showInitialTasks),
/* harmony export */   "populateTaskForm": () => (/* binding */ populateTaskForm),
/* harmony export */   "addEditEvent": () => (/* binding */ addEditEvent),
/* harmony export */   "addDeleteEvent": () => (/* binding */ addDeleteEvent),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "presentTask": () => (/* binding */ presentTask),
/* harmony export */   "showEditedTask": () => (/* binding */ showEditedTask),
/* harmony export */   "showTasksbutton": () => (/* binding */ showTasksbutton),
/* harmony export */   "presentProject": () => (/* binding */ presentProject),
/* harmony export */   "showProjectTasks": () => (/* binding */ showProjectTasks)
/* harmony export */ });
var projectsList = document.getElementById('project');
var editProjectsList = document.getElementById('editProject');

var toggleShowElement = function toggleShowElement(element) {
  element.classList.toggle('hide');
};

var findTaskInputs = function findTaskInputs() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'in';
  return document.querySelectorAll("[data-type=\"".concat(type, "\"]"));
};

var resetValue = function resetValue(node) {
  if (node.tagName === 'INPUT') {
    node.value = '';
  }
};

var clearAddTaskForm = function clearAddTaskForm() {
  var taskInputs = findTaskInputs();
  taskInputs.forEach(function (node) {
    return resetValue(node);
  });
};

var findProjectForm = function findProjectForm() {
  return document.getElementById('projectTitle');
};

var clearAddProjectForm = function clearAddProjectForm() {
  var projectInput = findProjectForm();
  projectInput.value = '';
};

var taskInputs = function taskInputs() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'in';
  var taskInputs = findTaskInputs(type);
  var arr = [];
  taskInputs.forEach(function (node) {
    arr.push(node.value);
  });
  return arr;
};

var showMainList = function showMainList(projectClass) {
  projectClass.mainList.forEach(function (project, index) {
    var option = document.createElement('option');
    option.textContent = project.title;
    option.value = index;
    var optionClone = option.cloneNode(true);
    projectsList.appendChild(option);
    editProjectsList.appendChild(optionClone);
  });
};

var addProjectToForm = function addProjectToForm(project) {
  var option = document.createElement('option');
  option.textContent = project.title;
  option.value = project.index;
  var optionClone = option.cloneNode(true);
  projectsList.appendChild(option);
  editProjectsList.appendChild(optionClone);
};

var projectInput = function projectInput() {
  var projectInput = document.getElementById('projectTitle');
  return projectInput.value;
};

var addHiddenInput = function addHiddenInput(form, task) {
  var _document$querySelect;

  var input = (_document$querySelect = document.querySelector('[name="id"]')) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.createElement('input');
  input.setAttribute('type', 'hidden');
  input.setAttribute('name', 'id');
  input.setAttribute('value', task.index);
  form.insertBefore(input, form.firstChild);
};

var toggleDone = function toggleDone(task) {
  var input = document.querySelector("[data-task-id=\"".concat(task.index, "\"]"));

  if (input.checked === true) {
    task.done = true;
  } else {
    task.done = false;
  }
};

var createCheckBox = function createCheckBox(task) {
  var td = document.createElement('td');
  var input = document.createElement('input');
  input.className = 'form-check-input';
  input.setAttribute('type', 'checkbox');
  input.dataset.taskId = task.index;
  input.addEventListener('change', function () {
    toggleDone(task);
  });
  td.appendChild(input);
  return td;
};

var findTask = function findTask(id) {
  var task = document.querySelector("tr[data-id=\"".concat(id, "\"]"));
  return task;
};

var updateData = function updateData(classname, type) {
  localStorage.setItem(type, JSON.stringify(classname.mainList));
};

var populateTaskForm = function populateTaskForm(task) {
  var taskInputs = document.querySelectorAll('[data-type="out"]');

  for (var i = 0; i < taskInputs.length; i += 1) {
    var element = taskInputs[i];
    element.value = task.findProps()[i];
  }

  return taskInputs;
};

var addEditEvent = function addEditEvent(task, button) {
  button.addEventListener('click', function () {
    populateTaskForm(task);
    var editTaskForm = document.getElementById('editTaskForm');
    addHiddenInput(editTaskForm, task);
    toggleShowElement(editTaskForm);
  });
};

var addDeleteEvent = function addDeleteEvent(className, task, button) {
  button.addEventListener('click', function () {
    findTask(task.index).remove();
    delete className.mainList[task.index];
    updateData(className, 'Tasks');
  });
};

var createButton = function createButton(className, task, type, style) {
  var button = document.createElement('button');
  button.className = "btn btn-outline-".concat(style, " edit__button mx-2");
  button.dataset.type = "".concat(type, "-task");
  button.dataset.id = task.index;
  button.textContent = type.toUpperCase();

  if (type === 'edit') {
    addEditEvent(task, button);
  } else {
    addDeleteEvent(className, task, button);
  }

  return button;
};

var showTask = function showTask(className, task) {
  var arr = task.formatProps();
  var tr = document.createElement('tr');

  for (var i = 0; i < arr.length; i += 1) {
    var _td = document.createElement('td');

    _td.textContent = arr[i];
    tr.appendChild(_td);
  }

  var editButton = createButton(className, task, 'edit', 'info');
  var deleteButton = createButton(className, task, 'delete', 'danger');
  var td = document.createElement('td');
  tr.appendChild(createCheckBox(task));
  td.appendChild(editButton);
  td.appendChild(deleteButton);
  tr.appendChild(td);
  tr.dataset.id = task.index;
  return tr;
};

var showInitialTasks = function showInitialTasks(todoClass) {
  var taskTable = document.querySelector('.taskTable');
  todoClass.mainList.forEach(function (task) {
    taskTable.appendChild(showTask(todoClass, task));
  });
};

var presentTask = function presentTask(className, task) {
  var taskTable = document.querySelector('.taskTable');
  taskTable.appendChild(showTask(className, task));
};

var showEditedTask = function showEditedTask(task) {
  var taskNode = document.querySelector("tr[data-id=\"".concat(task.index, "\"]"));
  var arr = taskNode.childNodes;
  var taskValues = task.formatProps();

  for (var i = 0; i < 5; i += 1) {
    var element = arr[i];
    element.textContent = taskValues[i];
  }
};

var showProjectTasks = function showProjectTasks(project) {
  var tr = document.querySelector("tr[data-project-id=\"".concat(project.index, "\"]"));
  var ulOther = document.querySelector("ul[data-project-id=\"".concat(project.index, "\"]"));

  if (ulOther !== null) {
    ulOther.remove();
  }

  var ul = document.createElement('ul');
  ul.dataset.projectId = project.index;
  project.content.forEach(function (task) {
    var li = document.createElement('li');
    li.textContent = "".concat(task.title, " - due: ").concat(task.dueDate);
    ul.appendChild(li);
  });
  tr.lastChild.appendChild(ul);
};

var showTasksbutton = function showTasksbutton(project) {
  var td = document.createElement('td');
  var button = document.createElement('button');
  button.dataset.projectId = project.index;
  button.className = 'btn btn-sm btn-outline-primary';
  button.textContent = 'Show Tasks';
  button.addEventListener('click', function () {
    showProjectTasks(project);
  });
  td.appendChild(button);
  return td;
};

var showProject = function showProject(project) {
  var tr = document.createElement('tr');
  tr.dataset.projectId = project.index;
  var td = document.createElement('td');
  var tdExtra = document.createElement('td');
  td.textContent = project.title;
  var button = showTasksbutton(project);
  tr.appendChild(td);
  tr.appendChild(button);
  tr.appendChild(tdExtra);
  return tr;
};

var showProjects = function showProjects(projectClass) {
  var table = document.querySelector('.projectsTable');
  projectClass.mainList.forEach(function (project) {
    table.appendChild(showProject(project));
  });
};

var presentProject = function presentProject(project) {
  var table = document.querySelector('.projectsTable');
  table.appendChild(showProject(project));
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




_events__WEBPACK_IMPORTED_MODULE_0__.setInititalData();

if (_project__WEBPACK_IMPORTED_MODULE_2__.default.mainList.length === 0) {
  /* eslint-disable no-unused-vars */
  var newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.default('default');
  /* eslint-enable no-unused-vars */
}

_utility__WEBPACK_IMPORTED_MODULE_1__.showMainList(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_utility__WEBPACK_IMPORTED_MODULE_1__.showProjects(_project__WEBPACK_IMPORTED_MODULE_2__.default);
_utility__WEBPACK_IMPORTED_MODULE_1__.showInitialTasks(_todo__WEBPACK_IMPORTED_MODULE_3__.default);
_events__WEBPACK_IMPORTED_MODULE_0__.showProjects();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddProject();
_events__WEBPACK_IMPORTED_MODULE_0__.loadAddTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitTask();
_events__WEBPACK_IMPORTED_MODULE_0__.submitProject();
_events__WEBPACK_IMPORTED_MODULE_0__.saveTask();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90b2RvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGRUYXNrRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRQcm9qZWN0Rm9ybSIsImVkaXRUYXNrRm9ybSIsImxvYWRBZGRUYXNrIiwiYWRkVGFza0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1dGlsIiwibG9hZEFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0VGFzayIsInN1Ym1pdFRhc2tCdXR0b24iLCJuZXdUYXNrIiwiVG9kbyIsIlByb2plY3QiLCJzYXZlVGFzayIsImVkaXRUYXNrQnV0dG9uIiwiZWRpdGVkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVkaXRUYXNrIiwic3VibWl0UHJvamVjdCIsInN1Ym1pdFByb2plY3RCdXR0b24iLCJwcm9qZWN0Iiwic2hvd1Byb2plY3RzIiwiYnV0dG9uIiwidGFibGUiLCJzZXRJbml0aXRhbERhdGEiLCJwcm9qZWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwibmV3cHJvamVjdCIsIk9iamVjdCIsInZhbHVlcyIsInRhc2tzIiwidGFzayIsInRpdGxlIiwiY29udGVudCIsImluZGV4IiwibWFpbkxpc3QiLCJsZW5ndGgiLCJwdXNoIiwic3RyaW5nIiwiRXJyb3IiLCJ0b2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJkb25lIiwiYWRkVG9Qcm9qZWN0IiwiaWQiLCJhZGRUb2RvIiwiYXR0ciIsInByb3BzIiwiZmluZFByb3BzIiwiYXJyIiwiaSIsInByaW9yaXR5VGV4dCIsInV0aWxzIiwia2V5cyIsImNoYW5nZUF0dHIiLCJwcm9qZWN0c0xpc3QiLCJlZGl0UHJvamVjdHNMaXN0IiwidG9nZ2xlU2hvd0VsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmluZFRhc2tJbnB1dHMiLCJ0eXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInJlc2V0VmFsdWUiLCJub2RlIiwidGFnTmFtZSIsImNsZWFyQWRkVGFza0Zvcm0iLCJ0YXNrSW5wdXRzIiwiZmluZFByb2plY3RGb3JtIiwiY2xlYXJBZGRQcm9qZWN0Rm9ybSIsInByb2plY3RJbnB1dCIsInNob3dNYWluTGlzdCIsInByb2plY3RDbGFzcyIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm9wdGlvbkNsb25lIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhZGRQcm9qZWN0VG9Gb3JtIiwiYWRkSGlkZGVuSW5wdXQiLCJmb3JtIiwiaW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwidG9nZ2xlRG9uZSIsImNoZWNrZWQiLCJjcmVhdGVDaGVja0JveCIsInRkIiwiY2xhc3NOYW1lIiwiZGF0YXNldCIsInRhc2tJZCIsImZpbmRUYXNrIiwidXBkYXRlRGF0YSIsImNsYXNzbmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwb3B1bGF0ZVRhc2tGb3JtIiwiYWRkRWRpdEV2ZW50IiwiYWRkRGVsZXRlRXZlbnQiLCJyZW1vdmUiLCJjcmVhdGVCdXR0b24iLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwic2hvd1Rhc2siLCJmb3JtYXRQcm9wcyIsInRyIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsInNob3dJbml0aWFsVGFza3MiLCJ0b2RvQ2xhc3MiLCJ0YXNrVGFibGUiLCJwcmVzZW50VGFzayIsInNob3dFZGl0ZWRUYXNrIiwidGFza05vZGUiLCJjaGlsZE5vZGVzIiwidGFza1ZhbHVlcyIsInNob3dQcm9qZWN0VGFza3MiLCJ1bE90aGVyIiwidWwiLCJwcm9qZWN0SWQiLCJsaSIsImxhc3RDaGlsZCIsInNob3dUYXNrc2J1dHRvbiIsInNob3dQcm9qZWN0IiwidGRFeHRyYSIsInByZXNlbnRQcm9qZWN0IiwiZXZlbnQiLCJuZXdQcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCO0FBQ0EsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7O0FBRUEsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF0QjtBQUNBSSxlQUFhLENBQUNDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUNDLDJEQUFBLENBQXVCUixXQUF2QjtBQUNELEdBRkQ7QUFHRCxDQUxEOztBQU9BLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUF6QjtBQUNBUSxrQkFBZ0IsQ0FBQ0gsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFlBQU07QUFDL0NDLDJEQUFBLENBQXVCTCxjQUF2QjtBQUNELEdB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LFdBQU4sQ0FBa0IrQyxXQUFXLENBQUNoSCxPQUFELENBQTdCO0FBQ0QsQ0FIRDs7Ozs7Ozs7VUN2T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBbUgsb0RBQUE7O0FBQ0EsSUFBSTVILDZEQUFBLEtBQTRCLENBQWhDLEVBQW1DO0FBQ2pDO0FBQ0EsTUFBTTZILFVBQVUsR0FBRyxJQUFJN0gsNkNBQUosQ0FBWSxTQUFaLENBQW5CO0FBQ0E7QUFDRDs7QUFFRCtDLGtEQUFBLENBQW1CL0MsNkNBQW5CO0FBQ0ErQyxrREFBQSxDQUFtQi9DLDZDQUFuQjtBQUNBK0Msc0RBQUEsQ0FBdUJoRCwwQ0FBdkI7QUFFQTZILGlEQUFBO0FBQ0FBLG1EQUFBO0FBQ0FBLGdEQUFBO0FBQ0FBLCtDQUFBO0FBQ0FBLGtEQUFBO0FBQ0FBLDZDQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsaXR5JztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuXHJcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtJyk7XHJcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RGb3JtJyk7XHJcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcclxuXHJcbmNvbnN0IGxvYWRBZGRUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xyXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFRhc2tGb3JtKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRBZGRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xyXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB1dGlsLnRvZ2dsZVNob3dFbGVtZW50KGFkZFByb2plY3RGb3JtKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFRhc2sgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtU3VibWl0Jyk7XHJcbiAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kbyguLi51dGlsLnRhc2tJbnB1dHMoKSk7XHJcbiAgICB1dGlsLnVwZGF0ZURhdGEoVG9kbywgJ1Rhc2tzJyk7XHJcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XHJcbiAgICB1dGlsLnByZXNlbnRUYXNrKFRvZG8sIG5ld1Rhc2spO1xyXG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRUYXNrRm9ybSk7XHJcbiAgICB1dGlsLmNsZWFyQWRkVGFza0Zvcm0oKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNhdmVUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1TYXZlJyk7XHJcbiAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlO1xyXG4gICAgVG9kby5tYWluTGlzdFtlZGl0ZWRUYXNrXS5lZGl0VGFzaygpO1xyXG4gICAgdXRpbC51cGRhdGVEYXRhKFRvZG8sICdUYXNrcycpO1xyXG4gICAgdXRpbC51cGRhdGVEYXRhKFByb2plY3QsICdQcm9qZWN0cycpO1xyXG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xyXG4gICAgdXRpbC5jbGVhckFkZFRhc2tGb3JtKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFN1Ym1pdCcpO1xyXG4gIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodXRpbC5wcm9qZWN0SW5wdXQoKSk7XHJcbiAgICB1dGlsLnVwZGF0ZURhdGEoUHJvamVjdCwgJ1Byb2plY3RzJyk7XHJcbiAgICB1dGlsLmFkZFByb2plY3RUb0Zvcm0ocHJvamVjdCk7XHJcbiAgICB1dGlsLnByZXNlbnRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudChhZGRQcm9qZWN0Rm9ybSk7XHJcbiAgICB1dGlsLmNsZWFyQWRkUHJvamVjdEZvcm0oKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd1Byb2plY3RzJyk7XHJcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNTZWN0aW9uJyk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdXRpbC50b2dnbGVTaG93RWxlbWVudCh0YWJsZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRJbml0aXRhbERhdGEgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKSA/PyBbXTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICAgIGNvbnN0IG5ld3Byb2plY3QgPSBuZXcgUHJvamVjdCguLi5PYmplY3QudmFsdWVzKHByb2plY3QpKTtcclxuICB9KTtcclxuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rhc2tzJykpID8/IFtdO1xyXG4gIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICBpZiAodGFzaykge1xyXG4gICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG8oLi4uT2JqZWN0LnZhbHVlcyh0YXNrKSk7XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgbG9hZEFkZFRhc2ssIHN1Ym1pdFRhc2ssIGxvYWRBZGRQcm9qZWN0LCBzdWJtaXRQcm9qZWN0LCBzYXZlVGFzaywgc2hvd1Byb2plY3RzLCBzZXRJbml0aXRhbERhdGEsXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgc3RhdGljIG1haW5MaXN0ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBbXTtcclxuICAgIHRoaXMuaW5kZXggPSBQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aDtcclxuICAgIFByb2plY3QubWFpbkxpc3QucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRpdGxlKHN0cmluZykge1xyXG4gICAgaWYgKHN0cmluZyA9PT0gJycpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nRXJyb3I6IFRpdGxlIGNhbm5vdCBiZSBibGFuaycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgdGhpcy5jb250ZW50LnB1c2godG9kbyk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXR5JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICBzdGF0aWMgbWFpbkxpc3QgPSBbXTtcclxuXHJcbiAgc3RhdGljIHByaW9yaXR5VGV4dCA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgdGhpcy5pbmRleCA9IFRvZG8ubWFpbkxpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgICB0aGlzLmFkZFRvUHJvamVjdChwcm9qZWN0KTtcclxuICAgIFRvZG8ubWFpbkxpc3QucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGFkZFRvUHJvamVjdChpZCkge1xyXG4gICAgUHJvamVjdC5tYWluTGlzdFtpZF0uYWRkVG9kbyh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUF0dHIoYXR0ciwgc3RyaW5nKSB7XHJcbiAgICB0aGlzW2F0dHJdID0gc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZmluZFByb3BzKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcyk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRQcm9wcygpIHtcclxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5maW5kUHJvcHMoKTtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcclxuICAgICAgYXJyLnB1c2gocHJvcHNbaV0pO1xyXG4gICAgfVxyXG4gICAgYXJyLnB1c2goVG9kby5wcmlvcml0eVRleHRbcHJvcHNbM11dKTtcclxuICAgIGFyci5wdXNoKFByb2plY3QubWFpbkxpc3RbcHJvcHNbNF1dLnRpdGxlKTtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG5cclxuICBlZGl0VGFzaygpIHtcclxuICAgIGNvbnN0IGFyciA9IHV0aWxzLnRhc2tJbnB1dHMoJ291dCcpO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VBdHRyKGtleXNbaV0sIGFycltpXSk7XHJcbiAgICB9XHJcbiAgICB1dGlscy5zaG93RWRpdGVkVGFzayh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcclxuY29uc3QgZWRpdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UHJvamVjdCcpO1xyXG5cclxuY29uc3QgdG9nZ2xlU2hvd0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59O1xyXG5cclxuY29uc3QgZmluZFRhc2tJbnB1dHMgPSAodHlwZSA9ICdpbicpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXR5cGU9XCIke3R5cGV9XCJdYCk7XHJcblxyXG5jb25zdCByZXNldFZhbHVlID0gKG5vZGUpID0+IHtcclxuICBpZiAobm9kZS50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICBub2RlLnZhbHVlID0gJyc7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2xlYXJBZGRUYXNrRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrSW5wdXRzID0gZmluZFRhc2tJbnB1dHMoKTtcclxuICB0YXNrSW5wdXRzLmZvckVhY2gobm9kZSA9PiByZXNldFZhbHVlKG5vZGUpKTtcclxufTtcclxuXHJcbmNvbnN0IGZpbmRQcm9qZWN0Rm9ybSA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcclxuXHJcbmNvbnN0IGNsZWFyQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZmluZFByb2plY3RGb3JtKCk7XHJcbiAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XHJcbn07XHJcblxyXG5jb25zdCB0YXNrSW5wdXRzID0gKHR5cGUgPSAnaW4nKSA9PiB7XHJcbiAgY29uc3QgdGFza0lucHV0cyA9IGZpbmRUYXNrSW5wdXRzKHR5cGUpO1xyXG4gIGNvbnN0IGFyciA9IFtdO1xyXG4gIHRhc2tJbnB1dHMuZm9yRWFjaChub2RlID0+IHtcclxuICAgIGFyci5wdXNoKG5vZGUudmFsdWUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhcnI7XHJcbn07XHJcblxyXG5jb25zdCBzaG93TWFpbkxpc3QgPSAocHJvamVjdENsYXNzKSA9PiB7XHJcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcclxuICAgIGNvbnN0IG9wdGlvbkNsb25lID0gb3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgZWRpdFByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb25DbG9uZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0VG9Gb3JtID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3QuaW5kZXg7XHJcbiAgY29uc3Qgb3B0aW9uQ2xvbmUgPSBvcHRpb24uY2xvbmVOb2RlKHRydWUpO1xyXG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gIGVkaXRQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQob3B0aW9uQ2xvbmUpO1xyXG59O1xyXG5cclxuY29uc3QgcHJvamVjdElucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcclxuICByZXR1cm4gcHJvamVjdElucHV0LnZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgYWRkSGlkZGVuSW5wdXQgPSAoZm9ybSwgdGFzaykgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdpZCcpO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmluZGV4KTtcclxuICBmb3JtLmluc2VydEJlZm9yZShpbnB1dCwgZm9ybS5maXJzdENoaWxkKTtcclxufTtcclxuXHJcbmNvbnN0IHRvZ2dsZURvbmUgPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pbmRleH1cIl1gKTtcclxuICBpZiAoaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgdGFzay5kb25lID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFzay5kb25lID0gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ2hlY2tCb3ggPSAodGFzaykgPT4ge1xyXG4gIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xyXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gIGlucHV0LmRhdGFzZXQudGFza0lkID0gdGFzay5pbmRleDtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVEb25lKHRhc2spO1xyXG4gIH0pO1xyXG4gIHRkLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICByZXR1cm4gdGQ7XHJcbn07XHJcblxyXG5jb25zdCBmaW5kVGFzayA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHtpZH1cIl1gKTtcclxuICByZXR1cm4gdGFzaztcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGEgPSAoY2xhc3NuYW1lLCB0eXBlKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odHlwZSwgSlNPTi5zdHJpbmdpZnkoY2xhc3NuYW1lLm1haW5MaXN0KSk7XHJcbn07XHJcblxyXG5jb25zdCBwb3B1bGF0ZVRhc2tGb3JtID0gKHRhc2spID0+IHtcclxuICBjb25zdCB0YXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cIm91dFwiXScpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0lucHV0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRhc2tJbnB1dHNbaV07XHJcbiAgICBlbGVtZW50LnZhbHVlID0gdGFzay5maW5kUHJvcHMoKVtpXTtcclxuICB9XHJcbiAgcmV0dXJuIHRhc2tJbnB1dHM7XHJcbn07XHJcblxyXG5jb25zdCBhZGRFZGl0RXZlbnQgPSAodGFzaywgYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcG9wdWxhdGVUYXNrRm9ybSh0YXNrKTtcclxuICAgIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VGFza0Zvcm0nKTtcclxuICAgIGFkZEhpZGRlbklucHV0KGVkaXRUYXNrRm9ybSwgdGFzayk7XHJcbiAgICB0b2dnbGVTaG93RWxlbWVudChlZGl0VGFza0Zvcm0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYWRkRGVsZXRlRXZlbnQgPSAoY2xhc3NOYW1lLCB0YXNrLCBidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBmaW5kVGFzayh0YXNrLmluZGV4KS5yZW1vdmUoKTtcclxuICAgIGRlbGV0ZSBjbGFzc05hbWUubWFpbkxpc3RbdGFzay5pbmRleF07XHJcbiAgICB1cGRhdGVEYXRhKGNsYXNzTmFtZSwgJ1Rhc2tzJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoY2xhc3NOYW1lLCB0YXNrLCB0eXBlLCBzdHlsZSkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBgYnRuIGJ0bi1vdXRsaW5lLSR7c3R5bGV9IGVkaXRfX2J1dHRvbiBteC0yYDtcclxuICBidXR0b24uZGF0YXNldC50eXBlID0gYCR7dHlwZX0tdGFza2A7XHJcbiAgYnV0dG9uLmRhdGFzZXQuaWQgPSB0YXNrLmluZGV4O1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHR5cGUudG9VcHBlckNhc2UoKTtcclxuICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XHJcbiAgICBhZGRFZGl0RXZlbnQodGFzaywgYnV0dG9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYWRkRGVsZXRlRXZlbnQoY2xhc3NOYW1lLCB0YXNrLCBidXR0b24pO1xyXG4gIH1cclxuICByZXR1cm4gYnV0dG9uO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd1Rhc2sgPSAoY2xhc3NOYW1lLCB0YXNrKSA9PiB7XHJcbiAgY29uc3QgYXJyID0gdGFzay5mb3JtYXRQcm9wcygpO1xyXG5cclxuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIHRkLnRleHRDb250ZW50ID0gYXJyW2ldO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gIH1cclxuICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKGNsYXNzTmFtZSwgdGFzaywgJ2VkaXQnLCAnaW5mbycpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihjbGFzc05hbWUsIHRhc2ssICdkZWxldGUnLCAnZGFuZ2VyJyk7XHJcbiAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gIHRyLmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrQm94KHRhc2spKTtcclxuICB0ZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICB0ZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICB0ci5kYXRhc2V0LmlkID0gdGFzay5pbmRleDtcclxuICByZXR1cm4gdHI7XHJcbn07XHJcblxyXG5jb25zdCBzaG93SW5pdGlhbFRhc2tzID0gKHRvZG9DbGFzcykgPT4ge1xyXG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcclxuICB0b2RvQ2xhc3MubWFpbkxpc3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgIHRhc2tUYWJsZS5hcHBlbmRDaGlsZChzaG93VGFzayh0b2RvQ2xhc3MsIHRhc2spKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByZXNlbnRUYXNrID0gKGNsYXNzTmFtZSwgdGFzaykgPT4ge1xyXG4gIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGFibGUnKTtcclxuICB0YXNrVGFibGUuYXBwZW5kQ2hpbGQoc2hvd1Rhc2soY2xhc3NOYW1lLCB0YXNrKSk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93RWRpdGVkVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0YXNrLmluZGV4fVwiXWApO1xyXG4gIGNvbnN0IGFyciA9IHRhc2tOb2RlLmNoaWxkTm9kZXM7XHJcbiAgY29uc3QgdGFza1ZhbHVlcyA9IHRhc2suZm9ybWF0UHJvcHMoKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrVmFsdWVzW2ldO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNob3dQcm9qZWN0VGFza3MgPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHRyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0LmluZGV4fVwiXWApO1xyXG4gIGNvbnN0IHVsT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB1bFtkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuaW5kZXh9XCJdYCk7XHJcbiAgaWYgKHVsT3RoZXIgIT09IG51bGwpIHtcclxuICAgIHVsT3RoZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICB1bC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaW5kZXg7XHJcbiAgcHJvamVjdC5jb250ZW50LmZvckVhY2godGFzayA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9IC0gZHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH0pO1xyXG4gIHRyLmxhc3RDaGlsZC5hcHBlbmRDaGlsZCh1bCk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93VGFza3NidXR0b24gPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBidXR0b24uZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmluZGV4O1xyXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5JztcclxuICBidXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyBUYXNrcyc7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2hvd1Byb2plY3RUYXNrcyhwcm9qZWN0KTtcclxuICB9KTtcclxuICB0ZC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIHJldHVybiB0ZDtcclxufTtcclxuXHJcbmNvbnN0IHNob3dQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgdHIuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmluZGV4O1xyXG4gIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBjb25zdCB0ZEV4dHJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICB0ZC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgY29uc3QgYnV0dG9uID0gc2hvd1Rhc2tzYnV0dG9uKHByb2plY3QpO1xyXG4gIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICB0ci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIHRyLmFwcGVuZENoaWxkKHRkRXh0cmEpO1xyXG4gIHJldHVybiB0cjtcclxufTtcclxuXHJcbmNvbnN0IHNob3dQcm9qZWN0cyA9IChwcm9qZWN0Q2xhc3MpID0+IHtcclxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1RhYmxlJyk7XHJcbiAgcHJvamVjdENsYXNzLm1haW5MaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHNob3dQcm9qZWN0KHByb2plY3QpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHByZXNlbnRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1RhYmxlJyk7XHJcbiAgdGFibGUuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3QocHJvamVjdCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICB0b2dnbGVTaG93RWxlbWVudCwgc2hvd01haW5MaXN0LCB0YXNrSW5wdXRzLCBzaG93VGFzaywgcHJvamVjdElucHV0LCBzaG93UHJvamVjdCxcclxuICBhZGRQcm9qZWN0VG9Gb3JtLCBmaW5kVGFzaywgY2xlYXJBZGRUYXNrRm9ybSwgY2xlYXJBZGRQcm9qZWN0Rm9ybSwgYWRkSGlkZGVuSW5wdXQsIGNyZWF0ZUNoZWNrQm94LFxyXG4gIHRvZ2dsZURvbmUsIHVwZGF0ZURhdGEsIHNob3dQcm9qZWN0cywgc2hvd0luaXRpYWxUYXNrcywgcG9wdWxhdGVUYXNrRm9ybSwgYWRkRWRpdEV2ZW50LFxyXG4gIGFkZERlbGV0ZUV2ZW50LCBjcmVhdGVCdXR0b24sIHByZXNlbnRUYXNrLCBzaG93RWRpdGVkVGFzaywgc2hvd1Rhc2tzYnV0dG9uLCBwcmVzZW50UHJvamVjdCxcclxuICBzaG93UHJvamVjdFRhc2tzLFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZXZlbnQgZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdHknO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xyXG5cclxuZXZlbnQuc2V0SW5pdGl0YWxEYXRhKCk7XHJcbmlmIChQcm9qZWN0Lm1haW5MaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdkZWZhdWx0Jyk7XHJcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG59XHJcblxyXG51dGlscy5zaG93TWFpbkxpc3QoUHJvamVjdCk7XHJcbnV0aWxzLnNob3dQcm9qZWN0cyhQcm9qZWN0KTtcclxudXRpbHMuc2hvd0luaXRpYWxUYXNrcyhUb2RvKTtcclxuXHJcbmV2ZW50LnNob3dQcm9qZWN0cygpO1xyXG5ldmVudC5sb2FkQWRkUHJvamVjdCgpO1xyXG5ldmVudC5sb2FkQWRkVGFzaygpO1xyXG5ldmVudC5zdWJtaXRUYXNrKCk7XHJcbmV2ZW50LnN1Ym1pdFByb2plY3QoKTtcclxuZXZlbnQuc2F2ZVRhc2soKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==