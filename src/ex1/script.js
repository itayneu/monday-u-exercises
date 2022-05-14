let todoCounter = 0;
let todoTasksValues = [];

function addTodoTask() {
  const p = document.createElement("p");
  const todo = document.querySelector(".todo").value;

  if (!todoTasksValues.includes(todo)) {
    todoTasksValues.push(todo);
    p.appendChild(document.createTextNode(todo));
    document.querySelector(".middle").appendChild(p);

    // update todo tasks counter
    todoCounter++;
    document.querySelector(".tasks").textContent = todoCounter;
  } else {
    alert("This task is already in the list");
  }

  // reset current todo input
  document.querySelector(".todo").value = "";
}

let todoTasks = document.querySelector(".middle");
todoTasks.addEventListener(
  "click",
  ({ target }) => {
    alert(target.textContent);
  },
  false
);

function clearAllTasks() {
  document.querySelector(".middle").innerHTML = "";

  // reset todo tasks counter
  todoCounter = 0;
  document.querySelector(".tasks").textContent = todoCounter;
}

function changeBackground(target, color) {
  target.style.background = color;
}
