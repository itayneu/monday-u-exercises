class Main {
  constructor() {
    this.itemClient = new ItemClient();
  }

  init = async () => {
    const addItemButton = document.getElementById("list-item-submit");
    addItemButton.addEventListener("click", this.handleItem);

    await this.renderItems(); // this will make it so that any time you refresh the page you'll see the items already in your todo list
  };

  handleItem = async () => {
    const value = document.querySelector("#list-item-input").value;
    const todo = { value };
    this.itemClient.addTodo(todo);
    document.querySelector("#list-item-input").value = "";
    await this.renderItems();
  };

  deleteItem = async (item) => {
    const todoList = await this.itemClient.getTodos();
    const todo = todoList.find((todoListItem) => todoListItem.todo === item);
    const todoId = todo.id;
    this.itemClient.deleteTodo(todoId);
    await this.renderItems();
  };

  renderItems = async () => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    const todoList = await this.itemClient.getTodos();
    const items = todoList.map((item) => {
      return item.todo;
    });

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-item");
      listItem.innerHTML = item;

      const listItemDeleteButton = this._createDeleteButton(item);
      listItem.appendChild(listItemDeleteButton);
      list.appendChild(listItem);
    });
  };

  _createDeleteButton = (item) => {
    const button = document.createElement("img");
    button.src = "./images/delete_icon.svg";
    button.classList.add("list-item-delete-button");
    button.addEventListener("click", (_) => this.deleteItem(item));

    return button;
  };
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
  main.init();
});
