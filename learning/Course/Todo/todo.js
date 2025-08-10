const todoList = [
  { name: "watch youtube", dueDate: "2024-01-96" },
  { name: "Make dinner", dueDate: "2024-01-96" },
  { name: "Watch youtube", dueDate: "2024-01-96" },
  { name: "Send team updates", dueDate: "2024-01-96" },
  { name: "Code", dueDate: "****24/7****" },
];

function renderTodoList() {
  let todoListItem = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="todoList.splice(${i}, 1); renderTodoList()" class='delete-todo' >
    <span class="material-symbols-outlined">delete</span>
    </button>
    `;
    todoListItem += html;
  }
  document.querySelector(".display-todo").innerHTML = todoListItem;
}

renderTodoList();

function addTodo() {
  const inputElement = document.querySelector(".js-todo-name");
  const name = inputElement.value;

  const dateElement = document.querySelector(".due-date");
  const dueDate = dateElement.value;
  // if (inputElement.value !== "" && dateElement.value !== "") {
  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);
  renderTodoList();

  inputElement.value = "";
  // }
}
