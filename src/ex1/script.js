let pendingTodos = [];

function addTodo() {
  let currentTodo = document.querySelector(".todoInput").value;

  if (currentTodo === "") {
    alert("Add a value to create a new todo");
  } else if (pendingTodos.includes(currentTodo)) {
    alert(`The task "${currentTodo}" is already in the list`);
  } else {
    let todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.appendChild(document.createTextNode(currentTodo));
    document.querySelector(".todos").appendChild(todoDiv);

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    deleteSpan.appendChild(document.createTextNode("\u00D7"));
    todoDiv.appendChild(deleteSpan);

    // add todo to current todos array
    pendingTodos.push(currentTodo);
    document.querySelector(".counter").textContent = pendingTodos.length;

    // alert todo value on div click
    todoDiv.addEventListener("click", ({ target }) => {
      if (target.tagName === "DIV") {
        alert(currentTodo);
      }
    });

    // delete todo on span click
    deleteSpan.addEventListener("click", () => {
      todoDiv.remove();

      // remove todo from current todos array
      pendingTodos.pop(currentTodo);
      document.querySelector(".counter").textContent = pendingTodos.length;
    });
  }

  // reset current todo input
  document.querySelector(".todoInput").value = "";
}

function clearAllTodos() {
  document.querySelector(".todos").innerHTML = "";

  // empty todos array
  pendingTodos = [];
  document.querySelector(".counter").textContent = pendingTodos.length;
}
