class ItemManager {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    if (todo === "") {
      alert("Add a value to create a new todo");
    } else if (this.todos.includes(todo)) {
      alert(`The task "${todo}" is already in the list`);
    } else {
      this.todos.push(todo);
    }
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((e) => e !== todo);
  }

  removeAllTodos() {
    this.todos = [];
  }
}
