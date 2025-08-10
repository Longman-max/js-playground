const todoList = [
  {
    name: "make dinner",
    dueDate: "2023-11-30",
  },
  {
    name: "wash dishes",
    dueDate: "2023-11-30",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1)
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  // Get the value of the text input element and store it.
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  // Get the value of the date input element and store it.
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";

  renderTodoList();
}
