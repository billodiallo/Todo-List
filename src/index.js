import * as event from './events';
import * as utils from './utility';
import Project from './project';
import Todo from './todo';

event.setInititalData();
if (Project.mainList.length === 0) {
  /* eslint-disable no-unused-vars */
  const newProject = new Project('default');
  /* eslint-enable no-unused-vars */
}

utils.showMainList(Project);
utils.showProjects(Project);
utils.showInitialTasks(Todo);

event.showProjects();
event.loadAddProject();
event.loadAddTask();
event.submitTask();
event.submitProject();
event.saveTask();
