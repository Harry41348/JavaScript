'use strict';

// Elements
let addBtn = document.querySelector('#addBtn');
let clearBtn = document.querySelector('#clearBtn');
let taskList = document.querySelector('#taskList');
let template = document.querySelector('#taskTemplate');
let addTaskInput = document.querySelector('#newtaskInput');

let taskIdCounter = 0;

// Add task function
function addTask() {
  if (addTaskInput.value != '') {
    // Clone task
    let clone = template.content.cloneNode(true);
    let cloneText = clone.querySelector('.task__text');
    cloneText.textContent = addTaskInput.value;

    taskIdCounter++;
    cloneText.setAttribute('for', taskIdCounter.toString());
    // Checkbox
    let checkbox = clone.querySelector('.task__checkbox');
    checkbox.setAttribute('id', taskIdCounter.toString());
    checkbox.addEventListener('change', function (e) {});

    // Append to the page
    taskList.append(clone);

    // Reset the task text
    addTaskInput.value = '';
  }
}

// Event listeners

// Add tasks
addBtn.addEventListener('click', addTask);
addTaskInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) addTask();
});

// Clear button
clearBtn.addEventListener('click', function () {
  let taskItems = document.querySelectorAll('.task__item');

  for (const task of taskItems) {
    let taskCheckbox = task.querySelector('.task__checkbox');
    if (taskCheckbox.checked) {
      task.remove();
    }
  }
});
