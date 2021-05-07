const listCountElement = document.querySelector('[data-list-count]');

function createList(name) {
  return { id: Date.now().toString(), name, tasks: [] };
}
function createTask(name) {
    return { id: Date.now().toString(), name, complete: false };
  }
  