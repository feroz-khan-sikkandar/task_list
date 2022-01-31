const form = document.querySelector('#task-form')
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection')


// Add Task Event
form.addEventListener('submit', addTask);

// Remove Task Event
taskList.addEventListener('click', removeTask);


// Add a new task
function addTask(e) {

  if (taskInput.value === '') {
    alert('Add A Task');
  } else {
    console.log(taskInput.value);

    // Create li element
    const li = document.createElement('li');
    // Add Class Name
    li.className = 'list-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    console.log(li);

    // Create a new link item
    const link = document.createElement('a');

    //Add class name
    link.className = 'delete-item'

    // Add remove icon
    link.innerHTML = '<i class="fas fa-trash-alt"></i>'

    //Append the link to li
    li.appendChild(link);

    console.log(li);


    // Appens li to Ul
    taskList.appendChild(li);

    // Clear Input
    taskInput.value = '';
  }
  e.preventDefault();
}

// Remove a task from the list
function removeTask(e) {
  console.log(e);
  if (e.target.parentElement.classList.contains('delete-item')) {

    if (confirm('Are you sure you want to delete this task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}