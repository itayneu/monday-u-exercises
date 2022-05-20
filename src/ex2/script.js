const listItems = new ItemManager([]);

let pendingTodos = [];

function addTodo() {
  let currentTodo = document.querySelector("#list-item-input").value;

  if (currentTodo === "") {
    alert("Add a value to create a new todo");
  } else if (listItems.todos.includes(currentTodo)) {
    alert(`The task "${currentTodo}" is already in the list`);
  } else {
    let todoListItem = document.createElement("li");
    // todoListItem.className = "todo";
    todoListItem.className = "list-item";
    todoListItem.appendChild(document.createTextNode(currentTodo));
    document.querySelector("#list").appendChild(todoListItem);

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "list-item-delete-button";
    deleteSpan.appendChild(document.createTextNode("\u00D7"));
    todoListItem.appendChild(deleteSpan);

    // add todo to current todos array
    listItems.addTodo(currentTodo);
    document.querySelector("#counter").textContent = listItems.todos.length;

    // alert todo value on li click
    todoListItem.addEventListener("click", ({ target }) => {
      if (target.tagName === "LI") {
        alert(currentTodo);
      }
    });

    // delete todo on span click
    deleteSpan.addEventListener("click", () => {
      todoListItem.remove();

      // remove todo from current todos array
      listItems.removeTodo(currentTodo);
      document.querySelector("#counter").textContent = listItems.todos.length;
    });
  }

  // reset current todo input
  document.querySelector("#list-item-input").value = "";
}

function clearAllTodos() {
  document.querySelector("#list").innerHTML = "";

  // empty todos array
  pendingTodos = [];
  listItems.todos.forEach((listItem) => {
    listItems.removeTodo(listItem);
  });
  document.querySelector("#counter").textContent = listItems.todos.length;
}
